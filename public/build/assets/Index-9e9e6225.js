import{_ as S}from"./Pagination-dbd2dc8c.js";import{_ as V}from"./GridAppear-5ba2735c.js";import{_ as W}from"./CardContent-715c5d68.js";import{_ as j}from"./SearchResultsHeader-99b39dbd.js";import{_ as E}from"./Link-906724b9.js";import{_ as I}from"./SearchInput-223bbcf6.js";import{_ as K}from"./AdminPanel-c9b93513.js";import{A as R}from"./AppLayout-78f8ede6.js";import{P as w,W as D}from"./vue3-tabs-component-2945cbbd.js";import{A as _,a5 as F,K as n,B as c,J as a,G as o,a0 as i,a2 as g,Q as b,R as x,T as h,W as k,F as r,U as y}from"./iconify-4eda29ca.js";import"./TimeAgo-d7658970.js";import"./Image-e6d08a0a.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./app-6a98c07f.js";import"./Spinner-244d9358.js";import"./permisos-625d1cf9.js";import"./Dropdown-f2c8405d.js";import"./Avatar-677e03a7.js";import"./Modal-d90e4256.js";import"./index-b7a54f6a.js";const G={class:"container py-12 mx-auto"},P=o("h1",{class:"text-center mb-0"},"Dónde estamos",-1),U={class:"flex justify-end mb-5 transform lg:translate-y-[3.5rem]"},H={class:"w-full flex gap-5 flex-wrap lg:flex-nowrap"},J={class:"card bg-base-100 shadow flex-wrap lg:flex-nowrap flex-row lg:flex-col p-5 lg:p-10 gap-7 self-baseline lg:sticky lg:top-20 overflow-y-auto lg:max-h-[calc(100vh-10rem)] select-none"},O=o("span",{class:"capitalize"},"Novedades",-1),Q={key:0},T={class:"w-full flex-grow"},q={class:"text-center p-2 text-xl font-bold transition duration-300 group-hover:text-primary group-hover:drop-shadow"},he=Object.assign({layout:R},{__name:"Index",props:{paisActivo:{default:()=>""},filtrado:{default:()=>""},listado:{default:()=>{}},paises:{default:()=>[]},apiKey:{default:()=>""}},setup(s){const m=s,p=_(m.listado),$=_(m.paises),l=_(null),A=[];F(()=>{if(!window.google||!window.google.maps){const e=document.createElement("script");e.src=`https://maps.googleapis.com/maps/api/js?key=${m.apiKey}&libraries=places&callback=initMap`,e.defer=!0,document.head.appendChild(e)}else initMap()}),window.initMap=()=>{l.value=new google.maps.Map(l.value,{center:{lat:0,lng:0},zoom:2}),A.forEach(e=>{C(e)})};function C(e){const d=new google.maps.Marker({position:{lat:e.latitud,lng:e.longitud},map:l.value,title:e.nombre}),f=`
        <div class="info-window">
          <h3>${e.nombre}</h3>
          <p>${e.direccion}</p>
          <p>${e.poblacion}, ${e.pais}</p>
          <a href="${M(e)}">Ver contacto</a>
        </div>
      `,u=new google.maps.InfoWindow({content:f});d.addListener("click",()=>{u.open(l.value,d)})}function M(e){return`/contactos/${e.slug}`}return(e,d)=>{const f=K,u=I,v=E,B=j,L=W,z=V,N=S;return n(),c("div",G,[a(f,{modelo:"contacto",necesita:"administrar directorio",class:"mb-3"}),P,o("div",U,[a(u)]),o("div",H,[o("div",J,[a(v,{href:`${e.route("contactos")}`,class:g(!s.filtrado&&!s.paisActivo?"text-primary font-bold":"")},{default:i(()=>[O]),_:1},8,["href","class"]),(n(!0),c(b,null,x(r($),t=>(n(),c("div",{key:t.nombre,class:g(["flex gap-2",s.paisActivo==t.nombre?"text-primary font-bold":""])},[a(v,{href:`${e.route("contactos")}?pais=${t.codigo}`},{default:i(()=>[o("span",{class:g(["capitalize",t.codigo==s.paisActivo?"font-bold":""])},h(t.nombre),3),t.total>0?(n(),c("small",Q," ("+h(t.total)+")",1)):k("",!0)]),_:2},1032,["href"])],2))),128))]),o("div",T,[s.paisActivo?k("",!0):(n(),y(B,{key:0,results:r(p)},null,8,["results"])),a(r(D),{options:{disableScrollBehavior:!0}},{default:i(()=>[a(r(w),{name:"Mapa"},{default:i(()=>[o("div",{ref_key:"map",ref:l,class:"map-container"},null,512)]),_:1}),a(r(w),{name:"Listado"},{default:i(()=>[a(z,{class:"gap-8","col-width":"12rem"},{default:i(()=>[(n(!0),c(b,null,x(r(p).data,t=>(n(),y(L,{key:t.id,image:t.imagen_url,href:e.route("contacto",t.slug),imageClass:"h-60",tag:s.paisActivo?"":t.pais},{default:i(()=>[o("div",q,h(t.nombre),1)]),_:2},1032,["image","href","tag"]))),128))]),_:1}),a(N,{class:"mt-6",links:r(p).links},null,8,["links"])]),_:1})]),_:1})])])])}}});export{he as default};