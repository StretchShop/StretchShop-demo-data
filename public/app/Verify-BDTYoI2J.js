import{r as d,c as a,a as t,t as m,f as i,b as h,w as p,h as f,o as c}from"./sett-4GVrJM9M.js";import{_}from"./index-D0WNZmOK.js";const y={name:"UsersVerify",data(){return{error:!1}},computed:{email:function(){const e=new RegExp("--","g");return this.$route.params.id.toString().replace("---","@").replace(e,".")}},mounted:function(){this.sendVerifycation()},methods:{sendVerifycation:function(){const e=this,o=decodeURIComponent(this.$route.params.id),n=decodeURIComponent(this.$route.params.hash);this.$httpc.post("user/verify",{email:o,hash:n},{timeout:7e3}).then(function(s){if(s.data.user){e.$store.state.user.logged=!0,e.$store.state.user.remember=e.remember;const r=s.data.user;e.$store.dispatch("setUser",r),e.$router.push({name:"me"})}}).catch(function(s){console.error(s),e.error=!0}).then(function(){e.$store.state.user.logged?e.$router.push({name:"me"}):e.error=!0})}}},$={class:"container users-me"},v={class:"columns"},g={class:"column"},V=t("h1",{class:"title is-1",translate:"yes"},"Verify",-1),x={class:""},k={key:0},C=t("p",{class:"has-text-danger",translate:"yes"},"Activation link is not valid anymore (valid only for 2 hours)",-1),U=t("span",{translate:"yes"},"If more than 2 hours passed, try to",-1);function b(e,o,n,s,r,u){const l=d("router-link");return c(),a("div",$,[t("div",v,[t("div",g,[V,t("p",x,m(u.email),1),r.error?(c(),a("div",k,[C,t("p",null,[U,i("  "),h(l,{to:{name:"reset"},tag:"a",translate:"yes"},{default:p(()=>[i("reset your password")]),_:1})])])):f("",!0)])])])}const B=_(y,[["render",b],["__file","/Users/marthol/Documents/GitHub/stretchshop-front-vue/src/components/users/Verify.vue"]]);export{B as default};