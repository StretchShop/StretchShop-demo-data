import{G as h}from"./GoogleRecaptcha-tz9Jiyc3.js";import{r as m,c as d,a as e,i as f,K as _,N as p,b as v,f as g,e as y,h as b,o as c}from"./sett-kcacPgfM.js";import{_ as k}from"./index-dpUgND6i.js";const w={name:"UsersVerify",components:{"google-recaptcha":h},data(){return{email:null,sent:!1}},computed:{useRecaptcha:function(){var o,t,s;return((s=(t=(o=this.$store.state)==null?void 0:o.coredata)==null?void 0:t.settings)==null?void 0:s.formVerif)==="recaptcha"}},mounted:function(){},methods:{resetPassword:function(){const o=this;this.$helpers.secureForm("reset",this.$refs.recaptcha).then(t=>{t&&this.$httpc.post("user/reset",{email:this.email},{timeout:7e3,tokenize:!0}).then(function(s){o.sent=!0}).catch(function(s){s.response&&s.response.data&&s.response.data.errors&&Object.keys(s.response.data.errors).length>0&&Object.keys(s.response.data.errors).forEach(function(i){const a=o.$el.querySelector(".field."+i);if(a){const n=a.querySelector('.form-messages .form-message[data-message="'+s.response.data.errors[i]+'"]');if(n&&n!==null){o.$helpers.undecorateFormField(a,"danger");const r=n.innerText;o.$helpers.decorateFormField(a,r,"danger")}}})}).then(function(){})})}}},R={class:"container users-me"},x=e("div",{class:"columns"},[e("div",{class:"column"},[e("h1",{class:"title is-1",translate:"yes"},"Reset password")])],-1),V={class:"columns"},F={key:0,class:"column is-half is-offset-one-quarter"},q={class:""},E=e("div",{class:"columns is-variable is-2 is-centered"},[e("div",{class:"column is-12"}," Required Field ")],-1),N={class:"columns is-variable is-2 is-centered"},$={class:"column is-6"},B={class:"field email"},T=e("label",{class:"label"},"Email",-1),C={class:"control"},G=e("div",{class:"form-messages is-hidden"},[e("div",{class:"form-message","data-message":"not found",translate:"yes"},"This email couldn't be found")],-1),P={class:"button is-success"},S={key:1,class:"column is-half is-offset-one-quarter"},U=e("h2",{class:"title is-2",translate:"yes"},"We are sending you an email",-1),j=e("p",{translate:"yes"},"Check your mailbox for verification email (if not found check, also you spam folder).",-1),D=[U,j];function M(o,t,s,i,a,n){const r=m("font-awesome-icon"),u=m("google-recaptcha");return c(),d("div",R,[x,e("div",V,[a.sent?(c(),d("div",S,[...D])):(c(),d("div",F,[e("form",{onSubmit:t[1]||(t[1]=f((...l)=>n.resetPassword&&n.resetPassword(...l),["prevent"]))},[e("div",q,[E,e("div",N,[e("div",$,[e("div",B,[T,e("div",C,[_(e("input",{class:"input",type:"email","onUpdate:modelValue":t[0]||(t[0]=l=>a.email=l),placeholder:"Email"},null,512),[[p,a.email]])]),G])])]),e("button",P,[v(r,{icon:"check"}),g("   Reset ")]),n.useRecaptcha?(c(),y(u,{key:0,ref:"recaptcha"},null,512)):b("",!0)])],32)]))])])}const K=k(w,[["render",M],["__file","/Users/marthol/Documents/GitHub/stretchshop-front-vue/src/components/users/Reset.vue"]]);export{K as default};
