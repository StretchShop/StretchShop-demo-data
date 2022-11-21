import{G as f}from"./GoogleRecaptcha.b88a47fc.js";import{c as g,a as s,h as _,B as l,H as c,K as v,d as y,g as b,e as d,b as w,w as k,j as m,o as u}from"./sett.5bce7c7f.js";import{_ as x}from"./index.20e455a6.js";import"./edit.8b295d88.js";const R={name:"UsersLogin",components:{"google-recaptcha":f},data(){return{email:"",password:"",remember:!1}},created:function(){},computed:{useRecaptcha:function(){var t,e,a;return((a=(e=(t=this.$store.state)==null?void 0:t.coredata)==null?void 0:e.settings)==null?void 0:a.formVerif)==="recaptcha"}},methods:{userLogin:function(){const t=this.$helpers.propertiesRequiredConfirm({email:this.email,password:this.password},["email","password"]);!t.result||this.email===""||this.password===""?this.$helpers.formUndecorateAndDecorateFields(t.fields,t.errors):this.$helpers.secureForm("login",this.$refs.recaptcha).then(e=>{e&&this.sendRequest()})},sendRequest:function(){const t=this;this.$httpc.post("users/login",{user:{email:this.email,password:this.password}},{tokenize:!0}).then(function(e){if(e.data.user&&e.data.user._id){t.$store.state.user.logged=!0,t.$store.state.user.remember=t.remember;const a=e.data.user;t.$store.dispatch("setUser",a),t.$router.push({name:"me"})}}).catch(function(e){e.response&&e.response.data&&e.response.data.errors&&Object.keys(e.response.data.errors).length>0&&Object.keys(e.response.data.errors).forEach(function(a){const i=t.$el.querySelector(".field."+a);if(i){const o=i.querySelector('.form-messages .form-message[data-message="'+e.response.data.errors[a]+'"]');if(o&&o!==null){t.$helpers.undecorateFormField(i,"danger");const n=o.innerText;t.$helpers.decorateFormField(i,n,"danger")}}})}).then(function(e){})}}},V={class:"container users-login"},$=s("div",{class:"column"},[s("h1",{class:"title is-1"},"Login")],-1),C={class:"column is-4 is-offset-4"},F={class:"field email"},L={class:"control"},U=s("div",{class:"form-messages is-hidden"},[s("div",{class:"form-message","data-message":"wrong credentials",translate:"yes"},"Wrong credentials"),s("div",{class:"form-message","data-message":"not activated",translate:"yes"},"Account not activated. Check your mailbox for activation email."),s("div",{class:"form-message","data-message":"is empty",translate:"yes"},"This field cannot be empty")],-1),q={class:"field password"},B={class:"control"},T=s("div",{class:"form-messages is-hidden"},[s("div",{class:"form-message","data-message":"is empty",translate:"yes"},"This field cannot be empty")],-1),E={class:"field"},N=s("span",{translate:"yes"},"Remember my login on this computer",-1),S=s("button",{class:"button is-medium is-primary",type:"submit",translate:"yes"},"Login",-1),j={class:"column is-4 is-offset-4"},M={translate:"yes"};function A(t,e,a,i,o,n){const p=m("google-recaptcha"),h=m("router-link");return u(),g("div",V,[$,s("div",C,[s("form",{onSubmit:e[3]||(e[3]=_((...r)=>n.userLogin&&n.userLogin(...r),["prevent"])),ref:"loginSubmit"},[s("div",F,[s("div",L,[l(s("input",{class:"input",placeholder:"Email",type:"email","onUpdate:modelValue":e[0]||(e[0]=r=>o.email=r)},null,512),[[c,o.email,void 0,{trim:!0}]])]),U]),s("div",q,[s("div",B,[l(s("input",{class:"input",placeholder:"Password",type:"password","onUpdate:modelValue":e[1]||(e[1]=r=>o.password=r)},null,512),[[c,o.password,void 0,{trim:!0}]])]),T]),s("div",E,[N,l(s("input",{class:"checkbox",type:"checkbox","onUpdate:modelValue":e[2]||(e[2]=r=>o.remember=r)},null,512),[[v,o.remember]])]),S,n.useRecaptcha?(u(),y(p,{key:0,ref:"recaptcha"},null,512)):b("",!0)],544)]),s("div",j,[s("p",M,[d("Forgot your password? "),w(h,{to:{name:"reset"},tag:"a"},{default:k(()=>[d("Reset your password")]),_:1})])])])}const H=x(R,[["render",A]]);export{H as default};