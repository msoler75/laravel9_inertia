import{_ as X}from"./ConfirmationModal-570bb728.js";import{_ as Y}from"./DangerButton-a8aae548.js";import{_ as Z}from"./DialogModal-8e017b22.js";import{_ as ee}from"./SecondaryButton-4543e8b6.js";import{_ as te}from"./Image-e6d08a0a.js";import{_ as oe}from"./ActionSection-12a825e8.js";import{_ as se}from"./FormSection-76d2acf9.js";import{_ as ne}from"./PrimaryButton-5ed47bb8.js";import{_ as ae}from"./ActionMessage-036a5bc4.js";import{_ as re,a as le}from"./TextInput-f9dcb244.js";import{_ as ie}from"./InputLabel-4f44e400.js";import{_ as ce}from"./SectionBorder-8d8c83eb.js";import{a7 as h,A as x,K as a,B as r,J as s,a0 as t,S as l,G as n,F as o,Q as w,R as C,a2 as u,T as g,W as v,a8 as me,al as de}from"./iconify-4eda29ca.js";import"./Modal-d90e4256.js";import"./SectionTitle-9666e716.js";import"./_plugin-vue_export-helper-c27b6911.js";const ue={key:0},ve=n("div",{class:"col-span-6"},[n("div",{class:"max-w-xl text-sm text-gray-600 dark:text-gray-400"}," Please provide the email address of the person you would like to add to this team. ")],-1),_e={class:"col-span-6 sm:col-span-4"},fe={key:0,class:"col-span-6 lg:col-span-4"},ge={class:"relative z-0 mt-1 border border-gray-200 dark:border-gray-700 rounded-lg cursor-pointer"},be=["onClick"],pe={class:"flex items-center"},ye={key:0,class:"ml-2 h-5 w-5 text-green-400",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},ke=n("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),he=[ke],xe={class:"mt-2 text-xs text-gray-600 dark:text-gray-400 text-left"},we={key:1},Ce={class:"space-y-6"},Te={class:"text-gray-600 dark:text-gray-400"},Me={class:"flex items-center"},Re=["onClick"],$e={key:2},Se={class:"space-y-6"},Ae={class:"flex items-center"},Be={class:"ml-4 dark:text-white"},Le={class:"flex items-center"},Pe=["onClick"],je={key:1,class:"ml-2 text-sm text-gray-400"},Fe=["onClick"],ze={key:0},Ve={class:"relative z-0 mt-1 border border-gray-200 dark:border-gray-700 rounded-lg cursor-pointer"},Ie=["onClick"],Oe={class:"flex items-center"},Ne={key:0,class:"ml-2 h-5 w-5 text-green-400",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},De=n("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),Ee=[De],Ke={class:"mt-2 text-xs text-gray-600 dark:text-gray-400"},rt={__name:"TeamMemberManager",props:{team:Object,availableRoles:Array,userPermissions:Object},setup(i){const p=i,m=h({email:"",role:null}),_=h({role:null}),T=h({}),M=h({}),y=x(!1),R=x(null),k=x(!1),b=x(null),V=()=>{m.post(route("team-members.store",p.team),{errorBag:"addTeamMember",preserveScroll:!0,onSuccess:()=>m.reset()})},I=d=>{me.delete(route("team-invitations.destroy",d),{preserveScroll:!0})},O=d=>{R.value=d,_.role=d.membership.role,y.value=!0},N=()=>{_.put(route("team-members.update",[p.team,R.value]),{preserveScroll:!0,onSuccess:()=>y.value=!1})},D=()=>{k.value=!0},E=()=>{T.delete(route("team-members.destroy",[p.team,de().props.auth.user]))},K=d=>{b.value=d},U=()=>{M.delete(route("team-members.destroy",[p.team,b.value]),{errorBag:"removeTeamMember",preserveScroll:!0,preserveState:!0,onSuccess:()=>b.value=null})},A=d=>p.availableRoles.find(c=>c.key===d).name;return(d,c)=>{const $=ce,B=ie,G=re,L=le,J=ae,P=ne,Q=se,j=oe,W=te,S=ee,q=Z,F=Y,z=X;return a(),r("div",null,[i.userPermissions.canAddTeamMembers?(a(),r("div",ue,[s($),s(Q,{onSubmitted:V},{title:t(()=>[l(" Add Team Member ")]),description:t(()=>[l(" Add a new team member to your team, allowing them to collaborate with you. ")]),form:t(()=>[ve,n("div",_e,[s(B,{for:"email",value:"Email"}),s(G,{id:"email",modelValue:o(m).email,"onUpdate:modelValue":c[0]||(c[0]=e=>o(m).email=e),type:"email",class:"mt-1 block w-full"},null,8,["modelValue"]),s(L,{message:o(m).errors.email,class:"mt-2"},null,8,["message"])]),i.availableRoles.length>0?(a(),r("div",fe,[s(B,{for:"roles",value:"Role"}),s(L,{message:o(m).errors.role,class:"mt-2"},null,8,["message"]),n("div",ge,[(a(!0),r(w,null,C(i.availableRoles,(e,f)=>(a(),r("button",{key:e.key,type:"button",class:u(["relative px-4 py-3 inline-flex w-full rounded-lg focus:z-10 focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-600",{"border-t border-gray-200 dark:border-gray-700 focus:border-none rounded-t-none":f>0,"rounded-b-none":f!=Object.keys(i.availableRoles).length-1}]),onClick:H=>o(m).role=e.key},[n("div",{class:u({"opacity-50":o(m).role&&o(m).role!=e.key})},[n("div",pe,[n("div",{class:u(["text-sm text-gray-600 dark:text-gray-400",{"font-semibold":o(m).role==e.key}])},g(e.name),3),o(m).role==e.key?(a(),r("svg",ye,he)):v("",!0)]),n("div",xe,g(e.description),1)],2)],10,be))),128))])])):v("",!0)]),actions:t(()=>[s(J,{on:o(m).recentlySuccessful,class:"mr-3"},{default:t(()=>[l(" Added. ")]),_:1},8,["on"]),s(P,{class:u({"opacity-25":o(m).processing}),disabled:o(m).processing},{default:t(()=>[l(" Add ")]),_:1},8,["class","disabled"])]),_:1})])):v("",!0),i.team.team_invitations.length>0&&i.userPermissions.canAddTeamMembers?(a(),r("div",we,[s($),s(j,{class:"mt-10 sm:mt-0"},{title:t(()=>[l(" Pending Team Invitations ")]),description:t(()=>[l(" These people have been invited to your team and have been sent an invitation email. They may join the team by accepting the email invitation. ")]),content:t(()=>[n("div",Ce,[(a(!0),r(w,null,C(i.team.team_invitations,e=>(a(),r("div",{key:e.id,class:"card bg-base-100"},[n("div",Te,g(e.email),1),n("div",Me,[i.userPermissions.canRemoveTeamMembers?(a(),r("button",{key:0,class:"cursor-pointer ml-6 text-sm text-red-500 focus:outline-none",onClick:f=>I(e)}," Cancel ",8,Re)):v("",!0)])]))),128))])]),_:1})])):v("",!0),i.team.users.length>0?(a(),r("div",$e,[s($),s(j,{class:"mt-10 sm:mt-0"},{title:t(()=>[l(" Team Members ")]),description:t(()=>[l(" All of the people that are part of this team. ")]),content:t(()=>[n("div",Se,[(a(!0),r(w,null,C(i.team.users,e=>(a(),r("div",{key:e.id,class:"card bg-base-100"},[n("div",Ae,[s(W,{class:"w-8 h-8 rounded-full object-cover",src:e.profile_photo_url,alt:e.name},null,8,["src","alt"]),n("div",Be,g(e.name),1)]),n("div",Le,[i.userPermissions.canUpdateTeamMembers&&i.availableRoles.length?(a(),r("button",{key:0,class:"ml-2 text-sm text-gray-400 underline",onClick:f=>O(e)},g(A(e.membership.role)),9,Pe)):i.availableRoles.length?(a(),r("div",je,g(A(e.membership.role)),1)):v("",!0),d.$page.props.auth.user.id===e.id?(a(),r("button",{key:2,class:"cursor-pointer ml-6 text-sm text-red-500",onClick:D}," Leave ")):i.userPermissions.canRemoveTeamMembers?(a(),r("button",{key:3,class:"cursor-pointer ml-6 text-sm text-red-500",onClick:f=>K(e)}," Remove ",8,Fe)):v("",!0)])]))),128))])]),_:1})])):v("",!0),s(q,{show:o(y),onClose:c[2]||(c[2]=e=>y.value=!1)},{title:t(()=>[l(" Manage Role ")]),content:t(()=>[o(R)?(a(),r("div",ze,[n("div",Ve,[(a(!0),r(w,null,C(i.availableRoles,(e,f)=>(a(),r("button",{key:e.key,type:"button",class:u(["relative px-4 py-3 inline-flex w-full rounded-lg focus:z-10 focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-600",{"border-t border-gray-200 dark:border-gray-700 focus:border-none rounded-t-none":f>0,"rounded-b-none":f!==Object.keys(i.availableRoles).length-1}]),onClick:H=>o(_).role=e.key},[n("div",{class:u({"opacity-50":o(_).role&&o(_).role!==e.key})},[n("div",Oe,[n("div",{class:u(["text-sm text-gray-600 dark:text-gray-400",{"font-semibold":o(_).role===e.key}])},g(e.name),3),o(_).role==e.key?(a(),r("svg",Ne,Ee)):v("",!0)]),n("div",Ke,g(e.description),1)],2)],10,Ie))),128))])])):v("",!0)]),footer:t(()=>[s(S,{onClick:c[1]||(c[1]=e=>y.value=!1)},{default:t(()=>[l(" Cancel ")]),_:1}),s(P,{class:u(["ml-3",{"opacity-25":o(_).processing}]),disabled:o(_).processing,onClick:N},{default:t(()=>[l(" Save ")]),_:1},8,["class","disabled"])]),_:1},8,["show"]),s(z,{show:o(k),onClose:c[4]||(c[4]=e=>k.value=!1)},{title:t(()=>[l(" Leave Team ")]),content:t(()=>[l(" Are you sure you would like to leave this team? ")]),footer:t(()=>[s(S,{onClick:c[3]||(c[3]=e=>k.value=!1)},{default:t(()=>[l(" Cancel ")]),_:1}),s(F,{class:u(["ml-3",{"opacity-25":o(T).processing}]),disabled:o(T).processing,onClick:E},{default:t(()=>[l(" Leave ")]),_:1},8,["class","disabled"])]),_:1},8,["show"]),s(z,{show:o(b),onClose:c[6]||(c[6]=e=>b.value=null)},{title:t(()=>[l(" Remove Team Member ")]),content:t(()=>[l(" Are you sure you would like to remove this person from the team? ")]),footer:t(()=>[s(S,{onClick:c[5]||(c[5]=e=>b.value=null)},{default:t(()=>[l(" Cancel ")]),_:1}),s(F,{class:u(["ml-3",{"opacity-25":o(M).processing}]),disabled:o(M).processing,onClick:U},{default:t(()=>[l(" Remove ")]),_:1},8,["class","disabled"])]),_:1},8,["show"])])}}};export{rt as default};