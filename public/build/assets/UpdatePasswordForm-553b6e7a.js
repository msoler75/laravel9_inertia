import{_ as k}from"./FormSection-76d2acf9.js";import{_ as S}from"./PrimaryButton-5ed47bb8.js";import{_ as I}from"./Spinner-244d9358.js";import{_ as P}from"./ActionMessage-036a5bc4.js";import{_ as $,a as x}from"./TextInput-f9dcb244.js";import{_ as B}from"./InputLabel-4f44e400.js";import{A as d,a7 as C,a4 as N,K as f,U as w,a0 as e,S as n,G as m,J as a,F as o,W as U,T as G}from"./iconify-4eda29ca.js";import"./SectionTitle-9666e716.js";import"./_plugin-vue_export-helper-c27b6911.js";const T={class:"col-span-6 sm:col-span-4"},A={class:"col-span-6 sm:col-span-4"},F={class:"col-span-6 sm:col-span-4"},z={__name:"UpdatePasswordForm",setup(q){const _=d(null),i=d(null),c=d(!0),s=C({current_password:"",password:"",password_confirmation:""});N(()=>s.current_password,()=>{c.value=!1});const g=()=>{s.put(route("user-password.update"),{errorBag:"updatePassword",preserveScroll:!0,onSuccess:()=>{s.reset(),c.value=!0},onError:()=>{s.errors.password&&(s.reset("password","password_confirmation"),_.value.focus()),s.errors.current_password&&(s.reset("current_password"),i.value.focus())}})};return(E,r)=>{const p=B,l=$,u=x,v=P,V=I,y=S,b=k;return f(),w(b,{onSubmitted:g},{title:e(()=>[n(" Contraseña ")]),description:e(()=>[n(" Rellena los campos si quieres cambiar tu contraseña. Asegúrate que estás usando una contraseña larga y variada para proteger tu cuenta. ")]),form:e(()=>[m("div",T,[a(p,{for:"current_password",value:"Contraseña actual"}),a(l,{id:"current_password",ref_key:"currentPasswordInput",ref:i,modelValue:o(s).current_password,"onUpdate:modelValue":r[0]||(r[0]=t=>o(s).current_password=t),type:"password",class:"mt-1 block w-full",autocomplete:"current-password"},null,8,["modelValue"]),a(u,{message:o(s).errors.current_password,class:"mt-2"},null,8,["message"])]),m("div",A,[a(p,{for:"password",value:"Nueva contraseña"}),a(l,{id:"password",ref_key:"passwordInput",ref:_,modelValue:o(s).password,"onUpdate:modelValue":r[1]||(r[1]=t=>o(s).password=t),type:"password",class:"mt-1 block w-full",autocomplete:"new-password"},null,8,["modelValue"]),a(u,{message:o(s).errors.password,class:"mt-2"},null,8,["message"])]),m("div",F,[a(p,{for:"password_confirmation",value:"Confirmar nueva contraseña"}),a(l,{id:"password_confirmation",modelValue:o(s).password_confirmation,"onUpdate:modelValue":r[2]||(r[2]=t=>o(s).password_confirmation=t),type:"password",class:"mt-1 block w-full",autocomplete:"new-password"},null,8,["modelValue"]),a(u,{message:o(s).errors.password_confirmation,class:"mt-2"},null,8,["message"])])]),actions:e(()=>[a(v,{on:o(s).recentlySuccessful,class:"mr-3"},{default:e(()=>[n(" Guardado. ")]),_:1},8,["on"]),a(y,{disabled:o(s).processing||o(c)},{default:e(()=>[o(s).processing?(f(),w(V,{key:0})):U("",!0),n(" "+G(o(s).processing?"Guardando":"Guardar"),1)]),_:1},8,["disabled"])]),_:1})}}};export{z as default};