import{p as N,m as Y,a as Ke,b as U,c as ue,g as W,u as ht,t as V,d as Ee,e as m,f as se,h as Ze,i as Ne,j,k as c,l as ge,n as we,o as ke,s as F,q as Ce,r as H,v as B,w as ce,x as $e,y as bt,z as St,I as Z,A as Je,B as wt,E as ze,C as Qe,D as $,F as et,G as kt,H as Ct,J as z,K as ye,L as pt,M as It,N as ne,O as Vt,P as Oe,Q as _t,R as fe,S as Pt,T as xt,U as At,V as Bt,W as Lt,X as tt,Y as Mt,Z as Tt,_ as at,$ as G,a0 as oe,a1 as x,a2 as Dt,a3 as X,a4 as le,a5 as Ye,a6 as ie,a7 as Te,a8 as Et,a9 as Nt}from"./index-BcFNew3H.js";import{_ as Ot}from"./plugin-vueexport-helper-DlAUqK2U.js";import{c as Rt}from"./createSimpleFunctional-DlCw4C8r.js";import{m as pe,a as Re,b as Ie,c as Ve,d as Ft,u as _e,e as he,f as Fe,g as Pe,h as xe,i as Ht,V as Gt,j as nt,k as be,l as Wt,n as lt,R as zt,o as Yt,p as jt,q as Xt,r as J,s as Ut,t as qt,v as me}from"./VBtn-CVwti0Wu.js";import{M as Kt,V as je,a as Zt}from"./VAvatar-DYy4RG3i.js";import{V as $t}from"./index-BqY0S8oz.js";const Jt=N({baseColor:String,bgColor:String,color:String,grow:Boolean,mode:{type:String,validator:e=>!e||["horizontal","shift"].includes(e)},height:{type:[Number,String],default:56},active:{type:Boolean,default:!0},...pe(),...Y(),...Re(),...Ie(),...Ve(),...Ke({name:"bottom-navigation"}),...U({tag:"header"}),...Ft({selectedClass:"v-btn--selected"}),...ue()},"VBottomNavigation"),Qt=W()({name:"VBottomNavigation",props:Jt(),emits:{"update:active":e=>!0,"update:modelValue":e=>!0},setup(e,i){let{slots:t}=i;const{themeClasses:n}=ht(),{borderClasses:a}=_e(e),{backgroundColorClasses:l,backgroundColorStyles:o}=he(V(e,"bgColor")),{densityClasses:s}=Fe(e),{elevationClasses:v}=Pe(e),{roundedClasses:f}=xe(e),{ssrBootStyles:g}=Ee(),y=m(()=>Number(e.height)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0)),h=se(e,"active",e.active),{layoutItemStyles:r,layoutIsReady:u}=Ze({id:e.name,order:m(()=>parseInt(e.order,10)),position:m(()=>"bottom"),layoutSize:m(()=>h.value?y.value:0),elementSize:y,active:h,absolute:V(e,"absolute")});return Ht(e,Gt),Ne({VBtn:{baseColor:V(e,"baseColor"),color:V(e,"color"),density:V(e,"density"),stacked:m(()=>e.mode!=="horizontal"),variant:"text"}},{scoped:!0}),j(()=>c(e.tag,{class:["v-bottom-navigation",{"v-bottom-navigation--active":h.value,"v-bottom-navigation--grow":e.grow,"v-bottom-navigation--shift":e.mode==="shift"},n.value,l.value,a.value,s.value,v.value,f.value,e.class],style:[o.value,r.value,{height:ge(y.value)},g.value,e.style]},{default:()=>[t.default&&c("div",{class:"v-bottom-navigation__content"},[t.default()])]})),u}}),ea=N({color:String,inset:Boolean,length:[Number,String],opacity:[Number,String],thickness:[Number,String],vertical:Boolean,...Y(),...ue()},"VDivider"),it=W()({name:"VDivider",props:ea(),setup(e,i){let{attrs:t,slots:n}=i;const{themeClasses:a}=we(e),{textColorClasses:l,textColorStyles:o}=nt(V(e,"color")),s=m(()=>{const v={};return e.length&&(v[e.vertical?"maxHeight":"maxWidth"]=ge(e.length)),e.thickness&&(v[e.vertical?"borderRightWidth":"borderTopWidth"]=ge(e.thickness)),v});return j(()=>{const v=c("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},a.value,l.value,e.class],style:[s.value,o.value,{"--v-border-opacity":e.opacity},e.style],"aria-orientation":!t.role||t.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${t.role||"separator"}`},null);return n.default?c("div",{class:["v-divider__wrapper",{"v-divider__wrapper--vertical":e.vertical,"v-divider__wrapper--inset":e.inset}]},[v,c("div",{class:"v-divider__content"},[n.default()]),v]):v}),{}}}),De=Symbol.for("vuetify:list");function ot(){const e=ke(De,{hasPrepend:F(!1),updateHasPrepend:()=>null}),i={hasPrepend:F(!1),updateHasPrepend:t=>{t&&(i.hasPrepend.value=t)}};return Ce(De,i),e}function st(){return ke(De,null)}const He=e=>{const i={activate:t=>{let{id:n,value:a,activated:l}=t;return n=H(n),e&&!a&&l.size===1&&l.has(n)||(a?l.add(n):l.delete(n)),l},in:(t,n,a)=>{let l=new Set;for(const o of t||[])l=i.activate({id:o,value:!0,activated:new Set(l),children:n,parents:a});return l},out:t=>Array.from(t)};return i},rt=e=>{const i=He(e);return{activate:n=>{let{activated:a,id:l,...o}=n;l=H(l);const s=a.has(l)?new Set([l]):new Set;return i.activate({...o,id:l,activated:s})},in:(n,a,l)=>{let o=new Set;return n!=null&&n.length&&(o=i.in(n.slice(0,1),a,l)),o},out:(n,a,l)=>i.out(n,a,l)}},ta=e=>{const i=He(e);return{activate:n=>{let{id:a,activated:l,children:o,...s}=n;return a=H(a),o.has(a)?l:i.activate({id:a,activated:l,children:o,...s})},in:i.in,out:i.out}},aa=e=>{const i=rt(e);return{activate:n=>{let{id:a,activated:l,children:o,...s}=n;return a=H(a),o.has(a)?l:i.activate({id:a,activated:l,children:o,...s})},in:i.in,out:i.out}},na={open:e=>{let{id:i,value:t,opened:n,parents:a}=e;if(t){const l=new Set;l.add(i);let o=a.get(i);for(;o!=null;)l.add(o),o=a.get(o);return l}else return n.delete(i),n},select:()=>null},ut={open:e=>{let{id:i,value:t,opened:n,parents:a}=e;if(t){let l=a.get(i);for(n.add(i);l!=null&&l!==i;)n.add(l),l=a.get(l);return n}else n.delete(i);return n},select:()=>null},la={open:ut.open,select:e=>{let{id:i,value:t,opened:n,parents:a}=e;if(!t)return n;const l=[];let o=a.get(i);for(;o!=null;)l.push(o),o=a.get(o);return new Set(l)}},Ge=e=>{const i={select:t=>{let{id:n,value:a,selected:l}=t;if(n=H(n),e&&!a){const o=Array.from(l.entries()).reduce((s,v)=>{let[f,g]=v;return g==="on"&&s.push(f),s},[]);if(o.length===1&&o[0]===n)return l}return l.set(n,a?"on":"off"),l},in:(t,n,a)=>{let l=new Map;for(const o of t||[])l=i.select({id:o,value:!0,selected:new Map(l),children:n,parents:a});return l},out:t=>{const n=[];for(const[a,l]of t.entries())l==="on"&&n.push(a);return n}};return i},ct=e=>{const i=Ge(e);return{select:n=>{let{selected:a,id:l,...o}=n;l=H(l);const s=a.has(l)?new Map([[l,a.get(l)]]):new Map;return i.select({...o,id:l,selected:s})},in:(n,a,l)=>{let o=new Map;return n!=null&&n.length&&(o=i.in(n.slice(0,1),a,l)),o},out:(n,a,l)=>i.out(n,a,l)}},ia=e=>{const i=Ge(e);return{select:n=>{let{id:a,selected:l,children:o,...s}=n;return a=H(a),o.has(a)?l:i.select({id:a,selected:l,children:o,...s})},in:i.in,out:i.out}},oa=e=>{const i=ct(e);return{select:n=>{let{id:a,selected:l,children:o,...s}=n;return a=H(a),o.has(a)?l:i.select({id:a,selected:l,children:o,...s})},in:i.in,out:i.out}},sa=e=>{const i={select:t=>{let{id:n,value:a,selected:l,children:o,parents:s}=t;n=H(n);const v=new Map(l),f=[n];for(;f.length;){const y=f.shift();l.set(y,a?"on":"off"),o.has(y)&&f.push(...o.get(y))}let g=s.get(n);for(;g;){const y=o.get(g),h=y.every(u=>l.get(u)==="on"),r=y.every(u=>!l.has(u)||l.get(u)==="off");l.set(g,h?"on":r?"off":"indeterminate"),g=s.get(g)}return e&&!a&&Array.from(l.entries()).reduce((h,r)=>{let[u,d]=r;return d==="on"&&h.push(u),h},[]).length===0?v:l},in:(t,n,a)=>{let l=new Map;for(const o of t||[])l=i.select({id:o,value:!0,selected:new Map(l),children:n,parents:a});return l},out:(t,n)=>{const a=[];for(const[l,o]of t.entries())o==="on"&&!n.has(l)&&a.push(l);return a}};return i},re=Symbol.for("vuetify:nested"),dt={id:F(),root:{register:()=>null,unregister:()=>null,parents:B(new Map),children:B(new Map),open:()=>null,openOnSelect:()=>null,activate:()=>null,select:()=>null,activatable:B(!1),selectable:B(!1),opened:B(new Set),activated:B(new Set),selected:B(new Map),selectedValues:B([])}},ra=N({activatable:Boolean,selectable:Boolean,activeStrategy:[String,Function],selectStrategy:[String,Function],openStrategy:[String,Object],opened:Array,activated:Array,selected:Array,mandatory:Boolean},"nested"),ua=e=>{let i=!1;const t=B(new Map),n=B(new Map),a=se(e,"opened",e.opened,r=>new Set(r),r=>[...r.values()]),l=m(()=>{if(typeof e.activeStrategy=="object")return e.activeStrategy;switch(e.activeStrategy){case"leaf":return ta(e.mandatory);case"single-leaf":return aa(e.mandatory);case"independent":return He(e.mandatory);case"single-independent":default:return rt(e.mandatory)}}),o=m(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;switch(e.selectStrategy){case"single-leaf":return oa(e.mandatory);case"leaf":return ia(e.mandatory);case"independent":return Ge(e.mandatory);case"single-independent":return ct(e.mandatory);case"classic":default:return sa(e.mandatory)}}),s=m(()=>{if(typeof e.openStrategy=="object")return e.openStrategy;switch(e.openStrategy){case"list":return la;case"single":return na;case"multiple":default:return ut}}),v=se(e,"activated",e.activated,r=>l.value.in(r,t.value,n.value),r=>l.value.out(r,t.value,n.value)),f=se(e,"selected",e.selected,r=>o.value.in(r,t.value,n.value),r=>o.value.out(r,t.value,n.value));ce(()=>{i=!0});function g(r){const u=[];let d=r;for(;d!=null;)u.unshift(d),d=n.value.get(d);return u}const y=$e("nested"),h={id:F(),root:{opened:a,activatable:V(e,"activatable"),selectable:V(e,"selectable"),activated:v,selected:f,selectedValues:m(()=>{const r=[];for(const[u,d]of f.value.entries())d==="on"&&r.push(u);return r}),register:(r,u,d)=>{u&&r!==u&&n.value.set(r,u),d&&t.value.set(r,[]),u!=null&&t.value.set(u,[...t.value.get(u)||[],r])},unregister:r=>{if(i)return;t.value.delete(r);const u=n.value.get(r);if(u){const d=t.value.get(u)??[];t.value.set(u,d.filter(b=>b!==r))}n.value.delete(r),a.value.delete(r)},open:(r,u,d)=>{y.emit("click:open",{id:r,value:u,path:g(r),event:d});const b=s.value.open({id:r,value:u,opened:new Set(a.value),children:t.value,parents:n.value,event:d});b&&(a.value=b)},openOnSelect:(r,u,d)=>{const b=s.value.select({id:r,value:u,selected:new Map(f.value),opened:new Set(a.value),children:t.value,parents:n.value,event:d});b&&(a.value=b)},select:(r,u,d)=>{y.emit("click:select",{id:r,value:u,path:g(r),event:d});const b=o.value.select({id:r,value:u,selected:new Map(f.value),children:t.value,parents:n.value,event:d});b&&(f.value=b),h.root.openOnSelect(r,u,d)},activate:(r,u,d)=>{if(!e.activatable)return h.root.select(r,!0,d);y.emit("click:activate",{id:r,value:u,path:g(r),event:d});const b=l.value.activate({id:r,value:u,activated:new Set(v.value),children:t.value,parents:n.value,event:d});b&&(v.value=b)},children:t,parents:n}};return Ce(re,h),h.root},vt=(e,i)=>{const t=ke(re,dt),n=Symbol(bt()),a=m(()=>e.value!==void 0?e.value:n),l={...t,id:a,open:(o,s)=>t.root.open(a.value,o,s),openOnSelect:(o,s)=>t.root.openOnSelect(a.value,o,s),isOpen:m(()=>t.root.opened.value.has(a.value)),parent:m(()=>t.root.parents.value.get(a.value)),activate:(o,s)=>t.root.activate(a.value,o,s),isActivated:m(()=>t.root.activated.value.has(H(a.value))),select:(o,s)=>t.root.select(a.value,o,s),isSelected:m(()=>t.root.selected.value.get(H(a.value))==="on"),isIndeterminate:m(()=>t.root.selected.value.get(a.value)==="indeterminate"),isLeaf:m(()=>!t.root.children.value.get(a.value)),isGroupActivator:t.isGroupActivator};return!t.isGroupActivator&&t.root.register(a.value,t.id.value,i),ce(()=>{!t.isGroupActivator&&t.root.unregister(a.value)}),i&&Ce(re,l),l},ca=()=>{const e=ke(re,dt);Ce(re,{...e,isGroupActivator:!0})},da=St({name:"VListGroupActivator",setup(e,i){let{slots:t}=i;return ca(),()=>{var n;return(n=t.default)==null?void 0:n.call(t)}}}),va=N({activeColor:String,baseColor:String,color:String,collapseIcon:{type:Z,default:"$collapse"},expandIcon:{type:Z,default:"$expand"},prependIcon:Z,appendIcon:Z,fluid:Boolean,subgroup:Boolean,title:String,value:null,...Y(),...U()},"VListGroup"),Xe=W()({name:"VListGroup",props:va(),setup(e,i){let{slots:t}=i;const{isOpen:n,open:a,id:l}=vt(V(e,"value"),!0),o=m(()=>`v-list-group--id-${String(l.value)}`),s=st(),{isBooted:v}=Ee();function f(r){a(!n.value,r)}const g=m(()=>({onClick:f,class:"v-list-group__header",id:o.value})),y=m(()=>n.value?e.collapseIcon:e.expandIcon),h=m(()=>({VListItem:{active:n.value,activeColor:e.activeColor,baseColor:e.baseColor,color:e.color,prependIcon:e.prependIcon||e.subgroup&&y.value,appendIcon:e.appendIcon||!e.subgroup&&y.value,title:e.title,value:e.value}}));return j(()=>c(e.tag,{class:["v-list-group",{"v-list-group--prepend":s==null?void 0:s.hasPrepend.value,"v-list-group--fluid":e.fluid,"v-list-group--subgroup":e.subgroup,"v-list-group--open":n.value},e.class],style:e.style},{default:()=>[t.activator&&c(be,{defaults:h.value},{default:()=>[c(da,null,{default:()=>[t.activator({props:g.value,isOpen:n.value})]})]}),c(Kt,{transition:{component:$t},disabled:!v.value},{default:()=>{var r;return[Je(c("div",{class:"v-list-group__items",role:"group","aria-labelledby":o.value},[(r=t.default)==null?void 0:r.call(t)]),[[wt,n.value]])]}})]})),{isOpen:n}}}),ma=N({opacity:[Number,String],...Y(),...U()},"VListItemSubtitle"),fa=W()({name:"VListItemSubtitle",props:ma(),setup(e,i){let{slots:t}=i;return j(()=>c(e.tag,{class:["v-list-item-subtitle",e.class],style:[{"--v-list-item-subtitle-opacity":e.opacity},e.style]},t)),{}}}),mt=Rt("v-list-item-title"),ga=N({active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:Z,baseColor:String,disabled:Boolean,lines:String,link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:Z,ripple:{type:[Boolean,Object],default:!0},slim:Boolean,subtitle:[String,Number],title:[String,Number],value:null,onClick:ze(),onClickOnce:ze(),...pe(),...Y(),...Re(),...Qe(),...Ie(),...Ve(),...Wt(),...U(),...ue(),...lt({variant:"text"})},"VListItem"),Se=W()({name:"VListItem",directives:{Ripple:zt},props:ga(),emits:{click:e=>!0},setup(e,i){let{attrs:t,slots:n,emit:a}=i;const l=Yt(e,t),o=m(()=>e.value===void 0?l.href.value:e.value),{activate:s,isActivated:v,select:f,isSelected:g,isIndeterminate:y,isGroupActivator:h,root:r,parent:u,openOnSelect:d}=vt(o,!1),b=st(),M=m(()=>{var I;return e.active!==!1&&(e.active||((I=l.isActive)==null?void 0:I.value)||(r.activatable.value?v.value:g.value))}),D=m(()=>e.link!==!1&&l.isLink.value),A=m(()=>!e.disabled&&e.link!==!1&&(e.link||l.isClickable.value||!!b&&(r.selectable.value||r.activatable.value||e.value!=null))),E=m(()=>e.rounded||e.nav),T=m(()=>e.color??e.activeColor),S=m(()=>({color:M.value?T.value??e.baseColor:e.baseColor,variant:e.variant}));$(()=>{var I;return(I=l.isActive)==null?void 0:I.value},I=>{I&&u.value!=null&&r.open(u.value,!0),I&&d(I)},{immediate:!0});const{themeClasses:w}=we(e),{borderClasses:k}=_e(e),{colorClasses:C,colorStyles:P,variantClasses:p}=jt(S),{densityClasses:_}=Fe(e),{dimensionStyles:O}=et(e),{elevationClasses:Ae}=Pe(e),{roundedClasses:de}=xe(E),Be=m(()=>e.lines?`v-list-item--${e.lines}-line`:void 0),Q=m(()=>({isActive:M.value,select:f,isSelected:g.value,isIndeterminate:y.value}));function ee(I){var q;a("click",I),!(h||!A.value)&&((q=l.navigate)==null||q.call(l,I),r.activatable.value?s(!v.value,I):(r.selectable.value||e.value!=null)&&f(!g.value,I))}function Le(I){(I.key==="Enter"||I.key===" ")&&(I.preventDefault(),ee(I))}return j(()=>{const I=D.value?"a":e.tag,q=n.title||e.title!=null,L=n.subtitle||e.subtitle!=null,te=!!(e.appendAvatar||e.appendIcon),ve=!!(te||n.append),ae=!!(e.prependAvatar||e.prependIcon),Me=!!(ae||n.prepend);return b==null||b.updateHasPrepend(Me),e.activeColor&&kt("active-color",["color","base-color"]),Je(c(I,{class:["v-list-item",{"v-list-item--active":M.value,"v-list-item--disabled":e.disabled,"v-list-item--link":A.value,"v-list-item--nav":e.nav,"v-list-item--prepend":!Me&&(b==null?void 0:b.hasPrepend.value),"v-list-item--slim":e.slim,[`${e.activeClass}`]:e.activeClass&&M.value},w.value,k.value,C.value,_.value,Ae.value,Be.value,de.value,p.value,e.class],style:[P.value,O.value,e.style],href:l.href.value,tabindex:A.value?b?-2:0:void 0,onClick:ee,onKeydown:A.value&&!D.value&&Le},{default:()=>{var We;return[Xt(A.value||M.value,"v-list-item"),Me&&c("div",{key:"prepend",class:"v-list-item__prepend"},[n.prepend?c(be,{key:"prepend-defaults",disabled:!ae,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon},VListItemAction:{start:!0}}},{default:()=>{var R;return[(R=n.prepend)==null?void 0:R.call(n,Q.value)]}}):c(z,null,[e.prependAvatar&&c(je,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&c(J,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)]),c("div",{class:"v-list-item__spacer"},null)]),c("div",{class:"v-list-item__content","data-no-activator":""},[q&&c(mt,{key:"title"},{default:()=>{var R;return[((R=n.title)==null?void 0:R.call(n,{title:e.title}))??e.title]}}),L&&c(fa,{key:"subtitle"},{default:()=>{var R;return[((R=n.subtitle)==null?void 0:R.call(n,{subtitle:e.subtitle}))??e.subtitle]}}),(We=n.default)==null?void 0:We.call(n,Q.value)]),ve&&c("div",{key:"append",class:"v-list-item__append"},[n.append?c(be,{key:"append-defaults",disabled:!te,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon},VListItemAction:{end:!0}}},{default:()=>{var R;return[(R=n.append)==null?void 0:R.call(n,Q.value)]}}):c(z,null,[e.appendIcon&&c(J,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&c(je,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)]),c("div",{class:"v-list-item__spacer"},null)])]}}),[[Ct("ripple"),A.value&&e.ripple]])}),{isGroupActivator:h,isSelected:g,list:b,select:f}}}),ya=N({color:String,inset:Boolean,sticky:Boolean,title:String,...Y(),...U()},"VListSubheader"),ft=W()({name:"VListSubheader",props:ya(),setup(e,i){let{slots:t}=i;const{textColorClasses:n,textColorStyles:a}=nt(V(e,"color"));return j(()=>{const l=!!(t.default||e.title);return c(e.tag,{class:["v-list-subheader",{"v-list-subheader--inset":e.inset,"v-list-subheader--sticky":e.sticky},n.value,e.class],style:[{textColorStyles:a},e.style]},{default:()=>{var o;return[l&&c("div",{class:"v-list-subheader__text"},[((o=t.default)==null?void 0:o.call(t))??e.title])]}})}),{}}}),ha=N({items:Array,returnObject:Boolean},"VListChildren"),gt=W()({name:"VListChildren",props:ha(),setup(e,i){let{slots:t}=i;return ot(),()=>{var n,a;return((n=t.default)==null?void 0:n.call(t))??((a=e.items)==null?void 0:a.map(l=>{var h,r;let{children:o,props:s,type:v,raw:f}=l;if(v==="divider")return((h=t.divider)==null?void 0:h.call(t,{props:s}))??c(it,s,null);if(v==="subheader")return((r=t.subheader)==null?void 0:r.call(t,{props:s}))??c(ft,s,null);const g={subtitle:t.subtitle?u=>{var d;return(d=t.subtitle)==null?void 0:d.call(t,{...u,item:f})}:void 0,prepend:t.prepend?u=>{var d;return(d=t.prepend)==null?void 0:d.call(t,{...u,item:f})}:void 0,append:t.append?u=>{var d;return(d=t.append)==null?void 0:d.call(t,{...u,item:f})}:void 0,title:t.title?u=>{var d;return(d=t.title)==null?void 0:d.call(t,{...u,item:f})}:void 0},y=Xe.filterProps(s);return o?c(Xe,ye({value:s==null?void 0:s.value},y),{activator:u=>{let{props:d}=u;const b={...s,...d,value:e.returnObject?f:s.value};return t.header?t.header({props:b}):c(Se,b,g)},default:()=>c(gt,{items:o},t)}):t.item?t.item({props:s}):c(Se,ye(s,{value:e.returnObject?f:s.value}),g)}))}}}),ba=N({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean,valueComparator:{type:Function,default:pt}},"list-items");function Sa(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function wa(e,i){const t=ne(i,e.itemType,"item"),n=Sa(i)?i:ne(i,e.itemTitle),a=ne(i,e.itemValue,void 0),l=ne(i,e.itemChildren),o=e.itemProps===!0?Vt(i,["children"]):ne(i,e.itemProps),s={title:n,value:a,...o};return{type:t,title:s.title,value:s.value,props:s,children:t==="item"&&l?yt(e,l):void 0,raw:i}}function yt(e,i){const t=[];for(const n of i)t.push(wa(e,n));return t}function ka(e){return{items:m(()=>yt(e,e.items))}}const Ca=N({baseColor:String,activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,expandIcon:String,collapseIcon:String,lines:{type:[Boolean,String],default:"one"},slim:Boolean,nav:Boolean,...ra({selectStrategy:"single-leaf",openStrategy:"list"}),...pe(),...Y(),...Re(),...Qe(),...Ie(),itemType:{type:String,default:"type"},...ba(),...Ve(),...U(),...ue(),...lt({variant:"text"})},"VList"),pa=W()({name:"VList",props:Ca(),emits:{"update:selected":e=>!0,"update:activated":e=>!0,"update:opened":e=>!0,"click:open":e=>!0,"click:activate":e=>!0,"click:select":e=>!0},setup(e,i){let{slots:t}=i;const{items:n}=ka(e),{themeClasses:a}=we(e),{backgroundColorClasses:l,backgroundColorStyles:o}=he(V(e,"bgColor")),{borderClasses:s}=_e(e),{densityClasses:v}=Fe(e),{dimensionStyles:f}=et(e),{elevationClasses:g}=Pe(e),{roundedClasses:y}=xe(e),{children:h,open:r,parents:u,select:d}=ua(e),b=m(()=>e.lines?`v-list--${e.lines}-line`:void 0),M=V(e,"activeColor"),D=V(e,"baseColor"),A=V(e,"color");ot(),Ne({VListGroup:{activeColor:M,baseColor:D,color:A,expandIcon:V(e,"expandIcon"),collapseIcon:V(e,"collapseIcon")},VListItem:{activeClass:V(e,"activeClass"),activeColor:M,baseColor:D,color:A,density:V(e,"density"),disabled:V(e,"disabled"),lines:V(e,"lines"),nav:V(e,"nav"),slim:V(e,"slim"),variant:V(e,"variant")}});const E=F(!1),T=B();function S(_){E.value=!0}function w(_){E.value=!1}function k(_){var O;!E.value&&!(_.relatedTarget&&((O=T.value)!=null&&O.contains(_.relatedTarget)))&&p()}function C(_){const O=_.target;if(!(!T.value||["INPUT","TEXTAREA"].includes(O.tagName))){if(_.key==="ArrowDown")p("next");else if(_.key==="ArrowUp")p("prev");else if(_.key==="Home")p("first");else if(_.key==="End")p("last");else return;_.preventDefault()}}function P(_){E.value=!0}function p(_){if(T.value)return It(T.value,_)}return j(()=>c(e.tag,{ref:T,class:["v-list",{"v-list--disabled":e.disabled,"v-list--nav":e.nav,"v-list--slim":e.slim},a.value,l.value,s.value,v.value,g.value,b.value,y.value,e.class],style:[o.value,f.value,e.style],tabindex:e.disabled||E.value?-1:0,role:"listbox","aria-activedescendant":void 0,onFocusin:S,onFocusout:w,onFocus:k,onKeydown:C,onMousedown:P},{default:()=>[c(gt,{items:n.value,returnObject:e.returnObject},t)]})),{open:r,select:d,focus:p,children:h,parents:u}}});function Ia(e){let{rootEl:i,isSticky:t,layoutItemStyles:n}=e;const a=F(!1),l=F(0),o=m(()=>{const f=typeof a.value=="boolean"?"top":a.value;return[t.value?{top:"auto",bottom:"auto",height:void 0}:void 0,a.value?{[f]:ge(l.value)}:{top:n.value.top}]});Oe(()=>{$(t,f=>{f?window.addEventListener("scroll",v,{passive:!0}):window.removeEventListener("scroll",v)},{immediate:!0})}),ce(()=>{window.removeEventListener("scroll",v)});let s=0;function v(){const f=s>window.scrollY?"up":"down",g=i.value.getBoundingClientRect(),y=parseFloat(n.value.top??0),h=window.scrollY-Math.max(0,l.value-y),r=g.height+Math.max(l.value,y)-window.scrollY-window.innerHeight,u=parseFloat(getComputedStyle(i.value).getPropertyValue("--v-body-scroll-y"))||0;g.height<window.innerHeight-y?(a.value="top",l.value=y):f==="up"&&a.value==="bottom"||f==="down"&&a.value==="top"?(l.value=window.scrollY+g.top-u,a.value=!0):f==="down"&&r<=0?(l.value=0,a.value="bottom"):f==="up"&&h<=0&&(u?a.value!=="top"&&(l.value=-h+u+y,a.value="top"):(l.value=g.top+h,a.value="top")),s=window.scrollY}return{isStuck:a,stickyStyles:o}}const Va=100,_a=20;function Ue(e){return(e<0?-1:1)*Math.sqrt(Math.abs(e))*1.41421356237}function qe(e){if(e.length<2)return 0;if(e.length===2)return e[1].t===e[0].t?0:(e[1].d-e[0].d)/(e[1].t-e[0].t);let i=0;for(let t=e.length-1;t>0;t--){if(e[t].t===e[t-1].t)continue;const n=Ue(i),a=(e[t].d-e[t-1].d)/(e[t].t-e[t-1].t);i+=(a-n)*Math.abs(a),t===e.length-1&&(i*=.5)}return Ue(i)*1e3}function Pa(){const e={};function i(a){Array.from(a.changedTouches).forEach(l=>{(e[l.identifier]??(e[l.identifier]=new _t(_a))).push([a.timeStamp,l])})}function t(a){Array.from(a.changedTouches).forEach(l=>{delete e[l.identifier]})}function n(a){var f;const l=(f=e[a])==null?void 0:f.values().reverse();if(!l)throw new Error(`No samples for touch id ${a}`);const o=l[0],s=[],v=[];for(const g of l){if(o[0]-g[0]>Va)break;s.push({t:g[0],d:g[1].clientX}),v.push({t:g[0],d:g[1].clientY})}return{x:qe(s),y:qe(v),get direction(){const{x:g,y}=this,[h,r]=[Math.abs(g),Math.abs(y)];return h>r&&g>=0?"right":h>r&&g<=0?"left":r>h&&y>=0?"down":r>h&&y<=0?"up":xa()}}}return{addMovement:i,endTouch:t,getVelocity:n}}function xa(){throw new Error}function Aa(e){let{el:i,isActive:t,isTemporary:n,width:a,touchless:l,position:o}=e;Oe(()=>{window.addEventListener("touchstart",D,{passive:!0}),window.addEventListener("touchmove",A,{passive:!1}),window.addEventListener("touchend",E,{passive:!0})}),ce(()=>{window.removeEventListener("touchstart",D),window.removeEventListener("touchmove",A),window.removeEventListener("touchend",E)});const s=m(()=>["left","right"].includes(o.value)),{addMovement:v,endTouch:f,getVelocity:g}=Pa();let y=!1;const h=F(!1),r=F(0),u=F(0);let d;function b(S,w){return(o.value==="left"?S:o.value==="right"?document.documentElement.clientWidth-S:o.value==="top"?S:o.value==="bottom"?document.documentElement.clientHeight-S:K())-(w?a.value:0)}function M(S){let w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const k=o.value==="left"?(S-u.value)/a.value:o.value==="right"?(document.documentElement.clientWidth-S-u.value)/a.value:o.value==="top"?(S-u.value)/a.value:o.value==="bottom"?(document.documentElement.clientHeight-S-u.value)/a.value:K();return w?Math.max(0,Math.min(1,k)):k}function D(S){if(l.value)return;const w=S.changedTouches[0].clientX,k=S.changedTouches[0].clientY,C=25,P=o.value==="left"?w<C:o.value==="right"?w>document.documentElement.clientWidth-C:o.value==="top"?k<C:o.value==="bottom"?k>document.documentElement.clientHeight-C:K(),p=t.value&&(o.value==="left"?w<a.value:o.value==="right"?w>document.documentElement.clientWidth-a.value:o.value==="top"?k<a.value:o.value==="bottom"?k>document.documentElement.clientHeight-a.value:K());(P||p||t.value&&n.value)&&(d=[w,k],u.value=b(s.value?w:k,t.value),r.value=M(s.value?w:k),y=u.value>-20&&u.value<80,f(S),v(S))}function A(S){const w=S.changedTouches[0].clientX,k=S.changedTouches[0].clientY;if(y){if(!S.cancelable){y=!1;return}const P=Math.abs(w-d[0]),p=Math.abs(k-d[1]);(s.value?P>p&&P>3:p>P&&p>3)?(h.value=!0,y=!1):(s.value?p:P)>3&&(y=!1)}if(!h.value)return;S.preventDefault(),v(S);const C=M(s.value?w:k,!1);r.value=Math.max(0,Math.min(1,C)),C>1?u.value=b(s.value?w:k,!0):C<0&&(u.value=b(s.value?w:k,!1))}function E(S){if(y=!1,!h.value)return;v(S),h.value=!1;const w=g(S.changedTouches[0].identifier),k=Math.abs(w.x),C=Math.abs(w.y);(s.value?k>C&&k>400:C>k&&C>3)?t.value=w.direction===({left:"right",right:"left",top:"down",bottom:"up"}[o.value]||K()):t.value=r.value>.5}const T=m(()=>h.value?{transform:o.value==="left"?`translateX(calc(-100% + ${r.value*a.value}px))`:o.value==="right"?`translateX(calc(100% - ${r.value*a.value}px))`:o.value==="top"?`translateY(calc(-100% + ${r.value*a.value}px))`:o.value==="bottom"?`translateY(calc(100% - ${r.value*a.value}px))`:K(),transition:"none"}:void 0);return fe(h,()=>{var k,C;const S=((k=i.value)==null?void 0:k.style.transform)??null,w=((C=i.value)==null?void 0:C.style.transition)??null;Pt(()=>{var P,p,_,O;(p=i.value)==null||p.style.setProperty("transform",((P=T.value)==null?void 0:P.transform)||"none"),(O=i.value)==null||O.style.setProperty("transition",((_=T.value)==null?void 0:_.transition)||null)}),xt(()=>{var P,p;(P=i.value)==null||P.style.setProperty("transform",S),(p=i.value)==null||p.style.setProperty("transition",w)})}),{isDragging:h,dragProgress:r,dragStyles:T}}function K(){throw new Error}const Ba=N({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function La(e,i){let t=()=>{};function n(o){t==null||t();const s=Number(o?e.openDelay:e.closeDelay);return new Promise(v=>{t=At(s,()=>{i==null||i(o),v(o)})})}function a(){return n(!0)}function l(){return n(!1)}return{clearDelay:t,runOpenDelay:a,runCloseDelay:l}}function Ma(){const i=$e("useScopeId").vnode.scopeId;return{scopeId:i?{[i]:""}:void 0}}const Ta=["start","end","left","right","top","bottom"],Da=N({color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:{type:Boolean,default:null},railWidth:{type:[Number,String],default:56},scrim:{type:[Boolean,String],default:!0},image:String,temporary:Boolean,persistent:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"start",validator:e=>Ta.includes(e)},sticky:Boolean,...pe(),...Y(),...Ba(),...Bt(),...Ie(),...Ke(),...Ve(),...U({tag:"nav"}),...ue()},"VNavigationDrawer"),Ea=W()({name:"VNavigationDrawer",props:Da(),emits:{"update:modelValue":e=>!0,"update:rail":e=>!0},setup(e,i){let{attrs:t,emit:n,slots:a}=i;const{isRtl:l}=Lt(),{themeClasses:o}=we(e),{borderClasses:s}=_e(e),{backgroundColorClasses:v,backgroundColorStyles:f}=he(V(e,"color")),{elevationClasses:g}=Pe(e),{displayClasses:y,mobile:h}=tt(e),{roundedClasses:r}=xe(e),u=Ut(),d=se(e,"modelValue",null,L=>!!L),{ssrBootStyles:b}=Ee(),{scopeId:M}=Ma(),D=B(),A=F(!1),{runOpenDelay:E,runCloseDelay:T}=La(e,L=>{A.value=L}),S=m(()=>e.rail&&e.expandOnHover&&A.value?Number(e.width):Number(e.rail?e.railWidth:e.width)),w=m(()=>qt(e.location,l.value)),k=m(()=>e.persistent),C=m(()=>!e.permanent&&(h.value||e.temporary)),P=m(()=>e.sticky&&!C.value&&w.value!=="bottom");fe(()=>e.expandOnHover&&e.rail!=null,()=>{$(A,L=>n("update:rail",!L))}),fe(()=>!e.disableResizeWatcher,()=>{$(C,L=>!e.permanent&&Tt(()=>d.value=!L))}),fe(()=>!e.disableRouteWatcher&&!!u,()=>{$(u.currentRoute,()=>C.value&&(d.value=!1))}),$(()=>e.permanent,L=>{L&&(d.value=!0)}),e.modelValue==null&&!C.value&&(d.value=e.permanent||!h.value);const{isDragging:p,dragProgress:_}=Aa({el:D,isActive:d,isTemporary:C,width:S,touchless:V(e,"touchless"),position:w}),O=m(()=>{const L=C.value?0:e.rail&&e.expandOnHover?Number(e.railWidth):S.value;return p.value?L*_.value:L}),Ae=m(()=>["top","bottom"].includes(e.location)?0:S.value),{layoutItemStyles:de,layoutItemScrimStyles:Be,layoutIsReady:Q}=Ze({id:e.name,order:m(()=>parseInt(e.order,10)),position:w,layoutSize:O,elementSize:Ae,active:m(()=>d.value||p.value),disableTransitions:m(()=>p.value),absolute:m(()=>e.absolute||P.value&&typeof ee.value!="string")}),{isStuck:ee,stickyStyles:Le}=Ia({rootEl:D,isSticky:P,layoutItemStyles:de}),I=he(m(()=>typeof e.scrim=="string"?e.scrim:null)),q=m(()=>({...p.value?{opacity:_.value*.2,transition:"none"}:void 0,...Be.value}));return Ne({VList:{bgColor:"transparent"}}),j(()=>{const L=a.image||e.image;return c(z,null,[c(e.tag,ye({ref:D,onMouseenter:E,onMouseleave:T,class:["v-navigation-drawer",`v-navigation-drawer--${w.value}`,{"v-navigation-drawer--expand-on-hover":e.expandOnHover,"v-navigation-drawer--floating":e.floating,"v-navigation-drawer--is-hovering":A.value,"v-navigation-drawer--rail":e.rail,"v-navigation-drawer--temporary":C.value,"v-navigation-drawer--persistent":k.value,"v-navigation-drawer--active":d.value,"v-navigation-drawer--sticky":P.value},o.value,v.value,s.value,y.value,g.value,r.value,e.class],style:[f.value,de.value,b.value,Le.value,e.style,["top","bottom"].includes(w.value)?{height:"auto"}:{}]},M,t),{default:()=>{var te,ve,ae;return[L&&c("div",{key:"image",class:"v-navigation-drawer__img"},[a.image?c(be,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{alt:"",cover:!0,height:"inherit",src:e.image}}},a.image):c(Zt,{key:"image-img",alt:"",cover:!0,height:"inherit",src:e.image},null)]),a.prepend&&c("div",{class:"v-navigation-drawer__prepend"},[(te=a.prepend)==null?void 0:te.call(a)]),c("div",{class:"v-navigation-drawer__content"},[(ve=a.default)==null?void 0:ve.call(a)]),a.append&&c("div",{class:"v-navigation-drawer__append"},[(ae=a.append)==null?void 0:ae.call(a)])]}}),c(Mt,{name:"fade-transition"},{default:()=>[C.value&&(p.value||d.value)&&!!e.scrim&&c("div",ye({class:["v-navigation-drawer__scrim",I.backgroundColorClasses.value],style:[q.value,I.backgroundColorStyles.value],onClick:()=>{k.value||(d.value=!1)}},M),null)]})])}),Q.then(()=>({isStuck:ee}))}}),Na={setup(){const{width:e,height:i}=tt(),t=B(!1),n=B(!0),a=B("mdi-menu"),l=B(!1),o=B(3),s=()=>{n.value=!n.value},v=()=>{e.value>840?i.value<=600?(t.value=!1,n.value=!0,l.value=!0,o.value=5):(t.value=!0,n.value=!0,l.value=!1):e.value>600&&e.value<=840?(t.value=!0,n.value=!1,l.value=!1):(t.value=!1,n.value=!1,l.value=!0,e.value>480?o.value=4:o.value=3)};return Oe(()=>{v(),window.addEventListener("resize",v)}),ce(()=>{window.removeEventListener("resize",v)}),{drawer:t,rail:n,railIcon:a,toggleRail:s,showBottomNav:l,itemsPerPage:o}},data(){return{startIndex:0,menuItems:[{icon:"mdi-home",title:"首頁",value:"",type:"internal"},{title:"Wiki",value:"wiki",header:!0},{icon:"mdi-account-multiple-outline",title:"共鳴者",value:"role",type:"internal"},{icon:"mdi-knife-military",title:"武器",value:"weapons",type:"internal"},{icon:"mdi-tshirt-crew-outline",title:"聲骸",value:"voicebone",type:"internal"},{title:"工具",value:"tools",header:!0},{icon:"mdi-map-outline",title:"地圖",value:"map",type:"internal"},{title:"其他",value:"others",header:!0},{icon:"mdi-hand-coin-outline",title:"贊助我們",value:"donate",type:"external"},{icon:"mdi-cog-outline",title:"設定",value:"settings",type:"internal"},{icon:"mdi-alert-octagon-outline",title:"意見回饋",value:"suggest",type:"external"}]}},methods:{selectItem(e){e.type==="internal"?this.$router.push({path:"/"+e.value}):e.type==="external"&&window.open(e.value,"_blank")}}};function Oa(e,i,t,n,a,l){const o=at("v-list-item-content");return G(),oe(z,null,[c(Ea,{modelValue:n.drawer,"onUpdate:modelValue":i[1]||(i[1]=s=>n.drawer=s),rail:!n.rail,permanent:""},{default:x(()=>[c(Se,{title:"漂泊檔案",nav:""},{append:x(()=>[c(me,{icon:"",variant:"text",onClick:i[0]||(i[0]=Dt(s=>n.rail=!n.rail,["stop"]))},{default:x(()=>[c(J,null,{default:x(()=>[X(le(n.rail?"mdi-menu-open":"mdi-menu"),1)]),_:1})]),_:1})]),_:1}),c(pa,{dense:"",nav:""},{default:x(()=>[(G(!0),oe(z,null,Ye(a.menuItems,s=>(G(),oe(z,null,[s.header&&n.rail?(G(),ie(it,{key:s.value})):Te("",!0),s.header&&n.rail?(G(),ie(ft,{key:s.value},{default:x(()=>[X(le(s.title),1)]),_:2},1024)):s.header?Te("",!0):(G(),ie(Se,{key:s.value,onClick:v=>l.selectItem(s),"prepend-icon":s.icon},{default:x(()=>[c(o,null,{default:x(()=>[c(mt,null,{default:x(()=>[X(le(s.title),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick","prepend-icon"]))],64))),256))]),_:1})]),_:1},8,["modelValue","rail"]),n.showBottomNav?(G(),ie(Qt,{key:0,active:e.active},{default:x(()=>[c(me,{icon:"",onClick:i[2]||(i[2]=s=>a.startIndex=Math.max(a.startIndex-1,0))},{default:x(()=>[c(J,null,{default:x(()=>[X("mdi-chevron-left")]),_:1})]),_:1}),(G(!0),oe(z,null,Ye(a.menuItems.filter(s=>s.type).slice(a.startIndex,a.startIndex+n.itemsPerPage),s=>(G(),ie(me,{key:s.value,onClick:v=>l.selectItem(s)},{default:x(()=>[c(J,null,{default:x(()=>[X(le(s.icon),1)]),_:2},1024),X(" "+le(s.title),1)]),_:2},1032,["onClick"]))),128)),c(me,{icon:"",onClick:i[3]||(i[3]=s=>a.startIndex=Math.min(a.startIndex+1,a.menuItems.filter(v=>v.type).length-n.itemsPerPage))},{default:x(()=>[c(J,null,{default:x(()=>[X("mdi-chevron-right")]),_:1})]),_:1})]),_:1},8,["active"])):Te("",!0)],64)}const Ra=Ot(Na,[["render",Oa]]),ja={__name:"default",setup(e){return(i,t)=>{const n=Ra,a=at("router-view");return G(),oe(z,null,[c(n),c(Et,null,{default:x(()=>[c(Nt,null,{default:x(()=>[c(a)]),_:1})]),_:1})],64)}}};export{ja as default};