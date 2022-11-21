import{E as B,S as q}from"./Sidebar.58ad04eb.js";import{_ as U,S as G,P as H}from"./index.20e455a6.js";import{o as d,c,a as t,d as A,w as m,B as f,O as z,F as w,r as C,t as P,g as _,b as h,H as y,h as S,e as b,j as v,U as W,V as J}from"./sett.5bce7c7f.js";import"./edit.8b295d88.js";const Y={props:["modal"],name:"ProductNewEditProperty",data(){return{propertyKey:null,propertyName:null,propertyValue:null,propertyLang:null}},mounted:function(){},methods:{setProperty(){this.$parent.setProperty(this.propertyKey,this.propertyValue,this.propertyLang,this.propertyName)}}},Q={key:0,class:"modal is-active"},X=t("div",{class:"modal-background"},null,-1),Z={class:"animation-content"},$={action:""},tt={class:"modal-card",style:{width:"auto"}},et=t("header",{class:"modal-card-head"},[t("p",{class:"modal-card-title",translate:"yes"},"New Product Property")],-1),st={class:"modal-card-body"},ot={class:"control select"},rt=t("option",{disabled:"disabled",value:"",translate:"yes"},"Select language",-1),it=t("option",{value:""},[b("-- "),t("span",{translate:"yes"},"None"),b(" --")],-1),lt=["value"],at={class:"modal-card-foot"};function nt(o,s,r,l,e,a){const u=v("o-field");return r.modal?(d(),c("div",Q,[X,t("div",Z,[t("form",$,[t("div",tt,[et,t("section",st,[o.$store.state.coredata&&o.$store.state.coredata.langs?(d(),A(u,{key:0,label:"Language"},{default:m(()=>[t("div",ot,[f(t("select",{"onUpdate:modelValue":s[0]||(s[0]=g=>e.propertyLang=g)},[rt,it,(d(!0),c(w,null,C(o.$store.state.coredata.langs,g=>(d(),c("option",{value:g.code,key:g.code},P(g.name),9,lt))),128))],512),[[z,e.propertyLang]])])]),_:1})):_("",!0),h(u,{label:"Property key"},{default:m(()=>[f(t("input",{type:"text","onUpdate:modelValue":s[1]||(s[1]=g=>e.propertyKey=g),placeholder:"Property key",required:""},null,512),[[y,e.propertyKey]])]),_:1}),e.propertyLang?(d(),A(u,{key:1,label:"Property Name"},{default:m(()=>[f(t("input",{type:"text","onUpdate:modelValue":s[2]||(s[2]=g=>e.propertyName=g),placeholder:"Property Name"},null,512),[[y,e.propertyName]])]),_:1})):_("",!0),h(u,{label:"Property value"},{default:m(()=>[f(t("input",{type:"text","onUpdate:modelValue":s[3]||(s[3]=g=>e.propertyValue=g),placeholder:"Property value",required:""},null,512),[[y,e.propertyValue]])]),_:1})]),t("footer",at,[t("button",{class:"button",type:"button",onClick:s[4]||(s[4]=g=>o.$parent.modal=!1),translate:"yes"},"Close"),t("button",{class:"button is-primary",onClick:s[5]||(s[5]=S(g=>a.setProperty(),["prevent"])),translate:"yes"},"Add Property")])])])])])):_("",!0)}const dt=U(Y,[["render",nt]]);const ct={name:"ProductNewEdit",data(){return{sidebar:!1,product:null,productMainImageFile:null,productPropertyLangSwitches:{},parentCategoryDetail:null,language:{code:"en",longCode:"en-US",name:"English"},newLanguage:null,variationModel:null,editor:null,editing:!1,userEditAllowed:!1,filteredCategoriesSlugs:[],filteredProductCodes:[],renderComponent:!0,modal:null,fireCounter:0,showPriceLevels:!1,dataToGenerateFromName:{slug:!0,externalId:!0},productTypes:["product","subscription"]}},components:{editorwrapper:B,"slider-carousel":G,"product-box":H,"product-property":dt,sidebar:q},created:function(){this.language=this.$store.state.language},computed:{user(){return this.$store.getters.getUserProfile},editorToolsConfig(){let o=this;return{image:{config:{uploader:{uploadByFile(s){return o.$helpers.uploadFileGlobal("image","products","products/upload/"+o.product.orderCode+"/editor",s,o.$httpc,o.$store)},uploadByUrl(s){}}}}}}},beforeRouteLeave(o,s,r){this.eventBus.emit("removeEditor"),r()},watch:{user(o,s){o&&o!==null&&(this.getUserEditAllowed(),this.userEditAllowed&&this.getProductDetail())}},mounted:function(){this.getUserEditAllowed(),this.userEditAllowed&&this.getProductDetail()},methods:{toggleSidebar(){this.sidebar=!this.sidebar},checkLang(){var o,s;if(this.$route.query.lang&&((o=this.$store.state.coredata)==null?void 0:o.langs)){let r=this.$helpers.checkValidLanguageSync(this.$route.query.lang,(s=this.$store.state.coredata)==null?void 0:s.langs);r!=null&&r.valid&&(this.language=r.match)}},getUserEditAllowed(){if(this.language=this.$store.state.language,this.user&&this.user!==null&&this.user.type&&this.user.type==="admin"){this.userEditAllowed=!0,this.user.settings.language&&(this.language=this.$store.state.language);return}this.userEditAllowed=!1},getProductDetail:function(){const o=this;this.$route.params&&this.$route.params.category&&this.$route.params.category.toString().trim()!==""&&this.$route.params.product&&this.$route.params.product.toString().trim()!==""&&(this.$route.params.product.toString().trim()==="---new"&&this.$route.params.slug.toString().trim()==="---new"?setTimeout(function(){o.product=o.getEmptyProduct(),o.eventBus.emit("runEditor")},1e3):this.$httpc.get("products/"+this.$route.params.category+"/detail/"+this.$route.params.product+"?edit=true").then(function(s){if(s.data&&(o.product=s.data,o.product.name&&o.$store.state&&typeof o.product.name[o.language.code]<"u"&&(document.title=o.product.name[o.language.code]+" - StretchShop"),o.product&&o.product.categories&&(o.filteredCategoriesSlugs=o.product.categories),o.product&&o.product.properties)){const r=Object.keys(o.product.properties);if(r&&r.length>0)for(let l=0;l<r.length;l++){const e=r[l];o.productPropertyLangSwitches[e]={name:o.checkIfPropertyHasLang(o.product.properties[e],"name"),value:o.checkIfPropertyHasLang(o.product.properties[e],"value")}}}s.data.products&&(o.products=s.data.products),s.data.parentCategoryDetail&&(o.parentCategoryDetail=s.data.parentCategoryDetail)}).catch(function(s){console.error(s)}).then(function(){o.eventBus.emit("runEditor")}))},getProductImagePath(o){if(o&&this.$store.state.coredata&&this.$store.state.coredata.settings&&this.$store.state.coredata.settings.assets&&this.$store.state.coredata.settings.assets.url){const s=new Date;return this.$helpers.getProductImagePath(this.$store.state.coredata,o)+"?"+s.getTime()}return null},getProductGalleryImagePath(o,s){return o&&this.$store.state.coredata&&this.$store.state.coredata.settings&&this.$store.state.coredata.settings.assets&&this.$store.state.coredata.settings.assets.url?this.$helpers.getProductImagePath(this.$store.state.coredata,o,s):null},newPropertyCardModal(){this.modal=!0},checkIfPropertyHasLang(o,s){if(o&&o[s]&&this.$store&&this.$store.state&&this.$store.state.coredata&&this.$store.state.coredata.langCodes){const l=Object.keys(o[s]).filter(e=>this.$store.state.coredata.langCodes.includes(e));if(l&&l.length>0)return!0}return!1},changePropertyLangOption(o,s,r){const l=this.$el.querySelector('.product-properties .table [data-key="'+s+'"] .field.property-'+r+" input[type=text]").value,e=this.productPropertyLangSwitches[s];let a="remove";e[r]===!1&&(a="add");const u=this.product.properties[s];if(r&&r==="name"){if(a==="remove")e.name===!0&&e.value===!0?(delete u.name,delete this.product.properties[s],this.product.properties[l]=u):e.name===!0&&e.value===!1&&(delete this.product.properties[s],this.product.properties[l]=u.value);else if(a==="add"){this.product.properties[s].constructor!==Object&&(this.product.properties[s]={value:this.product.properties[s]}),this.product.properties[s][r]={};for(let g=0;g<this.$store.state.coredata.langCodes.length;g++)this.product.properties[s][r][this.$store.state.coredata.langCodes[g]]=null;this.product.properties[s][r][this.language.code]=l}}else if(r&&r==="value"){if(a==="remove")e.name===!0?this.product.properties[s].value=l:e.name===!1&&(this.product.properties[s]=l);else if(a==="add"){this.product.properties[s].constructor===Object?(delete u.value,this.product.properties[s]=u):(this.product.properties[s]={},this.product.properties[s][r]={});for(let g=0;g<this.$store.state.coredata.langCodes.length;g++)this.product.properties[s][r][this.$store.state.coredata.langCodes[g]]=null;u.value&&u.value.constructor===Array?this.product.properties[s][r][this.language.code]=u.value:u&&u.constructor===Array?this.product.properties[s][r][this.language.code]=u:this.product.properties[s][r][this.language.code]=l}}this.productPropertyLangSwitches[s]&&(this.productPropertyLangSwitches[s][r]=!this.productPropertyLangSwitches[s][r])},changePropertyValue(o,s){const r=this.$el.querySelector('.product-properties .table [data-key="'+o+'"] .field.property-'+s+" input[type=text]").value,l=this.productPropertyLangSwitches[o];if(s==="key")typeof this.product.properties[r]<"u"?this.$helpers.formUndecorateAndDecorateFields(["property-key"],[{name:"property-key",action:"exists"}]):this.renamePropertyKey(o,r);else if(l&&typeof l[s]<"u")if(s==="name")if(l[s]===!0)this.product.properties[o][s][this.language.code]=r;else if(typeof this.product.properties[r]<"u")this.$helpers.formUndecorateAndDecorateFields(["property-name"],[{name:"property-name",action:"exists"}]);else{const e=document.querySelector(".field.property-name");this.$helpers.undecorateFormField(e,"exists"),this.renamePropertyKey(o,r)}else s==="value"&&(l[s]===!0?this.product.properties[o][s][this.language.code]=r:typeof this.product.properties[o].value<"u"?this.product.properties[o].value=r:this.product.properties[o]=r)},renamePropertyKey(o,s){const r=this.product.properties[o],l=this.productPropertyLangSwitches[o];delete this.product.properties[o],delete this.productPropertyLangSwitches[o],this.product.properties[s]=r,this.productPropertyLangSwitches[s]=l;const e=this.$el.querySelector('.product-properties .table [data-key="'+o+'"]');e&&e.setAttribute("data-key",s),this.$forceUpdate()},getPropertyStrings(o,s){if(o.constructor===Array)return{name:s,value:o.join(", ")};if(o.constructor===Object){if(typeof o.name<"u"&&typeof o.value<"u"&&this.$store&&this.$store.state&&this.$store.state.language){const r=this.getPropertyNameResult(o,s),l=this.getPropertyValueResult(o,s);if(r!==""&&l!=="")return{name:r,value:l}}else if(typeof o.value<"u"&&this.$store&&this.$store.state&&this.$store.state.language){const r=s,l=this.getPropertyValueResult(o);if(r!==""&&l!=="")return{name:r,value:l}}return{name:s,value:o}}else return{name:s,value:o}},getPropertyNameResult(o,s){return typeof o.name[this.$store.state.language.code]<"u"?o.name[this.$store.state.language.code]:s.name},getPropertyValueResult(o){return typeof o.value[this.$store.state.language.code]<"u"?o.value[this.$store.state.language.code].constructor===Array?o.value[this.$store.state.language.code].join(", "):o.value[this.$store.state.language.code]:o.value},getFilteredCategories:function(o){const s=this;return o&&o.toString().trim()!==""?this.$httpc.post("categories/find",{query:{pathSlug:{$regex:o},type:"products"}}).then(function(r){if(r.data)return r.data}).catch(function(r){console.error(r)}).then(function(r){const l=[];if(r&&r.categories)for(let e=0;e<r.categories.length;e++)s.product.categories.indexOf(r.categories[e].pathSlug)<0&&l.push(r.categories[e].pathSlug);return s.filteredCategoriesSlugs=l,l}):(s.filteredCategoriesSlugs=[],[])},getFilteredRelatedProducts:function(o){const s=this;return o&&o.toString().trim()!==""?this.$httpc.post("products/find",{query:{orderCode:{$regex:o}}}).then(function(r){if(r.data)return r.data}).catch(function(r){console.error(r)}).then(function(r){const l=[];for(let e=0;e<r.length;e++)s.product.data.related.products.indexOf(r[e].orderCode)<0&&l.push(r[e].orderCode);return s.filteredProductCodes=l,l}):(s.filteredProductCodes=[],[])},setProperty(o,s,r,l){if(console.debug("add("+o+","+s+") in lang:"+r+" with Name:"+l),typeof o<"u"&&typeof s<"u"&&o&&s)if(this.product&&this.product.properties&&typeof this.product.properties[o]<"u"){const e=this.product.properties[o];typeof l<"u"&&l!==o&&(e.name={},typeof r<"u"?e.name[r]=l:e.name=l)}else{let e={};typeof l<"u"&&l&&(e.name={},typeof r<"u"&&r?e.name[r]=l:e.name=l),typeof r<"u"&&r?(e.value={},e.value[r]=s):typeof e.name<"u"?e.value=s:e=s,e&&(this.product.properties[o]=e)}this.modal=!1},removeProperty(o){console.debug("remove("+o+")"),this.product&&this.product.properties&&typeof this.product.properties[o]<"u"&&(delete this.product.properties[o],this.$forceUpdate())},productMainImageDelete(){const o=this;if(confirm("Are you sure?")){const s={timeout:15e3,needsAuth:!0},r=this.getProductImagePath(this.product.orderCode);let l="";if(r.trim()!==""){const e=r.split("/");e.length>0&&(l=e[e.length-1])}console.debug(this.product.orderCode,r),this.$httpc.delete("user/image/products/"+this.product.orderCode+"/"+l,s).then(function(e){e&&e.data&&e.data.success&&o.$el.querySelector(".product-image-wrapper img.image-main").setAttribute("src",o.getProductImagePath(o.product.orderCode))})}},productMainImageUpload(o){const s=this;if(s.productMainImageFile=o.target.files,s.productMainImageFile){const l=new FormData;if(s.productMainImageFile.length&&typeof s.productMainImageFile.length<"u"&&s.productMainImageFile.length>0)for(var r=0;r<s.productMainImageFile.length;r++){const e=s.productMainImageFile[r];l.append("files["+r+"]",e)}else l.append("files[0]",s.productMainImageFile);s.$httpc.post("/products/upload/"+s.product.orderCode+"/main",l,{needsAuth:!0}).then(function(e){if(e&&e.data&&e.data.substr(0,1)==="'"&&e.data[e.data.length-1]==="'"){const a=e.data.length-2;if(e.data=e.data.substr(1,a),e.data=JSON.parse(e.data),e.data.files&&e.data.files.length>0&&e.data.files[0].path&&e.data.files[0].path.trim()!==""){const u=s.$el.querySelector(".product-image-wrapper img.image-main");if(u){const g=new Date;u.setAttribute("src",s.$store.state.coredata.settings.assets.url+"/products/"+e.data.files[0].path+"?"+g.getTime())}}}}).catch(e=>{console.error("product main image upload error:",e)})}},changeEditedLang(){this.fireCounter++,this.editing&&this.newLanguage&&this.newLanguage.code&&this.fireCounter===1&&(window.location=window.location.origin+this.$route.path+"?lang="+this.newLanguage.code)},save(o){const s=this;if(this.product.descriptionLong[s.language.code]=o,this.product&&this.product._id&&!this.product.id&&(this.product.id=this.product._id),this.product.price&&this.product.stockAmount&&(this.product.price=parseFloat(this.product.price),this.product.stockAmount=parseFloat(this.product.stockAmount)),this.product.priceLevels){const l=Object.keys(this.product.priceLevels);l.length>0&&l.forEach(function(e){const a=Object.keys(s.product.priceLevels[e]);a.length>0&&a.forEach(function(u){s.product.priceLevels[e][u].price=parseFloat(s.product.priceLevels[e][u].price)})})}const r={products:[]};r.products.push(this.product),this.$httpc.put("products",r,{needsAuth:!0}).then(function(l){if(l.data&&l.data.length>0){const e=l.data[0],a=s.$router.resolve({name:"productNewEdit",params:{category:e.categories[0],slug:e.slug,product:e._id}});window.location=a.href}}).catch(function(l){console.error("saveProduct error:",l)})},deleteProduct(){const s={products:[{id:this.product._id}]};this.product&&this.product._id&&confirm("Are you sure you want to delete this product?")&&this.$httpc.delete("products",{data:s}).then(r=>{r&&r.data&&alert("Product has been successfully removed. You will be redirected now")})},getEmptyProduct(){const o=this;return{externalId:null,orderCode:null,variationGroupId:null,publisher:o.user.email,type:"product",subtype:null,name:o.$helpers.getLangsObject(o.$store.state.coredata.langCodes),descriptionShort:o.$helpers.getLangsObject(o.$store.state.coredata.langCodes),descriptionLong:o.$helpers.getLangsObject(o.$store.state.coredata.langCodes),price:0,tax:null,stockAmount:0,slug:null,properties:{},categories:[],dates:{dateCreated:null,dateUpdated:null,dateSynced:null},data:{related:{products:[],productResults:[]},gallery:{name:o.$helpers.getLangsObject(o.$store.state.coredata.langCodes),images:[]},contentDependency:!1},note:null,parentCategoryDetail:{},activity:{start:null,end:null}}},checkNameDependents(){if(this.product&&!this.product._id){let o=this.language&&this.language.code?this.language.code:null;this.newLanguage&&this.newLanguage.code&&(o=this.newLanguage.code),this.product.name&&this.product.name[o]&&this.product.name[o].trim()!==""&&((this.product.slug&&this.product.slug.trim()===""||this.dataToGenerateFromName.slug)&&(this.product.slug=this.$helpers.stringToSlug(this.product.name[o]),this.dataToGenerateFromName.slug=!0),(this.product.externalId&&this.product.externalId.trim()===""||this.dataToGenerateFromName.externalId)&&(this.product.externalId=this.$helpers.stringToSlug(this.product.name[o]),this.dataToGenerateFromName.externalId=!0))}},getActivity(){const o={start:null,end:null};return this.product&&this.product!==null&&this.product.activity&&this.product.activity!==null&&(this.product.activity.start&&this.product.activity.start.toString().trim()!==""&&(o.start=new Date(this.product.activity.start)),this.product.activity.end&&this.product.activity.end.toString().trim()!==""&&(o.end=new Date(this.product.activity.end))),o},setActivity(o,s){s&&this.product&&this.product!==null&&(this.product.activity||(this.product.activity={start:null,end:null}),this.product.activity[o]=s)},recalculatePriceLevels(o){const s=this;this.$httpc.get("products/rebuildpl/"+o).then(function(r){r&&r.data&&r.data!==null&&r.data.levels&&(s.product.priceLevels=r.data.levels)})},checkForSubscriptionData(){this.product&&this.product.type&&this.product.type==="subscription"&&(this.product.data||(this.product.data={}),this.product.data.subscription||(this.product.data.subscription={period:"month",duration:1,cycles:0}))}}},n=o=>(W("data-v-fe49c75b"),o=o(),J(),o),ut={key:0,class:"container product-detail",id:"product-new-edit"},pt={class:"product-categories"},ht={class:"title is-3","aria-controls":"contentCategoriesRelated"},gt=n(()=>t("span",{translate:"yes"},"Categories & Related Pages",-1)),mt={class:"categoriesRelated-hidden collapse-content",id:"contentCategoriesRelated","aria-expanded":"true"},_t={class:"container is-fluid p-3"},ft={class:"columns"},yt={class:"column"},vt={class:"product-hidden-properties"},bt={class:"title is-3","aria-controls":"contentHiddenProperties"},Pt=n(()=>t("span",{translate:"yes"},"Product's hidden properties",-1)),wt={class:"editableByAuthor-hidden collapse-content",id:"contentHiddenProperties","aria-expanded":"true"},Ct={class:"container is-fluid p-3"},St={class:"columns"},xt={class:"column"},Lt={class:"field"},It=n(()=>t("label",{class:"label",translate:"yes"},"Type",-1)),kt={class:"control"},At={class:"columns"},Dt={class:"column"},Vt={class:"field"},Et=n(()=>t("label",{class:"label",translate:"yes"},"Subtype",-1)),Ut={class:"control"},Ft={class:"columns"},Nt={class:"column"},Tt={class:"field"},Rt=n(()=>t("label",{class:"label",translate:"yes"},"External Id",-1)),Mt={class:"control"},Ot={class:"columns"},Kt={class:"column"},jt={class:"field"},Bt=n(()=>t("label",{class:"label",translate:"yes"},"Variation Group Id",-1)),qt={class:"control"},Gt={class:"columns"},Ht={class:"column"},zt={class:"field"},Wt=n(()=>t("label",{class:"label",translate:"yes"},"Slug",-1)),Jt={class:"control"},Yt={class:"columns"},Qt={class:"column"},Xt={class:"field"},Zt=n(()=>t("label",{class:"label",translate:"yes"},"Note",-1)),$t={class:"control"},te={key:0},ee={class:"columns"},se={class:"column"},oe={class:"field"},re=n(()=>t("label",{class:"label",translate:"yes"},"Activity Start",-1)),ie={class:"control"},le={class:"columns"},ae={class:"column"},ne={class:"field"},de=n(()=>t("label",{class:"label",translate:"yes"},"Activity End",-1)),ce={class:"control"},ue={key:1},pe={class:"columns"},he={class:"column"},ge={class:"field"},me=n(()=>t("label",{class:"label",translate:"yes"},"Subscription Period",-1)),_e={class:"control"},fe={class:"columns"},ye={class:"column"},ve={class:"field"},be=n(()=>t("label",{class:"label",translate:"yes"},"Subscription Duration",-1)),Pe={class:"control"},we={class:"columns"},Ce={class:"column"},Se={class:"field"},xe=n(()=>t("label",{class:"label",translate:"yes"},"Subscription Cycles",-1)),Le={class:"control"},Ie={key:0},ke={class:"title is-3","aria-controls":"contentHiddenProperties",translate:"yes"},Ae=n(()=>t("span",{translate:"yes"},"Editable by admin user",-1)),De={class:"editableByAdmin-hidden"},Ve={class:"container is-fluid p-3"},Ee={class:"columns"},Ue={class:"column"},Fe={class:"field"},Ne=n(()=>t("label",{class:"label",translate:"yes"},"Publisher",-1)),Te={class:"control"},Re={class:"columns"},Me={class:"column"},Oe={class:"field"},Ke=n(()=>t("label",{class:"label",translate:"yes"},"Content Dependency",-1)),je={class:"control"},Be={class:"columns reversed"},qe={class:"column is-7 pt-6"},Ge={class:"product-image-wrapper"},He=["src","alt"],ze={class:"page-image-actions"},We={class:"file is-primary action edit"},Je={class:"file-label"},Ye=n(()=>t("span",{class:"file-cta"},[t("span",{class:"file-icon"},[t("i",{class:"fa fa-file-upload"})]),t("span",{class:"file-label show-on-hover",translate:"yes"}," Click to upload ")],-1)),Qe=n(()=>t("i",{class:"fa fa-trash"},null,-1)),Xe=n(()=>t("span",{class:"show-on-hover",translate:"yes"},"Click to remove",-1)),Ze={class:"column is-5 pl-6 data-main"},$e={key:0,class:"breadcrumb","aria-label":"breadcrumbs"},ts={key:0},es={class:"is-active"},ss={key:1,class:"has-text-left"},os={class:"content"},rs={class:"columns"},is={class:"column is-2"},ls={class:"has-text-grey-light is-size-7",translate:"yes"},as={class:"column is-4"},ns={class:"field"},ds=n(()=>t("label",{class:"label",translate:"yes"},"Order code",-1)),cs={class:"control"},us=n(()=>t("div",{class:"column is-6"},[t("p",{class:"help is-danger",translate:"yes"},"Changing OrderCode may disable images and other external dependecies")],-1)),ps={class:"field"},hs=n(()=>t("label",{class:"label",translate:"yes"},"Name",-1)),gs={class:"control"},ms={class:"content"},_s={class:"columns"},fs={class:"column is-6"},ys={class:"field"},vs={class:"label"},bs=n(()=>t("span",{translate:"yes"},"Price",-1)),Ps={class:"control"},ws={key:0,class:"is-size-7"},Cs={key:1,class:"detail-price is-size-7 has-text-grey-light"},Ss=n(()=>t("span",{translate:"yes"},"Without Tax",-1)),xs={key:0,class:"columns product-hidden-pricelevels"},Ls={class:"column is-12"},Is=n(()=>t("span",{id:"productPriceLevels"},"Edit Price Levels",-1)),ks=[Is],As={class:"column is-6 has-text-right"},Ds={class:"column is-6"},Vs=["onUpdate:modelValue","onKeyup"],Es={class:"columns"},Us={class:"column"},Fs={class:"field"},Ns=n(()=>t("label",{class:"label",translate:"yes"},"Description Short",-1)),Ts={class:"control"},Rs={class:"columns"},Ms={class:"column"},Os={key:0,class:"column product-variations"},Ks={class:"variation-image"},js=["src","alt"],Bs={class:"columns"},qs=n(()=>t("div",{class:"column is-6"},null,-1)),Gs={class:"column is-6"},Hs=["data-id"],zs=n(()=>t("span",{translate:"yes"},"Add to Cart",-1)),Ws={class:"field"},Js=n(()=>t("label",{class:"label",translate:"yes"},"In stock",-1)),Ys={class:"control"},Qs={key:0,class:"columns product-descriptions reversed-desktop"},Xs={class:"column is-5"},Zs={class:"productContent","data-name":"description"},$s=n(()=>t("div",{class:"column is-7"},null,-1)),to={key:1,class:"product-properties bg-grey"},eo={class:"columns"},so=n(()=>t("div",{class:"column is-6"},[t("h3",{class:"title is-3 has-text-left",translate:"yes"},"Properties")],-1)),oo={class:"column is-6 has-text-right"},ro=n(()=>t("i",{class:"fa fa-plus"},null,-1)),io=n(()=>t("span",{translate:"yes"},"Add New Property",-1)),lo={class:"columns"},ao={class:"column is-12"},no={class:"table"},co=["data-key"],uo={class:"field property-key"},po=n(()=>t("label",{class:"label",translate:"yes"},"Property Key",-1)),ho={class:"control"},go=["disabled","data-orig","value","onKeyup"],mo=n(()=>t("div",{class:"form-messages is-hidden"},[t("div",{class:"form-message","data-message":"exists",translate:"yes"},"This key already exists")],-1)),_o={class:"field property-name"},fo=n(()=>t("label",{class:"label",translate:"yes"},"Property Name",-1)),yo={class:"control"},vo=["data-orig","value","onKeyup"],bo=n(()=>t("div",{class:"form-messages is-hidden"},[t("div",{class:"form-message","data-message":"exists",translate:"yes"},"This key already exists")],-1)),Po={class:"field property-value"},wo=n(()=>t("label",{class:"label",translate:"yes"},"Property Value",-1)),Co={class:"control"},So=["data-orig","value","onKeyup"],xo={width:"50",class:"has-text-centered"},Lo=["onClick"],Io={key:2},ko={key:3,class:"columns product-related"},Ao={class:"column is-12"},Do=n(()=>t("h3",{class:"title is-3 has-text-left",translate:"yes"},"Related",-1)),Vo={class:"tile is-ancestor"},Eo={key:4,class:"columns product-delete"},Uo={class:"column is-12"},Fo=n(()=>t("p",{translate:"yes"},"Warning: This action cannot be undone!",-1));function No(o,s,r,l,e,a){const u=v("font-awesome-icon"),g=v("o-inputitems"),V=v("o-field"),I=v("o-collapse"),F=v("o-autocomplete"),N=v("o-datetimepicker"),T=v("o-datepicker"),D=v("o-switch"),R=v("sidebar"),k=v("router-link"),M=v("editorwrapper"),O=v("slider-carousel"),K=v("product-box"),j=v("product-property");return e.product&&e.userEditAllowed?(d(),c("div",ut,[h(R,{fullheight:!0,overlay:!1,right:!0,open:e.sidebar,canCancel:!1},{default:m(()=>[t("div",pt,[h(I,{open:!0,"aria-id":"contentCategoriesRelated"},{trigger:m(i=>[t("h3",ht,[gt,b(),h(u,{icon:i.open?"angle-down":"angle-up"},null,8,["icon"])])]),default:m(()=>[t("div",mt,[t("div",_t,[t("div",ft,[t("div",yt,[t("section",null,[h(V,{label:"Enter categories' url slugs"},{default:m(()=>[h(g,{modelValue:e.product.categories,"onUpdate:modelValue":s[0]||(s[0]=i=>e.product.categories=i),data:e.filteredCategoriesSlugs,autocomplete:"","allow-new":!1,field:"user.first_name",iconPack:"fas",icon:"tags",placeholder:"Categories",type:"is-info",onTyping:a.getFilteredCategories},null,8,["modelValue","data","onTyping"])]),_:1})])])])])])]),_:1})]),t("div",vt,[h(I,{open:!0,"aria-id":"contentHiddenProperties"},{trigger:m(i=>[t("h3",bt,[Pt,b(),h(u,{icon:(i.open,"angle-up")},null,8,["icon"])])]),default:m(()=>[t("div",wt,[t("div",Ct,[t("div",St,[t("div",xt,[t("div",Lt,[It,t("div",kt,[h(F,{modelValue:e.product.type,"onUpdate:modelValue":s[1]||(s[1]=i=>e.product.type=i),placeholder:"e.g. product","keep-first":!0,"open-on-focus":!0,data:e.productTypes,onBlur:a.checkForSubscriptionData,field:"product.type",clearable:!1},null,8,["modelValue","data","onBlur"])])])])]),t("div",At,[t("div",Dt,[t("div",Vt,[Et,t("div",Ut,[f(t("input",{class:"input",type:"text","onUpdate:modelValue":s[2]||(s[2]=i=>e.product.subtype=i),translate:"yes",placeholder:"Subtype"},null,512),[[y,e.product.subtype]])])])])]),t("div",Ft,[t("div",Nt,[t("div",Tt,[Rt,t("div",Mt,[f(t("input",{class:"input",type:"text","onUpdate:modelValue":s[3]||(s[3]=i=>e.product.externalId=i),translate:"yes",placeholder:"External Id"},null,512),[[y,e.product.externalId]])])])])]),t("div",Ot,[t("div",Kt,[t("div",jt,[Bt,t("div",qt,[f(t("input",{class:"input",type:"text","onUpdate:modelValue":s[4]||(s[4]=i=>e.product.variationGroupId=i),translate:"yes",placeholder:"Variation Group Id"},null,512),[[y,e.product.variationGroupId]])])])])]),t("div",Gt,[t("div",Ht,[t("div",zt,[Wt,t("div",Jt,[f(t("input",{class:"input",type:"text","onUpdate:modelValue":s[5]||(s[5]=i=>e.product.slug=i),translate:"yes",placeholder:"Slug"},null,512),[[y,e.product.slug]])])])])]),t("div",Yt,[t("div",Qt,[t("div",Xt,[Zt,t("div",$t,[f(t("textarea",{class:"textarea","onUpdate:modelValue":s[6]||(s[6]=i=>e.product.note=i),translate:"yes",placeholder:"Note"},null,512),[[y,e.product.note]])])])])]),e.product?(d(),c("div",te,[t("div",ee,[t("div",se,[t("div",oe,[re,t("div",ie,[h(N,{value:a.getActivity().start,onInput:s[7]||(s[7]=i=>a.setActivity("start",i)),placeholder:"Activity Start DateTime",iconPack:"fa",icon:"calendar-alt",iconPrev:"angle-left",iconNext:"angle-right",position:"bottom-left","trap-focus":""},null,8,["value"])])])])]),t("div",le,[t("div",ae,[t("div",ne,[de,t("div",ce,[h(T,{value:a.getActivity().end,onInput:s[8]||(s[8]=i=>a.setActivity("end",i)),placeholder:"Activity End DateTime",iconPack:"fa",icon:"calendar-alt",iconPrev:"angle-left",iconNext:"angle-right",position:"bottom-left","trap-focus":""},null,8,["value"])])])])])])):_("",!0),e.product.type==="subscription"&&e.product.data&&e.product.data.subscription?(d(),c("div",ue,[t("div",pe,[t("div",he,[t("div",ge,[me,t("div",_e,[f(t("input",{class:"input",type:"text","onUpdate:modelValue":s[9]||(s[9]=i=>e.product.data.subscription.period=i),translate:"yes",placeholder:"Slug"},null,512),[[y,e.product.data.subscription.period]])])])])]),t("div",fe,[t("div",ye,[t("div",ve,[be,t("div",Pe,[f(t("input",{class:"input",type:"number","onUpdate:modelValue":s[10]||(s[10]=i=>e.product.data.subscription.duration=i),translate:"yes",placeholder:"Slug"},null,512),[[y,e.product.data.subscription.duration]])])])])]),t("div",we,[t("div",Ce,[t("div",Se,[xe,t("div",Le,[f(t("input",{class:"input",type:"number","onUpdate:modelValue":s[11]||(s[11]=i=>e.product.data.subscription.cycles=i),translate:"yes",placeholder:"Slug"},null,512),[[y,e.product.data.subscription.cycles]])])])])])])):_("",!0)])])]),_:1}),a.user&&a.user!=null&&a.user.type&&a.user.type=="admin"?(d(),c("div",Ie,[h(I,{open:!0,"aria-id":"contentHiddenPropertiesAdmin"},{trigger:m(i=>[t("h3",ke,[Ae,b(),h(u,{icon:i.open?"angle-down":"angle-up"},null,8,["icon"])])]),default:m(()=>[t("div",De,[t("div",Ve,[t("div",Ee,[t("div",Ue,[t("div",Fe,[Ne,t("div",Te,[f(t("input",{class:"input",type:"text","onUpdate:modelValue":s[12]||(s[12]=i=>e.product.publisher=i),translate:"yes",placeholder:"Publisher"},null,512),[[y,e.product.publisher]])])])])]),t("div",Re,[t("div",Me,[t("div",Oe,[Ke,t("div",je,[h(D,{type:"is-info",modelValue:e.product.data.contentDependency,"onUpdate:modelValue":s[13]||(s[13]=i=>e.product.data.contentDependency=i),translate:"yes"},{default:m(()=>[b("Content Dependency")]),_:1},8,["modelValue"])])])])])])])]),_:1})])):_("",!0)])]),_:1},8,["open"]),t("div",Be,[t("div",qe,[t("div",Ge,[t("img",{src:a.getProductImagePath(e.product.orderCode),alt:e.product.name[e.language.code],class:"image-main",onerror:"this.src='/assets/_site/logo-product.svg'"},null,8,He),t("div",ze,[t("div",We,[t("label",Je,[t("input",{class:"file-input",type:"file",name:"resume",onInput:s[14]||(s[14]=i=>a.productMainImageUpload(i))},null,32),Ye])]),t("a",{class:"action remove button is-danger has-text-white",onClick:s[15]||(s[15]=S(i=>a.productMainImageDelete(),["prevent"]))},[Qe,b("\xA0 "),Xe])])])]),t("div",Ze,[e.parentCategoryDetail?(d(),c("nav",$e,[e.parentCategoryDetail.parentCategories?(d(),c("ul",ts,[(d(!0),c(w,null,C(e.parentCategoryDetail.parentCategories,(i,p)=>(d(),c("li",{key:p},[h(k,{title:i.name[e.language.code],to:{name:"categoryList",params:{category:i.pathSlug}}},{default:m(()=>[b(P(i.name[e.language.code]),1)]),_:2},1032,["title","to"])]))),128)),t("li",es,[h(k,{title:e.parentCategoryDetail.name[e.language.code],to:{name:"categoryList",params:{category:e.parentCategoryDetail.pathSlug}},"aria-current":"page"},{default:m(()=>[b(P(e.parentCategoryDetail.name[e.language.code]),1)]),_:1},8,["title","to"])])])):_("",!0)])):_("",!0),e.product&&e.product!=null?(d(),c("div",ss,[t("div",os,[t("div",rs,[t("div",is,[t("span",ls,P(e.product.type)+":",1)]),t("div",as,[t("div",ns,[ds,t("div",cs,[f(t("input",{class:"input has-text-weight-normal has-text-left",type:"text","onUpdate:modelValue":s[16]||(s[16]=i=>e.product.orderCode=i),translate:"yes",placeholder:"Order code"},null,512),[[y,e.product.orderCode]])])])]),us])]),t("div",ps,[hs,t("div",gs,[f(t("input",{class:"input is-size-1 has-text-weight-normal",type:"text","onUpdate:modelValue":s[17]||(s[17]=i=>e.product.name[e.language.code]=i),onKeyup:s[18]||(s[18]=i=>a.checkNameDependents()),translate:"yes",placeholder:"Name"},null,544),[[y,e.product.name[e.language.code]]])])]),t("div",ms,[t("div",_s,[t("div",fs,[t("div",ys,[t("label",vs,[bs,b(" "+P(o.$store.state.currency.symbol),1)]),t("div",Ps,[f(t("input",{class:"input is-size-4 has-text-weight-normal",type:"number","onUpdate:modelValue":s[19]||(s[19]=i=>e.product.price=i),translate:"yes",placeholder:"Price"},null,512),[[y,e.product.price]])])]),e.product.type=="subscription"?(d(),c("div",ws," /"+P(e.product.data.subscription.duration)+" "+P(e.product.data.subscription.period)+" (x"+P(e.product.data.subscription.cycles)+") ",1)):_("",!0),e.product.tax&&e.product.tax>0?(d(),c("div",Cs,[Ss,b(" ("+P(e.product.tax*100)+"%): "+P(o.$helpers.numeral(e.product.price-e.product.price*e.product.tax).format("0 0.00"))+" "+P(o.$store.state.currency.symbol),1)])):_("",!0)])]),e.product.priceLevels?(d(),c("div",xs,[t("div",Ls,[t("div",null,[h(I,{open:!1,"aria-id":"contentIdForA11y2",animation:"slide",modelValue:e.showPriceLevels,"onUpdate:modelValue":s[22]||(s[22]=i=>e.showPriceLevels=i)},{trigger:m(()=>[t("a",{href:"#",onClick:s[20]||(s[20]=S(i=>e.showPriceLevels=!e.showPriceLevels,["prevent"])),"aria-controls":"contentIdForA11y2"},ks)]),default:m(()=>[(d(!0),c(w,null,C(e.product.priceLevels,(i,p)=>(d(),c("div",{key:p},[(d(!0),c(w,null,C(i,(x,L)=>(d(),c("div",{class:"columns",key:L},[t("div",As,P(p+"."+L),1),t("div",Ds,[f(t("input",{class:"input has-text-weight-normal has-text-right",type:"number","onUpdate:modelValue":E=>e.product.priceLevels[p][L].price=E,placeholder:"Price",onKeyup:E=>e.product.priceLevels[p][L].type="defined"},null,40,Vs),[[y,e.product.priceLevels[p][L].price]])])]))),128))]))),128)),t("div",null,[t("button",{class:"button add-to-cart",onClick:s[21]||(s[21]=S(i=>a.recalculatePriceLevels(e.product._id),["prevent"])),translate:"yes"}," Recalculate Price Levels ")])]),_:1},8,["modelValue"])])])])):_("",!0),t("div",Es,[t("div",Us,[t("div",Fs,[Ns,t("div",Ts,[f(t("input",{class:"input is-size-5 has-text-weight-normal",type:"text","onUpdate:modelValue":s[23]||(s[23]=i=>e.product.descriptionShort[e.language.code]=i),translate:"yes",placeholder:"Description Short"},null,512),[[y,e.product.descriptionShort[e.language.code]]])])])])]),t("div",Rs,[t("div",Ms,[e.product.data&&e.product.data.variations?(d(),c("div",Os,[(d(!0),c(w,null,C(e.product.data.variations,(i,p)=>(d(),A(k,{key:i._id+p,class:"variation",title:i.name[o.$store.state.language.code],to:{name:"productDetail",params:{category:i.categories[0],product:i._id,slug:i.slug}}},{default:m(()=>[t("div",Ks,[t("img",{src:a.getProductImagePath(i.orderCode),alt:i.name[o.$store.state.language.code]},null,8,js)]),t("p",null,P(i.name[o.$store.state.language.code]),1)]),_:2},1032,["title","to"]))),128))])):_("",!0)])]),t("div",Bs,[qs,t("div",Gs,[t("button",{class:"button add-to-cart is-primary","data-id":e.product._id,onClick:s[24]||(s[24]=S(i=>o.addToCart(i),["prevent"])),disabled:""},[h(u,{icon:"cart-plus"}),b(" \xA0 "),zs],8,Hs),t("div",Ws,[Js,t("div",Ys,[f(t("input",{class:"input has-text-weight-normal has-text-left",type:"text","onUpdate:modelValue":s[25]||(s[25]=i=>e.product.stockAmount=i),translate:"yes",placeholder:"In stock"},null,512),[[y,e.product.stockAmount]])])])])])])])):_("",!0)])]),e.product&&e.product!=null?(d(),c("div",Qs,[t("div",Xs,[t("div",Zs,[h(M,{type:"editorjs",editordata:{editorjs:{setup:a.editorToolsConfig,data:e.product.descriptionLong[e.language.code]}}},null,8,["editordata"])])]),$s])):_("",!0),e.product&&e.product!=null&&e.product.properties?(d(),c("div",to,[t("div",eo,[so,t("div",oo,[t("a",{class:"button is-primary is-info",onClick:s[26]||(s[26]=S(i=>a.newPropertyCardModal(),["prevent"]))},[ro,b("\xA0 "),io])])]),t("div",lo,[t("div",ao,[t("div",null,[t("table",no,[(d(!0),c(w,null,C(e.product.properties,(i,p)=>(d(),c("tr",{key:p,"data-key":p},[t("th",null,[t("div",uo,[po,t("div",ho,[t("input",{class:"input has-text-weight-normal has-text-left",disabled:a.getPropertyStrings(i,p).name===p,type:"text",translate:"yes",placeholder:"Property Key","data-orig":p,value:p,onKeyup:x=>a.changePropertyValue(p,"key")},null,40,go)]),mo])]),t("td",null,[t("div",_o,[fo,t("div",yo,[t("input",{class:"input has-text-weight-normal has-text-left",type:"text",translate:"yes",placeholder:"Property Name","data-orig":a.getPropertyStrings(i,p).name,value:a.getPropertyStrings(i,p).name,onKeyup:x=>a.changePropertyValue(p,"name")},null,40,vo),h(D,{type:"is-info",value:a.checkIfPropertyHasLang(i,"name"),onInput:x=>a.changePropertyLangOption(i,p,"name"),translate:"yes"},{default:m(()=>[b("Lang")]),_:2},1032,["value","onInput"])]),bo])]),t("td",null,[t("div",Po,[wo,t("div",Co,[t("input",{class:"input has-text-weight-normal has-text-left",type:"text",translate:"yes",placeholder:"Property Value","data-orig":a.getPropertyStrings(i,p).value,value:a.getPropertyStrings(i,p).value,onKeyup:x=>a.changePropertyValue(p,"value")},null,40,So),h(D,{type:"is-info",value:a.checkIfPropertyHasLang(i,"value"),onInput:x=>a.changePropertyLangOption(i,p,"value")},{default:m(()=>[b("Lang")]),_:2},1032,["value","onInput"])])])]),t("td",xo,[t("a",{href:"#revemoProperty",class:"is-size-4 has-text-danger",onClick:S(x=>a.removeProperty(p),["prevent"])},[h(u,{icon:"minus"})],8,Lo)])],8,co))),128))])])])])])):_("",!0),h(O,{product:e.product,editable:!0},null,8,["product"]),e.product&&e.product.data&&e.product.data.related&&e.product.data.related.products?(d(),c("section",Io,[h(V,{label:"Enter order codes of related products"},{default:m(()=>[h(g,{modelValue:e.product.data.related.products,"onUpdate:modelValue":s[27]||(s[27]=i=>e.product.data.related.products=i),data:e.filteredProductCodes,autocomplete:"","allow-new":!1,field:"user.first_name",iconPack:"fas",icon:"tags",placeholder:"Related",type:"is-info",onTyping:a.getFilteredRelatedProducts},null,8,["modelValue","data","onTyping"])]),_:1})])):_("",!0),e.product&&e.product!=null&&e.product.data&&e.product.data.related&&e.product.data.related.productResults&&e.product.data.related.productResults.length>0&&o.$store&&o.$store.state&&o.$store.state.coredata?(d(),c("div",ko,[t("div",Ao,[Do,t("div",Vo,[(d(!0),c(w,null,C(e.product.data.related.productResults,(i,p)=>(d(),A(k,{key:i._id+p,class:"tile is-parent is-3",title:i.descriptionShort[e.language.code],to:{name:"productDetail",params:{category:e.parentCategoryDetail.pathSlug,product:i._id,slug:i.slug}}},{default:m(()=>[h(K,{product:i},null,8,["product"])]),_:2},1032,["title","to"]))),128))])])])):_("",!0),e.product&&e.product!=null?(d(),c("div",Eo,[t("div",Uo,[t("section",null,[t("button",{class:"button is-danger",onClick:s[28]||(s[28]=i=>a.deleteProduct()),translate:"yes"},"DELETE This Product"),Fo])])])):_("",!0),h(j,{modal:e.modal},null,8,["modal"])])):_("",!0)}const Ko=U(ct,[["render",No],["__scopeId","data-v-fe49c75b"]]);export{Ko as default};
