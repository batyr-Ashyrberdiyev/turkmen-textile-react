import{u as g,v as f,j as e,C as y,n as s,x as v,w as N,m as S,o as d,p as m,q as i,r as p,s as l,B as F,t as k,y as w}from"./ui-library-HZBIYpKi.js";import{a as j}from"./react-vendor-OnsDvTPE.js";import{R as b,a as x}from"./radio-group-Ct1srp1J.js";import{z as o,t as C}from"./index-D9auPpG5.js";import{a as V}from"./service-CiRbXqJ6.js";import{s as t}from"./stend.data-MYN6KI5Y.js";const R=o.object({space_package:o.string(),company_name:o.string().min(3,{message:"Название компании должно быть не менее 3 символов"}),rep_name:o.string().min(3,{message:"Имя представителя должно быть не менее 3 символов"}),job_title:o.string().min(3,{message:"Должность должна быть не менее 3 символов"}),participants_number:o.preprocess(a=>Number(a),o.number().min(1,"Укажите количество участников")),country:o.string().min(3,{message:"Название страны должно быть не менее 3 символов"}),email:o.string().email({message:"Укажите корректный email"}),phone:o.string().min(8,{message:"Номер телефона должен быть не менее 8 символов"}),website:o.string().optional(),visa_support:o.string().optional()}),E={space_package:"space",company_name:"",rep_name:"",job_title:"",participants_number:1,country:"",email:"",phone:"",website:"",visa_support:""};function z(){const a=g(n=>n.lang),[u,h]=j.useState(!1),r=f({resolver:C(R),defaultValues:E}),_=async n=>{await V(n)&&h(!0)};j.useEffect(()=>{window.scrollTo({behavior:"smooth",top:0})},[status]);const{errors:c}=r.formState;return e.jsxs("div",{children:[e.jsx(y,{title:t[s(a)].cover}),e.jsx(v,{children:!u&&e.jsx(N,{...r,children:e.jsxs(S.form,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"max-w-[828px] px-5 mx-auto mt-20 mb-[120px] flex flex-col gap-8",onSubmit:r.handleSubmit(_),children:[e.jsx(d,{control:r.control,name:"space_package",render:({field:n})=>e.jsxs(m,{className:"space-y-5",children:[e.jsx(i,{className:"text-xl",children:t[s(a)].h2}),e.jsx(p,{children:e.jsxs(b,{onValueChange:n.onChange,defaultValue:n.value,className:"flex flex-col space-y-4 ml-3",children:[e.jsxs(m,{className:"flex items-center space-x-5 space-y-0",children:[e.jsx(p,{children:e.jsx(x,{value:"space",checked:n.value==="space"})}),e.jsx(i,{className:"text-base",children:t[s(a)].radio})]}),e.jsxs(m,{className:"flex items-center space-x-5 space-y-0",children:[e.jsx(p,{children:e.jsx(x,{value:"package",checked:n.value==="package"})}),e.jsx(i,{className:"text-base",children:t[s(a)].radio_2})]})]})})]})}),e.jsx(l,{label:t[s(a)].label_1,name:"company_name",control:r.control,error:c.company_name}),e.jsx(l,{label:t[s(a)].label_2,name:"rep_name",control:r.control,error:c.rep_name}),e.jsx(l,{label:t[s(a)].label_3,name:"job_title",control:r.control,error:c.job_title}),e.jsx(l,{label:t[s(a)].number_of_participants,type:"number",name:"participants_number",control:r.control,error:c.participants_number}),e.jsx(l,{label:t[s(a)].label_4,name:"country",control:r.control,error:c.country}),e.jsx(l,{label:t[s(a)].label_5,name:"email",control:r.control,error:c.email}),e.jsx(l,{label:t[s(a)].label_6,name:"phone",control:r.control,error:c.phone}),e.jsx(l,{label:t[s(a)].label_7,name:"website",control:r.control}),e.jsx(d,{control:r.control,name:"visa_support",render:({field:n})=>e.jsxs(m,{className:"space-y-5",children:[e.jsx(i,{className:"text-xl",children:t[s(a)].visa}),e.jsx(p,{children:e.jsxs(b,{onValueChange:n.onChange,defaultValue:n.value,className:"flex flex-col space-y-4 ml-3",children:[e.jsxs(m,{className:"flex items-center space-x-5 space-y-0",children:[e.jsx(p,{children:e.jsx(x,{value:"yes",checked:n.value==="yes"})}),e.jsx(i,{className:"text-base",children:t[s(a)].visa_radio})]}),e.jsxs(m,{className:"flex items-center space-x-5 space-y-0 ",children:[e.jsx(p,{children:e.jsx(x,{value:"no",checked:n.value==="no"})}),e.jsx(i,{className:"text-base",children:t[s(a)].visa_radio_2})]})]})})]})}),e.jsx(F,{disabled:r.formState.isSubmitting,className:"mt-5",children:r.formState.isSubmitting?e.jsx(k,{className:"animate-spin"}):t[s(a)].button})]})})}),u&&e.jsx(w,{delay:.3})]})}export{z as default};
