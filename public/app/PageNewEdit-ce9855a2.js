import{E as F,S as U}from"./Sidebar-f26f5961.js";import{r as C,c as m,b as d,w as c,a as s,F as q,d as M,h as u,j as O,i as R,f as k,G as f,L as _,_ as B,o as v,t as N}from"./sett-20862007.js";import{_ as j}from"./index-7793c70e.js";import"./edit-bbc6728f.js";const G={name:"PageNewEdit",data(){return{sidebar:!0,page:null,pageMainImageFile:null,parentCategoryDetail:null,language:{code:"en",longCode:"en-US",name:"English"},newLanguage:null,editor:null,editing:!1,userEditAllowed:!1,filteredCategoriesSlugs:[],filteredPagesSlugs:[],filteredReqProductOrderCodes:[],modal:null,fireCounter:0,dataToGenerateFromName:{slug:!0,externalId:!0},activity:{start:null,end:null},timeoutCursors:{name:null}}},components:{editorwrapper:F,sidebar:U},created:function(){this.language=this.$store.state.language},computed:{user(){return this.$store.getters.getUserProfile},editorToolsConfig(){let e=this;return{image:{config:{uploader:{uploadByFile(a){return e.$helpers.uploadFileGlobal("image","pages","pages/upload/"+e.page.data.slug,a,e.$httpc,e.$store)},uploadByUrl(a){}}}},attaches:{config:{uploader:{uploadByFile(a){return e.$helpers.uploadFileGlobal("file","pages","pages/upload/"+e.page.data.slug,a,e.$httpc,e.$store)}}}}}}},beforeRouteLeave(e,a,i){console.log("leaving removeEditor()"),this.eventBus.emit("removeEditor"),i()},watch:{user(e,a){e&&e!==null&&(this.getUserEditAllowed(),this.userEditAllowed&&this.getPageDetail())}},mounted:function(){this.getUserEditAllowed(),this.userEditAllowed&&this.getPageDetail()},methods:{toggleSidebar(){this.sidebar=!this.sidebar},checkLang(){var e,a;if(this.$route.query.lang&&((e=this.$store.state.coredata)!=null&&e.langs)){let i=this.$helpers.checkValidLanguageSync(this.$route.query.lang,(a=this.$store.state.coredata)==null?void 0:a.langs);i!=null&&i.valid&&(this.language=i.match)}},getUserEditAllowed(){return this.user&&this.user!==null&&this.user.type&&this.user.type==="admin"?(this.userEditAllowed=!0,!0):(this.userEditAllowed=!1,!1)},getPageDetail:function(){this.checkLang();const e=this;typeof this.$route.params.category>"u"&&(this.$route.params.category="-"),this.$route.params&&this.$route.params.slug&&this.$route.params.slug.toString().trim()!==""&&(this.$route.params.slug.toString().trim()==="---new"?(e.page=e.getEmptyPage(),setTimeout(function(){e.eventBus.emit("runEditor")},1e3)):this.$httpc.get("pages/"+this.$route.params.category+"/detail/"+this.$route.params.slug+"?lang="+e.language.code).then(function(a){var i,l,t,n,r,g,p,h,y,P,b,S,o,x,w,D,E,I,T,A,V,L;a.data&&(e.page=a.data,(l=(i=e.page)==null?void 0:i.data)!=null&&l.name&&e.$store.state&&typeof e.page.data.name[e.language.code]<"u"&&(document.title=e.page.data.name[e.language.code]+" - StretchShop")),(n=(t=e.page)==null?void 0:t.data)!=null&&n.parentCategoryDetail&&(e.parentCategoryDetail=e.page.data.parentCategoryDetail,delete e.page.data.parentCategoryDetail),((p=(g=(r=e.page)==null?void 0:r.data)==null?void 0:g.activity)!=null&&p.start||(P=(y=(h=e.page)==null?void 0:h.data)==null?void 0:y.activity)!=null&&P.end)&&((o=(S=(b=e.page)==null?void 0:b.data)==null?void 0:S.activity)!=null&&o.start&&(e.page.data.activity.start=new Date(e.page.data.activity.start)),(D=(w=(x=e.page)==null?void 0:x.data)==null?void 0:w.activity)!=null&&D.end&&(e.page.data.activity.end=new Date(e.page.data.activity.end)),e.activity=e.page.data.activity),(T=(I=(E=e.page.data)==null?void 0:E.data)==null?void 0:I.requirements)!=null&&T.userdata||(e.page.data.data.requirements?(L=(V=(A=e.page.data)==null?void 0:A.data)==null?void 0:V.requirements)!=null&&L.userdata||(e.page.data.data.requirements.userdata=[]):e.page.data.data.requirements={userdata:[]})}).catch(function(a){console.error(a)}).then(function(){e.eventBus.emit("runEditor")}))},changeEditedLang(){this.fireCounter++,this.editing&&this.newLanguage&&this.newLanguage.code&&this.fireCounter===1&&(window.location=window.location.origin+this.$route.path+"?lang="+this.newLanguage.code)},save(e){var l,t,n,r,g,p,h,y,P,b,S,o,x;const a=this;(n=(t=(l=a.page)==null?void 0:l.data)==null?void 0:t.data)!=null&&n.blocks||(a.page.data.data.blocks=[]),((h=(p=(g=(r=a.page)==null?void 0:r.data)==null?void 0:g.data)==null?void 0:p.blocks)==null?void 0:h.length)===0&&a.page.data.data.blocks.push(a.$helpers.getLangsObject(a.$store.state.coredata.langCodes,"<p></p>")),(b=(P=(y=a.page)==null?void 0:y.data)==null?void 0:P.data)!=null&&b.blocks[0]&&typeof((x=(o=(S=a.page)==null?void 0:S.data)==null?void 0:o.data)==null?void 0:x.blocks[0][a.language.code])>"u"&&(a.page.data.data.blocks[0]=a.$helpers.getLangsObject(a.$store.state.coredata.langCodes,"<p></p>")),e&&(a.page.data.data.blocks[0][a.language.code]=e),this.page&&this.page.data&&this.page.data._id&&!this.page.data.id&&(this.page.data.id=this.page.data._id,delete this.page.data._id);const i={pages:[]};i.pages.push(this.page.data),this.$httpc.put("pages",i,{needsAuth:!0}).then(function(w){if(w.data&&w.data.length>0){const D=w.data[0],E=a.$router.resolve({name:"pageNewEdit",params:{slug:D.slug}});window.location=E.href}}).catch(function(w){console.error("savePage error:",w)})},deletePage(){var i,l;const a={pages:[{id:this.page.data._id}]};(l=(i=this.page)==null?void 0:i.data)!=null&&l._id&&confirm("Are you sure you want to delete this page?")&&this.$httpc.delete("pages",{data:a}).then(t=>{t&&t.data&&(alert("Page has been successfully removed. Confirm to be redirected."),this.$router.push({name:"pageNewEdit",params:{slug:"---new"}}))})},getFilteredCategories:function(e){const a=this;return e&&e.toString().trim()!==""?this.$httpc.post("categories/find",{query:{pathSlug:{$regex:e},type:"pages"}}).then(function(i){if(i.data)return i.data}).catch(function(i){console.error(i)}).then(function(i){const l=[];if(a.page.data.categories&&i&&i.categories&&i.categories.length>0)for(let t=0;t<i.categories.length;t++)i.categories[t].pathSlug&&a.page.data.categories.indexOf(i.categories[t].pathSlug)<0&&l.push(i.categories[t].pathSlug);return a.filteredCategoriesSlugs=l,l}):(a.filteredCategoriesSlugs=[],[])},getFilteredPages:function(e){const a=this;return e&&e.toString().trim()!==""?this.$httpc.post("pages/listTemplates/"+a.page.data.slug,{query:{slug:e}}).then(function(i){if(i.data)return i.data}).catch(function(i){console.error(i)}).then(function(i){const l=[];if(a.page.data.pages&&i&&i.length>0)for(let t=0;t<i.length;t++)a.page.data.pages.indexOf(i[t])<0&&l.push(i[t]);return a.filteredPagesSlugs=l,l}):(a.filteredPagesSlugs=[],[])},getFilteredProducts:function(e){const a=this;return e&&e.toString().trim()!==""?this.$httpc.post("products/find",{query:{orderCode:{$regex:e},"data.contentDependency":!0}}).then(function(i){if(i.data)return i.data}).catch(function(i){console.error(i)}).then(function(i){const l=[];if(a.page.data.pages&&i&&i.length>0)for(let t=0;t<i.length;t++)a.page.data.pages.indexOf(i[t])<0&&l.push(i[t].orderCode);return a.filteredReqProductOrderCodes=l,l}):(a.filteredReqProductOrderCodes=[],[])},getEmptyPage(){const e=this;return{body:'<div data-editable data-name="content"><p>Your content here</p></div>',data:{externalId:null,variationGroupId:null,slug:null,publisher:e.user.email,authors:null,type:"page",subtype:"default",name:e.$helpers.getLangsObject(e.$store.state.coredata.langCodes),descriptionShort:e.$helpers.getLangsObject(e.$store.state.coredata.langCodes),descriptionLong:e.$helpers.getLangsObject(e.$store.state.coredata.langCodes),properties:null,data:{blocks:[e.$helpers.getLangsObject(e.$store.state.coredata.langCodes,"<p></p>")],requirements:{userdata:{products:[]}}},categories:[],pages:[],dates:{dateCreated:null,dateUpdated:null,dateSynced:null},note:null,activity:null}}},checkNameDependents(){let e=this;this.timeoutCursors.name&&clearTimeout(this.timeoutCursors.name),this.timeoutCursors.name=setTimeout(function(){if(e.page&&e.page.data&&!e.page.data._id){let a=e.language&&e.language.code?e.language.code:null;e.newLanguage&&e.newLanguage.code&&(a=e.newLanguage.code),e.page.data.name&&e.page.data.name[a]&&e.page.data.name[a].trim()!==""&&((e.page.data.slug&&e.page.data.slug.trim()===""||e.dataToGenerateFromName.slug)&&(e.page.data.slug=e.$helpers.stringToSlug(e.page.data.name[a]),e.dataToGenerateFromName.slug=!0),(e.page.data.externalId&&e.page.data.externalId.trim()===""||e.dataToGenerateFromName.externalId)&&(e.page.data.externalId=e.$helpers.stringToSlug(e.page.data.name[a]),e.dataToGenerateFromName.externalId=!0))}},1e3)},getActivity(){const e={start:null,end:null};return this.page&&this.page.data&&this.page.data!==null&&this.page.data.activity&&this.page.data.activity!==null&&(this.page.data.activity.start&&this.page.data.activity.start.toString().trim()!==""&&(e.start=new Date(this.page.data.activity.start)),this.page.data.activity.end&&this.page.data.activity.end.toString().trim()!==""&&(e.end=new Date(this.page.data.activity.end))),e},setActivity(e){console.log("#1: ",this.activity),this.activity[e]&&this.page&&this.page.data&&this.page.data!==null&&(console.log("#2: ",this.page.data.activity),this.page.data.activity||(console.log("#3"),this.page.data.activity={start:null,end:null}),console.log("#4 type/date: ",e,this.activity[e]),this.page.data.activity[e]=this.activity[e])},getPageImagePath(e){var a,i,l;return e&&this.$store.state.coredata&&this.$store.state.coredata.settings&&this.$store.state.coredata.settings.assets&&this.$store.state.coredata.settings.assets.url?this.$helpers.getImagePath("pages",this.$store.state.coredata,"cover/"+e,"cover.jpg")+"?"+new Date((l=(i=(a=this.page)==null?void 0:a.data)==null?void 0:i.dates)==null?void 0:l.dateUpdated).getTime():null},pageMainImageDelete(){const e=this;if(confirm("Are you sure?")){const a={timeout:15e3,needsAuth:!0},i=this.getPageImagePath(this.page.data.slug);let l="";if(i.trim()!==""){const t=i.split("/");t.length>0&&(l=t[t.length-1])}console.debug(e.page.data.slug,i),this.$httpc.delete("user/image/pages/"+this.page.data.slug+"/"+l,a).then(function(t){t&&t.data&&t.data.success&&(e.$el.querySelector(".page-detail-cover").style.backgroundImage="none")})}},pageMainImageUpload(e){if(this.pageMainImageFile=e.target.files,this.pageMainImageFile){const i=this,l=new FormData;if(this.pageMainImageFile.length&&this.pageMainImageFile.length>0)for(var a=0;a<this.pageMainImageFile.length;a++){const t=this.pageMainImageFile[a];l.append("files["+a+"]",t)}else l.append("files[0]",this.pageMainImageFile);this.$httpc.post("/pages/upload/"+this.page.data.slug+"/main",l,{needsAuth:!0}).then(function(t){if(t&&t.data&&t.data.substr(0,1)==="'"&&t.data[t.data.length-1]==="'"){const n=t.data.length-2;if(t.data=t.data.substr(1,n),t.data=JSON.parse(t.data),t.data.files&&t.data.files.length>0&&t.data.files[0].path&&t.data.files[0].path.trim()!==""){const r=i.$el.querySelector(".page-detail-cover");if(r){const g=new Date;r.style.backgroundImage="url('"+i.$store.state.coredata.settings.assets.url+"/pages/cover/"+t.data.files[0].path+"?"+g.getTime()+"')"}}}})}}}},H={key:0,id:"page-new-edit",class:"container page-detail"},z={class:"page-categories-related"},W={class:"title is-3","aria-controls":"contentCategoriesRelated"},J=s("span",{translate:"yes"},"Categories & Related Pages",-1),K={class:"categoriesRelated-hidden collapse-content",id:"contentCategoriesRelated","aria-expanded":"true"},Y={class:"container is-fluid p-3"},Q={class:"columns"},X={class:"column"},Z={class:"autofield categories"},$={class:"columns"},ee={class:"column"},te={class:"autofield related"},ae={class:"page-hidden-properties"},se={class:"title is-3","aria-controls":"contentHiddenProperties"},ie=s("span",{translate:"yes"},"Page's hidden properties",-1),oe={class:"editableByAuthor-hidden collapse-content",id:"contentHiddenProperties","aria-expanded":"true"},le={class:"container is-fluid p-3"},ne={class:"columns"},de={class:"column"},re={class:"field type"},ce=s("label",{class:"label",translate:"yes"},"Type",-1),ge={class:"control"},ue={class:"columns"},pe={class:"column"},he={class:"field subtype"},me=s("label",{class:"label",translate:"yes"},"Subtype",-1),fe={class:"control"},_e={class:"columns"},ve={class:"column"},ye={class:"field externalId"},be=s("label",{class:"label",translate:"yes"},"External Id",-1),we={class:"control"},Ce={class:"columns"},Pe={class:"column"},Se={class:"field slug"},xe=s("label",{class:"label",translate:"yes"},"Slug",-1),ke={class:"control"},De={class:"columns"},Ee={class:"column"},Ie={class:"field note"},Te=s("label",{class:"label",translate:"yes"},"Note",-1),Ae={class:"control"},Ve={key:0},Le={class:"columns"},Ne={class:"column"},Fe={class:"field dateStart"},Ue=s("label",{class:"label",translate:"yes"},"Activity Start",-1),qe={class:"control"},Me={class:"columns"},Oe={class:"column"},Re={class:"field dateEnd"},Be=s("label",{class:"label",translate:"yes"},"Activity End",-1),je={class:"control"},Ge={key:0},He={class:"title is-3","aria-controls":"contentHiddenProperties",translate:"yes"},ze=s("span",{traslate:"yes"},"Editable by admin user",-1),We={class:"editableByAdmin-hidden"},Je={class:"container is-fluid p-3"},Ke={class:"columns"},Ye={class:"column"},Qe={class:"field publisher"},Xe=s("label",{class:"label",translate:"yes"},"Publisher",-1),Ze={class:"control"},$e={class:"columns"},et={class:"column"},tt={class:"autofield products"},at=s("p",{class:"has-text-info"},"Note: Product must have Content Dependency checked in product settings!",-1),st={class:"columns"},it={class:"column is-12"},ot={class:"page-image-wrapper"},lt={class:"columns is-centered pb-0"},nt={class:"column is-6"},dt={key:0,class:"breadcrumb","aria-label":"breadcrumbs"},rt={key:0},ct={class:"is-active"},gt={class:"columns is-centered page-detail-cover-wrapper mt-0"},ut={class:"page-image-actions"},pt={class:"file is-primary action edit"},ht={class:"file-label"},mt=B('<span class="file-cta"><span class="file-icon"><i class="fa fa-file-upload"></i></span><span class="file-label show-on-hover" translate="yes">  Click to upload <span class="recommended-size">min 684 x 300 px</span></span></span>',1),ft=s("i",{class:"fa fa-trash"},null,-1),_t=s("span",{class:"show-on-hover",translate:"yes"},"Click to remove",-1),vt={class:"columns"},yt={class:"column is-offset-3 is-6"},bt={key:0,class:"data-main"},wt={class:"field name"},Ct=s("label",{class:"label",translate:"yes"},"Name",-1),Pt={class:"control"},St={class:"field descriptionShort"},xt=s("label",{class:"label",translate:"yes"},"Description Short",-1),kt={class:"control"},Dt={class:"field descriptionLong"},Et=s("label",{class:"label",translate:"yes"},"Description Long",-1),It={class:"control"},Tt={key:0,class:"columns page-delete"},At={class:"column is-12"},Vt=s("p",{translate:"yes"},"Warning: This action cannot be undone!",-1);function Lt(e,a,i,l,t,n){const r=C("font-awesome-icon"),g=C("o-inputitems"),p=C("o-field"),h=C("o-collapse"),y=C("o-datetimepicker"),P=C("sidebar"),b=C("router-link"),S=C("editorwrapper");return t.page?(v(),m("div",H,[d(P,{fullheight:!0,overlay:!1,right:!0,open:t.sidebar,canCancel:!1},{default:c(()=>[s("div",z,[d(h,{open:!0,"aria-id":"contentCategoriesRelated"},{trigger:c(o=>[s("h3",W,[J,k(),d(r,{icon:o.open?"angle-down":"angle-up"},null,8,["icon"])])]),default:c(()=>[s("div",K,[s("div",Y,[s("div",Q,[s("div",X,[s("section",Z,[d(p,{label:"Enter categories' url slugs"},{default:c(()=>[d(g,{modelValue:t.page.data.categories,"onUpdate:modelValue":a[0]||(a[0]=o=>t.page.data.categories=o),data:t.filteredCategoriesSlugs,autocomplete:"","allow-new":!1,iconPack:"fas",icon:"tags",placeholder:"Categories",type:"is-info",onTyping:n.getFilteredCategories},null,8,["modelValue","data","onTyping"])]),_:1})])])]),s("div",$,[s("div",ee,[s("section",te,[d(p,{label:"Enter related pages' url slugs"},{default:c(()=>[d(g,{modelValue:t.page.data.pages,"onUpdate:modelValue":a[1]||(a[1]=o=>t.page.data.pages=o),data:t.filteredPagesSlugs,autocomplete:"",field:"pathSlug","allow-new":!0,iconPack:"fas",icon:"tags",placeholder:"Pages",type:"is-info",onTyping:n.getFilteredPages},null,8,["modelValue","data","onTyping"])]),_:1})])])])])])]),_:1})]),s("div",ae,[u(" Page hidden properties START "),d(h,{open:!0,"aria-id":"contentHiddenProperties"},{trigger:c(o=>[s("h3",se,[ie,k(),d(r,{icon:o.open?"angle-down":"angle-up"},null,8,["icon"])])]),default:c(()=>[s("div",oe,[s("div",le,[s("div",ne,[s("div",de,[s("div",re,[ce,s("div",ge,[f(s("input",{class:"input",type:"text","onUpdate:modelValue":a[2]||(a[2]=o=>t.page.data.type=o),translate:"yes",placeholder:"Type"},null,512),[[_,t.page.data.type]])])])])]),s("div",ue,[s("div",pe,[s("div",he,[me,s("div",fe,[f(s("input",{class:"input",type:"text","onUpdate:modelValue":a[3]||(a[3]=o=>t.page.data.subtype=o),translate:"yes",placeholder:"Subtype"},null,512),[[_,t.page.data.subtype]])])])])]),s("div",_e,[s("div",ve,[s("div",ye,[be,s("div",we,[f(s("input",{class:"input",type:"text","onUpdate:modelValue":a[4]||(a[4]=o=>t.page.data.externalId=o),translate:"yes",placeholder:"External Id"},null,512),[[_,t.page.data.externalId]])])])])]),s("div",Ce,[s("div",Pe,[s("div",Se,[xe,s("div",ke,[f(s("input",{class:"input",type:"text","onUpdate:modelValue":a[5]||(a[5]=o=>t.page.data.slug=o),translate:"yes",placeholder:"Slug"},null,512),[[_,t.page.data.slug]])])])])]),s("div",De,[s("div",Ee,[s("div",Ie,[Te,s("div",Ae,[f(s("textarea",{class:"textarea","onUpdate:modelValue":a[6]||(a[6]=o=>t.page.data.note=o),translate:"yes",placeholder:"Note"},null,512),[[_,t.page.data.note]])])])])]),t.page&&t.page.data?(v(),m("div",Ve,[s("div",Le,[s("div",Ne,[s("div",Fe,[Ue,s("div",qe,[d(y,{value:n.getActivity().start,onActiveChange:a[7]||(a[7]=o=>n.setActivity("start")),modelValue:t.activity.start,"onUpdate:modelValue":a[8]||(a[8]=o=>t.activity.start=o),placeholder:"Activity Start DateTime",iconPack:"fa",icon:"calendar-alt",iconPrev:"angle-left",iconNext:"angle-right",position:"bottom-left","trap-focus":""},null,8,["value","modelValue"])])])])]),s("div",Me,[s("div",Oe,[s("div",Re,[Be,s("div",je,[d(y,{value:n.getActivity().end,onActiveChange:a[9]||(a[9]=o=>n.setActivity("end")),modelValue:t.activity.end,"onUpdate:modelValue":a[10]||(a[10]=o=>t.activity.end=o),placeholder:"Activity End DateTime",iconPack:"fa",icon:"calendar-alt",iconPrev:"angle-left",iconNext:"angle-right",position:"bottom-left","trap-focus":""},null,8,["value","modelValue"])])])])])])):u("v-if",!0)])])]),_:1}),u(" Page hidden properties END "),u(" Admin hidden properties START "),n.user&&n.user!=null&&n.user.type&&n.user.type=="admin"?(v(),m("div",Ge,[d(h,{open:!0,"aria-id":"contentHiddenPropertiesAdmin"},{trigger:c(o=>[s("h3",He,[ze,k(),d(r,{icon:o.open?"angle-down":"angle-up"},null,8,["icon"])])]),default:c(()=>[s("div",We,[s("div",Je,[s("div",Ke,[s("div",Ye,[s("div",Qe,[Xe,s("div",Ze,[f(s("input",{class:"input",type:"text","onUpdate:modelValue":a[11]||(a[11]=o=>t.page.data.publisher=o),translate:"yes",placeholder:"Publisher"},null,512),[[_,t.page.data.publisher]])])])])]),s("div",$e,[s("div",et,[s("section",tt,[d(p,{label:"Enter order code of required products"},{default:c(()=>[d(g,{modelValue:t.page.data.data.requirements.userdata.products,"onUpdate:modelValue":a[12]||(a[12]=o=>t.page.data.data.requirements.userdata.products=o),data:t.filteredReqProductOrderCodes,autocomplete:"",field:"orderCode","allow-new":!0,iconPack:"fas",icon:"tags",placeholder:"Products",type:"is-info",onTyping:n.getFilteredProducts},null,8,["modelValue","data","onTyping"])]),_:1}),at])])])])])]),_:1})])):u("v-if",!0),u(" Admin hidden properties END ")])]),_:1},8,["open"]),s("div",st,[s("div",it,[s("div",ot,[s("div",lt,[s("div",nt,[t.parentCategoryDetail?(v(),m("nav",dt,[t.parentCategoryDetail.parentCategories?(v(),m("ul",rt,[(v(!0),m(q,null,M(t.parentCategoryDetail.parentCategories,(o,x)=>(v(),m("li",{key:x},[d(b,{title:o.name[t.language.code],to:{name:"categoryList",params:{category:o.pathSlug}}},{default:c(()=>[k(N(o.name[t.language.code]),1)]),_:2},1032,["title","to"])]))),128)),s("li",ct,[d(b,{title:t.parentCategoryDetail.name[t.language.code],to:{name:"categoryList",params:{category:t.parentCategoryDetail.pathSlug}},"aria-current":"page"},{default:c(()=>[k(N(t.parentCategoryDetail.name[t.language.code]),1)]),_:1},8,["title","to"])])])):u("v-if",!0)])):u("v-if",!0)])]),s("div",gt,[s("div",{class:"column is-6 page-detail-cover",style:O("background-image: url("+n.getPageImagePath(t.page.data.slug)+")")},[s("div",ut,[s("div",pt,[s("label",ht,[s("input",{class:"file-input",type:"file",name:"resume",onInput:a[13]||(a[13]=o=>n.pageMainImageUpload(o))},null,32),mt])]),s("a",{class:"action remove button is-danger has-text-white",onClick:a[14]||(a[14]=R(o=>n.pageMainImageDelete(),["prevent"]))},[ft,k("  "),_t])])],4)])])])]),s("div",vt,[s("div",yt,[t.page&&t.page.data&&t.page.data!=null?(v(),m("div",bt,[s("div",wt,[Ct,s("div",Pt,[f(s("input",{class:"input is-size-1 has-text-weight-semibold has-text-centered",type:"text","onUpdate:modelValue":a[15]||(a[15]=o=>t.page.data.name[t.language.code]=o),onKeyup:a[16]||(a[16]=o=>n.checkNameDependents()),translate:"yes",placeholder:"Name"},null,544),[[_,t.page.data.name[t.language.code]]])])]),s("div",St,[xt,s("div",kt,[f(s("input",{class:"input is-size-5 has-text-weight-normal has-text-centered",type:"text","onUpdate:modelValue":a[17]||(a[17]=o=>t.page.data.descriptionShort[t.language.code]=o),translate:"yes",placeholder:"Description Short"},null,512),[[_,t.page.data.descriptionShort[t.language.code]]])])]),s("div",Dt,[Et,s("div",It,[f(s("input",{class:"input is-size-5 has-text-weight-normal has-text-centered",type:"text","onUpdate:modelValue":a[18]||(a[18]=o=>t.page.data.descriptionLong[t.language.code]=o),translate:"yes",placeholder:"Description Long"},null,512),[[_,t.page.data.descriptionLong[t.language.code]]])])])])):u("v-if",!0),d(S,{type:"editorjs",editordata:{editorjs:{setup:n.editorToolsConfig,data:t.page.data.data.blocks[0][t.language.code]}}},null,8,["editordata"])])]),t.page&&t.page!=null?(v(),m("div",Tt,[s("div",At,[s("section",null,[s("button",{class:"button is-danger",onClick:a[19]||(a[19]=o=>n.deletePage()),translate:"yes"},"DELETE This Page"),Vt])])])):u("v-if",!0)])):u("v-if",!0)}const Mt=j(G,[["render",Lt],["__file","/Users/marthol/Documents/GitHub/stretchshop-front-vue/src/components/pages/PageNewEdit.vue"]]);export{Mt as default};