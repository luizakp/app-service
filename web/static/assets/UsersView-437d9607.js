import{_ as y,N as w,k as U,t as k,r as i,o as g,a as d,c as u,b as t,w as I,v as S,h as o,s as x,J as D,F as L,e as C,A as V,B as N}from"./index-dfc536ad.js";const l=r=>(V("data-v-90bc050b"),r=r(),N(),r),A={class:"container"},B={class:"modal-dialog"},$={class:"modal-content"},M={class:"modal-header"},R=l(()=>t("h5",{class:"modal-title"},"Invite New User",-1)),T={class:"modal-body container"},F={class:"row"},z={class:"col-12"},E={class:"form-floating mb-3"},J=l(()=>t("label",{for:"floatingInput"},"Username",-1)),j=l(()=>t("p",null,"Invite Link: ",-1)),q={class:"modal-footer"},G={class:"table-responsive"},H={class:"table table-striped"},K=l(()=>t("thead",null,[t("tr",null,[t("th",null,"Username"),t("th",null,"Avatar"),t("th",null,"Last Login"),t("th",null,"Invited on"),t("th",null,"Invite Link"),t("th",null,"Actions")])],-1)),O=l(()=>t("td",null,"Delete",-1)),P={__name:"UsersView",setup(r){const h=w(),v=U(),b=k(v,"records"),a=i(!1),c=i(""),_=i(""),p=i("https://dev.asai.astrosynapse.ai/api"),m=n=>{if(n){const e=n.find(s=>s.role.permission==="owner");return e?e.avatar.name:""}return""},f=async()=>{try{const n=await h.inviteUser(c.value);n&&(_.value=n.invite_token)}catch(n){console.error(n)}};return g(async()=>{try{await v.getUsers()}catch(n){console.error(n)}feather.replace()}),(n,e)=>(d(),u("div",A,[t("div",{class:x(["modal",{"d-block":a.value,show:a.value}])},[t("div",B,[t("div",$,[t("div",M,[R,t("button",{type:"button",class:"btn-close",onClick:e[0]||(e[0]=s=>a.value=!1)})]),t("div",T,[t("div",F,[t("div",z,[t("div",E,[I(t("input",{"onUpdate:modelValue":e[1]||(e[1]=s=>c.value=s),type:"text",class:"form-control",id:"floatingInput",placeholder:"Username"},null,512),[[S,c.value]]),J]),j,t("p",null,[t("pre",null,o(p.value)+"/register/"+o(_.value),1)])])])]),t("div",q,[t("button",{type:"button",class:"btn btn-secondary",onClick:e[2]||(e[2]=s=>a.value=!1)},"Close"),t("button",{type:"button",class:"btn btn-primary",onClick:e[3]||(e[3]=s=>f())},"Invite")])])])],2),t("h1",null,[D("Users "),t("button",{class:"btn btn-primary float-end",onClick:e[4]||(e[4]=s=>a.value=!0)},"Invite User")]),t("div",G,[t("table",H,[K,t("tbody",null,[(d(!0),u(L,null,C(b.value,s=>(d(),u("tr",{key:s.id},[t("td",null,o(s.username),1),t("td",null,o(m(s.roles)),1),t("td",null,o(new Date().toLocaleDateString()),1),t("td",null,o(new Date().toLocaleDateString()),1),t("td",null,[t("pre",null,o(p.value)+"/register/"+o(s.invite_token),1)]),O]))),128))])])])]))}},W=y(P,[["__scopeId","data-v-90bc050b"]]);export{W as default};