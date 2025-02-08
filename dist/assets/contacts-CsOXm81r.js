import{z as t,T as m,w as h,E as u,j as s,f as p,x as g,t as n,B as f,U as j,V as b}from"./ui-library-DhIsR_nY.js";import{a as N}from"./react-vendor-ERTQd_Nj.js";import{b as v}from"./service-BFT831D0.js";import{u as C}from"./use-scroll-top-CJJ8CWfz.js";import"./index-DW_MHI2K.js";const w=t.object({name:t.string().min(2,"error"),email:t.string().email(),phone:t.string().min(8,"error"),company:t.string().min(2,"error"),msg:t.string().min(5,"error")}),y={name:"",email:"",phone:"",company:"",msg:""},L=({className:r})=>{const{t:a}=m("contacts"),[c,i]=N.useState(!1),e=h({resolver:u(w),defaultValues:y});async function x(d){try{const o=await v(d);i(o)}catch(o){console.error("POST contact",o)}}const{errors:l}=e.formState;return s.jsx("div",{className:p("bg-primary rounded-[8px] py-8 px-6 ",r),children:s.jsx(g,{...e,children:s.jsxs("form",{onSubmit:e.handleSubmit(x),children:[s.jsx("h2",{className:"h2 !text-on_primary lg:mb-8 mb-6",children:a("title")}),s.jsxs("div",{className:"flex flex-col gap-8",children:[s.jsx(n,{onPrimary:!0,name:"name",control:e.control,label:a("name"),error:l.name}),s.jsxs("div",{className:"flex flex-col lg:flex-row gap-6",children:[s.jsx(n,{onPrimary:!0,name:"email",control:e.control,label:"Email",error:l.email}),s.jsx(n,{onPrimary:!0,name:"phone",control:e.control,label:a("phone"),error:l.phone})]}),s.jsx(n,{onPrimary:!0,name:"company",control:e.control,label:a("company"),error:l.name}),s.jsx(n,{onPrimary:!0,textArea:!0,name:"msg",label:a("message"),control:e.control,error:l.msg}),s.jsx(f,{disabled:e.formState.isSubmitting||c,className:"w-full h-12 overflow-hidden",variant:"secondary",children:c?a("submitted"):e.formState.isSubmitting?s.jsx(j,{className:"animate-spin text-white"}):a("button")})]})]})})})};function _(){C();const{t:r}=m("contacts");return s.jsxs("div",{className:"flex flex-col gap-20 pt-10 md:pt-20",children:[s.jsx(b,{children:s.jsxs("section",{className:"grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-6",children:[s.jsx(L,{}),s.jsxs("div",{className:"p-6 bg-bg_surface_container rounded-[8px]",children:[s.jsx("h2",{className:"h2 mb-10 xl:mb-8",children:r("title_2")}),s.jsxs("div",{className:"flex flex-col gap-20",children:[s.jsxs("div",{className:"flex items-center gap-6",children:[s.jsx("img",{src:"/contacts/map.svg",alt:"address"}),s.jsxs("div",{children:[s.jsx("h3",{className:"text-xl mb-2",children:r("address")}),s.jsx("address",{className:"text-base normal not-italic",children:r("venue")})]})]}),s.jsxs("div",{className:"flex items-center gap-6",children:[s.jsx("img",{src:"/contacts/phone.svg",alt:"phone"}),s.jsxs("div",{children:[s.jsx("h3",{className:"text-xl mb-2",children:r("phone")}),s.jsx("h4",{className:"text-base normal",children:"+99371871812; 99363719588"})]})]}),s.jsxs("div",{className:"flex items-center gap-6",children:[s.jsx("img",{src:"/contacts/email.svg",alt:"email"}),s.jsxs("div",{children:[s.jsx("h3",{className:"text-xl mb-2",children:"Email:"}),s.jsx("h4",{className:"text-base normal",children:"contact@turkmenexpo.com"})]})]})]})]})]})}),s.jsx("section",{className:"relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[600px]",children:s.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1443.0869986358682!2d58.35620779177324!3d37.921200202365405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f7001fd7afd2a95%3A0x9ce9dca95ea4b87e!2z0JDQstC40LDQutCw0YHRgdCwINCw0LLQuNCw0LrQvtC80L_QsNC90LjQuCDCq9CR0LXQu9Cw0LLQuNCwwrsg0LIg0KLRg9GA0LrQvNC10L3QuNGB0YLQsNC90LU!5e0!3m2!1sru!2sru!4v1738063695919!5m2!1sru!2sru",className:"absolute inset-0 w-full h-full ",style:{border:0},allowFullScreen:!0,loading:"lazy"})})]})}export{_ as default};
