import{u as J,r as f,j as o,F as K,R as O,c as P,a as Q}from"./useRepList-2da67c25.js";import{d as e,r as U}from"./vgbc-a706962e.js";const W=[1,2,3,4],X=()=>{const{repCommentator:c}=J(),{rive:t,RiveComponent:V}=e.useRive({src:U,artboard:"Telop",stateMachines:"Telop",autoplay:!0}),m=c==null?void 0:c.commentator1.name,h=c==null?void 0:c.commentator1.account,A=c==null?void 0:c.commentator1.tag,N=c==null?void 0:c.commentator2.name,$=c==null?void 0:c.commentator2.account,I=c==null?void 0:c.commentator2.tag,E=c==null?void 0:c.commentator3.name,M=c==null?void 0:c.commentator3.account,b=c==null?void 0:c.commentator3.tag,D=c==null?void 0:c.commentator4.name,S=c==null?void 0:c.commentator4.account,i=c==null?void 0:c.commentator4.tag,k=t==null?void 0:t.getTextRunValue("name1"),y=t==null?void 0:t.getTextRunValue("xID1"),j=t==null?void 0:t.getTextRunValue("tag1"),w=t==null?void 0:t.getTextRunValue("name2"),F=t==null?void 0:t.getTextRunValue("xID2"),_=t==null?void 0:t.getTextRunValue("tag2"),p=t==null?void 0:t.getTextRunValue("name3"),B=t==null?void 0:t.getTextRunValue("xID3"),L=t==null?void 0:t.getTextRunValue("tag3"),q=t==null?void 0:t.getTextRunValue("name4"),z=t==null?void 0:t.getTextRunValue("xID4"),G=t==null?void 0:t.getTextRunValue("tag4"),T=e.useStateMachineInput(t,"Telop","fadeTrigger1"),g=e.useStateMachineInput(t,"Telop","fadeTrigger2"),R=e.useStateMachineInput(t,"Telop","fadeTrigger3"),x=e.useStateMachineInput(t,"Telop","fadeTrigger4");f.useEffect(()=>{c!==void 0&&W.map(a=>{const n=`commentator${a}`,s=c[n].name,u=c[n].account,l=c[n].tag;t==null||t.setTextRunValue(`name${a}`,s!==void 0?s:""),t==null||t.setTextRunValue(`xID${a}`,u!==void 0?u:""),t==null||t.setTextRunValue(`tag${a}`,l!==void 0?l:"")})},[t==null?void 0:t.setTextRunValue]);const d=a=>{if(c!==void 0){const n=`commentator${a}`,s=c[n].name,u=c[n].account,l=c[n].tag;t==null||t.setTextRunValue(`name${a}`,s!==void 0?s:""),t==null||t.setTextRunValue(`xID${a}`,u!==void 0?u:""),t==null||t.setTextRunValue(`tag${a}`,l!==void 0?l:"")}},H=a=>{const n=a.data;switch(n==null?void 0:n.name){case"setTelop1":d(1);break;case"setTelop2":d(2);break;case"setTelop3":d(3);break;case"setTelop4":d(4);break}};return f.useEffect(()=>{(m!==k||h!==y||A!==j)&&(T==null||T.fire()),(N!==w||$!==F||I!==_)&&(g==null||g.fire()),(E!==p||M!==B||b!==L)&&(R==null||R.fire()),(D!==q||S!==z||i!==G)&&(x==null||x.fire()),t==null||t.on(e.EventType.RiveEvent,H)},[c]),o(K,{children:o(V,{style:{width:1920,height:1080}})})};function Y(){return o(O,{children:o(X,{})})}P.createRoot(document.getElementById("root")).render(o(Q.StrictMode,{children:o(Y,{})}));