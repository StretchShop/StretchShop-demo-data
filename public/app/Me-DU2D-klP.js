import{G as S}from"./GoogleRecaptcha-BqjgAYBS.js";import{r as D,o as u,c as m,a as s,t as b,j as V,i as f,I as r,N as d,h as v,e as U,ah as T,f as h,K as M,b as _,a7 as F,F as I,d as w,ai as E,aj as L,w as y,g as N}from"./sett-Clekrjj_.js";import{_ as g}from"./index-CwMoDQNn.js";const z={name:"UserMeInfo",components:{"google-recaptcha":S},data(){return{userProfileImageFile:[]}},computed:{useRecaptcha:function(){var t,e,o;return((o=(e=(t=this.$store.state)==null?void 0:t.coredata)==null?void 0:e.settings)==null?void 0:o.formVerif)==="recaptcha"},userBasicData:function(){const t=this.$store.getters.getUserProfile,e={username:"",email:"",email2:"",password:"",password2:""};return t&&t.username&&(e.username=t.username,e.email=t.email,t.dates&&(e.dates=t.dates)),e},userProfileImage:function(){return this.$store.getters.getProfileImage()}},mounted:function(){this.eventBus.emit("translateContent",this.$store.getters.getTranslates)},methods:{deleteDropFile(t){this.userProfileImageFile.splice(t,1)},uploadUserProfileImage:function(t){const e=this;this.userProfileImageFile=t.target.files;const o=new FormData;if(this.userProfileImageFile.length&&this.userProfileImageFile.length>0)for(var n=0;n<this.userProfileImageFile.length;n++){const i=this.userProfileImageFile[n];o.append("files["+n+"]",i)}else o.append("files[0]",this.userProfileImageFile);this.$httpc.post("user/image",o,{tokenize:!0}).then(function(i){if(i&&i.data){if(i.data.substr(0,1)==="'"&&i.data[i.data.length-1]==="'"){const l=i.data.length-2;i.data=i.data.substr(1,l),i.data=JSON.parse(i.data)}i.data.files&&i.data.files.length>0&&i.data.files[0].path&&(e.$store.dispatch("setUserProfileImage",i.data.files[0].path),e.$forceUpdate())}}).catch(function(i){console.error(i)}).then(function(){})},changeUsername:function(){const t=[];let e=!0;const o=this;this.$httpc.post("users/checkusername",{username:this.userBasicData.username},{tokenize:!0}).then(function(n){var i,l,c,a;((l=(i=n==null?void 0:n.data)==null?void 0:i.result)==null?void 0:l.userExists)===!0?(e=!1,t.push({target:"username",action:"already exists"})):((a=(c=n==null?void 0:n.data)==null?void 0:c.result)==null?void 0:a.userExists)===!1&&(e=!0,e&&o.$httpc.put("user",{user:{username:o.userBasicData.username}}).then(p=>{var $;($=p==null?void 0:p.data)!=null&&$.user&&o.$store.dispatch("updateUser",p.data.user)})),t.length&&console.error(t)}).catch(function(n){var i,l;o.sendChangeRequest=!1,o.status="error",console.error("changeUsername: ",n),(l=(i=n.response)==null?void 0:i.data)!=null&&l.errors&&o.$helpers.showFormFieldErrorsFromErrorResponse(n.response.data.errors)}).then(function(){})},changeEmail:function(){let t=!0;const e=this;(!this.userBasicData.email||!this.userBasicData.email2||this.userBasicData.email!==this.userBasicData.email2)&&(e.$helpers.formUndecorateAndDecorateFields(["email2"],[{name:"email2",action:"not confirmed"}]),t=!1),t&&this.$httpc.post("users/checkemail",{email:this.userBasicData.email},{tokenize:!0}).then(function(o){t=!0,t&&e.$httpc.put("user",{user:{email:e.userBasicData.email}}).then(n=>{var i;(i=n==null?void 0:n.data)!=null&&i.user&&e.$store.dispatch("updateUser",n.data.user)})}).catch(function(o){e.sendChangeRequest=!1,e.status="error",o.response.data&&o.response.data.errors&&e.$helpers.showFormFieldErrorsFromErrorResponse(o.response.data.errors)}).then(function(){})},changePassword:function(){let t=!0;const e=this;(!this.userBasicData.password||!this.userBasicData.password2||this.userBasicData.password!==this.userBasicData.password2)&&(e.$helpers.formUndecorateAndDecorateFields(["password2"],[{name:"password2",action:"not confirmed"}]),t=!1),t&&this.$httpc.put("user",{user:{password:this.userBasicData.password}},{tokenize:!0}).then(function(o){t=!0,t&&e.$store.dispatch("updateUser",{email:e.userBasicData.email})}).catch(function(o){e.sendChangeRequest=!1,e.status="error",console.error(o),o.response.data&&o.response.data.errors&&e.$helpers.formUndecorateAndDecorateFields(["password2"],[{name:"password2",action:"unknown error"}])}).then(function(){})},deleteUser:function(){const t=this;confirm(this.$refs.deleteUserWarning.innerText)&&this.$helpers.secureForm("deleteProfile",this.$refs.recaptcha).then(e=>{e&&this.$httpc.delete("user/profile",{tokenize:!0}).then(o=>{o.data&&t.$store.dispatch("setUser",o.data)}).catch(function(o){return console.error(o),null}).then(function(){return null})})},cancelUserDelete:function(){const t=this;this.$httpc.post("user/cancelDelete",null,{tokenize:!0}).then(e=>{e.data&&t.$store.dispatch("setUser",e.data)}).catch(function(e){return console.error(e),null}).then(function(){return null})},passwordSecurityLevel:function(t){const e=this.$helpers.passwordStrengthChecker(t);let o="danger";e==="medium"?o="warning":e==="strong"&&(o="success"),this.$helpers.formUndecorateAndDecorateFields(["password"],[{name:"password",action:"password "+e,type:o}])}}},O={key:0,id:"meInfo",class:""},R={class:"columns is-variable is-2"},q={class:"column is-8 has-text-centered"},G={class:"title is-2 has-text-centered"},H={class:"columns is-variable is-2"},W={class:"column is-4 has-text-centered",id:"profile-profile-image"},j={class:"user--avatar-wrapper is-centered"},Y={class:"column is-4 has-text-centered image-button-padding"},Z={class:"file is-primary action edit"},K={class:"file-label"},J=s("span",{class:"file-cta"},[s("span",{class:"file-icon"},[s("i",{class:"fa fa-plus"})]),s("span",{class:"file-label",id:"profile-profile-image-upload",translate:"yes"}," Click to upload Profile Image ")],-1),Q={class:"user-info-edit-form-wrapper"},X={class:"columns"},ss={class:"column is-8 is-centered"},es={class:"columns is-variable is-2 is-centered"},ts={class:"column is-12 has-text-centered",id:"profile-profile-username"},as={class:"field username"},is=s("label",{class:"label",translate:"yes"},"Username",-1),os={class:"control"},ns=s("div",{class:"form-messages is-hidden"},[s("div",{class:"form-message","data-message":"exists",translate:"yes"},"Username already exists")],-1),ls=s("button",{class:"button is-success"},[s("span",{translate:"yes"},"Change Username")],-1),rs=s("div",{class:"columns"},[s("div",{class:"column is-12"},[s("hr")])],-1),ds={class:"columns is-variable is-2 is-centered"},cs={class:"column is-6",id:"profile-profile-email"},us={class:"field email"},ms=s("label",{class:"label"},"Email",-1),hs={class:"control"},vs=s("div",{class:"form-messages is-hidden"},[s("div",{class:"form-message","data-message":"exists",translate:"yes"},"Email already exists")],-1),_s={class:"column is-6",id:"profile-profile-email2"},ps={class:"field email2"},fs=s("label",{class:"label",translate:"yes"},"Email Confirm",-1),ys={class:"control"},gs=s("div",{class:"form-messages is-hidden"},[s("div",{class:"form-message","data-message":"not confirmed",translate:"yes"},"Values do not match")],-1),$s=s("div",{class:"columns is-variable is-2 is-centered"},[s("div",{class:"column is-12 has-text-centered"},[s("button",{class:"button is-success"},[s("span",{translate:"yes"},"Change your Email")])])],-1),bs=s("div",{class:"columns"},[s("div",{class:"column is-12"},[s("hr")])],-1),Ds={class:"columns is-variable is-2 is-centered"},As={class:"column is-6"},Us={class:"field password"},Is=s("label",{class:"label",translate:"yes"},"Password",-1),ws={class:"control"},Cs=T('<div class="form-messages is-hidden"><div class="form-message" data-message="is empty" translate="yes">This field cannot be empty</div><div class="form-message has-text-danger" data-message="password weak" translate="yes">Weak</div><div class="form-message has-text-warning" data-message="password medium" translate="yes">Medium</div><div class="form-message has-text-success" data-message="password strong" translate="yes">Strong</div></div>',1),xs={class:"column is-6"},ks={class:"field password2"},Ps=s("label",{class:"label",translate:"yes"},"Password Confirm",-1),Bs={class:"control"},Fs=s("div",{class:"form-messages is-hidden"},[s("div",{class:"form-message","data-message":"not confirmed",translate:"yes"},"Values do not match"),s("div",{class:"form-message","data-message":"unknown error",translate:"yes"},"An error occured when changing password")],-1),Ss=s("div",{class:"columns is-variable is-2 is-centered"},[s("div",{class:"column is-12 has-text-centered"},[s("button",{class:"button is-success"},[s("span",{translate:"yes"},"Change your Password")])])],-1),Vs=s("div",{class:"columns"},[s("div",{class:"column is-12"},[s("hr")])],-1),Ts={class:"columns product-delete"},Ms={class:"column is-12 has-text-centered"},Es={key:0},Ls={ref:"deleteUserWarning",translate:"true"},Ns=s("p",null,[s("strong",{translate:"yes"},"Notice:"),h(),s("span",{translate:"yes"},[h("Your profile will be removed in 14 days after clicking this button! "),s("br"),h(" If you don't cancel this action in those 14 days, your account will be removed.")])],-1),zs=s("p",null,[s("strong",{translate:"yes"},"Notice:"),h(),s("span",{translate:"yes"},"Information about your orders will remain for tax purposes!")],-1),Os={key:1},Rs=s("p",null,[s("strong",{translate:"yes"},"Notice:"),h(),s("span",{translate:"yes"},"Your profile will NOT be removed after clicking this button.")],-1);function qs(t,e,o,n,i,l){const c=D("google-recaptcha");return t.$store.state.user.profile?(u(),m("div",O,[s("div",R,[s("div",q,[s("h2",G,b(t.$store.state.user.profile.username),1)])]),s("div",H,[s("div",W,[s("div",j,[s("div",{class:"user--avatar-image",style:V({"background-image":"url('"+l.userProfileImage+"')"})},null,4)])]),s("div",Y,[s("div",Z,[s("label",K,[s("input",{class:"file-input",type:"file",name:"resume",onInput:e[0]||(e[0]=a=>l.uploadUserProfileImage(a))},null,32),J])])])]),s("div",Q,[s("div",X,[s("div",ss,[s("div",es,[s("div",ts,[s("form",{onSubmit:e[2]||(e[2]=f((...a)=>l.changeUsername&&l.changeUsername(...a),["prevent"]))},[s("div",as,[is,s("div",os,[r(s("input",{class:"input",type:"text","onUpdate:modelValue":e[1]||(e[1]=a=>l.userBasicData.username=a),placeholder:"Username"},null,512),[[d,l.userBasicData.username]])]),ns]),ls],32)])]),rs,s("form",{onSubmit:e[5]||(e[5]=f((...a)=>l.changeEmail&&l.changeEmail(...a),["prevent"]))},[s("div",ds,[s("div",cs,[s("div",us,[ms,s("div",hs,[r(s("input",{class:"input",type:"text","onUpdate:modelValue":e[3]||(e[3]=a=>l.userBasicData.email=a),placeholder:"Email"},null,512),[[d,l.userBasicData.email]])]),vs])]),s("div",_s,[s("div",ps,[fs,s("div",ys,[r(s("input",{class:"input",type:"text","onUpdate:modelValue":e[4]||(e[4]=a=>l.userBasicData.email2=a),placeholder:"Email Confirm"},null,512),[[d,l.userBasicData.email2]])]),gs])])]),$s],32),bs,s("form",{onSubmit:e[9]||(e[9]=f((...a)=>l.changePassword&&l.changePassword(...a),["prevent"]))},[s("div",Ds,[s("div",As,[s("div",Us,[Is,s("div",ws,[r(s("input",{class:"input",type:"password","onUpdate:modelValue":e[6]||(e[6]=a=>l.userBasicData.password=a),placeholder:"Password",onKeyup:e[7]||(e[7]=a=>l.passwordSecurityLevel(a))},null,544),[[d,l.userBasicData.password]])]),Cs])]),s("div",xs,[s("div",ks,[Ps,s("div",Bs,[r(s("input",{class:"input",type:"password","onUpdate:modelValue":e[8]||(e[8]=a=>l.userBasicData.password2=a),placeholder:"Password Confirm"},null,512),[[d,l.userBasicData.password2]])]),Fs])])]),Ss],32),Vs,s("div",Ts,[s("div",Ms,[s("section",null,[!l.userBasicData.dates||!l.userBasicData.dates.dateToBeErased||l.userBasicData.dates.dateToBeErased==null?(u(),m("div",Es,[r(s("div",Ls,"Are you sure you want to DELETE Your Profile?",512),[[M,!1]]),s("button",{class:"button is-danger",onClick:e[10]||(e[10]=a=>l.deleteUser()),translate:"yes"},"DELETE My Profile !"),Ns,zs])):v("",!0),l.userBasicData.dates&&l.userBasicData.dates.dateToBeErased&&l.userBasicData.dates.dateToBeErased!=null?(u(),m("div",Os,[s("button",{class:"button is-danger",onClick:e[11]||(e[11]=a=>l.cancelUserDelete()),translate:"yes"},"Cancel Deleting my Profile"),Rs])):v("",!0)]),l.useRecaptcha?(u(),U(c,{key:0,ref:"recaptcha"},null,512)):v("",!0)])])])])])])):v("",!0)}const C=g(z,[["render",qs],["__file","/Users/marthol/Documents/GitHub/stretchshop-front-vue/src/components/users/MeInfo.vue"]]),Gs={name:"UserMeCompany",data(){return{activeCompanyData:{name:"",orgId:"",taxId:"",taxVatId:""}}},mounted:function(){const t=this.$store.getters.getUserProfile;let e;t.company&&(e=t.company);let o={name:"",orgId:"",taxId:"",taxVatId:""};if(e&&e.name&&(o=e),this.activeCompanyData)for(var n in this.activeCompanyData)Object.prototype.hasOwnProperty.call(this.activeCompanyData,n)&&n.trim()!==""&&(this.activeCompanyData[n]=o[n]);return this.$forceUpdate(),this.eventBus.emit("translateContent",this.$store.getters.getTranslates),o},methods:{saveUserCompany:function(){const t=this;this.$helpers.verifyAddress(this.activeCompanyData)&&t.$httpc.put("user",{user:{company:this.activeCompanyData}}).then(e=>{var o;(o=e==null?void 0:e.data)!=null&&o.user&&t.$store.dispatch("updateUser",e.data.user)})}}},Hs={key:0,id:"meCompany",class:""},Ws={class:"columns"},js={class:"column is-8 is-centered"},Ys=s("h2",{class:"title is-2 has-text-centered",translate:"yes"},"Company",-1),Zs={class:"companyDataWrapper"},Ks={class:"columns is-variable is-2 is-centered"},Js={class:"column is-12"},Qs={class:"field companyName"},Xs=s("label",{class:"label",translate:"yes"},"Company Name",-1),se={class:"control"},ee={class:"columns is-variable is-2 is-centered"},te={class:"column is-6"},ae={class:"field companyOrgId"},ie=s("label",{class:"label",translate:"yes"},"Organisation ID",-1),oe={class:"control"},ne={class:"columns is-variable is-2 is-centered"},le={class:"column is-6"},re={class:"field companyTaxId"},de=s("label",{class:"label"},"Company Tax ID",-1),ce={class:"control"},ue={class:"column is-6"},me={class:"field companyTaxVatId"},he=s("label",{class:"label"},"Company VAT ID",-1),ve={class:"control"},_e={class:"columns is-variable is-2 is-centered"},pe={class:"column has-text-centered"},fe={class:"button is-success"},ye=s("span",{translate:"yes"},"Set Company Data",-1);function ge(t,e,o,n,i,l){const c=D("font-awesome-icon");return t.$store.state.user.profile?(u(),m("div",Hs,[s("div",Ws,[s("div",js,[Ys,s("form",{onSubmit:e[4]||(e[4]=f((...a)=>l.saveUserCompany&&l.saveUserCompany(...a),["prevent"]))},[s("div",Zs,[s("div",Ks,[s("div",Js,[s("div",Qs,[Xs,s("div",se,[r(s("input",{class:"input",type:"text","onUpdate:modelValue":e[0]||(e[0]=a=>i.activeCompanyData.name=a),placeholder:"Company Name"},null,512),[[d,i.activeCompanyData.name]])])])])]),s("div",ee,[s("div",te,[s("div",ae,[ie,s("div",oe,[r(s("input",{class:"input",type:"text","onUpdate:modelValue":e[1]||(e[1]=a=>i.activeCompanyData.orgId=a),placeholder:"Organisation ID"},null,512),[[d,i.activeCompanyData.orgId]])])])])]),s("div",ne,[s("div",le,[s("div",re,[de,s("div",ce,[r(s("input",{class:"input",type:"text","onUpdate:modelValue":e[2]||(e[2]=a=>i.activeCompanyData.taxId=a),placeholder:"Company Tax ID"},null,512),[[d,i.activeCompanyData.taxId]])])])]),s("div",ue,[s("div",me,[he,s("div",ve,[r(s("input",{class:"input",type:"text","onUpdate:modelValue":e[3]||(e[3]=a=>i.activeCompanyData.taxVatId=a),placeholder:"Company VAT ID"},null,512),[[d,i.activeCompanyData.taxVatId]])])])])]),s("div",_e,[s("div",pe,[s("button",fe,[_(c,{icon:"check"}),h("   "),ye])])])])],32)])])])):v("",!0)}const x=g(Gs,[["render",ge],["__file","/Users/marthol/Documents/GitHub/stretchshop-front-vue/src/components/users/MeCompany.vue"]]),$e={name:"UserMeInvoice",data(){return{activeInvoiceAddress:{type:"invoice",nameFirst:"",nameLast:"",street:"",street2:"",zip:"",city:"",country:"",phone:""}}},mounted:function(){const t=this.$store.getters.getUserProfile;let e;t.addressInvoice&&(e=t.addressInvoice);let o={type:"invoice",nameFirst:"",nameLast:"",street:"",street2:"",zip:"",city:"",country:"",phone:""};if(e&&e.nameFirst&&(o=e),this.activeInvoiceAddress)for(var n in this.activeInvoiceAddress)Object.prototype.hasOwnProperty.call(this.activeInvoiceAddress,n)&&n.trim()!==""&&(this.activeInvoiceAddress[n]=o[n]);return this.$forceUpdate(),this.eventBus.emit("translateContent",this.$store.getters.getTranslates),o},methods:{saveUserAddresses:function(){const t=this,e=[];this.$helpers.verifyAddress(this.activeInvoiceAddress)&&(e.push(this.activeInvoiceAddress),e.concat(this.$store.state.user.profile.addressesDelivery),this.$httpc.put("user",{user:{addresses:e}}).then(o=>{var n;(n=o==null?void 0:o.data)!=null&&n.user&&t.$store.dispatch("updateUser",o.data.user)}))}}},be={key:0,id:"meInvoice",class:""},De={class:"columns"},Ae={class:"column is-8 is-centered"},Ue=s("h2",{class:"title is-2 has-text-centered",translate:"yes"},"Invoice Address",-1),Ie={class:"deliveryAddressWrapper"},we={class:"columns is-variable is-2"},Ce={class:"column is-6"},xe={class:"field nameFirst"},ke=s("label",{class:"label",translate:"yes"},"First Name",-1),Pe={class:"control"},Be=s("div",{class:"form-messages is-hidden"},[s("div",{class:"form-message","data-message":"is empty",translate:"yes"},"This value cannot be empty")],-1),Fe={class:"column is-6"},Se={class:"field nameLast"},Ve=s("label",{class:"label",translate:"yes"},"Last Name",-1),Te={class:"control"},Me=s("div",{class:"form-messages is-hidden"},[s("div",{class:"form-message","data-message":"is empty",translate:"yes"},"This value cannot be empty")],-1),Ee={class:"columns is-variable is-2"},Le={class:"column is-12"},Ne={class:"field street"},ze=s("label",{class:"label",translate:"yes"},"Street",-1),Oe={class:"control"},Re=s("div",{class:"form-messages is-hidden"},[s("div",{class:"form-message","data-message":"is empty",translate:"yes"},"This value cannot be empty")],-1),qe={class:"columns is-variable is-2"},Ge={class:"column is-12"},He={class:"field street2"},We=s("label",{class:"label",translate:"yes"},"Street 2",-1),je={class:"control"},Ye=s("div",{class:"form-messages is-hidden"},[s("div",{class:"form-message","data-message":"is empty",translate:"yes"},"This value cannot be empty")],-1),Ze={class:"columns is-variable is-2"},Ke={class:"column is-4"},Je={class:"field zip"},Qe=s("label",{class:"label",translate:"yes"},"ZIP",-1),Xe={class:"control"},st=s("div",{class:"form-messages is-hidden"},[s("div",{class:"form-message","data-message":"is empty",translate:"yes"},"This value cannot be empty")],-1),et={class:"column is-8"},tt={class:"field city"},at=s("label",{class:"label",translate:"yes"},"City",-1),it={class:"control"},ot=s("div",{class:"form-messages is-hidden"},[s("div",{class:"form-message","data-message":"is empty",translate:"yes"},"This value cannot be empty")],-1),nt={class:"columns is-variable is-2"},lt={class:"column is-6"},rt={class:"field state"},dt=s("label",{class:"label",translate:"yes"},"State",-1),ct={class:"control"},ut=s("div",{class:"form-messages is-hidden"},[s("div",{class:"form-message","data-message":"is empty",translate:"yes"},"This value cannot be empty")],-1),mt={class:"column is-6"},ht={class:"field country"},vt=s("label",{class:"label",translate:"yes"},"Country",-1),_t={class:"control select"},pt=["value"],ft=s("div",{class:"form-messages is-hidden"},[s("div",{class:"form-message","data-message":"is empty",translate:"yes"},"This value cannot be empty")],-1),yt={class:"columns is-variable is-2 is-centered"},gt={class:"column is-6"},$t={class:"field phone"},bt=s("label",{class:"label",translate:"yes"},"Phone",-1),Dt={class:"control"},At=s("div",{class:"form-messages is-hidden"},[s("div",{class:"form-message","data-message":"is empty",translate:"yes"},"This value cannot be empty")],-1),Ut={class:"columns is-variable is-2 is-centered"},It={class:"column has-text-centered"},wt={class:"button is-success"},Ct=s("span",{translate:"yes"},"Set Invoice Address",-1);function xt(t,e,o,n,i,l){const c=D("font-awesome-icon");return t.$store.state.user.profile?(u(),m("div",be,[s("div",De,[s("div",Ae,[Ue,s("form",{onSubmit:e[9]||(e[9]=f((...a)=>l.saveUserAddresses&&l.saveUserAddresses(...a),["prevent"]))},[s("div",Ie,[s("div",we,[s("div",Ce,[s("div",xe,[ke,s("div",Pe,[r(s("input",{class:"input",type:"text","onUpdate:modelValue":e[0]||(e[0]=a=>i.activeInvoiceAddress.nameFirst=a),translate:"yes",placeholder:"First Name"},null,512),[[d,i.activeInvoiceAddress.nameFirst]])]),Be])]),s("div",Fe,[s("div",Se,[Ve,s("div",Te,[r(s("input",{class:"input",type:"text","onUpdate:modelValue":e[1]||(e[1]=a=>i.activeInvoiceAddress.nameLast=a),translate:"yes",placeholder:"Last Name"},null,512),[[d,i.activeInvoiceAddress.nameLast]])]),Me])])]),s("div",Ee,[s("div",Le,[s("div",Ne,[ze,s("div",Oe,[r(s("input",{class:"input",type:"text","onUpdate:modelValue":e[2]||(e[2]=a=>i.activeInvoiceAddress.street=a),translate:"yes",placeholder:"Street"},null,512),[[d,i.activeInvoiceAddress.street]])]),Re])])]),s("div",qe,[s("div",Ge,[s("div",He,[We,s("div",je,[r(s("input",{class:"input",type:"text","onUpdate:modelValue":e[3]||(e[3]=a=>i.activeInvoiceAddress.street2=a),translate:"yes",placeholder:"Street 2"},null,512),[[d,i.activeInvoiceAddress.street2]])]),Ye])])]),s("div",Ze,[s("div",Ke,[s("div",Je,[Qe,s("div",Xe,[r(s("input",{class:"input",type:"text","onUpdate:modelValue":e[4]||(e[4]=a=>i.activeInvoiceAddress.zip=a),translate:"yes",placeholder:"ZIP"},null,512),[[d,i.activeInvoiceAddress.zip]])]),st])]),s("div",et,[s("div",tt,[at,s("div",it,[r(s("input",{class:"input",type:"text","onUpdate:modelValue":e[5]||(e[5]=a=>i.activeInvoiceAddress.city=a),translate:"yes",placeholder:"City"},null,512),[[d,i.activeInvoiceAddress.city]])]),ot])])]),s("div",nt,[s("div",lt,[s("div",rt,[dt,s("div",ct,[r(s("input",{class:"input",type:"text","onUpdate:modelValue":e[6]||(e[6]=a=>i.activeInvoiceAddress.state=a),translate:"yes",placeholder:"State"},null,512),[[d,i.activeInvoiceAddress.state]])]),ut])]),s("div",mt,[s("div",ht,[vt,s("div",_t,[t.$store.state.coredata&&t.$store.state.coredata.countries?r((u(),m("select",{key:0,"onUpdate:modelValue":e[7]||(e[7]=a=>i.activeInvoiceAddress.country=a)},[(u(!0),m(I,null,w(t.$store.state.coredata.countries,a=>(u(),m("option",{value:a.code,key:a.code},b(a.name),9,pt))),128))],512)),[[F,i.activeInvoiceAddress.country]]):v("",!0)]),ft])])]),s("div",yt,[s("div",gt,[s("div",$t,[bt,s("div",Dt,[r(s("input",{class:"input",type:"text","onUpdate:modelValue":e[8]||(e[8]=a=>i.activeInvoiceAddress.phone=a),translate:"yes",placeholder:"Phone"},null,512),[[d,i.activeInvoiceAddress.phone]])]),At])])]),s("div",Ut,[s("div",It,[s("button",wt,[_(c,{icon:"check"}),h("   "),Ct])])])])],32)])])])):v("",!0)}const k=g($e,[["render",xt],["__file","/Users/marthol/Documents/GitHub/stretchshop-front-vue/src/components/users/MeInvoice.vue"]]),kt={name:"UserMeDelivery",data(){return{activeDeliveryAddressIndex:0,activeDeliveryAddress:{type:"delivery",nameFirst:"",nameLast:"",street:"",street2:"",zip:"",city:"",country:"",phone:""},deliveryFilter:""}},computed:{userDeliveryAddress:function(){const t=this.$store.getters.getUserProfile.addressesDelivery;let e=[];if(t&&t.length>0&&(e=t,this.deliveryFilter.toString().trim()!=="")){const o=this.deliveryFilter.toString().trim().toLowerCase(),n=[];t.forEach((i,l)=>{let c=!1;for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&i[a].toString().trim().toLowerCase().indexOf(o)>-1&&(c=!0);c&&n.push(i)}),n.length>0&&(e=n)}return e}},mounted:function(){this.getDeliveryAddress(0),this.eventBus.emit("translateContent",this.$store.getters.getTranslates)},methods:{getDeliveryAddress:function(t,e){let o=typeof t<"u"&&t>-1?t:null;if(o===null&&(o=0),this.activeDeliveryAddressIndex=o,this.activeDeliveryAddress=this.userDeliveryAddress[o],typeof this.activeDeliveryAddress>"u"||!this.activeDeliveryAddress){const n=this.$store.state.user.profile.addressesDelivery[o];typeof n<"u"&&(this.activeDeliveryAddress=n)}e?this.markActiveDeliveryAddress(e.target.parentNode):this.markActiveDeliveryAddress()},addNewDeliveryAddress:function(){const t=this;this.$store.dispatch("addNewDeliveryAddress",{type:"delivery",nameFirst:"",nameLast:"",street:"",street2:"",zip:"",city:"",country:"",phone:""}).then(()=>{t.getDeliveryAddress(),t.$forceUpdate()}),this.$forceUpdate()},removeDeliveryAddress:function(t){const e=this;this.$store.dispatch("removeDeliveryAddress",t).then(()=>{e.activeDeliveryAddressIndex=0,e.$forceUpdate(),e.saveUserAddresses()})},saveUserAddresses:function(){const t=this;if(this.$helpers.verifyAddress(this.activeDeliveryAddress)){const e=[],o=this.$store.getters.getUserProfile;if(e.push(o.addressInvoice),o.addressesDelivery.length>0)for(let n=0;n<o.addressesDelivery.length;n++)e.push(o.addressesDelivery[n]);this.$httpc.put("user",{user:{addresses:e}}).then(n=>{var i;(i=n==null?void 0:n.data)!=null&&i.user&&t.$store.dispatch("updateUser",n.data.user)})}},markActiveDeliveryAddress:function(t){const e=typeof t<"u"&&t?t:null;this.activeDeliveryAddressIndex=0,this.$store.state.user.profile&&this.$store.state.user.profile.addressesDelivery.length>1&&(this.activeDeliveryAddressIndex=this.$store.state.user.profile.addressesDelivery.length-1);const o=this.$el.querySelectorAll(".users-me #meDelivery nav.user-settings-delivery-nav .panel-block.special--right-action");o&&o.length&&o.forEach(n=>{n.classList.remove("is-active")}),e?e.classList.add("is-active"):o&&o.length>0&&o[0].classList.add("is-active")}}},Pt={key:0,id:"meDelivery",class:""},Bt=s("div",{class:"columns is-variable"},[s("div",{class:"column is-8"},[s("h2",{class:"title is-2 has-text-centered",translate:"yes"},"Delivery Addresses")])],-1),Ft={class:"columns"},St={key:0,class:"column is-8"},Vt={class:"deliveryAddressWrapper"},Tt={class:"columns is-variable is-2"},Mt={class:"column is-6"},Et={class:"field nameFirst"},Lt=s("label",{class:"label",translate:"yes"},"First Name",-1),Nt={class:"control"},zt=s("div",{class:"form-messages is-hidden"},[s("div",{class:"form-message","data-message":"is empty",translate:"yes"},"This value cannot be empty")],-1),Ot={class:"column is-6"},Rt={class:"field nameLast"},qt=s("label",{class:"label",translate:"yes"},"Last Name",-1),Gt={class:"control"},Ht=s("div",{class:"form-messages is-hidden"},[s("div",{class:"form-message","data-message":"is empty",translate:"yes"},"This value cannot be empty")],-1),Wt={class:"columns is-variable is-2"},jt={class:"column is-12"},Yt={class:"field street"},Zt=s("label",{class:"label",translate:"yes"},"Street",-1),Kt={class:"control"},Jt=s("div",{class:"form-messages is-hidden"},[s("div",{class:"form-message","data-message":"is empty",translate:"yes"},"This value cannot be empty")],-1),Qt={class:"columns is-variable is-2"},Xt={class:"column is-12"},sa={class:"field street2"},ea=s("label",{class:"label",translate:"yes"},"Street 2",-1),ta={class:"control"},aa=s("div",{class:"form-messages is-hidden"},[s("div",{class:"form-message","data-message":"is empty",translate:"yes"},"This value cannot be empty")],-1),ia={class:"columns is-variable is-2"},oa={class:"column is-4"},na={class:"field zip"},la=s("label",{class:"label",translate:"yes"},"ZIP",-1),ra={class:"control"},da=s("div",{class:"form-messages is-hidden"},[s("div",{class:"form-message","data-message":"is empty",translate:"yes"},"This value cannot be empty")],-1),ca={class:"column is-8"},ua={class:"field city"},ma=s("label",{class:"label",translate:"yes"},"City",-1),ha={class:"control"},va=s("div",{class:"form-messages is-hidden"},[s("div",{class:"form-message","data-message":"is empty",translate:"yes"},"This value cannot be empty")],-1),_a={class:"columns is-variable is-2"},pa={class:"column is-6"},fa={class:"field state"},ya=s("label",{class:"label",translate:"yes"},"State",-1),ga={class:"control"},$a=s("div",{class:"form-messages is-hidden"},[s("div",{class:"form-message","data-message":"is empty",translate:"yes"},"This value cannot be empty")],-1),ba={class:"column is-6"},Da={class:"field country"},Aa=s("label",{class:"label",translate:"yes"},"Country",-1),Ua={class:"control select"},Ia=["value"],wa=s("div",{class:"form-messages is-hidden"},[s("div",{class:"form-message","data-message":"is empty",translate:"yes"},"This value cannot be empty")],-1),Ca={class:"columns is-variable is-2 is-centered"},xa={class:"column is-6"},ka={class:"field phone"},Pa=s("label",{class:"label",translate:"yes"},"Phone",-1),Ba={class:"control"},Fa=s("div",{class:"form-messages is-hidden"},[s("div",{class:"form-message","data-message":"is empty",translate:"yes"},"This value cannot be empty")],-1),Sa={class:"columns is-variable is-2 is-centered"},Va={class:"column is-6 has-text-centered"},Ta={type:"submit",class:"button is-success"},Ma=s("span",{translate:"yes"},"Address",-1),Ea={class:"column is-4"},La={class:"panel user-settings-delivery-nav"},Na=s("p",{class:"panel-heading",translate:"yes"}," Addresses ",-1),za={class:"panel-block"},Oa={class:"control has-icons-left"},Ra=s("span",{class:"icon is-small is-left"},[s("i",{class:"fas fa-search","aria-hidden":"true"})],-1),qa={class:"panel-block special--right-action"},Ga=["onClick"],Ha=["onClick"],Wa={class:"panel-block"},ja=s("span",{translate:"yes"},"Add New Delivery Address",-1);function Ya(t,e,o,n,i,l){const c=D("font-awesome-icon");return t.$store.state.user.profile?(u(),m("div",Pt,[Bt,s("div",Ft,[i.activeDeliveryAddress?(u(),m("div",St,[s("form",{onSubmit:e[9]||(e[9]=f((...a)=>l.saveUserAddresses&&l.saveUserAddresses(...a),["prevent"]))},[s("div",Vt,[s("div",Tt,[s("div",Mt,[s("div",Et,[Lt,s("div",Nt,[r(s("input",{class:"input",type:"text","onUpdate:modelValue":e[0]||(e[0]=a=>i.activeDeliveryAddress.nameFirst=a),translate:"yes",placeholder:"First Name"},null,512),[[d,i.activeDeliveryAddress.nameFirst]])]),zt])]),s("div",Ot,[s("div",Rt,[qt,s("div",Gt,[r(s("input",{class:"input",type:"text","onUpdate:modelValue":e[1]||(e[1]=a=>i.activeDeliveryAddress.nameLast=a),translate:"yes",placeholder:"Last Name"},null,512),[[d,i.activeDeliveryAddress.nameLast]])]),Ht])])]),s("div",Wt,[s("div",jt,[s("div",Yt,[Zt,s("div",Kt,[r(s("input",{class:"input",type:"text","onUpdate:modelValue":e[2]||(e[2]=a=>i.activeDeliveryAddress.street=a),translate:"yes",placeholder:"Street"},null,512),[[d,i.activeDeliveryAddress.street]])]),Jt])])]),s("div",Qt,[s("div",Xt,[s("div",sa,[ea,s("div",ta,[r(s("input",{class:"input",type:"text","onUpdate:modelValue":e[3]||(e[3]=a=>i.activeDeliveryAddress.street2=a),translate:"yes",placeholder:"Street 2"},null,512),[[d,i.activeDeliveryAddress.street2]])]),aa])])]),s("div",ia,[s("div",oa,[s("div",na,[la,s("div",ra,[r(s("input",{class:"input",type:"text","onUpdate:modelValue":e[4]||(e[4]=a=>i.activeDeliveryAddress.zip=a),translate:"yes",placeholder:"ZIP"},null,512),[[d,i.activeDeliveryAddress.zip]])]),da])]),s("div",ca,[s("div",ua,[ma,s("div",ha,[r(s("input",{class:"input",type:"text","onUpdate:modelValue":e[5]||(e[5]=a=>i.activeDeliveryAddress.city=a),translate:"yes",placeholder:"City"},null,512),[[d,i.activeDeliveryAddress.city]])]),va])])]),s("div",_a,[s("div",pa,[s("div",fa,[ya,s("div",ga,[r(s("input",{class:"input",type:"text","onUpdate:modelValue":e[6]||(e[6]=a=>i.activeDeliveryAddress.state=a),translate:"yes",placeholder:"State"},null,512),[[d,i.activeDeliveryAddress.state]])]),$a])]),s("div",ba,[s("div",Da,[Aa,s("div",Ua,[t.$store.state.coredata&&t.$store.state.coredata.countries?r((u(),m("select",{key:0,"onUpdate:modelValue":e[7]||(e[7]=a=>i.activeDeliveryAddress.country=a)},[(u(!0),m(I,null,w(t.$store.state.coredata.countries,a=>(u(),m("option",{value:a.code,key:a.code},b(a.name),9,Ia))),128))],512)),[[F,i.activeDeliveryAddress.country]]):v("",!0)]),wa])])]),s("div",Ca,[s("div",xa,[s("div",ka,[Pa,s("div",Ba,[r(s("input",{class:"input",type:"text","onUpdate:modelValue":e[8]||(e[8]=a=>i.activeDeliveryAddress.phone=a),translate:"yes",placeholder:"Phone"},null,512),[[d,i.activeDeliveryAddress.phone]])]),Fa])])]),s("div",Sa,[s("div",Va,[s("button",Ta,[_(c,{icon:"check"}),h("   "),Ma])])])])],32)])):v("",!0),s("div",Ea,[s("nav",La,[Na,s("div",null,[s("div",za,[s("p",Oa,[r(s("input",{class:"input is-small",type:"text","onUpdate:modelValue":e[10]||(e[10]=a=>i.deliveryFilter=a),placeholder:"search"},null,512),[[d,i.deliveryFilter]]),Ra])]),(u(!0),m(I,null,w(l.userDeliveryAddress,(a,p)=>(u(),m("div",{key:p},[s("div",qa,[s("a",{class:"user-delivery--get",onClick:$=>l.getDeliveryAddress(p,$)},b(a.street)+", "+b(a.zip),9,Ga),s("a",{class:"user-delivery--delete",onClick:$=>l.removeDeliveryAddress(p)},[_(c,{icon:"trash"})],8,Ha)])]))),128))]),s("div",Wa,[s("button",{class:"button is-primary is-outlined is-fullwidth",onClick:e[11]||(e[11]=(...a)=>l.addNewDeliveryAddress&&l.addNewDeliveryAddress(...a))},[_(c,{icon:"plus"}),h("   "),ja])])])])])])):v("",!0)}const P=g(kt,[["render",Ya],["__file","/Users/marthol/Documents/GitHub/stretchshop-front-vue/src/components/users/MeDelivery.vue"]]),Za={name:"UserMeAdmin",data(){return{loginAsUser:null}},computed:{},mounted:function(){this.eventBus.emit("translateContent",this.$store.getters.getTranslates)},methods:{loginAs:function(){const t=this;this.$httpc.post("users/login",{user:{email:this.loginAsUser,password:"admin"},admin:!0}).then(function(e){if(e.data&&e.data.user&&e.data.user.superadmined){const o=e.data.user;t.$store.dispatch("setUser",o),t.$store.state.user.superadmined=!0,t.$router.push({name:"me"})}}).catch(function(e){console.error(e)}).then(function(){})}}},A=t=>(E("data-v-6079c22c"),t=t(),L(),t),Ka={key:0,id:"meAdmin",class:""},Ja=A(()=>s("div",{class:"columns is-variable is-2"},[s("div",{class:"column is-8 has-text-centered"},[s("h2",{class:"title is-2 has-text-centered"},"Administration")])],-1)),Qa={class:"user-info-edit-form-wrapper"},Xa={class:"columns"},si={class:"column is-8 is-centered"},ei={class:"columns is-variable is-2 is-centered"},ti={class:"column is-12 has-text-centered",id:"profile-admin-loginas"},ai={class:"field loginas"},ii=A(()=>s("label",{class:"label"},[s("span",{translate:"yes"},"Login as (write email of user that is not admin)"),h(":")],-1)),oi={class:"control"},ni=A(()=>s("div",{class:"form-messages is-hidden"},[s("div",{class:"form-message","data-message":"not exists",translate:"yes"},"Username does not exists")],-1)),li=A(()=>s("button",{class:"button is-success"},[s("span",{translate:"yes"},"Login as")],-1));function ri(t,e,o,n,i,l){return t.$store.state.user.profile&&t.$store.state.user.profile.type=="admin"?(u(),m("div",Ka,[Ja,s("div",Qa,[s("div",Xa,[s("div",si,[s("div",ei,[s("div",ti,[s("form",{onSubmit:e[1]||(e[1]=f((...c)=>l.loginAs&&l.loginAs(...c),["prevent"]))},[s("div",ai,[ii,s("div",oi,[r(s("input",{class:"input",type:"text","onUpdate:modelValue":e[0]||(e[0]=c=>i.loginAsUser=c),placeholder:"User email"},null,512),[[d,i.loginAsUser]])]),ni]),li],32)])])])])])])):v("",!0)}const B=g(Za,[["render",ri],["__scopeId","data-v-6079c22c"],["__file","/Users/marthol/Documents/GitHub/stretchshop-front-vue/src/components/users/MeAdmin.vue"]]),di={name:"UsersMe",components:{UserMeInfo:C,UserMeCompany:x,UserMeInvoince:k,UserMeDelivery:P,UserMeAdmin:B},data(){return{activeComponent:C,menuStates:{UserMeInfo:!0,UserMeCompany:!1,UserMeInvoince:!1,UserMeDelivery:!1,UserMeAdmin:!1},availablePaths:{company:x,address:k,delivery:P,admin:B}}},computed:{isLogged:function(){return typeof this.$store<"u"&&typeof this.$store.state.user.logged<"u"?this.$store.state.user.logged:!1}},created:function(){let t=this.$route.path.split("/");t=t.filter(function(e){return e!==""}),t.length>2&&typeof this.availablePaths[t[2]]<"u"&&(this.activeComponent=this.availablePaths[t[2]])},methods:{userComponent:function(t,e){this.$options.components&&this.$options.components[t]&&(this.activeComponent=this.$options.components[t]);const o=this.$el.querySelectorAll(".users-me nav.user-settings-nav a.panel-block");o&&o.length&&o.forEach(n=>{n.classList.remove("is-active")}),e.target.classList.add("is-active")}}},ci={class:"container users-me"},ui={key:0},mi={class:"columns is-variable has-text-left"},hi={class:"column is-3 pr-6"},vi={class:"mt-6 user-settings-nav"},_i={class:"menu"},pi=s("p",{class:"menu-label",translate:"yes"}," Your Settings ",-1),fi={class:"menu-list"},yi={class:"column is-9"},gi=s("h1",{class:"title is-1 has-text-weight-normal",translate:"yes"},"Profile",-1),$i={key:1},bi={class:"columns"},Di={class:"column"},Ai=s("h1",{class:"title is-1",translate:"yes"},"Unauthorized",-1),Ui=s("span",{translate:"yes"},"It may help if you",-1);function Ii(t,e,o,n,i,l){const c=D("router-link");return u(),m("div",ci,[l.isLogged?(u(),m("div",ui,[s("div",mi,[s("div",hi,[s("nav",vi,[s("aside",_i,[pi,s("ul",fi,[s("li",null,[_(c,{to:{name:"me"},tag:"a","active-class":"is-active",translate:"yes",exact:""},{default:y(()=>[h("Profile")]),_:1})]),s("li",null,[_(c,{to:{name:"meCompany"},tag:"a","active-class":"is-active",translate:"yes"},{default:y(()=>[h("Company Data")]),_:1})]),s("li",null,[_(c,{to:{name:"meAddress"},tag:"a","active-class":"is-active",translate:"yes"},{default:y(()=>[h("Invoice Address")]),_:1})]),s("li",null,[_(c,{to:{name:"meDelivery"},tag:"a","active-class":"is-active",translate:"yes"},{default:y(()=>[h("Delivery addresses")]),_:1})]),s("li",null,[t.$store.state.user.profile&&t.$store.state.user.profile.type=="admin"?(u(),U(c,{key:0,to:{name:"meAdmin"},tag:"a","active-class":"is-active",translate:"yes"},{default:y(()=>[h("Administration")]),_:1})):v("",!0)])])])])]),s("div",yi,[gi,(u(),U(N(i.activeComponent)))])])])):(u(),m("div",$i,[s("div",bi,[s("div",Di,[Ai,s("p",null,[Ui,h(" "),_(c,{to:{name:"login"},tag:"a",translate:"yes"},{default:y(()=>[h("log in")]),_:1})])])])]))])}const ki=g(di,[["render",Ii],["__file","/Users/marthol/Documents/GitHub/stretchshop-front-vue/src/components/users/Me.vue"]]);export{ki as default};
