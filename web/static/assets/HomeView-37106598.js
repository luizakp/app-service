import{_ as w,u as x,r as h,o as t,c as C,w as H,a as I,b as i,F as M,d as T,e as q,f as A,s as P,g as B,M as F,h as y,i as k,j as L,k as s,l as e,m as N,n as R,p as l,t as U,q as K,v as j}from"./index-fd9f4768.js";const D={__name:"PromptInput",setup(_){const p=x(),a=h("");function o(){p.sendPrompt(a.value),a.value=""}return(d,n)=>(t(),C(i(q),null,{default:H(()=>[I(i(M),{onKeyup:T(o,["enter"]),name:"prompt",modelValue:a.value,"onUpdate:modelValue":n[0]||(n[0]=u=>a.value=u),type:"text",as:"textarea",class:"form-control",rows:"3",placeholder:"Send a message..."},null,8,["modelValue"])]),_:1}))}},E=w(D,[["__scopeId","data-v-1e28688e"]]);const v=_=>(K("data-v-564af2a7"),_=_(),j(),_),W={class:"container-fluid p-0"},$=v(()=>e("h1",{class:"h3 mb-3"},"Avatar",-1)),z={class:"row"},G={class:"col-12"},J={class:"card"},O={class:"card-body"},Q={class:"container p-4 d-flex flex-column"},X={class:"col-1"},Y=["src"],Z=["src"],ee={class:"col-11"},te={key:0},se=v(()=>e("span",{class:"me-3"},"I'm thinking... ",-1)),oe={class:"spinner mb-2 me-2"},ae=["src"],ne={key:0},re={class:"me-3 fst-italic"},ce={class:"spinner mb-2 me-2"},ie=["src"],le=["innerHTML"],_e={key:0,class:"separator opacity-100"},de=v(()=>e("hr",{class:"border border-3 opacity-100"},null,-1)),ue={__name:"HomeView",setup(_){const p=A(),a=x(),{messages:o}=P(a),d=B(),n=h(null),u=h(null),S=new F({breaks:!0}),b=y(()=>o.value.length-1),V=y(()=>{var r;return((r=o.value[b.value])==null?void 0:r.content)||""});async function m(){requestAnimationFrame(()=>{if(n.value){var r=u.value.offsetHeight+30,f=n.value.scrollHeight+r;n.value.scrollTop=f}})}return k(o,()=>{m()}),k(V,()=>{m()}),L(async()=>{try{d.session_id||await d.getSessionToken(),await a.getPrivateSession(p.params.avatar_id,d.session_id)}catch(r){console.log(r)}m(),feather.replace(),a.connectWebSocket()}),(r,f)=>(t(),s("div",W,[$,e("div",z,[e("div",G,[e("div",J,[e("div",O,[e("div",Q,[e("div",{ref_key:"conversationContainer",ref:n,class:"conversation-container container-fluid flex-grow-1 overflow-auto"},[i(o).length>0?(t(!0),s(N,{key:0},R(i(o),(c,g)=>(t(),s("div",{class:"conversation-item row",key:g},[e("div",X,[c.type==="ai"?(t(),s("img",{key:0,src:require("../assets/asai-icon.png"),class:"logo",alt:"Avatar Icon",width:"35"},null,8,Y)):l("",!0),c.type==="human"?(t(),s("img",{key:1,src:require("../assets/user-icon.png"),class:"logo",alt:"User Icon",width:"35",height:"50"},null,8,Z)):l("",!0)]),e("div",ee,[c.isLoading?(t(),s("div",te,[e("p",null,[se,e("span",oe,[c.isAgentRunnig?l("",!0):(t(),s("img",{key:0,src:require("../assets/loader.png"),alt:""},null,8,ae))])]),c.isAgentRunnig?(t(),s("p",ne,[e("span",re,"Activating agent: "+U(c.agentName)+"... ",1),e("span",ce,[e("img",{src:require("../assets/loader.png"),alt:""},null,8,ie)])])):l("",!0)])):(t(),s("div",{key:1,class:"message-content pe-3",innerHTML:i(S).render(c.content.trim())},null,8,le))]),i(o).length>1&&g!==i(o).length-1?(t(),s("hr",_e)):l("",!0)]))),128)):l("",!0)],512),e("div",{ref_key:"promptContainer",ref:u,class:"prompt-container"},[de,I(E)],512)])])])])])]))}},me=w(ue,[["__scopeId","data-v-564af2a7"]]);export{me as default};