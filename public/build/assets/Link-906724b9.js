import{c as l,K as d,U as c,a0 as i,M as f,F as a,a6 as s}from"./iconify-4eda29ca.js";import{u as y}from"./app-6a98c07f.js";const m={__name:"Link",props:{data:{type:Object,default:void 0},href:{type:String,required:!0},method:{type:String,default:void 0},as:{type:String,default:void 0},headers:{type:Object,default:void 0},onClick:{type:Function,default:void 0},preserveScroll:{type:[Boolean,Function],default:!0},preserveState:{type:[Boolean,Function,null],default:null},replace:{type:Boolean,default:!1},only:{type:Array,default:()=>[]},onCancelToken:{type:Function,default:void 0},onBefore:{type:Function,default:void 0},onStart:{type:Function,default:void 0},onProgress:{type:Function,default:void 0},onFinish:{type:Function,default:void 0},onCancel:{type:Function,default:void 0},onSuccess:{type:Function,default:void 0},queryStringArrayFormat:{type:String,default:"brackets"},preservePage:{type:Boolean,default:!1},autoScroll:{type:Boolean,default:!0}},setup(e){const n=e,t=y(),r=l(()=>{if(n.method)return"button"});function o(){n.preservePage&&(t.dontFadeout=!0),n.autoScroll||(t.dontScroll=!0),n.onClick&&n.onClick()}return(u,h)=>(d(),c(a(s),{as:a(r),data:e.data,href:e.href,method:e.method,headers:e.headers,onClickCapture:o,"preserve-scroll":e.preserveScroll,"preserve-state":e.preserveState,replace:e.replace,only:e.only,"on-before":e.onBefore,"on-start":e.onStart,"on-progress":e.onProgress,"on-finish":e.onFinish,"on-cancel-token":e.onCancelToken,"on-cancel":e.onCancel,"on-success":e.onSuccess,queryStringArrayFormat:e.queryStringArrayFormat},{default:i(()=>[f(u.$slots,"default")]),_:3},8,["as","data","href","method","headers","preserve-scroll","preserve-state","replace","only","on-before","on-start","on-progress","on-finish","on-cancel-token","on-cancel","on-success","queryStringArrayFormat"]))}};export{m as _};