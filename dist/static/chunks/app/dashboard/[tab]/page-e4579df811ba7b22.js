(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[53],{7510:function(e,a,l){Promise.resolve().then(l.bind(l,6982))},6982:function(e,a,l){"use strict";l.r(a),l.d(a,{default:function(){return f}});var t=l(3827),s=l(4090);l(8660);var i=l(8792),r=e=>{let{tabs:a,value:l,setValue:s}=e;return(0,t.jsx)("div",{className:"tabs",children:a.map(e=>(0,t.jsx)(i.default,{className:"tab ".concat(e.value===l?"active-tab":""),href:{pathname:"/dashboard/".concat(e.value)},children:(0,t.jsx)("div",{onClick:()=>{s(e.value)},children:e.label})},e.value))})},n=l(5362);l(2587);var c=l(6493),u=l(5510);l(9289);var d=e=>{let{value:a,setValue:l,placeholder:s,setFlag:i}=e,r=async e=>{try{return await (0,u.Z)(e,{maxSizeMB:5,maxWidthOrHeight:800,useWebWorker:!0})}catch(e){throw e}};async function n(e){i(!0);let a=e.target.files[0];if(a)try{let e=await r(a),t=new FileReader;t.readAsDataURL(e),t.onloadend=()=>{l(t.result.toString()),i(!1)}}catch(e){console.error("Error compressing image:",e)}}return(0,t.jsxs)("div",{className:"file-box",children:[(0,t.jsx)("input",{required:!0,className:"file-input",id:"fileIO",placeholder:s,onChange:e=>n(e),type:"file",accept:"image/jpeg, image/png"}),(0,t.jsx)("label",{htmlFor:"fileIO",className:"file-upload-btn",children:"Upload"})]})},o=l(8809),m=()=>{let[e,a]=(0,s.useState)(""),[l,i]=(0,s.useState)(""),[r,u]=(0,s.useState)(""),[m,h]=(0,s.useState)(""),[b,f]=(0,s.useState)(""),x=JSON.parse(localStorage.getItem("isAuth")),[g,v]=(0,s.useState)(!1),j=async(t,s,n,c,d,g,v)=>{""!==e&&""!==l&&""!==r&&""!==m&&""!==b&&(alert(x.id),v.preventDefault(),await (0,o.gJ)(t,s,n,c,x.district,d,g),a(""),i(""),u(""),h(""),f(""))};return(0,t.jsx)("div",{className:"addNewMeetingForm",children:(0,t.jsxs)("form",{className:"new-meeting-form",children:[(0,t.jsx)("label",{className:"required",children:"Meeting title"}),(0,t.jsx)(n.Z,{value:e,setValue:a}),(0,t.jsx)("label",{className:"required",children:"Meeting description"}),(0,t.jsx)(n.Z,{value:l,setValue:i}),(0,t.jsx)("label",{className:"required",children:"Meeting location"}),(0,t.jsx)(n.Z,{value:r,setValue:u}),(0,t.jsx)("label",{className:"required",children:"Meeting attendees"}),(0,t.jsx)(n.Z,{value:m,setValue:h}),(0,t.jsx)("label",{className:"required",children:"Meeting Images"}),(0,t.jsx)(d,{setFlag:v,value:b,setValue:f,placeholder:"No Images"}),b.length>0&&(0,t.jsx)("p",{className:"info-tag",children:"Images loaded successfully!"}),(0,t.jsx)("div",{}),(0,t.jsx)(c.Z,{disabled:g,cb:a=>{j(e,l,r,m,b,x.id,a)},label:"Submit"})]})})},h=l(3818),b=l(7907);l(8122);var f=e=>{let{params:a}=e,[l,i]=(0,s.useState)(a.tab);return(0,b.useSearchParams)(),(0,t.jsxs)("div",{className:"dashboard",children:[(0,t.jsx)(r,{tabs:[{label:"Add new meeting",value:"0"},{label:"Previous",value:"1"}],value:l,setValue:i}),"0"===a.tab&&(0,t.jsx)(m,{}),"1"===a.tab&&(0,t.jsx)(h.Z,{})]})}},8122:function(){},9289:function(){},8660:function(){},2587:function(){}},function(e){e.O(0,[749,901,628,818,971,69,744],function(){return e(e.s=7510)}),_N_E=e.O()}]);