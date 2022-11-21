import{E as N,S as F}from"./Sidebar.58ad04eb.js";import{c as d,b as r,w as g,a as e,F as P,r as I,g as p,i as U,h as M,e as _,B as m,H as f,j as h,o as u,t as C,U as V,V as B}from"./sett.5bce7c7f.js";import{_ as j}from"./index.20e455a6.js";import"./edit.8b295d88.js";const H={name:"CategoryNewEdit",data(){return{sidebar:!1,categories:[],filteredProductsCount:null,products:[],categoryMainImageFile:null,breadcrumbs:[],categoryDetail:null,language:{code:"en",longCode:"en-US",name:"English"},newLanguage:null,editing:!1,userEditAllowed:!1,groupsLastRefresh:0,filteredCategoriesSlugs:[],fireCounter:0,dataToGenerateFromName:{slug:!0,externalId:!0},categoryTypes:["products","pages"]}},created:function(){this.language=this.$store.state.language},computed:{user(){return this.$store.getters.getUserProfile},editorToolsConfig(){let s=this;return{image:{config:{uploader:{uploadByFile(a){return s.$helpers.uploadFileGlobal("image","categories","categories/upload/"+s.categoryDetail.pathSlug+"/editor",a,s.$httpc,s.$store)},uploadByUrl(a){}}}}}}},beforeRouteLeave(s,a,i){this.eventBus.emit("removeEditor"),i()},components:{editorwrapper:N,sidebar:F},watch:{user(s,a){s&&s!==null&&(this.getUserEditAllowed(),this.userEditAllowed&&this.getCategoryDetail())}},mounted:function(){this.getUserEditAllowed(),this.userEditAllowed&&this.getCategoryDetail()},methods:{getUserEditAllowed(){if(this.language=this.$store.state.language,this.user&&this.user!==null&&this.user.type&&this.user.type==="admin"){this.userEditAllowed=!0,this.user.settings.language&&(this.language=this.$store.state.language);return}this.userEditAllowed=!1},changeEditedLang(){this.fireCounter++,this.editing&&this.newLanguage&&this.newLanguage.code&&this.fireCounter===1&&(window.location=window.location.origin+this.$route.path+"?lang="+this.newLanguage.code)},processCategoryResponse(s){const a=new Date;this.groupsLastRefresh=a.getTime(),s.data&&(this.categoryDetail=s.data,s.data.parentCategories&&(this.breadcrumbs=s.data.parentCategories),this.editing=!0,this.newLanguage=this.language),s.data.categories&&(this.categories=s.data.categories)},getCategoryDetail:function(){const s=this;this.$route.params&&this.$route.params.category&&this.$route.params.category.toString().trim()!==""&&(this.$route.params.category.toString().trim()==="---new"?setTimeout(function(){s.categoryDetail=s.getEmptyCategory(),s.eventBus.emit("runEditor"),s.editing=!0},1e3):this.$httpc.get("category/"+this.$route.params.category,{timeout:7e3}).then(function(a){s.processCategoryResponse(a)}).catch(function(a){console.error(a)}).then(function(){s.eventBus.emit("runEditor")}))},getFilteredCategories:function(s){const a=this;return s&&s.toString().trim()!==""?this.$httpc.post("categories/find",{query:{pathSlug:{$regex:s},type:a.categoryDetail&&a.categoryDetail.type?a.categoryDetail.type:"products"}}).then(function(i){return i.data&&i.data.categories?i.data.categories:[]}).then(function(i){const c=[];for(let t=0;t<i.length;t++)a.categoryDetail.parentPath.indexOf(i[t].pathSlug)<0&&c.push(i[t].pathSlug);return a.filteredCategoriesSlugs=c,c}).catch(function(i){console.error("CategoryNewEdit getFilteredCategories() error:",i)}):(a.filteredCategoriesSlugs=[],[])},getCategoryBackground(){return this.categoryDetail&&this.categoryDetail.slug&&this.$store.state.coredata&&this.$store.state.coredata.settings&&this.$store.state.coredata.settings.assets&&this.$store.state.coredata.settings.assets.url?this.$helpers.getImagePath("categories",this.$store.state.coredata,this.categoryDetail.slug,this.categoryDetail.slug+".jpg"):""},categoryMainImageUpload(s){if(this.categoryMainImageFile=s.target.files,this.categoryMainImageFile){const i=this,c=new FormData;if(this.categoryMainImageFile.length&&this.categoryMainImageFile.length>0)for(var a=0;a<this.categoryMainImageFile.length;a++){const t=this.categoryMainImageFile[a];c.append("files["+a+"]",t)}else c.append("files[0]",this.categoryMainImageFile);this.$httpc.post("/categories/upload/"+this.categoryDetail.slug,c,{needsAuth:!0}).then(function(t){if(t&&t.data&&t.data.substr(0,1)==="'"&&t.data[t.data.length-1]==="'"){const l=t.data.length-2;if(t.data=t.data.substr(1,l),t.data=JSON.parse(t.data),t.data.files&&t.data.files.length>0&&t.data.files[0].path&&t.data.files[0].path.trim()!==""){const y=i.$el.querySelector(".category-list .category-header");y&&y.setAttribute("style","background-image: url('"+i.$store.state.coredata.settings.assets.url+"/categories/"+t.data.files[0].path+"')")}}})}},categoryMainImageDelete(){const s=this;if(confirm("Are you sure?")){const a={timeout:15e3,needsAuth:!0},i=this.getCategoryBackground(this.categoryDetail.slug);let c="";if(i.trim()!==""){const t=i.split("/");t.length>0&&(c=t[t.length-1])}console.debug(this.categoryDetail.slug,i),this.$httpc.delete("user/image/categories/"+this.categoryDetail.slug+"/"+c,a).then(function(t){t&&t.data&&t.data.success&&s.$el.querySelector(".category-list .category-header").setAttribute("style","")})}},save(s){const a=this,i=this.categoryDetail;i&&i._id&&!i.id&&(i.id=i._id),i.parentPath&&i.parentPath.length>0&&(i.parentPathSlug=i.parentPath[i.parentPath.length-1]),i.parentCategories&&delete i.parentCategories,i.subs&&delete i.subs,i.subsSlugs&&delete i.subsSlugs,i.count&&delete i.count,i.minMaxPrice&&delete i.minMaxPrice,i.descriptionLong[this.language.code]=s;const c={categories:[]};c.categories.push(i),this.$httpc.put("categories",c,{needsAuth:!0}).then(function(t){if(t.data&&t.data.length>0){const l=t.data[0],y=a.$router.resolve({name:"categoryNewEdit",params:{category:l.pathSlug}});window.location=y.href}}).catch(function(t){console.error("save error:",t)})},deleteCategory(){const a={categories:[{id:this.categoryDetail._id}]};this.categoryDetail&&this.categoryDetail._id&&confirm("Are you sure you want to delete this product?")&&this.$httpc.delete("categories",{data:a}).then(i=>{i&&i.data&&alert("Category has been successfully removed. You will be redirected now")})},getEmptyCategory(){const s=this;return{externalId:null,publisher:s.$store.state.user.profile.email,slug:null,pathSlug:null,parentPath:[],parentPathSlug:null,type:"products",subtype:"physical",name:s.$helpers.getLangsObject(s.$store.state.coredata.langCodes),descriptionShort:s.$helpers.getLangsObject(s.$store.state.coredata.langCodes),descriptionLong:s.$helpers.getLangsObject(s.$store.state.coredata.langCodes),categories:[],dates:{dateCreated:null,dateUpdated:null,dateSynced:null},data:{},note:null}},checkNameDependents(){if(this.categoryDetail&&!this.categoryDetail._id){let s=this.language&&this.language.code?this.language.code:null;this.newLanguage&&this.newLanguage.code&&(s=this.newLanguage.code),this.categoryDetail.name&&this.categoryDetail.name[s]&&this.categoryDetail.name[s].trim()!==""&&((this.categoryDetail.slug&&this.categoryDetail.slug.trim()===""||this.dataToGenerateFromName.slug)&&(this.categoryDetail.slug=this.$helpers.stringToSlug(this.categoryDetail.name[s]),this.dataToGenerateFromName.slug=!0),(this.categoryDetail.externalId&&this.categoryDetail.externalId.trim()===""||this.dataToGenerateFromName.externalId)&&(this.categoryDetail.externalId=this.$helpers.stringToSlug(this.categoryDetail.name[s]),this.dataToGenerateFromName.externalId=!0))}},getActivity(){const s={start:null,end:null};return this.categoryDetail&&this.categoryDetail!==null&&this.categoryDetail.activity&&this.categoryDetail.activity!==null&&(this.categoryDetail.activity.start&&this.categoryDetail.activity.start.toString().trim()!==""&&(s.start=new Date(this.categoryDetail.activity.start)),this.categoryDetail.activity.end&&this.categoryDetail.activity.end.toString().trim()!==""&&(s.end=new Date(this.categoryDetail.activity.end))),s},setActivity(s,a){a&&this.categoryDetail&&this.categoryDetail!==null&&(this.categoryDetail.activity||(this.categoryDetail.activity={start:null,end:null}),this.categoryDetail.activity[s]=a)},toggleSidebar(){this.sidebar=!this.sidebar}}},n=s=>(V("data-v-7e304e72"),s=s(),B(),s),G={key:0,class:"container category-list",id:"category-new-edit"},O={class:"category-categories-parent"},R={class:"title is-3","aria-controls":"contentCategoriesParent"},q=n(()=>e("span",{translate:"yes"},"Parent Categories",-1)),W={class:"categoriesParent-hidden collapse-content",id:"contentCategoriesParent","aria-expanded":"true"},z={class:"container is-fluid p-3"},J={class:"columns"},K={class:"column"},Y={class:"category-hidden-properties"},Q={class:"title is-3","aria-controls":"contentHiddenProperties",translate:"yes"},X=n(()=>e("span",{translate:"yes"},"Category's hidden properties",-1)),Z={class:"editableByAuthor-hidden collapse-content",id:"contentHiddenProperties","aria-expanded":"true"},$={class:"container is-fluid p-3"},ee={class:"columns"},te={class:"column"},ae={class:"field"},se=n(()=>e("label",{class:"label floating",translate:"yes"},"Type",-1)),ie={class:"control"},oe={class:"columns"},le={class:"column"},ne={class:"field"},re=n(()=>e("label",{class:"label floating",translate:"yes"},"Subtype",-1)),ce={class:"control"},de={class:"columns"},ge={class:"column"},ue={class:"field"},he=n(()=>e("label",{class:"label floating",translate:"yes"},"External Id",-1)),ye={class:"control"},pe={class:"columns"},_e={class:"column"},me={class:"field"},fe=n(()=>e("label",{class:"label floating",translate:"yes"},"Slug",-1)),ve={class:"control"},De={class:"columns"},be={class:"column"},Ce={class:"field"},we=n(()=>e("label",{class:"label floating",translate:"yes"},"Note",-1)),Se={class:"control"},xe={key:0,class:"columns"},Pe={class:"column"},Ie={class:"field"},Ee=n(()=>e("label",{class:"label floating",translate:"yes"},"Activity Start",-1)),ke={class:"control"},Ae={class:"columns"},Te={class:"column"},Le={class:"field"},Ne=n(()=>e("label",{class:"label floating",translate:"yes"},"Activity End",-1)),Fe={class:"control"},Ue={key:0},Me={class:"title is-3","aria-controls":"contentHiddenPropertiesAdmin",translate:"yes"},Ve=n(()=>e("span",{translate:"yes"},"Editable by admin user",-1)),Be={class:"editableByAuthor-hidden collapse-content",id:"contentHiddenPropertiesAdmin","aria-expanded":"true"},je={class:"container is-fluid p-3"},He={class:"columns"},Ge={class:"column"},Oe={class:"field"},Re=n(()=>e("label",{class:"label floating",translate:"yes"},"Publisher",-1)),qe={class:"control"},We={class:"columns"},ze={class:"column is-3 pr-6 has-text-left",id:"category-edit-navigation"},Je={key:0,class:"mt-6"},Ke={class:"menu"},Ye=n(()=>e("p",{class:"menu-label",translate:"yes"}," Sub-Categories ",-1)),Qe={class:"menu-list"},Xe={class:"column is-9"},Ze={key:0,class:"breadcrumb","aria-label":"breadcrumbs"},$e={class:"is-active"},et={class:"column"},tt={class:"category-image-wrapper"},at={class:"category-image-actions"},st={class:"file is-primary action action-inline edit"},it={class:"file-label"},ot=n(()=>e("span",{class:"file-cta"},[e("span",{class:"file-icon"},[e("i",{class:"fa fa-file-upload"})]),e("span",{class:"file-label",translate:"yes"}," Click to upload ")],-1)),lt=n(()=>e("i",{class:"fa fa-trash"},null,-1)),nt=n(()=>e("span",{translate:"yes"},"Click to remove",-1)),rt={class:"columns"},ct={class:"column data-main"},dt={class:"field"},gt=n(()=>e("label",{class:"label floating",translate:"yes"},"Name",-1)),ut={class:"control"},ht={class:"field"},yt=n(()=>e("label",{class:"label floating",translate:"yes"},"Description Short",-1)),pt={class:"control"},_t={class:"columns"},mt={key:0,class:"column"},ft={key:0,class:"columns category-delete"},vt={class:"column is-12"},Dt=n(()=>e("p",{translate:"yes"},"Warning: This action cannot be undone! This action does not remove category's content!",-1));function bt(s,a,i,c,t,l){var S,x;const y=h("font-awesome-icon"),E=h("o-inputitems"),k=h("o-field"),v=h("o-collapse"),A=h("o-autocomplete"),w=h("o-datetimepicker"),T=h("sidebar"),D=h("router-link"),L=h("editorwrapper");return t.categoryDetail?(u(),d("div",G,[r(T,{fullheight:!0,overlay:!1,right:!0,open:t.sidebar,canCancel:!1},{default:g(()=>[e("div",O,[r(v,{open:!0,"aria-id":"contentCategoriesParent"},{trigger:g(o=>[e("h3",R,[q,_(),r(y,{icon:o.open?"angle-down":"angle-up"},null,8,["icon"])])]),default:g(()=>[e("div",W,[e("div",z,[e("div",J,[e("div",K,[e("section",null,[r(k,{label:"Enter parent categories' url slugs"},{default:g(()=>[r(E,{modelValue:t.categoryDetail.parentPath,"onUpdate:modelValue":a[0]||(a[0]=o=>t.categoryDetail.parentPath=o),data:t.filteredCategoriesSlugs,autocomplete:"","allow-new":!1,field:"user.first_name",iconPack:"fas",icon:"tags",placeholder:"Parent Categories",type:"is-info",onTyping:l.getFilteredCategories},null,8,["modelValue","data","onTyping"])]),_:1})])])])])])]),_:1})]),e("div",Y,[r(v,{open:!0,"aria-id":"contentHiddenProperties"},{trigger:g(o=>[e("h3",Q,[X,_(),r(y,{icon:o.open?"angle-down":"angle-up"},null,8,["icon"])])]),default:g(()=>[e("div",Z,[e("div",$,[e("div",ee,[e("div",te,[e("div",ae,[se,e("div",ie,[r(A,{modelValue:t.categoryDetail.type,"onUpdate:modelValue":a[1]||(a[1]=o=>t.categoryDetail.type=o),placeholder:"e.g. products","keep-first":!0,"open-on-focus":!0,data:t.categoryTypes,field:"categoryDetail.type",clearable:!1},null,8,["modelValue","data"])])])])]),e("div",oe,[e("div",le,[e("div",ne,[re,e("div",ce,[m(e("input",{class:"input",type:"text","onUpdate:modelValue":a[2]||(a[2]=o=>t.categoryDetail.subtype=o),translate:"yes",placeholder:"Subtype"},null,512),[[f,t.categoryDetail.subtype]])])])])]),e("div",de,[e("div",ge,[e("div",ue,[he,e("div",ye,[m(e("input",{class:"input",type:"text","onUpdate:modelValue":a[3]||(a[3]=o=>t.categoryDetail.externalId=o),translate:"yes",placeholder:"External Id"},null,512),[[f,t.categoryDetail.externalId]])])])])]),e("div",pe,[e("div",_e,[e("div",me,[fe,e("div",ve,[m(e("input",{class:"input",type:"text","onUpdate:modelValue":a[4]||(a[4]=o=>t.categoryDetail.slug=o),translate:"yes",placeholder:"Slug"},null,512),[[f,t.categoryDetail.slug]])])])])]),e("div",De,[e("div",be,[e("div",Ce,[we,e("div",Se,[m(e("textarea",{class:"textarea","onUpdate:modelValue":a[5]||(a[5]=o=>t.categoryDetail.note=o),translate:"yes",placeholder:"Note"},null,512),[[f,t.categoryDetail.note]])])])])]),t.categoryDetail?(u(),d("div",xe,[e("div",Pe,[e("div",Ie,[Ee,e("div",ke,[r(w,{value:l.getActivity().start,onInput:a[6]||(a[6]=o=>l.setActivity("start",o)),placeholder:"Activity Start DateTime",iconPack:"fa",icon:"calendar-alt",iconPrev:"angle-left",iconNext:"angle-right",position:"bottom-left","trap-focus":""},null,8,["value"])])])])])):p("",!0),e("div",Ae,[e("div",Te,[e("div",Le,[Ne,e("div",Fe,[r(w,{value:l.getActivity().end,onInput:a[7]||(a[7]=o=>l.setActivity("end",o)),placeholder:"Activity End DateTime",iconPack:"fa",icon:"calendar-alt",iconPrev:"angle-left",iconNext:"angle-right",position:"bottom-left","trap-focus":""},null,8,["value"])])])])])])])]),_:1}),l.user&&l.user!=null&&l.user.type&&l.user.type=="admin"?(u(),d("div",Ue,[r(v,{open:!0,"aria-id":"contentHiddenPropertiesAdmin"},{trigger:g(o=>[e("h3",Me,[Ve,_(),r(y,{icon:o.open?"angle-down":"angle-up"},null,8,["icon"])])]),default:g(()=>[e("div",Be,[e("div",je,[e("div",He,[e("div",Ge,[e("div",Oe,[Re,e("div",qe,[m(e("input",{class:"input",type:"text","onUpdate:modelValue":a[8]||(a[8]=o=>t.categoryDetail.publisher=o),translate:"yes",placeholder:"Publisher"},null,512),[[f,t.categoryDetail.publisher]])])])])])])])]),_:1})])):p("",!0)])]),_:1},8,["open"]),e("div",We,[e("div",ze,[t.categoryDetail&&t.categoryDetail.subs?(u(),d("nav",Je,[e("aside",Ke,[Ye,e("ul",Qe,[(u(!0),d(P,null,I(this.categoryDetail.subs,(o,b)=>(u(),d("li",{key:b},[r(D,{class:"panel-block",title:o.descriptionShort[t.language.code],to:{name:"categoryList",params:{category:o.pathSlug}}},{default:g(()=>[_(C(o.name[t.language.code]),1)]),_:2},1032,["title","to"])]))),128))])])])):p("",!0)]),e("div",Xe,[t.breadcrumbs&&t.breadcrumbs!=null&&t.breadcrumbs.length>0?(u(),d("nav",Ze,[e("ul",null,[(u(!0),d(P,null,I(t.breadcrumbs,(o,b)=>(u(),d("li",{key:b},[r(D,{title:o.name[t.language.code],to:{name:"categoryList",params:{category:o.pathSlug}}},{default:g(()=>[_(C(o.name[t.language.code]),1)]),_:2},1032,["title","to"])]))),128)),e("li",$e,[r(D,{title:t.categoryDetail.name[t.language.code],to:{name:"categoryList",params:{category:t.categoryDetail.pathSlug}},"aria-current":"page"},{default:g(()=>[_(C(t.categoryDetail.name[t.language.code]),1)]),_:1},8,["title","to"])])])])):p("",!0),e("div",{class:"columns category-header",style:U({backgroundImage:"url("+l.getCategoryBackground()+")"})},[e("div",et,[e("div",tt,[e("div",at,[e("div",st,[e("label",it,[e("input",{class:"file-input",type:"file",name:"resume",onInput:a[9]||(a[9]=o=>l.categoryMainImageUpload(o))},null,32),ot])]),e("a",{class:"action action-inline remove button is-danger is-outlined",onClick:a[10]||(a[10]=M(o=>l.categoryMainImageDelete(),["prevent"]))},[lt,_("\xA0 "),nt])])]),e("div",rt,[e("div",ct,[e("div",dt,[gt,e("div",ut,[m(e("input",{class:"input cat-edit-h1",type:"text","onUpdate:modelValue":a[11]||(a[11]=o=>t.categoryDetail.name[t.language.code]=o),onKeyup:a[12]||(a[12]=o=>l.checkNameDependents()),translate:"yes",placeholder:"Name"},null,544),[[f,t.categoryDetail.name[t.language.code]]])])]),e("div",ht,[yt,e("div",pt,[m(e("input",{class:"input is-6 mb-5 has-text-grey-dark",type:"text","onUpdate:modelValue":a[13]||(a[13]=o=>t.categoryDetail.descriptionShort[t.language.code]=o),translate:"yes",placeholder:"Description Short"},null,512),[[f,t.categoryDetail.descriptionShort[t.language.code]]])])])])]),e("div",_t,[this.editorToolsConfig&&((S=t.language)==null?void 0:S.code)&&((x=t.categoryDetail)==null?void 0:x.descriptionLong)?(u(),d("div",mt,[r(L,{type:"editorjs",editordata:{editorjs:{setup:l.editorToolsConfig,data:t.categoryDetail.descriptionLong[t.language.code]}}},null,8,["editordata"])])):p("",!0)])])],4)])]),this.categoryDetail&&this.categoryDetail!=null?(u(),d("div",ft,[e("div",vt,[e("section",null,[e("button",{class:"button is-danger",onClick:a[14]||(a[14]=o=>l.deleteCategory()),translate:"yes"},"DELETE This Category"),Dt])])])):p("",!0)])):p("",!0)}const Pt=j(H,[["render",bt],["__scopeId","data-v-7e304e72"]]);export{Pt as default};
