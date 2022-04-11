import{_ as u,r as h,o as d,c as m,a as e,w as f,b as _,v as p,e as v,g as a}from"./index.78dc2935.js";const y={name:"UsersVerify",data(){return{email:null,sent:!1}},computed:{},mounted:function(){},methods:{resetPassword:function(){const i=this;this.$helpers.recaptcha(this,"reset").then(s=>this.$httpc.post("helpers/recaptcha",{token:s},{timeout:3e3}).then(t=>t)).catch(function(s){if(s&&console.error("error:",s),console.log("RECAPTCHA NOT WORKING! Make sure you have RECAPTCHA variables set in backend enviroment."),confirm(`RECAPTCHA NOT WORKING
Are you sure you want to Login?

See console for more information`))return{data:!0}}).then(s=>{s&&s.data===!0&&this.$httpc.post("user/reset",{email:this.email},{timeout:7e3}).then(function(t){i.sent=!0}).catch(function(t){t.response&&t.response.data&&t.response.data.errors&&Object.keys(t.response.data.errors).length>0&&Object.keys(t.response.data.errors).forEach(function(c){const o=i.$el.querySelector(".field."+c);if(o){const n=o.querySelector('.form-messages .form-message[data-message="'+t.response.data.errors[c]+'"]');if(n&&n!==null){i.$helpers.undecorateFormField(o,"danger");const r=n.innerText;i.$helpers.decorateFormField(o,r,"danger")}}})}).then(function(){})})}}},g={class:"container users-me"},b=e("div",{class:"columns"},[e("div",{class:"column"},[e("h1",{class:"title is-1",translate:"yes"},"Reset password")])],-1),k={class:"columns"},T={key:0,class:"column is-half is-offset-one-quarter"},w={class:""},C=e("div",{class:"columns is-variable is-2 is-centered"},[e("div",{class:"column is-12"}," Required Field ")],-1),A={class:"columns is-variable is-2 is-centered"},P={class:"column is-6"},R={class:"field email"},E=e("label",{class:"label"},"Email",-1),x={class:"control"},N=e("div",{class:"form-messages is-hidden"},[e("div",{class:"form-message","data-message":"not found",translate:"yes"},"This email couldn't be found")],-1),O={class:"button is-success"},q=a(" \xA0 Reset "),F=e("p",null,[a(" This site is protected by reCAPTCHA and the Google"),e("br"),e("a",{href:"https://policies.google.com/privacy"},"Privacy Policy"),a(" and "),e("a",{href:"https://policies.google.com/terms"},"Terms of Service"),a(" apply. ")],-1),H={key:1,class:"column is-half is-offset-one-quarter"},S=e("h2",{class:"title is-2",translate:"yes"},"We are sending you email",-1),V=e("p",{translate:"yes"},"Check your mailbox for verification email (if not found check, also you spam folder).",-1),$=[S,V];function G(i,s,t,c,o,n){const r=h("font-awesome-icon");return d(),m("div",g,[b,e("div",k,[o.sent?(d(),m("div",H,$)):(d(),m("div",T,[e("form",{onSubmit:s[1]||(s[1]=f((...l)=>n.resetPassword&&n.resetPassword(...l),["prevent"]))},[e("div",w,[C,e("div",A,[e("div",P,[e("div",R,[E,e("div",x,[_(e("input",{class:"input",type:"email","onUpdate:modelValue":s[0]||(s[0]=l=>o.email=l),placeholder:"Email"},null,512),[[p,o.email]])]),N])])]),e("button",O,[v(r,{icon:"check"}),q]),F])],32)]))])])}var M=u(y,[["render",G],["__file","/Users/marthol/Documents/GitHub/stretchshop-front-vue/src/components/users/Reset.vue"]]);export{M as default};
