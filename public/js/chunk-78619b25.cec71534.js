(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-78619b25"],{5940:function(e,t,a){},6028:function(e,t,a){"use strict";var s=a("5940"),i=a.n(s);i.a},df24:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.page?a("div",{staticClass:"container page-detail"},[a("div",{staticClass:"field product-edit-language hidden"},[a("label",{staticClass:"label",attrs:{translate:"yes"}},[e._v("Edit Language")]),a("div",{staticClass:"control select"},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.newLanguage,expression:"newLanguage"}],on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.newLanguage=t.target.multiple?a:a[0]},function(t){return e.changeEditedLang()}]}},e._l(e.$store.state.coredata.langs,(function(t,s){return a("option",{key:s+"langs",domProps:{value:t}},[e._v(" "+e._s(t.name)+" ")])})),0)])]),e.editing?a("div",{staticClass:"page-hidden-properties"},[a("b-collapse",{attrs:{open:!1,"aria-id":"contentHiddenProperties"},scopedSlots:e._u([{key:"trigger",fn:function(t){return a("h3",{staticClass:"title is-3",attrs:{"aria-controls":"contentHiddenProperties"}},[a("span",{attrs:{translate:"yes"}},[e._v("Page's hidden properties")]),e._v(" "),a("font-awesome-icon",{attrs:{icon:t.open?"angle-down":"angle-up"}})],1)}}],null,!1,4003255297)},[a("div",{staticClass:"editableByAuthor-hidden collapse-content",attrs:{id:"contentHiddenProperties","aria-expanded":"true"}},[a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-12"},[e.editing?a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-3"},[a("div",{staticClass:"field"},[a("label",{staticClass:"label",attrs:{translate:"yes"}},[e._v("Type")]),a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.page.data.type,expression:"page.data.type"}],staticClass:"input",attrs:{type:"text",translate:"yes",placeholder:"Type"},domProps:{value:e.page.data.type},on:{input:function(t){t.target.composing||e.$set(e.page.data,"type",t.target.value)}}})])])]),a("div",{staticClass:"column is-3"},[a("div",{staticClass:"field"},[a("label",{staticClass:"label",attrs:{translate:"yes"}},[e._v("Subtype")]),a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.page.data.subtype,expression:"page.data.subtype"}],staticClass:"input",attrs:{type:"text",translate:"yes",placeholder:"Subtype"},domProps:{value:e.page.data.subtype},on:{input:function(t){t.target.composing||e.$set(e.page.data,"subtype",t.target.value)}}})])])]),a("div",{staticClass:"column is-3"},[a("div",{staticClass:"field"},[a("label",{staticClass:"label",attrs:{translate:"yes"}},[e._v("External Id")]),a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.page.data.externalId,expression:"page.data.externalId"}],staticClass:"input",attrs:{type:"text",translate:"yes",placeholder:"External Id"},domProps:{value:e.page.data.externalId},on:{input:function(t){t.target.composing||e.$set(e.page.data,"externalId",t.target.value)}}})])])])]):e._e()])]),a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-12"},[e.editing?a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-3"},[a("div",{staticClass:"field"},[a("label",{staticClass:"label",attrs:{translate:"yes"}},[e._v("Slug")]),a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.page.data.slug,expression:"page.data.slug"}],staticClass:"input",attrs:{type:"text",translate:"yes",placeholder:"Slug"},domProps:{value:e.page.data.slug},on:{input:function(t){t.target.composing||e.$set(e.page.data,"slug",t.target.value)}}})])])]),a("div",{staticClass:"column is-6"},[a("div",{staticClass:"field"},[a("label",{staticClass:"label",attrs:{translate:"yes"}},[e._v("Note")]),a("div",{staticClass:"control"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.page.data.note,expression:"page.data.note"}],staticClass:"textarea",attrs:{translate:"yes",placeholder:"Note"},domProps:{value:e.page.data.note},on:{input:function(t){t.target.composing||e.$set(e.page.data,"note",t.target.value)}}})])])]),a("div",{staticClass:"column is-3"},[a("div",{staticClass:"field"},[a("label",{staticClass:"label",attrs:{translate:"yes"}},[e._v("Activity")]),a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.page.data.activity,expression:"page.data.activity"}],staticClass:"input",attrs:{type:"text",translate:"yes",placeholder:"Activity"},domProps:{value:e.page.data.activity},on:{input:function(t){t.target.composing||e.$set(e.page.data,"activity",t.target.value)}}})])])])]):e._e()])])])]),e.user&&null!=e.user&&e.user.type&&"admin"==e.user.type?a("div",[a("b-collapse",{attrs:{open:!1,"aria-id":"contentHiddenPropertiesAdmin"},scopedSlots:e._u([{key:"trigger",fn:function(t){return a("h3",{staticClass:"title is-3",attrs:{"aria-controls":"contentHiddenProperties",translate:"yes"}},[a("span",{attrs:{traslate:"yes"}},[e._v("Editable by admin user")]),e._v(" "),a("font-awesome-icon",{attrs:{icon:t.open?"angle-down":"angle-up"}})],1)}}],null,!1,476455311)},[a("div",{staticClass:"editableByAdmin-hidden"},[a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-4 is-offset-4"},[a("div",{staticClass:"field"},[a("label",{staticClass:"label",attrs:{translate:"yes"}},[e._v("Publisher")]),a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.page.data.publisher,expression:"page.data.publisher"}],staticClass:"input",attrs:{type:"text",translate:"yes",placeholder:"Publisher"},domProps:{value:e.page.data.publisher},on:{input:function(t){t.target.composing||e.$set(e.page.data,"publisher",t.target.value)}}})])])])])])])],1):e._e()],1):e._e(),a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-3"}),a("div",{staticClass:"column is-6"},[a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-6"},[a("section",[a("b-field",{attrs:{label:"Enter categories' url slugs"}},[a("b-taginput",{attrs:{data:e.filteredCategoriesSlugs,autocomplete:"","allow-new":!1,field:"user.first_name",icon:"tags",placeholder:"Categories",type:"is-info"},on:{typing:e.getFilteredCategories},model:{value:e.page.data.categories,callback:function(t){e.$set(e.page.data,"categories",t)},expression:"page.data.categories"}})],1)],1),e.parentCategoryDetail?a("nav",{staticClass:"breadcrumb",attrs:{"aria-label":"breadcrumbs"}},[e.parentCategoryDetail.parentCategories?a("ul",[e._l(e.parentCategoryDetail.parentCategories,(function(t,s){return a("li",{key:s},[a("router-link",{attrs:{title:t.name[e.$store.state.language.code],to:{name:"categoryList",params:{category:t.pathSlug}}}},[e._v(" "+e._s(t.name[e.$store.state.language.code])+" ")])],1)})),a("li",{staticClass:"is-active"},[a("router-link",{attrs:{title:e.parentCategoryDetail.name[e.$store.state.language.code],to:{name:"categoryList",params:{category:e.parentCategoryDetail.pathSlug}},"aria-current":"page"}},[e._v(" "+e._s(e.parentCategoryDetail.name[e.$store.state.language.code])+" ")])],1)],2):e._e()]):e._e()]),a("div",{staticClass:"column is-6"},[a("section",[a("b-field",{attrs:{label:"Enter related pages' url slugs"}},[a("b-taginput",{attrs:{data:e.filteredPagesSlugs,autocomplete:"","allow-new":!1,icon:"tags",placeholder:"Pages",type:"is-info"},on:{typing:e.getFilteredPages},model:{value:e.page.data.pages,callback:function(t){e.$set(e.page.data,"pages",t)},expression:"page.data.pages"}})],1)],1)])]),e.page&&e.page.data&&null!=e.page.data?a("div",{staticClass:"data-main"},[a("div",{staticClass:"field"},[a("label",{staticClass:"label",attrs:{translate:"yes"}},[e._v("Name")]),a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.page.data.name[e.language.code],expression:"page.data.name[language.code]"}],staticClass:"input is-size-1 has-text-weight-semibold has-text-centered",attrs:{type:"text",translate:"yes",placeholder:"Name"},domProps:{value:e.page.data.name[e.language.code]},on:{keyup:function(t){return e.checkNameDependents()},input:function(t){t.target.composing||e.$set(e.page.data.name,e.language.code,t.target.value)}}})])]),a("div",{staticClass:"field"},[a("label",{staticClass:"label",attrs:{translate:"yes"}},[e._v("Description Short")]),a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.page.data.descriptionShort[e.language.code],expression:"page.data.descriptionShort[language.code]"}],staticClass:"input is-size-5 has-text-weight-normal has-text-centered",attrs:{type:"text",translate:"yes",placeholder:"Description Short"},domProps:{value:e.page.data.descriptionShort[e.language.code]},on:{input:function(t){t.target.composing||e.$set(e.page.data.descriptionShort,e.language.code,t.target.value)}}})])]),a("div",{staticClass:"field"},[a("label",{staticClass:"label",attrs:{translate:"yes"}},[e._v("Description Long")]),a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.page.data.descriptionLong[e.language.code],expression:"page.data.descriptionLong[language.code]"}],staticClass:"input is-size-5 has-text-weight-normal has-text-centered",attrs:{type:"text",translate:"yes",placeholder:"Description Long"},domProps:{value:e.page.data.descriptionLong[e.language.code]},on:{input:function(t){t.target.composing||e.$set(e.page.data.descriptionLong,e.language.code,t.target.value)}}})])])]):e._e(),a("div",{staticClass:"page-body",domProps:{innerHTML:e._s(e.page.body)}})])]),e.page&&null!=e.page?a("div",{staticClass:"columns page-delete"},[a("div",{staticClass:"column is-12"},[a("section",[a("button",{staticClass:"button is-danger",attrs:{translate:"yes"},on:{click:function(t){return e.deletePage()}}},[e._v("DELETE This Page")]),a("p",{attrs:{translate:"yes"}},[e._v("Warning: This action cannot be undone!")])])])]):e._e()]):e._e()},i=[],n=(a("a481"),a("456d"),a("ac6a"),a("3b2b"),a("7618")),l=(a("7f7f"),a("6b54"),a("77b6")),o=a.n(l),r=(a("2b31"),{name:"PageNewEdit",data:function(){return{page:null,parentCategoryDetail:null,language:{code:"en",longCode:"en-US",name:"English"},newLanguage:null,editor:null,editing:!1,userEditAllowed:!1,filteredCategoriesSlugs:[],filteredPagesSlugs:[],modal:null,fireCounter:0,dataToGenerateFromName:{slug:!0,externalId:!0}}},created:function(){this.language=this.$store.state.language},computed:{user:function(){return this.$store.getters.getUserProfile}},beforeRouteLeave:function(e,t,a){this.editor&&this.editor.destroy(),a()},watch:{user:function(e,t){console.log("new & old",e,t),e&&null!=e&&(this.getUserEditAllowed(),this.userEditAllowed&&this.getPageDetail())}},mounted:function(){this.getUserEditAllowed(),this.userEditAllowed&&this.getPageDetail()},methods:{getUserEditAllowed:function(){if(this.language=this.$store.state.language,this.user&&null!=this.user&&this.user.type&&"admin"==this.user.type)return this.userEditAllowed=!0,void this.user.settings.language;this.userEditAllowed=!1},getPageDetail:function(){var e=this;"undefined"==typeof this.$route.params.category&&(this.$route.params.category="-"),this.$route.params&&this.$route.params.slug&&""!=this.$route.params.slug.toString().trim()&&("---new"==this.$route.params.slug.toString().trim()?setTimeout((function(){e.page=e.getEmptyPage(),e.runEditor()}),1e3):this.$httpc.get("pages/"+this.$route.params.category+"/detail/"+this.$route.params.slug+"?lang="+e.$store.state.language.code).then((function(t){t.data&&(e.page=t.data,e.page&&e.page.data&&e.page.data.name&&e.$store.state&&void 0!==Object(n["a"])(e.page.data.name[e.$store.state.language.code])&&(document.title=e.page.data.name[e.$store.state.language.code]+" - StretchShop"),console.log("page detail",t.data)),e.page&&e.page.data&&e.page.data.parentCategoryDetail&&(e.parentCategoryDetail=e.page.data.parentCategoryDetail,delete e.page.data.parentCategoryDetail)})).catch((function(e){console.log(e)})).then((function(){e.runEditor()})))},runEditor:function(){var e=this;if(this.$route.query.lang){var t=this.$store.dispatch("checkLanguage",this.$route.query.lang);t.then((function(t){console.log("language check result:",t),e.language&&e.language.code&&t&&t.code&&e.language.code!=t.code&&(e.language=t)}))}setTimeout((function(){o.a.IMAGE_UPLOADER=e.editorCTimageUploader,e.editor=o.a.EditorApp.get(),console.log("get editor"),e.editor.init("*[data-editable]","data-name"),console.log("init editor"),e.editor.start(),console.log("start editor"),e.editor.ignition().state("editing"),console.log("editor ignition state editing"),e.editing=!0,e.newLanguage=e.language,e.editor.addEventListener("saved",(function(t){console.log("editor saved",t);var a=t.detail().regions;console.log("regions",a),e.editor.busy(!0),a&&"undefined"!==typeof a["content"]&&(console.log("self.page: ",e.page),console.log("self.page.data: ",e.page.data),console.log("self.page.data.data: ",e.page.data.data),e.page.data.data.blocks||(e.page.data.data.blocks=[]),0==e.page.data.data.blocks.length&&e.page.data.data.blocks.push({}),console.log("self.page.data.data.blocks: ",e.page.data.data.blocks),console.log("self.page.data.data.blocks[0]: ",e.page.data.data.blocks[0]),e.page.data.data.blocks[0]&&!e.page.data.data.blocks[0][e.language.code]&&(e.page.data.data.blocks[0][e.language.code]={}),e.page.data.data.blocks[0][e.language.code]=a["content"],console.log("page data.blocks[0]["+e.language.code+"]:",e.page.data.data.blocks[0][e.language.code])),e.savePage()}))}),1e3)},editorCTimageUploader:function(e){var t,a,s,i,n=this;console.log("xxx",e),e.addEventListener("imageuploader.cancelupload",(function(){a&&(a.upload.removeEventListener("progress",i),a.removeEventListener("readystatechange",s),a.abort()),e.state("empty")})),e.addEventListener("imageuploader.clear",(function(){e.clear(),t=null})),e.addEventListener("imageuploader.fileready",(function(l){var r,d=l.detail().file;i=function(t){e.progress(t.loaded/t.total*100)},s=function(l){var r;if(4==l.target.readyState)if(a=null,i=null,s=null,200==parseInt(l.target.status)){var d=l.target.responseText.length-2,g=l.target.responseText.substr(1,d);r=JSON.parse(g),console.log("upload response:",r);var c=new Image,u=n.$store.state.coredata.settings.assets.url+"/pages/editor/"+r.files[0].path;c.onload=function(){t={size:[c.width,c.height],url:u},e.populate(t.url,t.size)},c.src=u}else new o.a.FlashUI("no")},e.state("uploading"),e.progress(0),r=new FormData,r.append("image",d),a=new XMLHttpRequest,a.upload.addEventListener("progress",i),a.addEventListener("readystatechange",s),console.log("POST URL:",n.$httpc.defaults,n.$httpc.defaults.baseURL,n.$httpc.defaults.baseURL+"/pages/upload/"+n.page.data.slug),a.open("POST",n.$httpc.defaults.baseURL+"pages/upload/"+n.page.data.slug,!0),a.setRequestHeader("Authorization","Token "+n.$cookies.get("token")),a.setRequestHeader("Accept","application/json"),a.send(r)})),e.addEventListener("imageuploader.save",(function(){e.save(t.url,t.size,{alt:"test","data-ce-max-width":t.size[0]})}))},changeEditedLang:function(){this.fireCounter++,this.editing&&this.newLanguage&&this.newLanguage.code&&1==this.fireCounter&&(window.location=window.location.origin+this.$route.path+"?lang="+this.newLanguage.code)},savePage:function(){var e=this;if(this.page&&this.page.data&&this.page.data._id&&!this.page.data.id&&(this.page.data.id=this.page.data._id,delete this.page.data._id),this.page.data.blocks){var t=new RegExp(" data-editable ","g");Object.keys(this.page.data.blocks).forEach((function(e){if(this.page.data.blocks[e].indexOf(" data-editable ")){this.$route.params.id.toString().replace("---","@").replace(t,".");this.page.data.blocks[e]=this.page.data.blocks[e].replace(t)}}))}var a={pages:[]};a.pages.push(this.page.data),console.log("pagesToPut: ",a),this.$httpc.put("pages",a,{needsAuth:!0}).then((function(t){if(t.data&&t.data.length>0){var a=t.data[0],s=e.$router.resolve({name:"pageNewEdit",params:{slug:a.slug}});window.location=s.href}})).catch((function(t){console.log("savePage error:",t),e.editor.busy(!1)}))},deletePage:function(){var e=this,t={pages:[{id:e.page._id}]};this.page&&this.page._id&&confirm("Are you sure you want to delete this page?")&&this.$httpc.delete("pages",{data:t}).then((function(e){e&&e.data&&alert("Page has been successfully removed. You will be redirected now")}))},getFilteredCategories:function(e){var t=this;return e&&""!=e.toString().trim()?this.$httpc.post("categories/find",{query:{pathSlug:{$regex:e},type:"pages"}}).then((function(e){if(e.data)return e.data})).catch((function(e){console.log(e)})).then((function(e){var a=[];if(t.page.data.categories&&e&&e.categories&&e.categories.length>0)for(var s=0;s<e.categories.length;s++)e.categories[s].pathSlug&&t.page.data.categories.indexOf(e.categories[s].pathSlug)<0&&a.push(e.categories[s].pathSlug);return t.filteredCategoriesSlugs=a,a})):(t.filteredCategoriesSlugs=[],[])},getFilteredPages:function(e){var t=this;return e&&""!=e.toString().trim()?this.$httpc.post("pages/listTemplates/"+t.page.data.slug,{query:{slug:e}}).then((function(e){if(e.data)return e.data})).catch((function(e){console.log(e)})).then((function(e){var a=[];if(t.page.data.pages&&e&&e.length>0)for(var s=0;s<e.length;s++)t.page.data.pages.indexOf(e[s])<0&&a.push(e[s]);return t.filteredPagesSlugs=a,console.log("pageSlugs:",a),a})):(t.filteredPagesSlugs=[],[])},getEmptyPage:function(){var e=this;return console.log("GEP:",e.$helpers.getLangsEmptyObject(e.$store.state.coredata.langCodes)),{body:'<div data-editable data-name="content"><p>Your content here</p></div>',data:{externalId:null,variationGroupId:null,slug:null,publisher:e.user.email,authors:null,type:"page",subtype:"default",name:e.$helpers.getLangsEmptyObject(e.$store.state.coredata.langCodes),descriptionShort:e.$helpers.getLangsEmptyObject(e.$store.state.coredata.langCodes),descriptionLong:e.$helpers.getLangsEmptyObject(e.$store.state.coredata.langCodes),properties:null,data:{blocks:[]},categories:[],pages:[],dates:{dateCreated:null,dateUpdated:null,dateSynced:null},note:null,activity:null}}},checkNameDependents:function(){if(this.page&&this.page.data&&!this.page.data._id){var e=this.language&&this.language.code?this.language.code:null;this.newLanguage&&this.newLanguage.code&&(e=this.newLanguage.code),this.page.data.name&&this.page.data.name[e]&&""!=this.page.data.name[e].trim()&&((this.page.data.slug&&""==this.page.data.slug.trim()||this.dataToGenerateFromName.slug)&&(this.page.data.slug=this.$helpers.stringToSlug(this.page.data.name[e]),this.dataToGenerateFromName.slug=!0),(this.page.data.externalId&&""==this.page.data.externalId.trim()||this.dataToGenerateFromName.externalId)&&(this.page.data.externalId=this.$helpers.stringToSlug(this.page.data.name[e]),this.dataToGenerateFromName.externalId=!0))}}}}),d=r,g=(a("6028"),a("2877")),c=Object(g["a"])(d,s,i,!1,null,"f57b8758",null);t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-78619b25.cec71534.js.map