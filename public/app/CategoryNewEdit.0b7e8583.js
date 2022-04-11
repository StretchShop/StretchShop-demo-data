import{_ as L,r as _,o as n,c,a as e,w as I,e as g,b as h,h as P,F as w,i as C,f as y,j as u,t as m,n as T,v as p,p as N,k as M,m as F,g as v}from"./index.78dc2935.js";const U={name:"CategoryNewEdit",data(){return{categories:[],filteredProductsCount:null,products:[],categoryMainImageFile:null,breadcrumbs:[],categoryDetail:null,language:{code:"en",longCode:"en-US",name:"English"},newLanguage:null,editing:!1,userEditAllowed:!1,groupsLastRefresh:0,filteredCategoriesSlugs:[],fireCounter:0,dataToGenerateFromName:{slug:!0,externalId:!0},categoryTypes:["products","pages"]}},created:function(){this.language=this.$store.state.language},computed:{user(){return this.$store.getters.getUserProfile}},components:{},watch:{user(a,s){console.log("new & old",a,s),a&&a!==null&&(this.getUserEditAllowed(),this.userEditAllowed&&this.getCategoryDetail())}},mounted:function(){this.getUserEditAllowed(),console.log("mounted this.userEditAllowed",this.userEditAllowed),this.userEditAllowed&&this.getCategoryDetail()},methods:{getUserEditAllowed(){if(this.language=this.$store.state.language,this.user&&this.user!==null&&this.user.type&&this.user.type==="admin"){this.userEditAllowed=!0,this.user.settings.language&&(this.language=this.$store.state.language);return}this.userEditAllowed=!1},changeEditedLang(){this.fireCounter++,this.editing&&this.newLanguage&&this.newLanguage.code&&this.fireCounter===1&&(window.location=window.location.origin+this.$route.path+"?lang="+this.newLanguage.code)},processCategoryResponse(a){const s=new Date;this.groupsLastRefresh=s.getTime(),a.data&&(this.categoryDetail=a.data,a.data.parentCategories&&(this.breadcrumbs=a.data.parentCategories),this.editing=!0,this.newLanguage=this.language),a.data.categories&&(this.categories=a.data.categories)},getCategoryDetail:function(){const a=this;this.$route.params&&this.$route.params.category&&this.$route.params.category.toString().trim()!==""&&(this.$route.params.category.toString().trim()==="---new"?setTimeout(function(){a.categoryDetail=a.getEmptyCategory(),a.editing=!0},1e3):this.$httpc.get("category/"+this.$route.params.category,{timeout:7e3}).then(function(s){a.processCategoryResponse(s)}).catch(function(s){console.log(s)}))},getFilteredCategories:function(a){const s=this;return a&&a.toString().trim()!==""?this.$httpc.post("categories/find",{query:{pathSlug:{$regex:a},type:s.categoryDetail&&s.categoryDetail.type?s.categoryDetail.type:"products"}}).then(function(o){return o.data&&o.data.categories?o.data.categories:[]}).then(function(o){console.log("categories:",o,s.categoryDetail.parentPath);const d=[];for(let t=0;t<o.length;t++)s.categoryDetail.parentPath.indexOf(o[t].pathSlug)<0&&d.push(o[t].pathSlug);return s.filteredCategoriesSlugs=d,d}).catch(function(o){console.error("CategoryNewEdit getFilteredCategories() error:",o)}):(s.filteredCategoriesSlugs=[],[])},getCategoryBackground(){return this.categoryDetail&&this.categoryDetail.slug&&this.$store.state.coredata&&this.$store.state.coredata.settings&&this.$store.state.coredata.settings.assets&&this.$store.state.coredata.settings.assets.url?this.$helpers.getImagePath("categories",this.$store.state.coredata,this.categoryDetail.slug,this.categoryDetail.slug+".jpg"):""},categoryMainImageUpload(a){if(this.categoryMainImageFile=a.target.files,console.log("categoryMainImageFile:",this.categoryMainImageFile),this.categoryMainImageFile){const o=this,d=new FormData;if(this.categoryMainImageFile.length&&this.categoryMainImageFile.length>0)for(var s=0;s<this.categoryMainImageFile.length;s++){const t=this.categoryMainImageFile[s];d.append("files["+s+"]",t)}else d.append("files[0]",this.categoryMainImageFile);this.$httpc.post("/categories/upload/"+this.categoryDetail.slug,d,{needsAuth:!0}).then(function(t){if(t&&t.data&&t.data.substr(0,1)==="'"&&t.data[t.data.length-1]==="'"){const l=t.data.length-2;if(t.data=t.data.substr(1,l),t.data=JSON.parse(t.data),t.data.files&&t.data.files.length>0&&t.data.files[0].path&&t.data.files[0].path.trim()!==""){const f=o.$el.querySelector(".category-list .category-header");f&&f.setAttribute("style","background-image: url('"+o.$store.state.coredata.settings.assets.url+"/categories/"+t.data.files[0].path+"')")}}})}},categoryMainImageDelete(){const a=this;if(confirm("Are you sure?")){const s={timeout:15e3,needsAuth:!0},o=this.getCategoryBackground(this.categoryDetail.slug);let d="";if(o.trim()!==""){const t=o.split("/");t.length>0&&(d=t[t.length-1])}console.log(this.categoryDetail.slug,o),this.$httpc.delete("user/image/categories/"+this.categoryDetail.slug+"/"+d,s).then(function(t){t&&t.data&&t.data.success&&(console.log("image delete response",t.data),a.$el.querySelector(".category-list .category-header").setAttribute("style",""))})}},saveCategory(){const a=this,s=this.categoryDetail;s&&s._id&&!s.id&&(s.id=s._id),s.parentPath&&s.parentPath.length>0&&(s.parentPathSlug=s.parentPath[s.parentPath.length-1]),s.parentCategories&&delete s.parentCategories,s.subs&&delete s.subs,s.subsSlugs&&delete s.subsSlugs,s.count&&delete s.count,s.minMaxPrice&&delete s.minMaxPrice;const o={categories:[]};o.categories.push(s),this.$httpc.put("categories",o,{needsAuth:!0}).then(function(d){if(d.data&&d.data.length>0){const t=d.data[0],l=a.$router.resolve({name:"categoryNewEdit",params:{category:t.pathSlug}});window.location=l.href}}).catch(function(d){console.log("saveCategory error:",d)})},deleteCategory(){const s={categories:[{id:this.categoryDetail._id}]};this.categoryDetail&&this.categoryDetail._id&&confirm("Are you sure you want to delete this product?")&&this.$httpc.delete("categories",{data:s}).then(o=>{o&&o.data&&alert("Category has been successfully removed. You will be redirected now")})},getEmptyCategory(){const a=this;return{externalId:null,publisher:a.$store.state.user.profile.email,slug:null,pathSlug:null,parentPath:[],parentPathSlug:null,type:"products",subtype:"physical",name:a.$helpers.getLangsObject(a.$store.state.coredata.langCodes),descriptionShort:a.$helpers.getLangsObject(a.$store.state.coredata.langCodes),descriptionLong:a.$helpers.getLangsObject(a.$store.state.coredata.langCodes),categories:[],dates:{dateCreated:null,dateUpdated:null,dateSynced:null},data:{},note:null}},checkNameDependents(){if(this.categoryDetail&&!this.categoryDetail._id){let a=this.language&&this.language.code?this.language.code:null;this.newLanguage&&this.newLanguage.code&&(a=this.newLanguage.code),this.categoryDetail.name&&this.categoryDetail.name[a]&&this.categoryDetail.name[a].trim()!==""&&((this.categoryDetail.slug&&this.categoryDetail.slug.trim()===""||this.dataToGenerateFromName.slug)&&(this.categoryDetail.slug=this.$helpers.stringToSlug(this.categoryDetail.name[a]),this.dataToGenerateFromName.slug=!0),(this.categoryDetail.externalId&&this.categoryDetail.externalId.trim()===""||this.dataToGenerateFromName.externalId)&&(this.categoryDetail.externalId=this.$helpers.stringToSlug(this.categoryDetail.name[a]),this.dataToGenerateFromName.externalId=!0))}},getActivity(){const a={start:null,end:null};return this.categoryDetail&&this.categoryDetail!==null&&this.categoryDetail.activity&&this.categoryDetail.activity!==null&&(this.categoryDetail.activity.start&&this.categoryDetail.activity.start.toString().trim()!==""&&(a.start=new Date(this.categoryDetail.activity.start)),this.categoryDetail.activity.end&&this.categoryDetail.activity.end.toString().trim()!==""&&(a.end=new Date(this.categoryDetail.activity.end))),a},setActivity(a,s){s&&this.categoryDetail&&this.categoryDetail!==null&&(this.categoryDetail.activity||(this.categoryDetail.activity={start:null,end:null}),this.categoryDetail.activity[a]=s)}}},r=a=>(N("data-v-7851049e"),a=a(),M(),a),V={key:0,class:"container category-list"},B={class:"edit-area"},G={class:"field product-edit-language hidden"},H=r(()=>e("label",{class:"label",translate:"yes"},"Edit Language",-1)),j={class:"control select"},O=["value"],z={key:0,class:"category-hidden-properties"},R={class:"title is-3","aria-controls":"contentHiddenProperties",translate:"yes"},q=r(()=>e("span",{translate:"yes"},"Category's hidden properties",-1)),J=v(),K={class:"editableByAuthor-hidden collapse-content",id:"contentHiddenProperties","aria-expanded":"true"},W={class:"columns"},Y={class:"column is-12"},Q={key:0,class:"columns"},X={class:"column is-3"},Z={class:"field"},$=r(()=>e("label",{class:"label",translate:"yes"},"Type",-1)),ee={class:"control"},te={class:"column is-3"},se={class:"field"},ae=r(()=>e("label",{class:"label",translate:"yes"},"Subtype",-1)),ie={class:"control"},oe={class:"column is-3"},le={class:"field"},ne=r(()=>e("label",{class:"label",translate:"yes"},"External Id",-1)),re={class:"control"},ce={class:"columns"},de={class:"column is-12"},ge={key:0,class:"columns"},ue={class:"column is-3"},he={class:"field"},ye=r(()=>e("label",{class:"label",translate:"yes"},"Slug",-1)),pe={class:"control"},_e={class:"column is-6"},me={class:"field"},fe=r(()=>e("label",{class:"label",translate:"yes"},"Note",-1)),ve={class:"control"},De={class:"columns"},be={class:"column is-12"},we={key:0,class:"columns"},Ce={class:"column is-3"},Se={class:"field"},ke=r(()=>e("label",{class:"label",translate:"yes"},"Activity Start",-1)),Ie={class:"control"},xe={class:"column is-3"},Ee={class:"field"},Ae=r(()=>e("label",{class:"label",translate:"yes"},"Activity End",-1)),Le={class:"control"},Pe={key:0},Te={class:"title is-3","aria-controls":"contentHiddenProperties",translate:"yes"},Ne=r(()=>e("span",{translate:"yes"},"Editable by admin user",-1)),Me=v(),Fe={class:"editableByAdmin-hidden"},Ue={class:"columns"},Ve={class:"column is-4 is-offset-4"},Be={class:"field"},Ge=r(()=>e("label",{class:"label",translate:"yes"},"Publisher",-1)),He={class:"control"},je={class:"column"},Oe={class:"category-image-wrapper"},ze={class:"file is-primary action edit"},Re={class:"file-label"},qe=r(()=>e("span",{class:"file-cta"},[e("span",{class:"file-icon"},[e("i",{class:"fa fa-file-upload"})]),e("span",{class:"file-label",translate:"yes"}," Click to upload ")],-1)),Je=r(()=>e("i",{class:"fa fa-trash"},null,-1)),Ke=v("\xA0 "),We=r(()=>e("span",{translate:"yes"},"Click to remove",-1)),Ye=[Je,Ke,We],Qe={key:0,class:"title is-1"},Xe={key:1,class:"title is-3"},Ze={key:2,class:""},$e={key:3,translate:"yes",class:"title is-1 title-products"},et={class:"columns"},tt={class:"column data-main"},st={class:"field"},at=r(()=>e("label",{class:"label",translate:"yes"},"Name",-1)),it={class:"control"},ot={class:"field"},lt=r(()=>e("label",{class:"label",translate:"yes"},"Description Short",-1)),nt={class:"control"},rt={class:"field"},ct=r(()=>e("label",{class:"label",translate:"yes"},"Description Long",-1)),dt={class:"control"},gt={class:"columns"},ut={class:"column is-3",id:"category-edit-navigation"},ht={key:0,class:"panel"},yt=r(()=>e("p",{class:"panel-heading",translate:"yes"}," Sub-Categories ",-1)),pt={class:"column is-9"},_t={key:0,class:"breadcrumb","aria-label":"breadcrumbs"},mt={class:"is-active"},ft={key:1,class:"columns category-delete"},vt={class:"column is-12"},Dt=r(()=>e("p",{translate:"yes"},"Warning: This action cannot be undone! This action does not remove category's content!",-1));function bt(a,s,o,d,t,l){const f=_("font-awesome-icon"),x=_("o-autocomplete"),S=_("o-datepicker"),k=_("o-collapse"),b=_("router-link"),E=_("o-inputitems"),A=_("o-field");return t.categoryDetail?(n(),c("div",V,[e("div",B,[e("a",{href:"#confirm",class:"editor-button confirm-button",onClick:s[0]||(s[0]=I(i=>l.saveCategory(),["prevent"]))},[g(f,{icon:"check"})]),e("div",G,[H,e("div",j,[h(e("select",{"onUpdate:modelValue":s[1]||(s[1]=i=>t.newLanguage=i),onChange:s[2]||(s[2]=i=>l.changeEditedLang())},[(n(!0),c(w,null,C(a.$store.state.coredata.langs,(i,D)=>(n(),c("option",{key:D+"langs",value:i},m(i.name),9,O))),128))],544),[[P,t.newLanguage]])])])]),t.editing?(n(),c("div",z,[g(k,{open:!1,"aria-id":"contentHiddenProperties"},{trigger:y(i=>[e("h3",R,[q,J,g(f,{icon:i.open?"angle-down":"angle-up"},null,8,["icon"])])]),default:y(()=>[e("div",K,[e("div",W,[e("div",Y,[t.editing?(n(),c("div",Q,[e("div",X,[e("div",Z,[$,e("div",ee,[g(x,{modelValue:t.categoryDetail.type,"onUpdate:modelValue":s[3]||(s[3]=i=>t.categoryDetail.type=i),placeholder:"e.g. products","keep-first":!0,"open-on-focus":!0,data:t.categoryTypes,field:"categoryDetail.type",clearable:!1},null,8,["modelValue","data"])])])]),e("div",te,[e("div",se,[ae,e("div",ie,[h(e("input",{class:"input",type:"text","onUpdate:modelValue":s[4]||(s[4]=i=>t.categoryDetail.subtype=i),translate:"yes",placeholder:"Subtype"},null,512),[[p,t.categoryDetail.subtype]])])])]),e("div",oe,[e("div",le,[ne,e("div",re,[h(e("input",{class:"input",type:"text","onUpdate:modelValue":s[5]||(s[5]=i=>t.categoryDetail.externalId=i),translate:"yes",placeholder:"External Id"},null,512),[[p,t.categoryDetail.externalId]])])])])])):u("",!0)])]),e("div",ce,[e("div",de,[t.editing?(n(),c("div",ge,[e("div",ue,[e("div",he,[ye,e("div",pe,[h(e("input",{class:"input",type:"text","onUpdate:modelValue":s[6]||(s[6]=i=>t.categoryDetail.slug=i),translate:"yes",placeholder:"Slug"},null,512),[[p,t.categoryDetail.slug]])])])]),e("div",_e,[e("div",me,[fe,e("div",ve,[h(e("textarea",{class:"textarea","onUpdate:modelValue":s[7]||(s[7]=i=>t.categoryDetail.note=i),translate:"yes",placeholder:"Note"},null,512),[[p,t.categoryDetail.note]])])])])])):u("",!0)])]),e("div",De,[e("div",be,[t.categoryDetail?(n(),c("div",we,[e("div",Ce,[e("div",Se,[ke,e("div",Ie,[g(S,{value:l.getActivity().start,onInput:s[8]||(s[8]=i=>l.setActivity("start",i)),placeholder:"Activity Start DateTime",icon:"calendar-alt","trap-focus":""},null,8,["value"])])])]),e("div",xe,[e("div",Ee,[Ae,e("div",Le,[g(S,{value:l.getActivity().end,onInput:s[9]||(s[9]=i=>l.setActivity("end",i)),placeholder:"Activity End DateTime",icon:"calendar-alt","trap-focus":""},null,8,["value"])])])])])):u("",!0)])])])]),_:1}),l.user&&l.user!=null&&l.user.type&&l.user.type=="admin"?(n(),c("div",Pe,[g(k,{open:!1,"aria-id":"contentHiddenPropertiesAdmin"},{trigger:y(i=>[e("h3",Te,[Ne,Me,g(f,{icon:i.open?"angle-down":"angle-up"},null,8,["icon"])])]),default:y(()=>[e("div",Fe,[e("div",Ue,[e("div",Ve,[e("div",Be,[Ge,e("div",He,[h(e("input",{class:"input",type:"text","onUpdate:modelValue":s[10]||(s[10]=i=>t.categoryDetail.publisher=i),translate:"yes",placeholder:"Publisher"},null,512),[[p,t.categoryDetail.publisher]])])])])])])]),_:1})])):u("",!0)])):u("",!0),e("div",{class:"columns category-header",style:T({backgroundImage:"url("+l.getCategoryBackground()+")"})},[e("div",je,[e("div",Oe,[e("div",ze,[e("label",Re,[e("input",{class:"file-input",type:"file",name:"resume",onInput:s[11]||(s[11]=i=>l.categoryMainImageUpload(i))},null,32),qe])]),e("a",{class:"action remove button is-danger is-outlined",onClick:s[12]||(s[12]=I(i=>l.categoryMainImageDelete(),["prevent"]))},Ye)]),t.categoryDetail?(n(),c("h1",Qe,m(t.categoryDetail.name[t.language.code]),1)):u("",!0),t.categoryDetail?(n(),c("h2",Xe,m(t.categoryDetail.descriptionShort[t.language.code]),1)):u("",!0),t.categoryDetail?(n(),c("p",Ze,m(t.categoryDetail.descriptionLong[t.language.code]),1)):(n(),c("h1",$e,"Products"))])],4),e("div",et,[e("div",tt,[e("div",st,[at,e("div",it,[h(e("input",{class:"input is-size-1 has-text-weight-semibold has-text-centered",type:"text","onUpdate:modelValue":s[13]||(s[13]=i=>t.categoryDetail.name[t.language.code]=i),onKeyup:s[14]||(s[14]=i=>l.checkNameDependents()),translate:"yes",placeholder:"Name"},null,544),[[p,t.categoryDetail.name[t.language.code]]])])]),e("div",ot,[lt,e("div",nt,[h(e("input",{class:"input is-size-5 has-text-weight-normal has-text-centered",type:"text","onUpdate:modelValue":s[15]||(s[15]=i=>t.categoryDetail.descriptionShort[t.language.code]=i),translate:"yes",placeholder:"Description Short"},null,512),[[p,t.categoryDetail.descriptionShort[t.language.code]]])])]),e("div",rt,[ct,e("div",dt,[h(e("input",{class:"input is-size-5 has-text-weight-normal has-text-centered",type:"text","onUpdate:modelValue":s[16]||(s[16]=i=>t.categoryDetail.descriptionLong[t.language.code]=i),translate:"yes",placeholder:"Description Long"},null,512),[[p,t.categoryDetail.descriptionLong[t.language.code]]])])])])]),e("div",gt,[e("div",ut,[t.categoryDetail&&t.categoryDetail.subs?(n(),c("nav",ht,[yt,(n(!0),c(w,null,C(this.categoryDetail.subs,(i,D)=>(n(),F(b,{class:"panel-block",key:D,title:i.descriptionShort[t.language.code],to:{name:"categoryList",params:{category:i.pathSlug}}},{default:y(()=>[v(m(i.name[t.language.code]),1)]),_:2},1032,["title","to"]))),128))])):u("",!0)]),e("div",pt,[e("section",null,[g(A,{label:"Enter parent categories' url slugs"},{default:y(()=>[g(E,{modelValue:t.categoryDetail.parentPath,"onUpdate:modelValue":s[17]||(s[17]=i=>t.categoryDetail.parentPath=i),data:t.filteredCategoriesSlugs,autocomplete:"","allow-new":!1,field:"user.first_name",iconPack:"fas",icon:"tags",placeholder:"Parent Categories",type:"is-info",onTyping:l.getFilteredCategories},null,8,["modelValue","data","onTyping"])]),_:1})]),t.breadcrumbs&&t.breadcrumbs!=null&&t.breadcrumbs.length>0?(n(),c("nav",_t,[e("ul",null,[(n(!0),c(w,null,C(t.breadcrumbs,(i,D)=>(n(),c("li",{key:D},[g(b,{title:i.name[t.language.code],to:{name:"categoryList",params:{category:i.pathSlug}}},{default:y(()=>[v(m(i.name[t.language.code]),1)]),_:2},1032,["title","to"])]))),128)),e("li",mt,[g(b,{title:t.categoryDetail.name[t.language.code],to:{name:"categoryList",params:{category:t.categoryDetail.pathSlug}},"aria-current":"page"},{default:y(()=>[v(m(t.categoryDetail.name[t.language.code]),1)]),_:1},8,["title","to"])])])])):u("",!0)])]),this.categoryDetail&&this.categoryDetail!=null?(n(),c("div",ft,[e("div",vt,[e("section",null,[e("button",{class:"button is-danger",onClick:s[18]||(s[18]=i=>l.deleteCategory()),translate:"yes"},"DELETE This Category"),Dt])])])):u("",!0)])):u("",!0)}var Ct=L(U,[["render",bt],["__scopeId","data-v-7851049e"],["__file","/Users/marthol/Documents/GitHub/stretchshop-front-vue/src/components/products/CategoryNewEdit.vue"]]);export{Ct as default};
