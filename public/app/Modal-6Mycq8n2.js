import{o as u,c as h,a as t,t as r,i as _}from"./sett-kcacPgfM.js";import{_ as b}from"./index-dpUgND6i.js";const v={name:"modal",data(){return{submitEventName:null}},created:function(){},mounted:function(){},methods:{submitModal(){if(this.$httpc.get("/cart").then(o=>{console.log(o)}).catch(o=>{console.log(o)}),this.eventBus.emit("globalModalActionClose",()=>{console.log("close modal")}),!this.submitEventName){console.error("submitEventName is not defined");return}this.eventBus.emit(this.submitEventName,()=>{}),console.log("submit modal")},closeModal(){this.eventBus.emit("globalModalActionClose",()=>{console.log("close modal")})}}},f={class:"modal is-active"},p=t("div",{class:"modal-background"},null,-1),g={class:"animation-content"},y={class:"modal-card",style:{width:"auto"}},M={class:"modal-card-head"},$={class:"modal-card-title",translate:"yes"},B={class:"modal-card-body"},k={class:"modal-card-foot"};function C(o,s,E,N,D,e){var a,l,n,i,c,d;return u(),h("div",f,[p,t("div",g,[t("div",y,[t("header",M,[t("p",$,r((n=(l=(a=o.$store)==null?void 0:a.state)==null?void 0:l.modalData)==null?void 0:n.title),1)]),t("section",B,[t("p",null,r((d=(c=(i=o.$store)==null?void 0:i.state)==null?void 0:c.modalData)==null?void 0:d.body),1)]),t("footer",k,[t("button",{class:"button",type:"button",onClick:s[0]||(s[0]=m=>e.closeModal()),translate:"yes"},"Close"),t("button",{class:"button is-primary",onClick:s[1]||(s[1]=_(m=>e.submitModal(),["prevent"])),translate:"yes"},"Submit")])])])])}const S=b(v,[["render",C],["__file","/Users/marthol/Documents/GitHub/stretchshop-front-vue/src/components/global/Modal.vue"]]);export{S as default};
