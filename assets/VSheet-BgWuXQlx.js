import{p as i,m as d,b as f,g,k as b,l as V,al as y,ad as m,f as P,af as h,G as O,d as _,q as I,t as U,J as M}from"./index-BFDnjOTE.js";import"./VContainer-DfkL0I1S.js";import{m as F,b as K,x as D,y as J,c as q,e as z,u as W,g as Y,A as H,B as Q,h as X}from"./VBtn-D4-zGkPr.js";const Z=i({opacity:[Number,String],...d(),...f()},"VCardText"),fe=g()({name:"VCardText",props:Z(),setup(e,n){let{slots:t}=n;return b(()=>V(e.tag,{class:["v-card-text",e.class],style:[{"--v-card-text-opacity":e.opacity},e.style]},t)),{}}}),N=y.reduce((e,n)=>(e[n]={type:[Boolean,String,Number],default:!1},e),{}),j=y.reduce((e,n)=>{const t="offset"+m(n);return e[t]={type:[String,Number],default:null},e},{}),L=y.reduce((e,n)=>{const t="order"+m(n);return e[t]={type:[String,Number],default:null},e},{}),k={col:Object.keys(N),offset:Object.keys(j),order:Object.keys(L)};function p(e,n,t){let a=e;if(!(t==null||t===!1)){if(n){const s=n.replace(e,"");a+=`-${s}`}return e==="col"&&(a="v-"+a),e==="col"&&(t===""||t===!0)||(a+=`-${t}`),a.toLowerCase()}}const ee=["auto","start","end","center","baseline","stretch"],te=i({cols:{type:[Boolean,String,Number],default:!1},...N,offset:{type:[String,Number],default:null},...j,order:{type:[String,Number],default:null},...L,alignSelf:{type:String,default:null,validator:e=>ee.includes(e)},...d(),...f()},"VCol"),ge=g()({name:"VCol",props:te(),setup(e,n){let{slots:t}=n;const a=P(()=>{const s=[];let o;for(o in k)k[o].forEach(l=>{const c=e[l],u=p(o,l,c);u&&s.push(u)});const r=s.some(l=>l.startsWith("v-col-"));return s.push({"v-col":!r||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),s});return()=>{var s;return h(e.tag,{class:[a.value,e.class],style:e.style},(s=t.default)==null?void 0:s.call(t))}}}),C=["start","end","center"],$=["space-between","space-around","space-evenly"];function S(e,n){return y.reduce((t,a)=>{const s=e+m(a);return t[s]=n(),t},{})}const se=[...C,"baseline","stretch"],w=e=>se.includes(e),E=S("align",()=>({type:String,default:null,validator:w})),ne=[...C,...$],T=e=>ne.includes(e),A=S("justify",()=>({type:String,default:null,validator:T})),ae=[...C,...$,"stretch"],x=e=>ae.includes(e),R=S("alignContent",()=>({type:String,default:null,validator:x})),v={align:Object.keys(E),justify:Object.keys(A),alignContent:Object.keys(R)},oe={align:"align",justify:"justify",alignContent:"align-content"};function le(e,n,t){let a=oe[e];if(t!=null){if(n){const s=n.replace(e,"");a+=`-${s}`}return a+=`-${t}`,a.toLowerCase()}}const re=i({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:w},...E,justify:{type:String,default:null,validator:T},...A,alignContent:{type:String,default:null,validator:x},...R,...d(),...f()},"VRow"),ye=g()({name:"VRow",props:re(),setup(e,n){let{slots:t}=n;const a=P(()=>{const s=[];let o;for(o in v)v[o].forEach(r=>{const l=e[r],c=le(o,r,l);c&&s.push(c)});return s.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),s});return()=>{var s;return h(e.tag,{class:["v-row",a.value,e.class],style:e.style},(s=t.default)==null?void 0:s.call(t))}}}),ce=i({color:String,...F(),...d(),...O(),...K(),...D(),...J(),...q(),...f(),..._()},"VSheet"),me=g()({name:"VSheet",props:ce(),setup(e,n){let{slots:t}=n;const{themeClasses:a}=I(e),{backgroundColorClasses:s,backgroundColorStyles:o}=z(U(e,"color")),{borderClasses:r}=W(e),{dimensionStyles:l}=M(e),{elevationClasses:c}=Y(e),{locationStyles:u}=H(e),{positionClasses:B}=Q(e),{roundedClasses:G}=X(e);return b(()=>V(e.tag,{class:["v-sheet",a.value,s.value,r.value,c.value,B.value,G.value,e.class],style:[o.value,l.value,u.value,e.style]},t)),{}}});export{fe as V,ge as a,me as b,ye as c};