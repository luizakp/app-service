import{u as g}from"./tool.store-991fd276.js";import{u as k}from"./avatar.store-09a169f5.js";import{k as D,t as v,o as w,I,a as c,c as i,b as t,F as T,e as y,h as u,H as x,f as b,q as C,J as A,g as S}from"./index-3aa7baa5.js";const V={class:"container-fluid p-0"},N=t("h1",{class:"h3 mb-3"},"Tools",-1),B={class:"row"},F={class:"col-12"},R={class:"container"},q={class:"row"},E={class:"card"},H={class:"card-header"},J={class:"row"},L={class:"col"},M={class:"card-title"},U={class:"col-auto"},$={key:0,class:"form-check form-switch d-flex align-items-center"},j=["checked","onClick"],z=t("label",{style:{"margin-bottom":"-5px"},for:"flexSwitchCheckDefault"},"Active",-1),G={class:"card-body"},X={__name:"ToolsView",setup(K){const r=D(),d=k(),n=v(d,"activeTools"),l=g(),h=v(l,"records"),f=s=>{const e=n.value.find(a=>a.tool.ID==s);return e?e.is_active:!1},m=async s=>{const e=n.value.find(o=>o.tool.ID==s);e&&(e.is_active=!e.is_active);const a={is_active:e?e.is_active:!1,avatar_id:r.avatar.ID};try{await l.toggleAvatarTool(s,a)}catch(o){console.log(o)}},_=s=>{const e=n.value.find(a=>a.tool.ID===s);return e?e.ID:null};return w(async()=>{try{await l.getTools(),await d.getActiveTools(r.avatar.ID)}catch(s){console.log(s)}feather.replace()}),(s,e)=>{const a=I("router-link");return c(),i("div",V,[N,t("div",B,[t("div",F,[t("div",R,[t("div",q,[(c(!0),i(T,null,y(h.value,(o,p)=>(c(),i("div",{class:"row",key:"row"+p},[t("div",E,[t("div",H,[t("div",J,[t("div",L,[t("h5",M,u(o.name),1)]),t("div",U,[_(o.ID)?(c(),i("div",$,[t("input",{class:"form-check-input me-2",type:"checkbox",id:"flexSwitchCheckDefault",checked:f(o.ID),onClick:O=>m(o.ID)},null,8,j),z])):x("",!0)])])]),t("div",G,[t("p",null,u(o.description),1),t("div",null,[b(a,{to:{name:"tool-config",params:{avatar_id:S(r).avatar.ID,tool_id:o.ID,active_tool_id:_(o.ID)}},class:"btn btn-primary"},{default:C(()=>[A(" Configure ")]),_:2},1032,["to"])])])])]))),128))])])])])])}}};export{X as default};