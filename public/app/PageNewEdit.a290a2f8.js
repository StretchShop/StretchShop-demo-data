import{E as T,S as A}from"./Sidebar.a07ff89d.js";import{c as h,b as d,w as c,a as t,F as L,r as F,g as P,i as N,h as V,e as C,B as m,H as f,W as U,j as _,o as y,t as I}from"./sett.5bce7c7f.js";import{_ as q}from"./index.14b745c1.js";import"./edit.8b295d88.js";const M={name:"PageNewEdit",data(){return{sidebar:!0,page:null,pageMainImageFile:null,parentCategoryDetail:null,language:{code:"en",longCode:"en-US",name:"English"},newLanguage:null,editor:null,editing:!1,userEditAllowed:!1,filteredCategoriesSlugs:[],filteredPagesSlugs:[],filteredReqProductOrderCodes:[],modal:null,fireCounter:0,dataToGenerateFromName:{slug:!0,externalId:!0}}},components:{editorwrapper:T,sidebar:A},created:function(){this.language=this.$store.state.language},computed:{user(){return this.$store.getters.getUserProfile},editorToolsConfig(){let s=this;return{image:{config:{uploader:{uploadByFile(a){return s.$helpers.uploadFileGlobal("image","pages","pages/upload/"+s.page.data.slug,a,s.$httpc,s.$store)},uploadByUrl(a){}}}},attaches:{config:{uploader:{uploadByFile(a){return s.$helpers.uploadFileGlobal("file","pages","pages/upload/"+s.page.data.slug,a,s.$httpc,s.$store)}}}}}}},beforeRouteLeave(s,a,i){this.eventBus.emit("removeEditor"),i()},watch:{user(s,a){s&&s!==null&&(this.getUserEditAllowed(),this.userEditAllowed&&this.getPageDetail())}},mounted:function(){this.getUserEditAllowed(),this.userEditAllowed&&this.getPageDetail()},methods:{toggleSidebar(){this.sidebar=!this.sidebar},checkLang(){var s,a;if(this.$route.query.lang&&((s=this.$store.state.coredata)==null?void 0:s.langs)){let i=this.$helpers.checkValidLanguageSync(this.$route.query.lang,(a=this.$store.state.coredata)==null?void 0:a.langs);i!=null&&i.valid&&(this.language=i.match)}},getUserEditAllowed(){return this.user&&this.user!==null&&this.user.type&&this.user.type==="admin"?(this.userEditAllowed=!0,!0):(this.userEditAllowed=!1,!1)},getPageDetail:function(){this.checkLang();const s=this;typeof this.$route.params.category>"u"&&(this.$route.params.category="-"),this.$route.params&&this.$route.params.slug&&this.$route.params.slug.toString().trim()!==""&&(this.$route.params.slug.toString().trim()==="---new"?setTimeout(function(){s.page=s.getEmptyPage(),s.eventBus.emit("runEditor")},1e3):this.$httpc.get("pages/"+this.$route.params.category+"/detail/"+this.$route.params.slug+"?lang="+s.language.code).then(function(a){var i,o,e,n,r,g,u,p,v,b;a.data&&(s.page=a.data,((o=(i=s.page)==null?void 0:i.data)==null?void 0:o.name)&&s.$store.state&&typeof s.page.data.name[s.language.code]<"u"&&(document.title=s.page.data.name[s.language.code]+" - StretchShop")),(n=(e=s.page)==null?void 0:e.data)!=null&&n.parentCategoryDetail&&(s.parentCategoryDetail=s.page.data.parentCategoryDetail,delete s.page.data.parentCategoryDetail),(u=(g=(r=s.page.data)==null?void 0:r.data)==null?void 0:g.requirements)!=null&&u.userdata||(s.page.data.data.requirements?(b=(v=(p=s.page.data)==null?void 0:p.data)==null?void 0:v.requirements)!=null&&b.userdata||(s.page.data.data.requirements.userdata=[]):s.page.data.data.requirements={userdata:[]})}).catch(function(a){console.error(a)}).then(function(){s.eventBus.emit("runEditor")}))},changeEditedLang(){this.fireCounter++,this.editing&&this.newLanguage&&this.newLanguage.code&&this.fireCounter===1&&(window.location=window.location.origin+this.$route.path+"?lang="+this.newLanguage.code)},save(s){var o,e,n,r,g,u,p,v,b,S,x,k,l;const a=this;(n=(e=(o=a.page)==null?void 0:o.data)==null?void 0:e.data)!=null&&n.blocks||(a.page.data.data.blocks=[]),((p=(u=(g=(r=a.page)==null?void 0:r.data)==null?void 0:g.data)==null?void 0:u.blocks)==null?void 0:p.length)===0&&a.page.data.data.blocks.push(a.$helpers.getLangsObject(a.$store.state.coredata.langCodes,"<p></p>")),((S=(b=(v=a.page)==null?void 0:v.data)==null?void 0:b.data)==null?void 0:S.blocks[0])&&typeof((l=(k=(x=a.page)==null?void 0:x.data)==null?void 0:k.data)==null?void 0:l.blocks[0][a.language.code])>"u"&&(a.page.data.data.blocks[0]=a.$helpers.getLangsObject(a.$store.state.coredata.langCodes,"<p></p>")),a.page.data.data.blocks[0][a.language.code]=s,this.page&&this.page.data&&this.page.data._id&&!this.page.data.id&&(this.page.data.id=this.page.data._id,delete this.page.data._id);const i={pages:[]};i.pages.push(this.page.data),this.$httpc.put("pages",i,{needsAuth:!0}).then(function(w){if(w.data&&w.data.length>0){const D=w.data[0],E=a.$router.resolve({name:"pageNewEdit",params:{slug:D.slug}});window.location=E.href}}).catch(function(w){console.error("savePage error:",w)})},deletePage(){const a={pages:[{id:this.page._id}]};this.page&&this.page._id&&confirm("Are you sure you want to delete this page?")&&this.$httpc.delete("pages",{data:a}).then(i=>{i&&i.data&&alert("Page has been successfully removed. You will be redirected now")})},getFilteredCategories:function(s){const a=this;return s&&s.toString().trim()!==""?this.$httpc.post("categories/find",{query:{pathSlug:{$regex:s},type:"pages"}}).then(function(i){if(i.data)return i.data}).catch(function(i){console.error(i)}).then(function(i){const o=[];if(a.page.data.categories&&i&&i.categories&&i.categories.length>0)for(let e=0;e<i.categories.length;e++)i.categories[e].pathSlug&&a.page.data.categories.indexOf(i.categories[e].pathSlug)<0&&o.push(i.categories[e].pathSlug);return a.filteredCategoriesSlugs=o,o}):(a.filteredCategoriesSlugs=[],[])},getFilteredPages:function(s){const a=this;return s&&s.toString().trim()!==""?this.$httpc.post("pages/listTemplates/"+a.page.data.slug,{query:{slug:s}}).then(function(i){if(i.data)return i.data}).catch(function(i){console.error(i)}).then(function(i){const o=[];if(a.page.data.pages&&i&&i.length>0)for(let e=0;e<i.length;e++)a.page.data.pages.indexOf(i[e])<0&&o.push(i[e]);return a.filteredPagesSlugs=o,o}):(a.filteredPagesSlugs=[],[])},getFilteredProducts:function(s){const a=this;return s&&s.toString().trim()!==""?this.$httpc.post("products/find",{query:{orderCode:{$regex:s},"data.contentDependency":!0}}).then(function(i){if(i.data)return i.data}).catch(function(i){console.error(i)}).then(function(i){const o=[];if(a.page.data.pages&&i&&i.length>0)for(let e=0;e<i.length;e++)a.page.data.pages.indexOf(i[e])<0&&o.push(i[e].orderCode);return a.filteredReqProductOrderCodes=o,o}):(a.filteredReqProductOrderCodes=[],[])},getEmptyPage(){const s=this;return{body:'<div data-editable data-name="content"><p>Your content here</p></div>',data:{externalId:null,variationGroupId:null,slug:null,publisher:s.user.email,authors:null,type:"page",subtype:"default",name:s.$helpers.getLangsObject(s.$store.state.coredata.langCodes),descriptionShort:s.$helpers.getLangsObject(s.$store.state.coredata.langCodes),descriptionLong:s.$helpers.getLangsObject(s.$store.state.coredata.langCodes),properties:null,data:{blocks:[s.$helpers.getLangsObject(s.$store.state.coredata.langCodes,"<p></p>")]},categories:[],pages:[],dates:{dateCreated:null,dateUpdated:null,dateSynced:null},note:null,activity:null}}},checkNameDependents(){if(this.page&&this.page.data&&!this.page.data._id){let s=this.language&&this.language.code?this.language.code:null;this.newLanguage&&this.newLanguage.code&&(s=this.newLanguage.code),this.page.data.name&&this.page.data.name[s]&&this.page.data.name[s].trim()!==""&&((this.page.data.slug&&this.page.data.slug.trim()===""||this.dataToGenerateFromName.slug)&&(this.page.data.slug=this.$helpers.stringToSlug(this.page.data.name[s]),this.dataToGenerateFromName.slug=!0),(this.page.data.externalId&&this.page.data.externalId.trim()===""||this.dataToGenerateFromName.externalId)&&(this.page.data.externalId=this.$helpers.stringToSlug(this.page.data.name[s]),this.dataToGenerateFromName.externalId=!0))}},getActivity(){const s={start:null,end:null};return this.page&&this.page.data&&this.page.data!==null&&this.page.data.activity&&this.page.data.activity!==null&&(this.page.data.activity.start&&this.page.data.activity.start.toString().trim()!==""&&(s.start=new Date(this.page.data.activity.start)),this.page.data.activity.end&&this.page.data.activity.end.toString().trim()!==""&&(s.end=new Date(this.page.data.activity.end))),s},setActivity(s,a){a&&this.page&&this.page.data&&this.page.data!==null&&(this.page.data.activity||(this.page.data.activity={start:null,end:null}),this.page.data.activity[s]=a)},getPageImagePath(s){return s&&this.$store.state.coredata&&this.$store.state.coredata.settings&&this.$store.state.coredata.settings.assets&&this.$store.state.coredata.settings.assets.url?this.$helpers.getImagePath("pages",this.$store.state.coredata,"cover/"+s,"cover.jpg"):null},pageMainImageDelete(){const s=this;if(confirm("Are you sure?")){const a={timeout:15e3,needsAuth:!0},i=this.getPageImagePath(this.page.data.slug);let o="";if(i.trim()!==""){const e=i.split("/");e.length>0&&(o=e[e.length-1])}console.debug(s.page.data.slug,i),this.$httpc.delete("user/image/pages/"+this.page.data.slug+"/"+o,a).then(function(e){if(e&&e.data&&e.data.success){const n=new Date;s.$el.querySelector(".page-detail-cover").style.backgroundImage="url('"+s.getPageImagePath(s.page.data.slug)+"?"+n.getTime()+"')"}})}},pageMainImageUpload(s){if(this.pageMainImageFile=s.target.files,this.pageMainImageFile){const i=this,o=new FormData;if(this.pageMainImageFile.length&&this.pageMainImageFile.length>0)for(var a=0;a<this.pageMainImageFile.length;a++){const e=this.pageMainImageFile[a];o.append("files["+a+"]",e)}else o.append("files[0]",this.pageMainImageFile);this.$httpc.post("/pages/upload/"+this.page.data.slug+"/main",o,{needsAuth:!0}).then(function(e){if(e&&e.data&&e.data.substr(0,1)==="'"&&e.data[e.data.length-1]==="'"){const n=e.data.length-2;if(e.data=e.data.substr(1,n),e.data=JSON.parse(e.data),e.data.files&&e.data.files.length>0&&e.data.files[0].path&&e.data.files[0].path.trim()!==""){const r=i.$el.querySelector(".page-detail-cover");if(r){const g=new Date;r.style.backgroundImage="url('"+i.$store.state.coredata.settings.assets.url+"/pages/cover/"+e.data.files[0].path+"?"+g.getTime()+"')"}}}})}}}},O={key:0,id:"page-new-edit",class:"container page-detail"},B={class:"page-categories-related"},j={class:"title is-3","aria-controls":"contentCategoriesRelated"},R=t("span",{translate:"yes"},"Categories & Related Pages",-1),G={class:"categoriesRelated-hidden collapse-content",id:"contentCategoriesRelated","aria-expanded":"true"},H={class:"container is-fluid p-3"},z={class:"columns"},W={class:"column"},Y={class:"columns"},J={class:"column"},K={class:"page-hidden-properties"},Q={class:"title is-3","aria-controls":"contentHiddenProperties"},X=t("span",{translate:"yes"},"Page's hidden properties",-1),Z={class:"editableByAuthor-hidden collapse-content",id:"contentHiddenProperties","aria-expanded":"true"},$={class:"container is-fluid p-3"},ee={class:"columns"},te={class:"column"},ae={class:"field"},se=t("label",{class:"label",translate:"yes"},"Type",-1),ie={class:"control"},le={class:"columns"},ne={class:"column"},oe={class:"field"},de=t("label",{class:"label",translate:"yes"},"Subtype",-1),re={class:"control"},ce={class:"columns"},ge={class:"column"},ue={class:"field"},pe=t("label",{class:"label",translate:"yes"},"External Id",-1),he={class:"control"},me={class:"columns"},fe={class:"column"},_e={class:"field"},ye=t("label",{class:"label",translate:"yes"},"Slug",-1),ve={class:"control"},be={class:"columns"},we={class:"column"},Pe={class:"field"},Ce=t("label",{class:"label",translate:"yes"},"Note",-1),xe={class:"control"},Se={key:0},ke={class:"columns"},Ie={class:"column"},De={class:"field"},Ee=t("label",{class:"label",translate:"yes"},"Activity Start",-1),Te={class:"control"},Ae={class:"columns"},Le={class:"column"},Fe={class:"field"},Ne=t("label",{class:"label",translate:"yes"},"Activity End",-1),Ve={class:"control"},Ue={key:0},qe={class:"title is-3","aria-controls":"contentHiddenProperties",translate:"yes"},Me=t("span",{traslate:"yes"},"Editable by admin user",-1),Oe={class:"editableByAdmin-hidden"},Be={class:"container is-fluid p-3"},je={class:"columns"},Re={class:"column"},Ge={class:"field"},He=t("label",{class:"label",translate:"yes"},"Publisher",-1),ze={class:"control"},We={class:"columns"},Ye={class:"column"},Je=t("p",{class:"has-text-info"},"Note: Product must have Content Dependency checked in product settings!",-1),Ke={class:"columns"},Qe={class:"column is-12"},Xe={class:"page-image-wrapper"},Ze={class:"columns is-centered pb-0"},$e={class:"column is-6"},et={key:0,class:"breadcrumb","aria-label":"breadcrumbs"},tt={key:0},at={class:"is-active"},st={class:"columns is-centered page-detail-cover-wrapper mt-0"},it={class:"page-image-actions"},lt={class:"file is-primary action edit"},nt={class:"file-label"},ot=U('<span class="file-cta"><span class="file-icon"><i class="fa fa-file-upload"></i></span><span class="file-label show-on-hover" translate="yes"> \xA0Click to upload <span class="recommended-size">min 684 x 300 px</span></span></span>',1),dt=t("i",{class:"fa fa-trash"},null,-1),rt=t("span",{class:"show-on-hover",translate:"yes"},"Click to remove",-1),ct={class:"columns"},gt={class:"column is-offset-3 is-6"},ut={key:0,class:"data-main"},pt={class:"field"},ht=t("label",{class:"label",translate:"yes"},"Name",-1),mt={class:"control"},ft={class:"field"},_t=t("label",{class:"label",translate:"yes"},"Description Short",-1),yt={class:"control"},vt={class:"field"},bt=t("label",{class:"label",translate:"yes"},"Description Long",-1),wt={class:"control"},Pt={key:0,class:"columns page-delete"},Ct={class:"column is-12"},xt=t("p",{translate:"yes"},"Warning: This action cannot be undone!",-1);function St(s,a,i,o,e,n){const r=_("font-awesome-icon"),g=_("o-inputitems"),u=_("o-field"),p=_("o-collapse"),v=_("o-datetimepicker"),b=_("o-datepicker"),S=_("sidebar"),x=_("router-link"),k=_("editorwrapper");return e.page?(y(),h("div",O,[d(S,{fullheight:!0,overlay:!1,right:!0,open:e.sidebar,canCancel:!1},{default:c(()=>[t("div",B,[d(p,{open:!0,"aria-id":"contentCategoriesRelated"},{trigger:c(l=>[t("h3",j,[R,C(),d(r,{icon:l.open?"angle-down":"angle-up"},null,8,["icon"])])]),default:c(()=>[t("div",G,[t("div",H,[t("div",z,[t("div",W,[t("section",null,[d(u,{label:"Enter categories' url slugs"},{default:c(()=>[d(g,{modelValue:e.page.data.categories,"onUpdate:modelValue":a[0]||(a[0]=l=>e.page.data.categories=l),data:e.filteredCategoriesSlugs,autocomplete:"","allow-new":!1,iconPack:"fas",icon:"tags",placeholder:"Categories",type:"is-info",onTyping:n.getFilteredCategories},null,8,["modelValue","data","onTyping"])]),_:1})])])]),t("div",Y,[t("div",J,[t("section",null,[d(u,{label:"Enter related pages' url slugs"},{default:c(()=>[d(g,{modelValue:e.page.data.pages,"onUpdate:modelValue":a[1]||(a[1]=l=>e.page.data.pages=l),data:e.filteredPagesSlugs,autocomplete:"",field:"pathSlug","allow-new":!0,iconPack:"fas",icon:"tags",placeholder:"Pages",type:"is-info",onTyping:n.getFilteredPages},null,8,["modelValue","data","onTyping"])]),_:1})])])])])])]),_:1})]),t("div",K,[d(p,{open:!0,"aria-id":"contentHiddenProperties"},{trigger:c(l=>[t("h3",Q,[X,C(),d(r,{icon:l.open?"angle-down":"angle-up"},null,8,["icon"])])]),default:c(()=>[t("div",Z,[t("div",$,[t("div",ee,[t("div",te,[t("div",ae,[se,t("div",ie,[m(t("input",{class:"input",type:"text","onUpdate:modelValue":a[2]||(a[2]=l=>e.page.data.type=l),translate:"yes",placeholder:"Type"},null,512),[[f,e.page.data.type]])])])])]),t("div",le,[t("div",ne,[t("div",oe,[de,t("div",re,[m(t("input",{class:"input",type:"text","onUpdate:modelValue":a[3]||(a[3]=l=>e.page.data.subtype=l),translate:"yes",placeholder:"Subtype"},null,512),[[f,e.page.data.subtype]])])])])]),t("div",ce,[t("div",ge,[t("div",ue,[pe,t("div",he,[m(t("input",{class:"input",type:"text","onUpdate:modelValue":a[4]||(a[4]=l=>e.page.data.externalId=l),translate:"yes",placeholder:"External Id"},null,512),[[f,e.page.data.externalId]])])])])]),t("div",me,[t("div",fe,[t("div",_e,[ye,t("div",ve,[m(t("input",{class:"input",type:"text","onUpdate:modelValue":a[5]||(a[5]=l=>e.page.data.slug=l),translate:"yes",placeholder:"Slug"},null,512),[[f,e.page.data.slug]])])])])]),t("div",be,[t("div",we,[t("div",Pe,[Ce,t("div",xe,[m(t("textarea",{class:"textarea","onUpdate:modelValue":a[6]||(a[6]=l=>e.page.data.note=l),translate:"yes",placeholder:"Note"},null,512),[[f,e.page.data.note]])])])])]),e.page&&e.page.data?(y(),h("div",Se,[t("div",ke,[t("div",Ie,[t("div",De,[Ee,t("div",Te,[d(v,{value:n.getActivity().start,onInput:a[7]||(a[7]=l=>n.setActivity("start",l)),placeholder:"Activity Start DateTime",iconPack:"fa",icon:"calendar-alt",iconPrev:"angle-left",iconNext:"angle-right",position:"bottom-left","trap-focus":""},null,8,["value"])])])])]),t("div",Ae,[t("div",Le,[t("div",Fe,[Ne,t("div",Ve,[d(b,{value:n.getActivity().end,onInput:a[8]||(a[8]=l=>n.setActivity("end",l)),placeholder:"Activity End DateTime",iconPack:"fa",icon:"calendar-alt",iconPrev:"angle-left",iconNext:"angle-right",position:"bottom-left","trap-focus":""},null,8,["value"])])])])])])):P("",!0)])])]),_:1}),n.user&&n.user!=null&&n.user.type&&n.user.type=="admin"?(y(),h("div",Ue,[d(p,{open:!0,"aria-id":"contentHiddenPropertiesAdmin"},{trigger:c(l=>[t("h3",qe,[Me,C(),d(r,{icon:l.open?"angle-down":"angle-up"},null,8,["icon"])])]),default:c(()=>[t("div",Oe,[t("div",Be,[t("div",je,[t("div",Re,[t("div",Ge,[He,t("div",ze,[m(t("input",{class:"input",type:"text","onUpdate:modelValue":a[9]||(a[9]=l=>e.page.data.publisher=l),translate:"yes",placeholder:"Publisher"},null,512),[[f,e.page.data.publisher]])])])])]),t("div",We,[t("div",Ye,[t("section",null,[d(u,{label:"Enter order code of required products"},{default:c(()=>[d(g,{modelValue:e.page.data.data.requirements.userdata.products,"onUpdate:modelValue":a[10]||(a[10]=l=>e.page.data.data.requirements.userdata.products=l),data:e.filteredReqProductOrderCodes,autocomplete:"",field:"orderCode","allow-new":!0,iconPack:"fas",icon:"tags",placeholder:"Products",type:"is-info",onTyping:n.getFilteredProducts},null,8,["modelValue","data","onTyping"])]),_:1}),Je])])])])])]),_:1})])):P("",!0)])]),_:1},8,["open"]),t("div",Ke,[t("div",Qe,[t("div",Xe,[t("div",Ze,[t("div",$e,[e.parentCategoryDetail?(y(),h("nav",et,[e.parentCategoryDetail.parentCategories?(y(),h("ul",tt,[(y(!0),h(L,null,F(e.parentCategoryDetail.parentCategories,(l,w)=>(y(),h("li",{key:w},[d(x,{title:l.name[e.language.code],to:{name:"categoryList",params:{category:l.pathSlug}}},{default:c(()=>[C(I(l.name[e.language.code]),1)]),_:2},1032,["title","to"])]))),128)),t("li",at,[d(x,{title:e.parentCategoryDetail.name[e.language.code],to:{name:"categoryList",params:{category:e.parentCategoryDetail.pathSlug}},"aria-current":"page"},{default:c(()=>[C(I(e.parentCategoryDetail.name[e.language.code]),1)]),_:1},8,["title","to"])])])):P("",!0)])):P("",!0)])]),t("div",st,[t("div",{class:"column is-6 page-detail-cover",style:N("background-image: url("+n.getPageImagePath(e.page.data.slug)+")")},[t("div",it,[t("div",lt,[t("label",nt,[t("input",{class:"file-input",type:"file",name:"resume",onInput:a[11]||(a[11]=l=>n.pageMainImageUpload(l))},null,32),ot])]),t("a",{class:"action remove button is-danger has-text-white",onClick:a[12]||(a[12]=V(l=>n.pageMainImageDelete(),["prevent"]))},[dt,C("\xA0 "),rt])])],4)])])])]),t("div",ct,[t("div",gt,[e.page&&e.page.data&&e.page.data!=null?(y(),h("div",ut,[t("div",pt,[ht,t("div",mt,[m(t("input",{class:"input is-size-1 has-text-weight-semibold has-text-centered",type:"text","onUpdate:modelValue":a[13]||(a[13]=l=>e.page.data.name[e.language.code]=l),onKeyup:a[14]||(a[14]=l=>n.checkNameDependents()),translate:"yes",placeholder:"Name"},null,544),[[f,e.page.data.name[e.language.code]]])])]),t("div",ft,[_t,t("div",yt,[m(t("input",{class:"input is-size-5 has-text-weight-normal has-text-centered",type:"text","onUpdate:modelValue":a[15]||(a[15]=l=>e.page.data.descriptionShort[e.language.code]=l),translate:"yes",placeholder:"Description Short"},null,512),[[f,e.page.data.descriptionShort[e.language.code]]])])]),t("div",vt,[bt,t("div",wt,[m(t("input",{class:"input is-size-5 has-text-weight-normal has-text-centered",type:"text","onUpdate:modelValue":a[16]||(a[16]=l=>e.page.data.descriptionLong[e.language.code]=l),translate:"yes",placeholder:"Description Long"},null,512),[[f,e.page.data.descriptionLong[e.language.code]]])])])])):P("",!0),d(k,{type:"editorjs",editordata:{editorjs:{setup:n.editorToolsConfig,data:e.page.data.data.blocks[0][e.language.code]}}},null,8,["editordata"])])]),e.page&&e.page!=null?(y(),h("div",Pt,[t("div",Ct,[t("section",null,[t("button",{class:"button is-danger",onClick:a[17]||(a[17]=l=>n.deletePage()),translate:"yes"},"DELETE This Page"),xt])])])):P("",!0)])):P("",!0)}const Tt=q(M,[["render",St]]);export{Tt as default};
