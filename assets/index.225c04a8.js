import{c as $,n as d,t as L,m as P,d as b,p as u,R as B,s as k,S as f,x as D,T as R,U,V as j,a,g as C,W as N,X as z,Y as T,Q as V,w as _}from"./index.6faf5e96.js";const[F,o]=$("image"),Q={src:String,alt:String,fit:String,position:String,round:Boolean,width:d,height:d,radius:d,lazyLoad:Boolean,iconSize:d,showError:L,errorIcon:P("photo-fail"),iconPrefix:String,showLoading:L,loadingIcon:P("photo")};var W=b({name:F,props:Q,emits:["load","error"],setup(e,{emit:g,slots:s}){const n=u(!1),t=u(!0),l=u(),{$Lazyload:i}=B().proxy,S=k(()=>{const r={width:f(e.width),height:f(e.height)};return D(e.radius)&&(r.overflow="hidden",r.borderRadius=f(e.radius)),r});R(()=>e.src,()=>{n.value=!1,t.value=!0});const v=r=>{t.value=!1,g("load",r)},h=r=>{n.value=!0,t.value=!1,g("error",r)},m=(r,c,I)=>I?I():a(V,{name:r,size:e.iconSize,class:c,classPrefix:e.iconPrefix},null),x=()=>{if(t.value&&e.showLoading)return a("div",{class:o("loading")},[m(e.loadingIcon,o("loading-icon"),s.loading)]);if(n.value&&e.showError)return a("div",{class:o("error")},[m(e.errorIcon,o("error-icon"),s.error)])},E=()=>{if(n.value||!e.src)return;const r={alt:e.alt,class:o("img"),style:{objectFit:e.fit,objectPosition:e.position}};return e.lazyLoad?C(a("img",z({ref:l},r),null),[[N("lazy"),e.src]]):a("img",z({src:e.src,onLoad:v,onError:h},r),null)},w=({el:r})=>{const c=()=>{r===l.value&&t.value&&v()};l.value?c():T(c)},y=({el:r})=>{r===l.value&&!n.value&&h()};return i&&U&&(i.$on("loaded",w),i.$on("error",y),j(()=>{i.$off("loaded",w),i.$off("error",y)})),()=>{var r;return a("div",{class:o({round:e.round}),style:S.value},[E(),x(),(r=s.default)==null?void 0:r.call(s)])}}});const Y=_(W);export{Y as I};
