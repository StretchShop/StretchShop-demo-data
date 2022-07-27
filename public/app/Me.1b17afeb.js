import{_ as y,o as u,c as m,a as s,t as g,n as F,w as p,b as d,v as c,j as v,g as h,l as S,r as $,e as _,h as T,F as A,i as U,p as V,k as E,f,m as C,q as M}from"./index.9af5a96e.js";const L={name:"UserMeInfo",data(){return{userProfileImageFile:[]}},computed:{userBasicData:function(){const t=this.$store.getters.getUserProfile,e={username:"",email:"",email2:"",password:"",password2:""};return t&&t.username&&(e.username=t.username,e.email=t.email,t.dates&&(e.dates=t.dates)),e},userProfileImage:function(){return this.$store.getters.getProfileImage()}},mounted:function(){this.eventBus.emit("translateContent",this.$store.getters.getTranslates)},methods:{deleteDropFile(t){this.userProfileImageFile.splice(t,1)},uploadUserProfileImage:function(t){const e=this;this.userProfileImageFile=t.target.files;const o=new FormData;if(this.userProfileImageFile.length&&this.userProfileImageFile.length>0)for(var r=0;r<this.userProfileImageFile.length;r++){const a=this.userProfileImageFile[r];o.append("files["+r+"]",a)}else o.append("files[0]",this.userProfileImageFile);this.$httpc.post("user/image",o,{needsAuth:!0}).then(function(a){if(a&&a.data){if(a.data.substr(0,1)==="'"&&a.data[a.data.length-1]==="'"){const n=a.data.length-2;a.data=a.data.substr(1,n),a.data=JSON.parse(a.data)}a.data.files&&a.data.files.length>0&&a.data.files[0].path&&(e.$store.dispatch("setUserProfileImage",a.data.files[0].path),e.$forceUpdate())}}).catch(function(a){console.log(a)}).then(function(){})},changeUsername:function(){const t=[];let e=!0;const o=this;this.$httpc.post("users/checkusername",{username:this.userBasicData.username}).then(function(r){r.data&&r.data===!0?(e=!1,t.push({target:"username",action:"already exists"})):(e=!0,e&&o.$store.dispatch("updateUser",{username:o.userBasicData.username})),console.log(t)}).catch(function(r){o.sendChangeRequest=!1,o.status="error",r.response.data&&r.response.data.errors&&o.$helpers.showFormFieldErrorsFromErrorResponse(r.response.data.errors)}).then(function(){})},changeEmail:function(){let t=!0;const e=this;(!this.userBasicData.email||!this.userBasicData.email2||this.userBasicData.email!==this.userBasicData.email2)&&(e.$helpers.formUndecorateAndDecorateFields(["email2"],[{name:"email2",action:"not confirmed"}]),t=!1),t&&this.$httpc.post("users/checkemail",{email:this.userBasicData.email}).then(function(o){t=!0,t&&e.$store.dispatch("updateUser",{email:e.userBasicData.email})}).catch(function(o){e.sendChangeRequest=!1,e.status="error",o.response.data&&o.response.data.errors&&e.$helpers.showFormFieldErrorsFromErrorResponse(o.response.data.errors)}).then(function(){})},changePassword:function(){let t=!0;const e=this;console.log(this.userBasicData.password+" !== "+this.userBasicData.password2,this.userBasicData.password!==this.userBasicData.password2),(!this.userBasicData.password||!this.userBasicData.password2||this.userBasicData.password!==this.userBasicData.password2)&&(e.$helpers.formUndecorateAndDecorateFields(["password2"],[{name:"password2",action:"not confirmed"}]),t=!1),t&&this.$httpc.put("user",{user:{password:this.userBasicData.password}},{needsAuth:!0}).then(function(o){t=!0,t&&e.$store.dispatch("updateUser",{email:e.userBasicData.email})}).catch(function(o){e.sendChangeRequest=!1,e.status="error",console.log(o),o.response.data&&o.response.data.errors&&e.$helpers.formUndecorateAndDecorateFields(["password2"],[{name:"password2",action:"unknown error"}])}).then(function(){})},deleteUser:function(){const t=this;confirm(this.$refs.deleteUserWarning.innerText)&&this.$helpers.recaptcha(this,"login").then(e=>this.$httpc.post("helpers/recaptcha",{token:e},{timeout:3e3}).then(o=>o)).catch(function(e){if(e&&console.error("error:",e),console.log("RECAPTCHA NOT WORKING! Make sure you have RECAPTCHA variables set in backend enviroment."),confirm(`RECAPTCHA NOT WORKING
Are you sure you want to Login?

See console for more information`))return{data:!0}}).then(e=>{e&&e.data===!0&&this.$httpc.delete("user/profile",{needsAuth:!0}).then(o=>{o.data&&t.$store.dispatch("setUser",o.data)}).catch(function(o){return console.log(o),null}).then(function(){return null})})},cancelUserDelete:function(){const t=this;this.$httpc.post("user/cancelDelete",null,{needsAuth:!0}).then(e=>{e.data&&t.$store.dispatch("setUser",e.data)}).catch(function(e){return console.log(e),null}).then(function(){return null})}}},N={key:0,id:"meInfo",class:""},O={class:"columns is-variable is-2"},z={class:"column is-8 has-text-centered"},R={class:"title is-2 has-text-centered"},q={class:"columns is-variable is-2"},W={class:"column is-4 has-text-centered",id:"profile-profile-image"},j={class:"user--avatar-wrapper is-centered"},Y={class:"column is-4 has-text-centered image-button-padding"},Z={class:"file is-primary action edit"},H={class:"file-label"},G=s("span",{class:"file-cta"},[s("span",{class:"file-icon"},[s("i",{class:"fa fa-plus"})]),s("span",{class:"file-label",id:"profile-profile-image-upload",translate:"yes"}," Click to upload Profile Image ")],-1),K={class:"user-info-edit-form-wrapper"},J={class:"columns"},Q={class:"column is-8 is-centered"},X={class:"columns is-variable is-2 is-centered"},ss={class:"column is-12 has-text-centered",id:"profile-profile-username"},es={class:"field username"},ts=s("label",{class:"label",translate:"yes"},"Username",-1),as={class:"control"},is=s("div",{class:"form-messages is-hidden"},[s("div",{class:"form-message","data-message":"exists",translate:"yes"},"Username already exists")],-1),os=s("button",{class:"button is-success"},[s("span",{translate:"yes"},"Change Username")],-1),ns=s("div",{class:"columns"},[s("div",{class:"column is-12"},[s("hr")])],-1),ls={class:"columns is-variable is-2 is-centered"},rs={class:"column is-6",id:"profile-profile-email"},ds={class:"field email"},cs=s("label",{class:"label"},"Email",-1),us={class:"control"},ms=s("div",{class:"form-messages is-hidden"},[s("div",{class:"form-message","data-message":"exists",translate:"yes"},"Email already exists")],-1),hs={class:"column is-6",id:"profile-profile-email2"},vs={class:"field email2"},_s=s("label",{class:"label",translate:"yes"},"Email Confirm",-1),ps={class:"control"},fs=s("div",{class:"form-messages is-hidden"},[s("div",{class:"form-message","data-message":"not confirmed",translate:"yes"},"Values do not match")],-1),ys=s("div",{class:"columns is-variable is-2 is-centered"},[s("div",{class:"column is-12 has-text-centered"},[s("button",{class:"button is-success"},[s("span",{translate:"yes"},"Change your Email")])])],-1),gs=s("div",{class:"columns"},[s("div",{class:"column is-12"},[s("hr")])],-1),$s={class:"columns is-variable is-2 is-centered"},bs={class:"column is-6"},Ds={class:"field password"},As=s("label",{class:"label",translate:"yes"},"Password",-1),Us={class:"control"},Is={class:"column is-6"},Cs={class:"field password2"},ws=s("label",{class:"label",translate:"yes"},"Password Confirm",-1),xs={class:"control"},Ps=s("div",{class:"form-messages is-hidden"},[s("div",{class:"form-message","data-message":"not confirmed",translate:"yes"},"Values do not match"),s("div",{class:"form-message","data-message":"unknown error",translate:"yes"},"An error occured when changing password")],-1),ks=s("div",{class:"columns is-variable is-2 is-centered"},[s("div",{class:"column is-12 has-text-centered"},[s("button",{class:"button is-success"},[s("span",{translate:"yes"},"Change your Password")])])],-1),Bs=s("div",{class:"columns"},[s("div",{class:"column is-12"},[s("hr")])],-1),Ts={class:"columns product-delete"},Fs={class:"column is-12 has-text-centered"},Ss={key:0},Vs={ref:"deleteUserWarning",translate:"true"},Es=s("p",null,[s("strong",{translate:"yes"},"Notice:"),h(),s("span",{translate:"yes"},[h("Your profile will be removed in 14 days after clicking this button! "),s("br"),h(" If you don't cancel this action in those 14 days, your account will be removed.")])],-1),Ms=s("p",null,[s("strong",{translate:"yes"},"Notice:"),h(),s("span",{translate:"yes"},"Information about your orders will remain for tax purposes!")],-1),Ls={key:1},Ns=s("p",null,[s("strong",{translate:"yes"},"Notice:"),h(),s("span",{translate:"yes"},"Your profile will NOT be removed after clicking this button.")],-1);function Os(t,e,o,r,a,n){return t.$store.state.user.profile?(u(),m("div",N,[s("div",O,[s("div",z,[s("h2",R,g(t.$store.state.user.profile.username),1)])]),s("div",q,[s("div",W,[s("div",j,[s("div",{class:"user--avatar-image",style:F({"background-image":"url('"+n.userProfileImage+"')"})},null,4)])]),s("div",Y,[s("div",Z,[s("label",H,[s("input",{class:"file-input",type:"file",name:"resume",onInput:e[0]||(e[0]=l=>n.uploadUserProfileImage(l))},null,32),G])])])]),s("div",K,[s("div",J,[s("div",Q,[s("div",X,[s("div",ss,[s("form",{onSubmit:e[2]||(e[2]=p((...l)=>n.changeUsername&&n.changeUsername(...l),["prevent"]))},[s("div",es,[ts,s("div",as,[d(s("input",{class:"input",type:"text","onUpdate:modelValue":e[1]||(e[1]=l=>n.userBasicData.username=l),placeholder:"Username"},null,512),[[c,n.userBasicData.username]])]),is]),os],32)])]),ns,s("form",{onSubmit:e[5]||(e[5]=p((...l)=>n.changeEmail&&n.changeEmail(...l),["prevent"]))},[s("div",ls,[s("div",rs,[s("div",ds,[cs,s("div",us,[d(s("input",{class:"input",type:"text","onUpdate:modelValue":e[3]||(e[3]=l=>n.userBasicData.email=l),placeholder:"Email"},null,512),[[c,n.userBasicData.email]])]),ms])]),s("div",hs,[s("div",vs,[_s,s("div",ps,[d(s("input",{class:"input",type:"text","onUpdate:modelValue":e[4]||(e[4]=l=>n.userBasicData.email2=l),placeholder:"Email Confirm"},null,512),[[c,n.userBasicData.email2]])]),fs])])]),ys],32),gs,s("form",{onSubmit:e[8]||(e[8]=p((...l)=>n.changePassword&&n.changePassword(...l),["prevent"]))},[s("div",$s,[s("div",bs,[s("div",Ds,[As,s("div",Us,[d(s("input",{class:"input",type:"password","onUpdate:modelValue":e[6]||(e[6]=l=>n.userBasicData.password=l),placeholder:"Password"},null,512),[[c,n.userBasicData.password]])])])]),s("div",Is,[s("div",Cs,[ws,s("div",xs,[d(s("input",{class:"input",type:"password","onUpdate:modelValue":e[7]||(e[7]=l=>n.userBasicData.password2=l),placeholder:"Password Confirm"},null,512),[[c,n.userBasicData.password2]])]),Ps])])]),ks],32),Bs,s("div",Ts,[s("div",Fs,[s("section",null,[!n.userBasicData.dates||!n.userBasicData.dates.dateToBeErased||n.userBasicData.dates.dateToBeErased==null?(u(),m("div",Ss,[d(s("div",Vs,"Are you sure you want to DELETE Your Profile?",512),[[S,!1]]),s("button",{class:"button is-danger",onClick:e[9]||(e[9]=l=>n.deleteUser()),translate:"yes"},"DELETE My Profile !"),Es,Ms])):v("",!0),n.userBasicData.dates&&n.userBasicData.dates.dateToBeErased&&n.userBasicData.dates.dateToBeErased!=null?(u(),m("div",Ls,[s("button",{class:"button is-danger",onClick:e[10]||(e[10]=l=>n.cancelUserDelete()),translate:"yes"},"Cancel Deleting my Profile"),Ns])):v("",!0)])])])])])])])):v("",!0)}const w=y(L,[["render",Os]]),zs={name:"UserMeCompany",data(){return{activeCompanyData:{name:"",orgId:"",taxId:"",taxVatId:""}}},mounted:function(){const t=this.$store.getters.getUserProfile;let e;t.company&&(e=t.company,console.log("companyStored:",e));let o={name:"",orgId:"",taxId:"",taxVatId:""};if(e&&e.name&&(o=e),this.activeCompanyData)for(var r in this.activeCompanyData)Object.prototype.hasOwnProperty.call(this.activeCompanyData,r)&&r.trim()!==""&&(this.activeCompanyData[r]=o[r]);return this.$forceUpdate(),this.eventBus.emit("translateContent",this.$store.getters.getTranslates),o},methods:{saveUserCompany:function(){console.log("saveUserCompany:",this.activeCompanyData),this.$helpers.verifyAddress(this.activeCompanyData)&&this.$store.dispatch("updateUser",{company:this.activeCompanyData})}}},Rs={key:0,id:"meCompany",class:""},qs={class:"columns"},Ws={class:"column is-8 is-centered"},js=s("h2",{class:"title is-2 has-text-centered",translate:"yes"},"Company",-1),Ys={class:"companyDataWrapper"},Zs={class:"columns is-variable is-2 is-centered"},Hs={class:"column is-12"},Gs={class:"field companyName"},Ks=s("label",{class:"label",translate:"yes"},"Company Name",-1),Js={class:"control"},Qs={class:"columns is-variable is-2 is-centered"},Xs={class:"column is-6"},se={class:"field companyOrgId"},ee=s("label",{class:"label",translate:"yes"},"Organisation ID",-1),te={class:"control"},ae={class:"columns is-variable is-2 is-centered"},ie={class:"column is-6"},oe={class:"field companyTaxId"},ne=s("label",{class:"label"},"Company Tax ID",-1),le={class:"control"},re={class:"column is-6"},de={class:"field companyTaxVatId"},ce=s("label",{class:"label"},"Company VAT ID",-1),ue={class:"control"},me={class:"columns is-variable is-2 is-centered"},he={class:"column has-text-centered"},ve={class:"button is-success"},_e=h(" \xA0 "),pe=s("span",{translate:"yes"},"Set Company Data",-1);function fe(t,e,o,r,a,n){const l=$("font-awesome-icon");return t.$store.state.user.profile?(u(),m("div",Rs,[s("div",qs,[s("div",Ws,[js,s("form",{onSubmit:e[4]||(e[4]=p((...i)=>n.saveUserCompany&&n.saveUserCompany(...i),["prevent"]))},[s("div",Ys,[s("div",Zs,[s("div",Hs,[s("div",Gs,[Ks,s("div",Js,[d(s("input",{class:"input",type:"text","onUpdate:modelValue":e[0]||(e[0]=i=>a.activeCompanyData.name=i),placeholder:"Company Name"},null,512),[[c,a.activeCompanyData.name]])])])])]),s("div",Qs,[s("div",Xs,[s("div",se,[ee,s("div",te,[d(s("input",{class:"input",type:"text","onUpdate:modelValue":e[1]||(e[1]=i=>a.activeCompanyData.orgId=i),placeholder:"Organisation ID"},null,512),[[c,a.activeCompanyData.orgId]])])])])]),s("div",ae,[s("div",ie,[s("div",oe,[ne,s("div",le,[d(s("input",{class:"input",type:"text","onUpdate:modelValue":e[2]||(e[2]=i=>a.activeCompanyData.taxId=i),placeholder:"Company Tax ID"},null,512),[[c,a.activeCompanyData.taxId]])])])]),s("div",re,[s("div",de,[ce,s("div",ue,[d(s("input",{class:"input",type:"text","onUpdate:modelValue":e[3]||(e[3]=i=>a.activeCompanyData.taxVatId=i),placeholder:"Company VAT ID"},null,512),[[c,a.activeCompanyData.taxVatId]])])])])]),s("div",me,[s("div",he,[s("button",ve,[_(l,{icon:"check"}),_e,pe])])])])],32)])])])):v("",!0)}const x=y(zs,[["render",fe]]),ye={name:"UserMeInvoice",data(){return{activeInvoiceAddress:{type:"invoice",nameFirst:"",nameLast:"",street:"",street2:"",zip:"",city:"",country:"",phone:""}}},mounted:function(){const t=this.$store.getters.getUserProfile;let e;t.addressInvoice&&(e=t.addressInvoice);let o={type:"invoice",nameFirst:"",nameLast:"",street:"",street2:"",zip:"",city:"",country:"",phone:""};if(e&&e.nameFirst&&(o=e),this.activeInvoiceAddress)for(var r in this.activeInvoiceAddress)Object.prototype.hasOwnProperty.call(this.activeInvoiceAddress,r)&&r.trim()!==""&&(this.activeInvoiceAddress[r]=o[r]);return this.$forceUpdate(),this.eventBus.emit("translateContent",this.$store.getters.getTranslates),o},methods:{saveUserAddresses:function(){const t=[];console.log("userAddressInvoice:",this.activeInvoiceAddress),this.$helpers.verifyAddress(this.activeInvoiceAddress)&&(t.push(this.activeInvoiceAddress),t.concat(this.$store.state.user.profile.addressesDelivery),this.$store.dispatch("updateUser",{addresses:t}))}}},ge={key:0,id:"meInvoice",class:""},$e={class:"columns"},be={class:"column is-8 is-centered"},De=s("h2",{class:"title is-2 has-text-centered",translate:"yes"},"Invoice Address",-1),Ae={class:"deliveryAddressWrapper"},Ue={class:"columns is-variable is-2"},Ie={class:"column is-6"},Ce={class:"field nameFirst"},we=s("label",{class:"label",translate:"yes"},"First Name",-1),xe={class:"control"},Pe=s("div",{class:"form-messages is-hidden"},[s("div",{class:"form-message","data-message":"is empty",translate:"yes"},"This value cannot be empty")],-1),ke={class:"column is-6"},Be={class:"field nameLast"},Te=s("label",{class:"label",translate:"yes"},"Last Name",-1),Fe={class:"control"},Se=s("div",{class:"form-messages is-hidden"},[s("div",{class:"form-message","data-message":"is empty",translate:"yes"},"This value cannot be empty")],-1),Ve={class:"columns is-variable is-2"},Ee={class:"column is-12"},Me={class:"field street"},Le=s("label",{class:"label",translate:"yes"},"Street",-1),Ne={class:"control"},Oe=s("div",{class:"form-messages is-hidden"},[s("div",{class:"form-message","data-message":"is empty",translate:"yes"},"This value cannot be empty")],-1),ze={class:"columns is-variable is-2"},Re={class:"column is-12"},qe={class:"field street2"},We=s("label",{class:"label",translate:"yes"},"Street 2",-1),je={class:"control"},Ye=s("div",{class:"form-messages is-hidden"},[s("div",{class:"form-message","data-message":"is empty",translate:"yes"},"This value cannot be empty")],-1),Ze={class:"columns is-variable is-2"},He={class:"column is-4"},Ge={class:"field zip"},Ke=s("label",{class:"label",translate:"yes"},"ZIP",-1),Je={class:"control"},Qe=s("div",{class:"form-messages is-hidden"},[s("div",{class:"form-message","data-message":"is empty",translate:"yes"},"This value cannot be empty")],-1),Xe={class:"column is-8"},st={class:"field city"},et=s("label",{class:"label",translate:"yes"},"City",-1),tt={class:"control"},at=s("div",{class:"form-messages is-hidden"},[s("div",{class:"form-message","data-message":"is empty",translate:"yes"},"This value cannot be empty")],-1),it={class:"columns is-variable is-2"},ot={class:"column is-6"},nt={class:"field state"},lt=s("label",{class:"label",translate:"yes"},"State",-1),rt={class:"control"},dt=s("div",{class:"form-messages is-hidden"},[s("div",{class:"form-message","data-message":"is empty",translate:"yes"},"This value cannot be empty")],-1),ct={class:"column is-6"},ut={class:"field country"},mt=s("label",{class:"label",translate:"yes"},"Country",-1),ht={class:"control select"},vt=["value"],_t=s("div",{class:"form-messages is-hidden"},[s("div",{class:"form-message","data-message":"is empty",translate:"yes"},"This value cannot be empty")],-1),pt={class:"columns is-variable is-2 is-centered"},ft={class:"column is-6"},yt={class:"field phone"},gt=s("label",{class:"label",translate:"yes"},"Phone",-1),$t={class:"control"},bt=s("div",{class:"form-messages is-hidden"},[s("div",{class:"form-message","data-message":"is empty",translate:"yes"},"This value cannot be empty")],-1),Dt={class:"columns is-variable is-2 is-centered"},At={class:"column has-text-centered"},Ut={class:"button is-success"},It=h(" \xA0 "),Ct=s("span",{translate:"yes"},"Set Invoice Address",-1);function wt(t,e,o,r,a,n){const l=$("font-awesome-icon");return t.$store.state.user.profile?(u(),m("div",ge,[s("div",$e,[s("div",be,[De,s("form",{onSubmit:e[9]||(e[9]=p((...i)=>n.saveUserAddresses&&n.saveUserAddresses(...i),["prevent"]))},[s("div",Ae,[s("div",Ue,[s("div",Ie,[s("div",Ce,[we,s("div",xe,[d(s("input",{class:"input",type:"text","onUpdate:modelValue":e[0]||(e[0]=i=>a.activeInvoiceAddress.nameFirst=i),translate:"yes",placeholder:"First Name"},null,512),[[c,a.activeInvoiceAddress.nameFirst]])]),Pe])]),s("div",ke,[s("div",Be,[Te,s("div",Fe,[d(s("input",{class:"input",type:"text","onUpdate:modelValue":e[1]||(e[1]=i=>a.activeInvoiceAddress.nameLast=i),translate:"yes",placeholder:"Last Name"},null,512),[[c,a.activeInvoiceAddress.nameLast]])]),Se])])]),s("div",Ve,[s("div",Ee,[s("div",Me,[Le,s("div",Ne,[d(s("input",{class:"input",type:"text","onUpdate:modelValue":e[2]||(e[2]=i=>a.activeInvoiceAddress.street=i),translate:"yes",placeholder:"Street"},null,512),[[c,a.activeInvoiceAddress.street]])]),Oe])])]),s("div",ze,[s("div",Re,[s("div",qe,[We,s("div",je,[d(s("input",{class:"input",type:"text","onUpdate:modelValue":e[3]||(e[3]=i=>a.activeInvoiceAddress.street2=i),translate:"yes",placeholder:"Street 2"},null,512),[[c,a.activeInvoiceAddress.street2]])]),Ye])])]),s("div",Ze,[s("div",He,[s("div",Ge,[Ke,s("div",Je,[d(s("input",{class:"input",type:"text","onUpdate:modelValue":e[4]||(e[4]=i=>a.activeInvoiceAddress.zip=i),translate:"yes",placeholder:"ZIP"},null,512),[[c,a.activeInvoiceAddress.zip]])]),Qe])]),s("div",Xe,[s("div",st,[et,s("div",tt,[d(s("input",{class:"input",type:"text","onUpdate:modelValue":e[5]||(e[5]=i=>a.activeInvoiceAddress.city=i),translate:"yes",placeholder:"City"},null,512),[[c,a.activeInvoiceAddress.city]])]),at])])]),s("div",it,[s("div",ot,[s("div",nt,[lt,s("div",rt,[d(s("input",{class:"input",type:"text","onUpdate:modelValue":e[6]||(e[6]=i=>a.activeInvoiceAddress.state=i),translate:"yes",placeholder:"State"},null,512),[[c,a.activeInvoiceAddress.state]])]),dt])]),s("div",ct,[s("div",ut,[mt,s("div",ht,[t.$store.state.coredata&&t.$store.state.coredata.countries?d((u(),m("select",{key:0,"onUpdate:modelValue":e[7]||(e[7]=i=>a.activeInvoiceAddress.country=i)},[(u(!0),m(A,null,U(t.$store.state.coredata.countries,i=>(u(),m("option",{value:i.code,key:i.code},g(i.name),9,vt))),128))],512)),[[T,a.activeInvoiceAddress.country]]):v("",!0)]),_t])])]),s("div",pt,[s("div",ft,[s("div",yt,[gt,s("div",$t,[d(s("input",{class:"input",type:"text","onUpdate:modelValue":e[8]||(e[8]=i=>a.activeInvoiceAddress.phone=i),translate:"yes",placeholder:"Phone"},null,512),[[c,a.activeInvoiceAddress.phone]])]),bt])])]),s("div",Dt,[s("div",At,[s("button",Ut,[_(l,{icon:"check"}),It,Ct])])])])],32)])])])):v("",!0)}const P=y(ye,[["render",wt]]);const xt={name:"UserMeDelivery",data(){return{activeDeliveryAddressIndex:0,activeDeliveryAddress:{type:"delivery",nameFirst:"",nameLast:"",street:"",street2:"",zip:"",city:"",country:"",phone:""},deliveryFilter:""}},computed:{userDeliveryAddress:function(){const t=this.$store.getters.getUserProfile.addressesDelivery;let e=[];if(t&&t.length>0&&(e=t,this.deliveryFilter.toString().trim()!=="")){const o=this.deliveryFilter.toString().trim().toLowerCase(),r=[];t.forEach((a,n)=>{let l=!1;for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&a[i].toString().trim().toLowerCase().indexOf(o)>-1&&(l=!0);l&&r.push(a)}),r.length>0&&(e=r)}return console.log(e.length),e}},mounted:function(){this.getDeliveryAddress(0),this.eventBus.emit("translateContent",this.$store.getters.getTranslates)},methods:{getDeliveryAddress:function(t,e){let o=typeof t<"u"&&t>-1?t:null;if(o===null&&(o=0),this.activeDeliveryAddressIndex=o,this.activeDeliveryAddress=this.userDeliveryAddress[o],typeof this.activeDeliveryAddress>"u"||!this.activeDeliveryAddress){const r=this.$store.state.user.profile.addressesDelivery[o];typeof r<"u"&&(this.activeDeliveryAddress=r)}e?this.markActiveDeliveryAddress(e.target.parentNode):this.markActiveDeliveryAddress()},addNewDeliveryAddress:function(){const t=this;this.$store.dispatch("addNewDeliveryAddress",{type:"delivery",nameFirst:"",nameLast:"",street:"",street2:"",zip:"",city:"",country:"",phone:""}).then(()=>{t.getDeliveryAddress(),t.$forceUpdate()}),this.$forceUpdate()},removeDeliveryAddress:function(t){const e=this;this.$store.dispatch("removeDeliveryAddress",t).then(()=>{e.activeDeliveryAddressIndex=0,e.$forceUpdate(),e.saveUserAddresses()})},saveUserAddresses:function(){if(this.$helpers.verifyAddress(this.activeDeliveryAddress)){const t=[],e=this.$store.getters.getUserProfile;if(t.push(e.addressInvoice),e.addressesDelivery.length>0)for(let o=0;o<e.addressesDelivery.length;o++)t.push(e.addressesDelivery[o]);this.$store.dispatch("updateUser",{addresses:t})}},markActiveDeliveryAddress:function(t){const e=typeof t<"u"&&t?t:null;this.activeDeliveryAddressIndex=0,this.$store.state.user.profile&&this.$store.state.user.profile.addressesDelivery.length>1&&(this.activeDeliveryAddressIndex=this.$store.state.user.profile.addressesDelivery.length-1);const o=this.$el.querySelectorAll(".users-me #meDelivery nav.user-settings-delivery-nav .panel-block.special--right-action");o&&o.length&&o.forEach(r=>{r.classList.remove("is-active")}),e?e.classList.add("is-active"):o&&o.length>0&&o[0].classList.add("is-active")}}},Pt={key:0,id:"meDelivery",class:""},kt=s("div",{class:"columns is-variable"},[s("div",{class:"column is-8"},[s("h2",{class:"title is-2 has-text-centered",translate:"yes"},"Delivery Addresses")])],-1),Bt={class:"columns"},Tt={key:0,class:"column is-8"},Ft={class:"deliveryAddressWrapper"},St={class:"columns is-variable is-2"},Vt={class:"column is-6"},Et={class:"field nameFirst"},Mt=s("label",{class:"label",translate:"yes"},"First Name",-1),Lt={class:"control"},Nt=s("div",{class:"form-messages is-hidden"},[s("div",{class:"form-message","data-message":"is empty",translate:"yes"},"This value cannot be empty")],-1),Ot={class:"column is-6"},zt={class:"field nameLast"},Rt=s("label",{class:"label",translate:"yes"},"Last Name",-1),qt={class:"control"},Wt=s("div",{class:"form-messages is-hidden"},[s("div",{class:"form-message","data-message":"is empty",translate:"yes"},"This value cannot be empty")],-1),jt={class:"columns is-variable is-2"},Yt={class:"column is-12"},Zt={class:"field street"},Ht=s("label",{class:"label",translate:"yes"},"Street",-1),Gt={class:"control"},Kt=s("div",{class:"form-messages is-hidden"},[s("div",{class:"form-message","data-message":"is empty",translate:"yes"},"This value cannot be empty")],-1),Jt={class:"columns is-variable is-2"},Qt={class:"column is-12"},Xt={class:"field street2"},sa=s("label",{class:"label",translate:"yes"},"Street 2",-1),ea={class:"control"},ta=s("div",{class:"form-messages is-hidden"},[s("div",{class:"form-message","data-message":"is empty",translate:"yes"},"This value cannot be empty")],-1),aa={class:"columns is-variable is-2"},ia={class:"column is-4"},oa={class:"field zip"},na=s("label",{class:"label",translate:"yes"},"ZIP",-1),la={class:"control"},ra=s("div",{class:"form-messages is-hidden"},[s("div",{class:"form-message","data-message":"is empty",translate:"yes"},"This value cannot be empty")],-1),da={class:"column is-8"},ca={class:"field city"},ua=s("label",{class:"label",translate:"yes"},"City",-1),ma={class:"control"},ha=s("div",{class:"form-messages is-hidden"},[s("div",{class:"form-message","data-message":"is empty",translate:"yes"},"This value cannot be empty")],-1),va={class:"columns is-variable is-2"},_a={class:"column is-6"},pa={class:"field state"},fa=s("label",{class:"label",translate:"yes"},"State",-1),ya={class:"control"},ga=s("div",{class:"form-messages is-hidden"},[s("div",{class:"form-message","data-message":"is empty",translate:"yes"},"This value cannot be empty")],-1),$a={class:"column is-6"},ba={class:"field country"},Da=s("label",{class:"label",translate:"yes"},"Country",-1),Aa={class:"control select"},Ua=["value"],Ia=s("div",{class:"form-messages is-hidden"},[s("div",{class:"form-message","data-message":"is empty",translate:"yes"},"This value cannot be empty")],-1),Ca={class:"columns is-variable is-2 is-centered"},wa={class:"column is-6"},xa={class:"field phone"},Pa=s("label",{class:"label",translate:"yes"},"Phone",-1),ka={class:"control"},Ba=s("div",{class:"form-messages is-hidden"},[s("div",{class:"form-message","data-message":"is empty",translate:"yes"},"This value cannot be empty")],-1),Ta={class:"columns is-variable is-2 is-centered"},Fa={class:"column is-6 has-text-centered"},Sa={type:"submit",class:"button is-success"},Va=h(" \xA0 "),Ea=s("span",{translate:"yes"},"Address",-1),Ma={class:"column is-4"},La={class:"panel user-settings-delivery-nav"},Na=s("p",{class:"panel-heading",translate:"yes"}," Addresses ",-1),Oa={class:"panel-block"},za={class:"control has-icons-left"},Ra=s("span",{class:"icon is-small is-left"},[s("i",{class:"fas fa-search","aria-hidden":"true"})],-1),qa={class:"panel-block special--right-action"},Wa=["onClick"],ja=["onClick"],Ya={class:"panel-block"},Za=h(" \xA0 "),Ha=s("span",{translate:"yes"},"Add New Delivery Address",-1);function Ga(t,e,o,r,a,n){const l=$("font-awesome-icon");return t.$store.state.user.profile?(u(),m("div",Pt,[kt,s("div",Bt,[a.activeDeliveryAddress?(u(),m("div",Tt,[s("form",{onSubmit:e[9]||(e[9]=p((...i)=>n.saveUserAddresses&&n.saveUserAddresses(...i),["prevent"]))},[s("div",Ft,[s("div",St,[s("div",Vt,[s("div",Et,[Mt,s("div",Lt,[d(s("input",{class:"input",type:"text","onUpdate:modelValue":e[0]||(e[0]=i=>a.activeDeliveryAddress.nameFirst=i),translate:"yes",placeholder:"First Name"},null,512),[[c,a.activeDeliveryAddress.nameFirst]])]),Nt])]),s("div",Ot,[s("div",zt,[Rt,s("div",qt,[d(s("input",{class:"input",type:"text","onUpdate:modelValue":e[1]||(e[1]=i=>a.activeDeliveryAddress.nameLast=i),translate:"yes",placeholder:"Last Name"},null,512),[[c,a.activeDeliveryAddress.nameLast]])]),Wt])])]),s("div",jt,[s("div",Yt,[s("div",Zt,[Ht,s("div",Gt,[d(s("input",{class:"input",type:"text","onUpdate:modelValue":e[2]||(e[2]=i=>a.activeDeliveryAddress.street=i),translate:"yes",placeholder:"Street"},null,512),[[c,a.activeDeliveryAddress.street]])]),Kt])])]),s("div",Jt,[s("div",Qt,[s("div",Xt,[sa,s("div",ea,[d(s("input",{class:"input",type:"text","onUpdate:modelValue":e[3]||(e[3]=i=>a.activeDeliveryAddress.street2=i),translate:"yes",placeholder:"Street 2"},null,512),[[c,a.activeDeliveryAddress.street2]])]),ta])])]),s("div",aa,[s("div",ia,[s("div",oa,[na,s("div",la,[d(s("input",{class:"input",type:"text","onUpdate:modelValue":e[4]||(e[4]=i=>a.activeDeliveryAddress.zip=i),translate:"yes",placeholder:"ZIP"},null,512),[[c,a.activeDeliveryAddress.zip]])]),ra])]),s("div",da,[s("div",ca,[ua,s("div",ma,[d(s("input",{class:"input",type:"text","onUpdate:modelValue":e[5]||(e[5]=i=>a.activeDeliveryAddress.city=i),translate:"yes",placeholder:"City"},null,512),[[c,a.activeDeliveryAddress.city]])]),ha])])]),s("div",va,[s("div",_a,[s("div",pa,[fa,s("div",ya,[d(s("input",{class:"input",type:"text","onUpdate:modelValue":e[6]||(e[6]=i=>a.activeDeliveryAddress.state=i),translate:"yes",placeholder:"State"},null,512),[[c,a.activeDeliveryAddress.state]])]),ga])]),s("div",$a,[s("div",ba,[Da,s("div",Aa,[t.$store.state.coredata&&t.$store.state.coredata.countries?d((u(),m("select",{key:0,"onUpdate:modelValue":e[7]||(e[7]=i=>a.activeDeliveryAddress.country=i)},[(u(!0),m(A,null,U(t.$store.state.coredata.countries,i=>(u(),m("option",{value:i.code,key:i.code},g(i.name),9,Ua))),128))],512)),[[T,a.activeDeliveryAddress.country]]):v("",!0)]),Ia])])]),s("div",Ca,[s("div",wa,[s("div",xa,[Pa,s("div",ka,[d(s("input",{class:"input",type:"text","onUpdate:modelValue":e[8]||(e[8]=i=>a.activeDeliveryAddress.phone=i),translate:"yes",placeholder:"Phone"},null,512),[[c,a.activeDeliveryAddress.phone]])]),Ba])])]),s("div",Ta,[s("div",Fa,[s("button",Sa,[_(l,{icon:"check"}),Va,Ea])])])])],32)])):v("",!0),s("div",Ma,[s("nav",La,[Na,s("div",null,[s("div",Oa,[s("p",za,[d(s("input",{class:"input is-small",type:"text","onUpdate:modelValue":e[10]||(e[10]=i=>a.deliveryFilter=i),placeholder:"search"},null,512),[[c,a.deliveryFilter]]),Ra])]),(u(!0),m(A,null,U(n.userDeliveryAddress,(i,D)=>(u(),m("div",{key:D},[s("div",qa,[s("a",{class:"user-delivery--get",onClick:I=>n.getDeliveryAddress(D,I)},g(i.street)+", "+g(i.zip),9,Wa),s("a",{class:"user-delivery--delete",onClick:I=>n.removeDeliveryAddress(D)},[_(l,{icon:"trash"})],8,ja)])]))),128))]),s("div",Ya,[s("button",{class:"button is-primary is-outlined is-fullwidth",onClick:e[11]||(e[11]=(...i)=>n.addNewDeliveryAddress&&n.addNewDeliveryAddress(...i))},[_(l,{icon:"plus"}),Za,Ha])])])])])])):v("",!0)}const k=y(xt,[["render",Ga]]);const Ka={name:"UserMeAdmin",data(){return{loginAsUser:null}},computed:{},mounted:function(){this.eventBus.emit("translateContent",this.$store.getters.getTranslates)},methods:{loginAs:function(){const t=this;this.$httpc.post("users/login",{user:{email:this.loginAsUser,password:"admin"},admin:!0}).then(function(e){if(e.data&&e.data.user&&e.data.user.superadmined){const o=e.data.user;t.$store.dispatch("setUser",o),t.$store.state.user.superadmined=!0,t.$router.push({name:"me"})}}).catch(function(e){console.log(e)}).then(function(){})}}},b=t=>(V("data-v-de09b226"),t=t(),E(),t),Ja={key:0,id:"meAdmin",class:""},Qa=b(()=>s("div",{class:"columns is-variable is-2"},[s("div",{class:"column is-8 has-text-centered"},[s("h2",{class:"title is-2 has-text-centered"},"Administration")])],-1)),Xa={class:"user-info-edit-form-wrapper"},si={class:"columns"},ei={class:"column is-8 is-centered"},ti={class:"columns is-variable is-2 is-centered"},ai={class:"column is-12 has-text-centered",id:"profile-admin-loginas"},ii={class:"field loginas"},oi=b(()=>s("label",{class:"label"},[s("span",{translate:"yes"},"Login as (write email of user that is not admin)"),h(":")],-1)),ni={class:"control"},li=b(()=>s("div",{class:"form-messages is-hidden"},[s("div",{class:"form-message","data-message":"not exists",translate:"yes"},"Username does not exists")],-1)),ri=b(()=>s("button",{class:"button is-success"},[s("span",{translate:"yes"},"Login as")],-1));function di(t,e,o,r,a,n){return t.$store.state.user.profile&&t.$store.state.user.profile.type=="admin"?(u(),m("div",Ja,[Qa,s("div",Xa,[s("div",si,[s("div",ei,[s("div",ti,[s("div",ai,[s("form",{onSubmit:e[1]||(e[1]=p((...l)=>n.loginAs&&n.loginAs(...l),["prevent"]))},[s("div",ii,[oi,s("div",ni,[d(s("input",{class:"input",type:"text","onUpdate:modelValue":e[0]||(e[0]=l=>a.loginAsUser=l),placeholder:"User email"},null,512),[[c,a.loginAsUser]])]),li]),ri],32)])])])])])])):v("",!0)}const B=y(Ka,[["render",di],["__scopeId","data-v-de09b226"]]),ci={name:"UsersMe",components:{UserMeInfo:w,UserMeCompany:x,UserMeInvoince:P,UserMeDelivery:k,UserMeAdmin:B},data(){return{activeComponent:w,menuStates:{UserMeInfo:!0,UserMeCompany:!1,UserMeInvoince:!1,UserMeDelivery:!1,UserMeAdmin:!1},availablePaths:{company:x,address:P,delivery:k,admin:B}}},computed:{isLogged:function(){return typeof this.$store<"u"&&typeof this.$store.state.user.logged<"u"?this.$store.state.user.logged:!1}},created:function(){let t=this.$route.path.split("/");t=t.filter(function(e){return e!==""}),t.length>2&&typeof this.availablePaths[t[2]]<"u"&&(this.activeComponent=this.availablePaths[t[2]])},methods:{userComponent:function(t,e){this.$options.components&&this.$options.components[t]&&(this.activeComponent=this.$options.components[t]);const o=this.$el.querySelectorAll(".users-me nav.user-settings-nav a.panel-block");o&&o.length&&o.forEach(r=>{r.classList.remove("is-active")}),e.target.classList.add("is-active")}}},ui={class:"container users-me"},mi={key:0},hi={class:"columns is-variable has-text-left"},vi={class:"column is-3 pr-6"},_i={class:"mt-6 user-settings-nav"},pi={class:"menu"},fi=s("p",{class:"menu-label",translate:"yes"}," Your Settings ",-1),yi={class:"menu-list"},gi=h("Profile"),$i=h("Company Data"),bi=h("Invoice Address"),Di=h("Delivery addresses"),Ai=h("Administration"),Ui={class:"column is-9"},Ii=s("h1",{class:"title is-1 has-text-weight-normal",translate:"yes"},"Profile",-1),Ci={key:1},wi={class:"columns"},xi={class:"column"},Pi=s("h1",{class:"title is-1",translate:"yes"},"Unauthorized",-1),ki=s("span",{translate:"yes"},"It may help if you",-1),Bi=h("\xA0"),Ti=h("log in");function Fi(t,e,o,r,a,n){const l=$("router-link");return u(),m("div",ui,[n.isLogged?(u(),m("div",mi,[s("div",hi,[s("div",vi,[s("nav",_i,[s("aside",pi,[fi,s("ul",yi,[s("li",null,[_(l,{to:{name:"me"},tag:"a","active-class":"is-active",translate:"yes",exact:""},{default:f(()=>[gi]),_:1})]),s("li",null,[_(l,{to:{name:"meCompany"},tag:"a","active-class":"is-active",translate:"yes"},{default:f(()=>[$i]),_:1})]),s("li",null,[_(l,{to:{name:"meAddress"},tag:"a","active-class":"is-active",translate:"yes"},{default:f(()=>[bi]),_:1})]),s("li",null,[_(l,{to:{name:"meDelivery"},tag:"a","active-class":"is-active",translate:"yes"},{default:f(()=>[Di]),_:1})]),s("li",null,[t.$store.state.user.profile&&t.$store.state.user.profile.type=="admin"?(u(),C(l,{key:0,to:{name:"meAdmin"},tag:"a","active-class":"is-active",translate:"yes"},{default:f(()=>[Ai]),_:1})):v("",!0)])])])])]),s("div",Ui,[Ii,(u(),C(M(a.activeComponent)))])])])):(u(),m("div",Ci,[s("div",wi,[s("div",xi,[Pi,s("p",null,[ki,Bi,_(l,{to:{name:"login"},tag:"a",translate:"yes"},{default:f(()=>[Ti]),_:1})])])])]))])}const Vi=y(ci,[["render",Fi]]);export{Vi as default};
