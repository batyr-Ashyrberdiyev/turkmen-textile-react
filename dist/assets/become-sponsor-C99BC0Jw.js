import{z as t,u as h,w as _,j as e,C as g,L as f,y,x as S,n as v,t as l,o,p as F,q as c,r as i,s as p,B as N,v as w,D as C,E as L}from"./ui-library-BSxTsZf7.js";import{a as R}from"./react-vendor-ERTQd_Nj.js";import{R as B,a as j}from"./radio-group-ZjbLf0Ae.js";import{p as V}from"./service-BFT831D0.js";import{u as D}from"./use-scroll-top-CJJ8CWfz.js";import{s as r}from"./stend.data-MYN6KI5Y.js";import"./index-DW_MHI2K.js";const E=t.object({company_name:t.string().min(3,{message:"Название компании должно быть не менее 3 символов"}),rep_name:t.string().min(3,{message:"Имя представителя должно быть не менее 3 символов"}),job_title:t.string().min(3,{message:"Должность должна быть не менее 3 символов"}),country:t.string().min(3,{message:"Название страны должно быть не менее 3 символов"}),email:t.string().email({message:"Укажите корректный email"}),phone:t.string().min(8,{message:"Номер телефона должен быть не менее 8 символов"}),website:t.string().optional(),visa_support:t.string().optional()}),T={company_name:"",rep_name:"",job_title:"",country:"",email:"",phone:"",website:"",visa_support:""};function O(){D();const a=h(n=>n.lang),[x,b]=R.useState(!1),s=_({resolver:L(E),defaultValues:T}),d=async n=>{try{await V(n)&&b(!0)}catch(u){console.error("POST sponsor error",u)}},{errors:m}=s.formState;return e.jsxs("div",{children:[e.jsx(g,{title:a===f.RU?"Стать спонсором":"Become a sponsor"}),e.jsx(y,{children:!x&&e.jsx(S,{...s,children:e.jsxs(v.form,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"max-w-[828px] mx-auto px-5 md:mt-20 mt-10 mb-20 md:mb-[120px] flex flex-col gap-8",onSubmit:s.handleSubmit(d),children:[e.jsx(l,{label:r[o(a)].label_1,name:"company_name",control:s.control,error:m.company_name}),e.jsx(l,{label:r[o(a)].label_2,name:"rep_name",control:s.control,error:m.rep_name}),e.jsx(l,{label:r[o(a)].label_3,name:"job_title",control:s.control,error:m.job_title}),e.jsx(l,{label:r[o(a)].label_4,name:"country",control:s.control,error:m.country}),e.jsx(l,{label:r[o(a)].label_5,name:"email",control:s.control,error:m.email}),e.jsx(l,{label:r[o(a)].label_6,name:"phone",control:s.control,error:m.phone}),e.jsx(l,{label:r[o(a)].label_7,name:"website",control:s.control}),e.jsx(F,{control:s.control,name:"visa_support",render:({field:n})=>e.jsxs(c,{className:"space-y-5",children:[e.jsx(i,{className:"text-xl",children:r[o(a)].visa}),e.jsx(p,{children:e.jsxs(B,{onValueChange:n.onChange,defaultValue:n.value,className:"flex flex-col space-y-4 ml-3",children:[e.jsxs(c,{className:"flex items-center space-x-5 space-y-0",children:[e.jsx(p,{children:e.jsx(j,{value:"yes",checked:n.value==="yes"})}),e.jsx(i,{className:"text-base",children:r[o(a)].visa_radio})]}),e.jsxs(c,{className:"flex items-center space-x-5 space-y-0 ",children:[e.jsx(p,{children:e.jsx(j,{value:"no",checked:n.value==="no"})}),e.jsx(i,{className:"text-base",children:r[o(a)].visa_radio_2})]})]})})]})}),e.jsx(N,{disabled:s.formState.isSubmitting,className:"mt-5",children:s.formState.isSubmitting?e.jsx(w,{className:"animate-spin"}):r[o(a)].button})]})})}),x&&e.jsx(C,{delay:.3})]})}export{O as default};
