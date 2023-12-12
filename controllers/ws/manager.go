package ws

import (
	"fmt"
	"net/http"
	"sync"

	"github.com/AstroSynapseAI/app-service/engine"
	"github.com/AstroSynapseAI/app-service/engine/chains"
	"github.com/AstroSynapseAI/app-service/sdk/crud/database"
	"github.com/gorilla/websocket"
)

var websocketUpgrader = websocket.Upgrader{
	// CheckOrigin:     checkOrigin,
	ReadBufferSize:  1024,
	WriteBufferSize: 1024,
}

type Manager struct {
	sync.RWMutex
	clients map[*Client]bool
	db      *database.Database
}

func NewManager(db *database.Database) *Manager {
	mng := &Manager{
		clients: make(map[*Client]bool),
		db:      db,
	}

	return mng
}

func (m *Manager) Handler(w http.ResponseWriter, r *http.Request) {
	conn, err := websocketUpgrader.Upgrade(w, r, nil)
	if err != nil {
		fmt.Println("Failed to initate socket:", err)
		return
	}

	asaiConfig := engine.NewConfig(m.db)
	asaiChain, _ := chains.NewAsaiChain(asaiConfig)

	client := NewClient(conn, m, asaiChain)
	m.addClient(client)

	// Rember this context was passed to the client if there are issues later on
	go client.MaintainConnection(r.Context())
	go client.ReadMsgs(r.Context())
	go client.SendMsgs(r.Context())

}

func (m *Manager) addClient(client *Client) {
	// Lock so we can manipulate
	m.Lock()
	defer m.Unlock()

	// Add Client
	m.clients[client] = true
}

func (m *Manager) removeClient(client *Client) {
	m.Lock()
	defer m.Unlock()

	// Check if Client exists, then delete it
	if _, ok := m.clients[client]; ok {
		// close connection
		client.connection.Close()
		// remove
		delete(m.clients, client)
	}
}
