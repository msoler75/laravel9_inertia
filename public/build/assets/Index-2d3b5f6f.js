import{_ as G,a as M}from"./ContentBar-1b64cf4d.js";import{_ as H}from"./Pagination-dbd2dc8c.js";import{_ as S}from"./GridAppear-5ba2735c.js";import{_ as j}from"./SearchResultsHeader-99b39dbd.js";import{_ as N}from"./SearchInput-223bbcf6.js";import{_ as V}from"./GlosarioTabs-9c105e13.js";import{_ as z}from"./AdminPanel-c9b93513.js";import{_ as D}from"./Link-906724b9.js";import{_ as F}from"./Back-f6a5b732.js";import{A as R}from"./AppLayout-78f8ede6.js";import{A as E,aa as J,K as o,B as r,G as s,J as e,a0 as a,S as l,Q as p,R as u,U as d,T as g,a2 as y,F as i,a9 as K,W as x}from"./iconify-4eda29ca.js";import"./TransitionFade-c79c57f6.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./app-6a98c07f.js";import"./Spinner-244d9358.js";import"./permisos-625d1cf9.js";import"./Dropdown-f2c8405d.js";import"./Avatar-677e03a7.js";import"./Modal-d90e4256.js";import"./Image-e6d08a0a.js";import"./index-b7a54f6a.js";const O={class:"container py-12 mx-auto"},P={class:"flex justify-between items-center mb-7"},Q={class:"mx-auto flex flex-col justify-center items-center"},U=s("h1",null,"Glosario",-1),W={class:"flex justify-end mb-5"},q={class:"w-full flex gap-7 lg:gap-12 flex-wrap md:flex-nowrap"},I={class:"w-full md:w-[7rem] flex-shrink-0 card bg-base-100 shadow p-5 h-fit md:sticky md:top-20"},X={class:"flex flex-wrap md:hidden gap-2"},Y={class:"hidden md:grid grid-flow-dense grid-cols-2 gap-2"},Z=["innerHTML"],tt=["innerHTML"],$t=Object.assign({layout:R},{__name:"Index",props:{listado:{default:()=>{}},letras:{},letra:{},filtrado:{}},setup(n){const _=E(n.listado),h=route().params.letra;return(f,ot)=>{const w=F,b=J("Icon"),c=D,k=z,v=V,$=N,B=G,L=j,T=S,A=H,C=M;return o(),r("div",O,[s("div",P,[e(w,{class:"opacity-0 pointer-events-none"},{default:a(()=>[l("Glosario")]),_:1}),e(c,{href:"/libros/glosario-terminologico",class:"flex gap-2 items-center",title:"Descarga todo el glosario en pdf"},{default:a(()=>[e(b,{icon:"ph:download-duotone"}),l("Descargar")]),_:1}),e(k,{modelo:"termino",necesita:"administrar contenidos"})]),s("div",Q,[U,e(v)]),s("div",W,[e($)]),e(B,null,{default:a(()=>[l("Glosario")]),_:1}),s("div",q,[s("div",I,[s("div",X,[(o(!0),r(p,null,u(n.letras,(t,m)=>(o(),d(c,{key:m,class:y(["p-2",t==i(h)?"font-bold transform scale-110 text-primary":""]),href:f.route("terminos")+"?letra="+t},{default:a(()=>[l(g(t),1)]),_:2},1032,["href","class"]))),128))]),s("div",Y,[(o(!0),r(p,null,u(n.letras,(t,m)=>(o(),d(c,{key:m,class:y(["p-2",t==i(h)?"font-bold transform scale-110 text-primary":""]),style:K({"grid-column":Math.floor(m/(n.letras.length/2))+1}),href:f.route("terminos")+"?letra="+t},{default:a(()=>[l(g(t),1)]),_:2},1032,["style","href","class"]))),128))])]),e(C,{class:"w-full flex-grow","fade-on-navigate":""},{default:a(()=>[n.letra?x("",!0):(o(),d(L,{key:0,results:i(_)},null,8,["results"])),e(T,{class:"gap-8 mb-14","time-lapse":.01,"col-width":"16rem"},{default:a(()=>[(o(!0),r(p,null,u(i(_).data,t=>(o(),d(c,{key:t.id,href:f.route("termino",t.slug),class:"hover:text-primary transition-color duration-200 w-fit card shadow hover:shadow-lg px-5 py-2 bg-base-100 h-fit"},{default:a(()=>[s("div",{innerHTML:t.nombre,class:"capitalize lowercase font-bold text-lg"},null,8,Z),n.filtrado?(o(),r("div",{key:0,innerHTML:t.descripcion,class:"mt-3"},null,8,tt)):x("",!0)]),_:2},1032,["href"]))),128))]),_:1}),e(A,{class:"mt-6",links:i(_).links},null,8,["links"])]),_:1})])])}}});export{$t as default};