import{p as z,m as R,G as X,g as T,J as Y,k as B,l as n,f as V,ag as Z,N as W,am as p,a1 as ee,ao as q,t as te,A as ae,v as h,y as ne,H as C,ap as re,a0 as se,z as ie,D as E,L as le,M as oe,n as ue,E as ce,I as ve,b as de,d as ge,q as me}from"./index-BSOHbPKX.js";import{c as x,e as fe,h as M,a as ye,F as Se,n as _e,p as be,f as he,G as ke,r as Ve,k as ze,q as Pe}from"./VBtn-D5giz2Hr.js";function Ie(e){return{aspectStyles:V(()=>{const l=Number(e.aspectRatio);return l?{paddingBottom:String(1/l*100)+"%"}:void 0})}}const $=z({aspectRatio:[String,Number],contentClass:String,inline:Boolean,...R(),...X()},"VResponsive"),F=T()({name:"VResponsive",props:$(),setup(e,l){let{slots:s}=l;const{aspectStyles:t}=Ie(e),{dimensionStyles:c}=Y(e);return B(()=>{var v;return n("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[c.value,e.style]},[n("div",{class:"v-responsive__sizer",style:t.value},null),(v=s.additional)==null?void 0:v.call(s),s.default&&n("div",{class:["v-responsive__content",e.contentClass]},[s.default()])])}),{}}}),Ce=z({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),k=(e,l)=>{let{slots:s}=l;const{transition:t,disabled:c,group:v,...m}=e,{component:d=v?p:ee,...f}=typeof t=="object"?t:{};return Z(d,W(typeof t=="string"?{name:c?"":t}:f,typeof t=="string"?{}:Object.fromEntries(Object.entries({disabled:c,group:v}).filter(r=>{let[i,g]=r;return g!==void 0})),m),s)};function Re(e,l){if(!q)return;const s=l.modifiers||{},t=l.value,{handler:c,options:v}=typeof t=="object"?t:{handler:t,options:{}},m=new IntersectionObserver(function(){var g;let d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],f=arguments.length>1?arguments[1]:void 0;const r=(g=e._observe)==null?void 0:g[l.instance.$.uid];if(!r)return;const i=d.some(S=>S.isIntersecting);c&&(!s.quiet||r.init)&&(!s.once||i||r.init)&&c(i,d,f),i&&s.once?H(e,l):r.init=!0},v);e._observe=Object(e._observe),e._observe[l.instance.$.uid]={init:!1,observer:m},m.observe(e)}function H(e,l){var t;const s=(t=e._observe)==null?void 0:t[l.instance.$.uid];s&&(s.observer.unobserve(e),delete e._observe[l.instance.$.uid])}const Te={mounted:Re,unmounted:H},Be=z({alt:String,cover:Boolean,color:String,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...$(),...R(),...x(),...Ce()},"VImg"),je=T()({name:"VImg",directives:{intersect:Te},props:Be(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,l){let{emit:s,slots:t}=l;const{backgroundColorClasses:c,backgroundColorStyles:v}=fe(te(e,"color")),{roundedClasses:m}=M(e),d=ae("VImg"),f=h(""),r=ne(),i=h(e.eager?"loading":"idle"),g=h(),S=h(),u=V(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),_=V(()=>u.value.aspect||g.value/S.value||0);C(()=>e.src,()=>{P(i.value!=="idle")}),C(_,(a,o)=>{!a&&o&&r.value&&b(r.value)}),re(()=>P());function P(a){if(!(e.eager&&a)&&!(q&&!a&&!e.eager)){if(i.value="loading",u.value.lazySrc){const o=new Image;o.src=u.value.lazySrc,b(o,null)}u.value.src&&se(()=>{var o;s("loadstart",((o=r.value)==null?void 0:o.currentSrc)||u.value.src),setTimeout(()=>{var y;if(!d.isUnmounted)if((y=r.value)!=null&&y.complete){if(r.value.naturalWidth||w(),i.value==="error")return;_.value||b(r.value,null),i.value==="loading"&&j()}else _.value||b(r.value),O()})})}}function j(){var a;d.isUnmounted||(O(),b(r.value),i.value="loaded",s("load",((a=r.value)==null?void 0:a.currentSrc)||u.value.src))}function w(){var a;d.isUnmounted||(i.value="error",s("error",((a=r.value)==null?void 0:a.currentSrc)||u.value.src))}function O(){const a=r.value;a&&(f.value=a.currentSrc||a.src)}let I=-1;ie(()=>{clearTimeout(I)});function b(a){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const y=()=>{if(clearTimeout(I),d.isUnmounted)return;const{naturalHeight:N,naturalWidth:U}=a;N||U?(g.value=U,S.value=N):!a.complete&&i.value==="loading"&&o!=null?I=window.setTimeout(y,o):(a.currentSrc.endsWith(".svg")||a.currentSrc.startsWith("data:image/svg+xml"))&&(g.value=1,S.value=1)};y()}const A=V(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),G=()=>{var y;if(!u.value.src||i.value==="idle")return null;const a=n("img",{class:["v-img__img",A.value],style:{objectPosition:e.position},src:u.value.src,srcset:u.value.srcset,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:r,onLoad:j,onError:w},null),o=(y=t.sources)==null?void 0:y.call(t);return n(k,{transition:e.transition,appear:!0},{default:()=>[E(o?n("picture",{class:"v-img__picture"},[o,a]):a,[[ce,i.value==="loaded"]])]})},L=()=>n(k,{transition:e.transition},{default:()=>[u.value.lazySrc&&i.value!=="loaded"&&n("img",{class:["v-img__img","v-img__img--preload",A.value],style:{objectPosition:e.position},src:u.value.lazySrc,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),J=()=>t.placeholder?n(k,{transition:e.transition,appear:!0},{default:()=>[(i.value==="loading"||i.value==="error"&&!t.error)&&n("div",{class:"v-img__placeholder"},[t.placeholder()])]}):null,K=()=>t.error?n(k,{transition:e.transition,appear:!0},{default:()=>[i.value==="error"&&n("div",{class:"v-img__error"},[t.error()])]}):null,Q=()=>e.gradient?n("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,D=h(!1);{const a=C(_,o=>{o&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{D.value=!0})}),a())})}return B(()=>{const a=F.filterProps(e);return E(n(F,W({class:["v-img",{"v-img--booting":!D.value},c.value,m.value,e.class],style:[{width:ue(e.width==="auto"?g.value:e.width)},v.value,e.style]},a,{aspectRatio:_.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>n(oe,null,[n(G,null,null),n(L,null,null),n(Q,null,null),n(J,null,null),n(K,null,null)]),default:t.default}),[[le("intersect"),{handler:P,options:e.options},null,{once:!0}]])}),{currentSrc:f,image:r,state:i,naturalWidth:g,naturalHeight:S}}}),we=z({start:Boolean,end:Boolean,icon:ve,image:String,text:String,...R(),...ye(),...x(),...Se(),...de(),...ge(),..._e({variant:"flat"})},"VAvatar"),De=T()({name:"VAvatar",props:we(),setup(e,l){let{slots:s}=l;const{themeClasses:t}=me(e),{colorClasses:c,colorStyles:v,variantClasses:m}=be(e),{densityClasses:d}=he(e),{roundedClasses:f}=M(e),{sizeClasses:r,sizeStyles:i}=ke(e);return B(()=>n(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},t.value,c.value,d.value,f.value,r.value,m.value,e.class],style:[v.value,i.value,e.style]},{default:()=>[s.default?n(ze,{key:"content-defaults",defaults:{VImg:{cover:!0,image:e.image},VIcon:{icon:e.icon}}},{default:()=>[s.default()]}):e.image?n(je,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?n(Ve,{key:"icon",icon:e.icon},null):e.text,Pe(!1,"v-avatar")]})),{}}});export{k as M,De as V,je as a,Be as m};
