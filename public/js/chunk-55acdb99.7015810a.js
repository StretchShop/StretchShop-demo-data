(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-55acdb99"],{"11e9":function(t,e,a){var r=a("52a7"),i=a("4630"),s=a("6821"),n=a("6a99"),o=a("69a8"),c=a("c69a"),l=Object.getOwnPropertyDescriptor;e.f=a("9e1e")?l:function(t,e){if(t=s(t),e=n(e,!0),c)try{return l(t,e)}catch(a){}if(o(t,e))return i(!r.f.call(t,e),t[e])}},"2f21":function(t,e,a){"use strict";var r=a("79e5");t.exports=function(t,e){return!!t&&r((function(){e?t.call(null,(function(){}),1):t.call(null)}))}},"3a0c":function(t,e,a){"use strict";var r=a("e15e"),i=a.n(r);i.a},"4b9e":function(t,e,a){},"55dd":function(t,e,a){"use strict";var r=a("5ca1"),i=a("d8e8"),s=a("4bf8"),n=a("79e5"),o=[].sort,c=[1,2,3];r(r.P+r.F*(n((function(){c.sort(void 0)}))||!n((function(){c.sort(null)}))||!a("2f21")(o)),"Array",{sort:function(t){return void 0===t?o.call(s(this)):o.call(s(this),i(t))}})},"5dbc":function(t,e,a){var r=a("d3f4"),i=a("8b97").set;t.exports=function(t,e,a){var s,n=e.constructor;return n!==a&&"function"==typeof n&&(s=n.prototype)!==a.prototype&&r(s)&&i&&i(t,s),t}},"8b97":function(t,e,a){var r=a("d3f4"),i=a("cb7c"),s=function(t,e){if(i(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{r=a("9b43")(Function.call,a("11e9").f(Object.prototype,"__proto__").set,2),r(t,[]),e=!(t instanceof Array)}catch(i){e=!0}return function(t,a){return s(t,a),e?t.__proto__=a:r(t,a),t}}({},!1):void 0),check:s}},9093:function(t,e,a){var r=a("ce10"),i=a("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},a906:function(t,e,a){"use strict";var r=a("4b9e"),i=a.n(r);i.a},aa77:function(t,e,a){var r=a("5ca1"),i=a("be13"),s=a("79e5"),n=a("fdef"),o="["+n+"]",c="​",l=RegExp("^"+o+o+"*"),u=RegExp(o+o+"*$"),g=function(t,e,a){var i={},o=s((function(){return!!n[t]()||c[t]()!=c})),l=i[t]=o?e(p):n[t];a&&(i[a]=l),r(r.P+r.F*o,"String",i)},p=g.trim=function(t,e){return t=String(i(t)),1&e&&(t=t.replace(l,"")),2&e&&(t=t.replace(u,"")),t};t.exports=g},b3b9:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container category-list"},[t.userCanEdit&&(t.categoryDetail&&t.categoryDetail.pathSlug||t.page)?a("div",{staticClass:"edit-area"},[t.categoryDetail&&t.categoryDetail.pathSlug?a("router-link",{staticClass:"editor-button edit-button",attrs:{to:{name:"categoryNewEdit",params:{category:t.categoryDetail.pathSlug}}}},[a("font-awesome-icon",{attrs:{icon:"edit"}})],1):t._e(),t.page&&t.page.slug?a("router-link",{staticClass:"editor-button edit-button",attrs:{to:{name:"pageNewEdit",params:{slug:t.page.slug}}}},[a("font-awesome-icon",{attrs:{icon:"edit"}})],1):t._e()],1):t._e(),a("div",{staticClass:"columns category-header",style:{backgroundImage:"url("+t.getCategoryBackground()+")"}},[a("div",{staticClass:"column"},[t.categoryDetail?a("h1",{staticClass:"title is-1"},[t._v(t._s(t.categoryDetail.name[t.$store.state.language.code]))]):t._e(),t.categoryDetail?a("h2",{staticClass:"title is-3"},[t._v(t._s(t.categoryDetail.descriptionShort[t.$store.state.language.code]))]):t._e(),t.categoryDetail?a("p",{},[t._v(t._s(t.categoryDetail.descriptionLong[t.$store.state.language.code]))]):a("h1",{staticClass:"title is-1 title-products",attrs:{translate:"yes"}},[t._v("Products")])])]),a("div",{staticClass:"columns",attrs:{id:"category-main-content"}},[a("div",{staticClass:"column is-3"},[t.categories&&t.categories.length>0?a("nav",{staticClass:"panel"},[a("aside",{staticClass:"menu"},[a("p",{staticClass:"menu-label",attrs:{translate:"yes"}},[t._v(" Sub-Categories ")]),a("ul",{staticClass:"menu-list"},t._l(this.categories,(function(e,r){return a("li",{key:r},[a("router-link",{attrs:{title:e.descriptionShort[t.$store.state.language.code],to:{name:"categoryList",params:{category:e.pathSlug}}}},[t._v(" "+t._s(e.name[t.$store.state.language.code])+" ")])],1)})),0)])]):t._e(),a("category-filter",{ref:"categoryFilter",attrs:{filter:t.filter,categoryMinMaxPrice:t.categoryMinMax,categoryType:t.getCategoryType()}})],1),a("div",{staticClass:"column is-9"},[t.breadcrumbs&&null!=t.breadcrumbs&&t.breadcrumbs.length>0?a("nav",{staticClass:"breadcrumb",attrs:{"aria-label":"breadcrumbs"}},[a("ul",[t._l(t.breadcrumbs,(function(e,r){return a("li",{key:r},[a("router-link",{attrs:{title:e.name[t.$store.state.language.code],to:{name:"categoryList",params:{category:e.pathSlug}}}},[t._v(" "+t._s(e.name[t.$store.state.language.code])+" ")])],1)})),a("li",{staticClass:"is-active"},[a("router-link",{attrs:{title:t.categoryDetail.name[t.$store.state.language.code],to:{name:"categoryList",params:{category:t.categoryDetail.pathSlug}},"aria-current":"page"}},[t._v(" "+t._s(t.categoryDetail.name[t.$store.state.language.code])+" ")])],1)],2)]):t._e(),t.products&&t.products.length>0?a("div",[a("category-paging",{ref:"categoryPaging",attrs:{total:t.categoryProductsTotalForPaging}}),"product"==t.itemsToListType?a("div",t._l(t.products,(function(e,r){return a("div",{key:t.groupsLastRefresh+r,staticClass:"tile is-ancestor"},t._l(e,(function(e,i){return a("router-link",{key:t.groupsLastRefresh+e._id+(r+i),staticClass:"tile is-parent is-4",attrs:{title:e.descriptionShort[t.$store.state.language.code],to:{name:"productDetail",params:{category:t.categoryDetail.pathSlug,product:e._id,slug:e.slug}}}},[a("product-box",{attrs:{product:e,hideBuyButton:"true"}})],1)})),1)})),0):t._e(),"page"==t.itemsToListType?a("div",t._l(t.products,(function(e,r){return a("div",{key:t.groupsLastRefresh+r,staticClass:"tile is-ancestor"},t._l(e,(function(e,i){return a("router-link",{key:t.groupsLastRefresh+e._id+(r+i),staticClass:"tile is-parent is-4",attrs:{title:e.descriptionShort[t.$store.state.language.code],to:{name:"pageDetail",params:{category:t.categoryDetail.pathSlug,slug:e.slug}}}},[a("product-box",{attrs:{product:e}})],1)})),1)})),0):t._e(),a("category-paging",{ref:"categoryPaging",attrs:{bottom:!0,total:t.categoryProductsTotalForPaging}})],1):t.page&&t.page.data?a("div",[a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-9"},[t.page.data&&t.page.data.name?a("h1",{staticClass:"title is-1"},[t._v(t._s(t.page.data.name[t.$store.state.language.code]))]):t._e(),a("page-detail-content",{attrs:{content:t.categoryTypePageContent,contentData:t.categoryTypePageData,contentLang:t.language.code}})],1)])]):a("div",[a("h2",{attrs:{translate:"yes"}},[t._v("Nothing found")])])])])])},i=[],s=(a("55dd"),a("6b54"),a("28a5"),a("456d"),a("ac6a"),a("5ac7")),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.categoryTotalCount>0?a("nav",{staticClass:"panel categoryFilter"},[a("p",{staticClass:"panel-heading",attrs:{translate:"yes"}},[t._v(" Filter ")]),a("div",{staticClass:"panel-block"},[a("p",{staticClass:"control has-text-centered is-size-7"},[t.countsDoNotMatch?a("span",[a("span",{attrs:{id:"products-filter-count-total",translate:"yes"}},[t._v("Filtered")]),t._v(": "),a("span",[t._v(t._s(t.filteredCount))]),t._v(" / ")]):t._e(),a("span",{attrs:{id:"products-filter-count-total",translate:"yes"}},[t._v("Total")]),t._v(": "),a("span",[t._v(t._s(t.categoryTotalCount))])])]),a("div",{staticClass:"panel-block"},[a("p",{staticClass:"control has-icons-left"},[a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.tempFilter.stringFilter,expression:"tempFilter.stringFilter",modifiers:{trim:!0}}],staticClass:"input is-small",attrs:{type:"text",translate:"yes",placeholder:"search"},domProps:{value:t.tempFilter.stringFilter},on:{keyup:t.stringFilterChange,input:function(e){e.target.composing||t.$set(t.tempFilter,"stringFilter",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),t._m(0)])]),"products"==t.categoryType?a("div",{staticClass:"panel-block"},[a("div",{staticClass:"panel-block-multiwrapper"},[t._m(1),a("div",{staticClass:"slider-range",attrs:{slider:""}},[a("div",{staticClass:"slider-range-controls"},[a("div",{staticStyle:{width:"0%"},attrs:{"inverse-left":""}}),a("div",{staticStyle:{width:"0%"},attrs:{"inverse-right":""}}),a("div",{staticStyle:{left:"0%",right:"0%"},attrs:{range:""}}),a("span",{staticStyle:{left:"0%"},attrs:{thumb:"left"}}),a("span",{staticStyle:{left:"100%"},attrs:{thumb:"right"}}),a("div",{staticStyle:{left:"0%"},attrs:{sign:"left"}},[a("span",{staticClass:"value"},[t._v(t._s(t.categoryPriceMin))])]),a("div",{staticStyle:{left:"100%"},attrs:{sign:"right"}},[a("span",{staticClass:"value"},[t._v(t._s(t.categoryPriceMax))])])]),a("input",{attrs:{type:"range",position:"left",tabindex:"0",max:t.categoryPriceMax,min:t.categoryPriceMin,step:"1"},domProps:{value:t.filterPriceMin},on:{input:t.priceSliderChange}}),a("input",{attrs:{type:"range",position:"right",tabindex:"0",max:t.categoryPriceMax,min:t.categoryPriceMin,step:"1"},domProps:{value:t.filterPriceMax},on:{input:t.priceSliderChange}})])])]):t._e(),"products"==t.categoryType?a("div",{staticClass:"panel-block"},[a("div",{staticClass:"panel-block-multiwrapper"},[t._m(2),a("div",[a("div",{staticClass:"control has-text-centered"},[a("div",{staticClass:"select is-centered"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.tempFilter.sort,expression:"tempFilter.sort"}],on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.tempFilter,"sort",e.target.multiple?a:a[0])},t.changeSorting]}},[a("option",{attrs:{value:"price"}},[t._v("Price Ascending")]),a("option",{attrs:{value:"-price"}},[t._v("Price Descending")]),a("option",{attrs:{value:"-dates.dateCreated"}},[t._v("Latest")]),a("option",{attrs:{value:"stockAmount"}},[t._v("On Stock Amount")])])])])])])]):t._e(),"pages"==t.categoryType?a("div",{staticClass:"panel-block"},[a("div",{staticClass:"panel-block-multiwrapper"},[t._m(3),a("div",[a("div",{staticClass:"control has-text-centered"},[a("div",{staticClass:"select is-centered"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.tempFilter.sort,expression:"tempFilter.sort"}],on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.tempFilter,"sort",e.target.multiple?a:a[0])},t.changeSorting]}},[a("option",{attrs:{value:"-dates.dateCreated"}},[t._v("Latest")]),a("option",{attrs:{value:"dates.dateCreated"}},[t._v("Oldest")])])])])])])]):t._e()]):t._e()},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"icon is-small is-left"},[a("i",{staticClass:"fas fa-search",attrs:{"aria-hidden":"true"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("label",{staticClass:"label",attrs:{translate:"yes"}},[t._v("Price")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("label",{staticClass:"label"},[a("span",{attrs:{translate:"yes"}},[t._v("Sort by")]),t._v(":")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("label",{staticClass:"label"},[a("span",{attrs:{translate:"yes"}},[t._v("Sort by")]),t._v(":")])])}],c=a("5b55"),l=a("56d7"),u={data:function(){return{eventTimeoutId:null,tempFilter:{page:1,minMaxPrice:{min:0,max:0},stringFilter:"",sort:this.getDefaultSorting()},introMinMaxPrice:{min:null,max:null}}},mounted:function(){console.log("getCategoryType:",this.getCategoryType()),l["eventBus"].$emit("translateContent",this.$store.getters.getTranslates)},props:["filter","categoryMinMaxPrice","categoryType"],computed:{filterPriceMin:function(){return 0!=this.tempFilter.minMaxPrice.min?this.tempFilter.minMaxPrice.min:this.categoryPriceMin},filterPriceMax:function(){return 0!=this.tempFilter.minMaxPrice.max?this.tempFilter.minMaxPrice.max:this.categoryPriceMax},categoryPriceMin:function(){return"undefined"!==typeof this.categoryMinMaxPrice&&this.categoryMinMaxPrice.min<this.categoryMinMaxPrice.max?this.categoryMinMaxPrice.min:0},categoryPriceMax:function(){return"undefined"!==typeof this.categoryMinMaxPrice&&this.categoryMinMaxPrice.max>this.categoryMinMaxPrice.min?this.categoryMinMaxPrice.max:0},filteredCount:function(){return"undefined"!==typeof this.$parent?this.$parent.getCategoryFilteredCount():0},categoryTotalCount:function(){return"undefined"!==typeof this.$parent&&"undefined"!==typeof this.$parent.categoryDetail&&this.$parent.categoryDetail&&this.$parent.categoryDetail.count&&this.$parent.categoryDetail.count>0?this.$parent.categoryDetail.count:0},countsDoNotMatch:function(){return this.filteredCount>0&&this.filteredCount!=this.categoryTotalCount}},methods:{stringFilterChange:function(t){var e=t.target;this.filter.stringFilter=e.value,this.requestFilteredProductList()},priceSliderChange:function(t){var e="undefined"!==typeof t.forceValue?t.forceValue:null,a=t.target,r=a.getAttribute("position"),i="",s=0,n=null;"left"===r?(i="right",s=-1,n=a.parentNode.querySelector("input[type=range][position="+i+"]"),a.value=Math.min(a.value,parseInt(n.value)+s)):(r="right",i="left",s=1,n=a.parentNode.querySelector("input[type=range][position="+i+"]"),a.value=Math.max(a.value,parseInt(n.value)+s));var o=null,c=this.$parent.getCategoryMinMax();null!==e?(0==a.min&&"undefined"!==typeof c.min&&(a.min=c.min),0==a.max&&"undefined"!==typeof c.max&&(a.max=c.max),o=100/(parseInt(a.max)-parseInt(a.min))*parseInt(e)-100/(parseInt(a.max)-parseInt(a.min))*parseInt(a.min),a.value=e):(0==a.value&&("left"===r&&c&&(a.value=c.min),"right"===r&&c&&(a.value=c.max)),o=100/(parseInt(a.max)-parseInt(a.min))*parseInt(a.value)-100/(parseInt(a.max)-parseInt(a.min))*parseInt(a.min));var l=a.parentNode.querySelector(".slider-range-controls");"left"===r?(l.querySelector("[inverse-"+r+"]").style.width=o+"%",l.querySelector("[range]").style.left=o+"%"):(l.querySelector("[inverse-"+r+"]").style.width=100-o+"%",l.querySelector("[range]").style.right=100-o+"%"),l.querySelector("[thumb="+r+"]").style.left=o+"%",l.querySelector("[sign="+r+"]").style.left=o+"%",0==a.value?("right"===r&&"undefined"!==typeof c.max&&c.max>0&&(l.querySelector("[sign="+r+"] .value").innerText=c.max),"left"===r&&"undefined"!==typeof c.min&&c.min>0&&(l.querySelector("[sign="+r+"] .value").innerText=c.min)):l.querySelector("[sign="+r+"] .value").innerText=a.value;var u={};"left"===r?(u.min=a.value,u.max=n.value):(u.min=n.value,u.max=a.value),this.tempFilter.minMaxPrice=u,null==e&&0==this.$parent.introLoading&&this.requestFilteredProductList()},requestFilteredProductList:function(){var t=this;clearTimeout(this.eventTimeoutId),this.eventTimeoutId=setTimeout((function(){t.$root.loadingShow(),t.$httpc.post(t.getCategoryType()+"/filter",t.buildFilterRequestObject(),{timeout:7e3}).then((function(e){var a=t.$parent.categoryDetail;e["data"]={categories:t.$parent.categories,categoryDetail:a,filter:e.data.filter,results:e.data.results,filteredProductsCount:e.data.filteredProductsCount},t.changeFilterUrl(),t.$parent.processCategoryResponse(e)})).catch((function(t){console.log(t)}))}),1e3)},buildFilterRequestObject:function(t){var e=this.tempFilter;"undefined"!==typeof t&&t&&(e=t);var a=null;if("undefined"!==typeof this.$parent.categoryDetail&&this.$parent.categoryDetail){e["category"]={_id:this.$parent.categoryDetail._id,pathSlug:this.$parent.categoryDetail.pathSlug,subsSlugs:this.$parent.categoryDetail.subsSlugs};var r=e.category.subsSlugs;r.unshift(e.category.pathSlug),a={$in:r}}var i={query:{categories:a},limit:c["a"].PER_PAGE,sort:e.sort};if(e.page>1){var s=Math.abs(e.page-1)*c["a"].PER_PAGE;s>0&&(i.offset=s)}e.stringFilter&&""!==e.stringFilter.trim()&&(i.query["name."+this.$store.state.language.code]={$regex:e.stringFilter});var n="undefined"!==typeof e.minMaxPrice&&"undefined"!==typeof e.minMaxPrice.min?e.minMaxPrice.min:0,o="undefined"!==typeof e.minMaxPrice&&"undefined"!==typeof e.minMaxPrice.max?e.minMaxPrice.max:0;return(n>this.categoryPriceMin||o<this.categoryPriceMax)&&n!=o&&o>0&&(i.query["price"]={$gte:parseFloat(n),$lte:parseFloat(o)}),i},changeFilterUrl:function(){var t=this.filterObjectToQueryString();""!==t&&history.pushState({},null,t)},filterObjectToQueryString:function(){var t=[],e="";return this.tempFilter.page>1&&t.push("page="+encodeURIComponent(parseInt(this.tempFilter.page))),this.tempFilter.minMaxPrice.min>this.categoryPriceMin&&t.push("price-min="+encodeURIComponent(this.tempFilter.minMaxPrice.min)),this.tempFilter.minMaxPrice.max<this.categoryPriceMax&&t.push("price-max="+encodeURIComponent(this.tempFilter.minMaxPrice.max)),""!=this.tempFilter.stringFilter.trim()&&t.push("string="+encodeURIComponent(this.tempFilter.stringFilter.trim())),""!=this.tempFilter.sort.trim()&&this.tempFilter.sort!=this.filter.sort&&t.push("sort="+encodeURIComponent(this.tempFilter.sort.trim())),t.length>0&&(e=this.$route.path+"?"+t.join("&")),e},setActivePage:function(t){this.tempFilter.page=t,this.requestFilteredProductList()},changeSorting:function(t){this.tempFilter.sort=t.target.value,this.requestFilteredProductList()},setTempFilter:function(t){var e=this,a=!1,r={target:this.$el.querySelector("input[type=range][position=left]")},i={target:this.$el.querySelector("input[type=range][position=right]")};Object.keys(t).forEach((function(s){"undefined"!==typeof e.tempFilter[s]&&(e.tempFilter[s]=t[s],"minMaxPrice"==s&&(r["forceValue"]=e.tempFilter.minMaxPrice.min,i["forceValue"]=e.tempFilter.minMaxPrice.max,a=!0))})),a&&(this.priceSliderChange(r),this.priceSliderChange(i))},getCategoryType:function(){return this.categoryType?this.categoryType:"products"},getDefaultSorting:function(){return"pages"==this.getCategoryType()?c["a"].PRODUCT_DEFAULT_SORTING:c["a"].PAGE_DEFAULT_SORTING}}},g=u,p=(a("a906"),a("2877")),d=Object(p["a"])(g,n,o,!1,null,null,null),f=d.exports,h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.total>t.perPage?a("section",[a("b-pagination",{attrs:{total:t.total,current:t.current,order:t.order,size:t.size,simple:t.isSimple,rounded:t.isRounded,"per-page":t.perPage,"aria-next-label":"Next page","aria-previous-label":"Previous page","aria-page-label":"Page","aria-current-label":"Current page"},on:{"update:current":function(e){t.current=e},change:t.pagingChanged}}),1==t.bottom?a("div",[a("button",{staticClass:"button"},[t._v("Load More ...")])]):t._e()],1):t._e()},y=[],m=(a("c5f6"),{data:function(){return{current:1,perPage:c["a"].PER_PAGE,order:"is-centered",size:"",isSimple:!1,isRounded:!1}},props:{bottom:!1,total:{type:Number,required:!0}},methods:{pagingChanged:function(t){this.current=t,this.$parent.$refs.categoryFilter.setActivePage(t),console.log("value:",t)}}}),v=m,C=Object(p["a"])(v,h,y,!1,null,null,null),_=C.exports,P=a("d509"),x=(a("df7c"),{name:"CategoryList",data:function(){return{categories:[],filteredProductsCount:null,products:[],page:null,itemsToListType:"product",breadcrumbs:[],categoryDetail:null,filter:{minMaxPrice:{min:0,max:0},stringFilter:"",sort:c["a"].PRODUCT_DEFAULT_SORTING},language:"en",groupsLastRefresh:0,introLoading:!1}},computed:{categoryMinMax:function(){return this.categoryDetail&&"undefined"!==typeof this.categoryDetail.minMaxPrice?this.categoryDetail.minMaxPrice:{min:null,max:null}},categoryBackground:function(){return!!(this.categoryDetail&&this.categoryDetail.data&&this.categoryDetail.data.images&&this.categoryDetail.data.images.background)},categoryProductsTotalForPaging:function(){return"undefined"!==typeof this.filteredProductsCount&&null!==this.filteredProductsCount?this.filteredProductsCount:"undefined"!==typeof this.categoryDetail.count&&this.categoryDetail.count?this.categoryDetail.count:0},userCanEdit:function(){return!!(this.$store.state&&this.$store.state.user&&this.$store.state.user.logged&&this.$store.state.user.profile&&this.$store.state.user.profile.type&&"admin"==this.$store.state.user.profile.type)},categoryTypePageContent:function(){return this.page&&this.page.data&&this.page.data.blocks&&this.page.data.blocks[0]&&this.page.data.blocks[0][this.$store.state.language.code]?this.page.data.blocks[0][this.$store.state.language.code]:""},categoryTypePageData:function(){return this.page&&this.page.functions&&this.page.functions.length>0?this.page.functions:null}},components:{"product-box":s["a"],"category-filter":f,"category-paging":_,"page-detail-content":P["a"]},mounted:function(){var t=this;this.$store&&this.$store.state&&this.$store.state.language&&this.$store.state.language.code&&this.$store.state.user?this.listCategoryItems(!0):l["eventBus"].$on("coreDataLoaded",(function(){t.listCategoryItems(!0)}))},methods:{processCategoryResponse:function(t){var e=new Date,a=this;this.groupsLastRefresh=e.getTime();var r=null;if(t.data.categoryDetail&&(this.categoryDetail=t.data.categoryDetail,t.data.categoryDetail.parentCategories&&(this.breadcrumbs=t.data.categoryDetail.parentCategories),r=this.categoryDetail.taxData?this.categoryDetail.taxData:a.$store.state.coredata.settings),t.data.categories&&(this.categories=t.data.categories),t.data.filteredProductsCount&&(this.filteredProductsCount=t.data.filteredProductsCount),t.data.results){var i=t.data.results;t.data.categoryDetail&&t.data.categoryDetail.pathSlug&&i.forEach((function(e){e=a.$helpers.getProductTaxData(e,r),e.activeParentCategoryUrl=t.data.categoryDetail.pathSlug})),i&&i[0]&&i[0].type&&(this.itemsToListType=i[0].type),this.products=this.$store.state.chunk(i,c["a"].PER_ROW)}if(t.data.filter){var s=Object.assign({},this.filter);this.filter=t.data.filter;var n=this;Object.keys(s).forEach((function(t){"undefined"!==typeof n.filter[t]&&null!=n.filter[t]||(n.filter[t]=s[t])}))}this.$root.loadingClose()},listCategoryItems:function(t){t=!("undefined"===typeof t&&!t);var e=this,a=this.$route.path.split("/").filter(Boolean),r="undefined"!==typeof a[1]?a[1]:"products";if(this.$route.params&&this.$route.params.category&&""!=this.$route.params.category.toString().trim())if(this.$root.loadingShow(),t&&Object.keys(this.$route.query).length>0){this.queryStringtoFilter();var i=this.categoryDetail&&"pages"==this.categoryDetail.type?"pageCategoryFilter":"categoryFilter";e.$httpc.post(r+"/"+this.$route.params.category,{filter:this.$refs[i].buildFilterRequestObject(this.filter)},{timeout:7e3}).then((function(t){e.processCategoryResponse(t),"undefined"!==typeof e.$refs[i]&&(e.introLoading=!0,e.$refs[i].setTempFilter(e.filter),e.introLoading=!1)})).catch((function(t){console.log(t)})).then((function(){l["eventBus"].$emit("translateContent",e.$store.getters.getTranslates)}))}else console.log("listCategoryItems no need to analyse"),this.$httpc.get(r+"/"+this.$route.params.category,{timeout:7e3}).then((function(t){e.processCategoryResponse(t)})).catch((function(t){console.log(t)})).then((function(){l["eventBus"].$emit("translateContent",e.$store.getters.getTranslates)}));else{console.log("listCategoryItems no slug");var s=this.$route.path,n=s.split("/"),o=e.$store.state.language.code;n.length>1&&(o=n[1],n.splice(0,2),s=n.join("/"));var c=s;this.$httpc.post("categories/find",{query:{parentPathSlug:"",type:c},lang:o}).then((function(t){t.data&&(e.categories=t.data.categories,t.data.page&&t.data.page.data&&(e.page=t.data.page.data))})).catch((function(t){console.log(t)})).then((function(){l["eventBus"].$emit("pageDetailLoaded")}))}},queryStringtoFilter:function(){var t={minMaxPrice:{}};if("undefined"!==typeof this.$route.query["price-min"]){var e=parseFloat(this.$route.query["price-min"]);e>0&&(t.minMaxPrice["min"]=e)}if("undefined"!==typeof this.$route.query["price-max"]){var a=parseFloat(this.$route.query["price-max"]);a>0&&(t.minMaxPrice["max"]=a)}if("undefined"!==typeof this.$route.query["string"]){var r=decodeURIComponent(this.$route.query["string"]).trim();""!==r&&(t["stringFilter"]=r)}if("undefined"!==typeof this.$route.query["sort"]){var i=decodeURIComponent(this.$route.query["sort"]).trim();""!==i&&(t["sort"]=i)}this.filter=t},getCategoryMinMax:function(){return this.categoryDetail&&this.categoryDetail.minMaxPrice?this.categoryDetail.minMaxPrice:null},getCategoryFilteredCount:function(){return this.filteredProductsCount&&this.filteredProductsCount>0?this.filteredProductsCount:0},getCategoryType:function(){return this.categoryDetail&&this.categoryDetail.type?this.categoryDetail.type:"products"},getCategoryBackground:function(){return this.categoryDetail&&this.categoryDetail.slug&&this.$store.state.coredata&&this.$store.state.coredata.settings&&this.$store.state.coredata.settings.assets&&this.$store.state.coredata.settings.assets.url?this.$helpers.getImagePath("categories",this.$store.state.coredata,this.categoryDetail.slug,this.categoryDetail.slug+".jpg"):""}}}),b=x,$=(a("3a0c"),Object(p["a"])(b,r,i,!1,null,null,null));e["default"]=$.exports},c5f6:function(t,e,a){"use strict";var r=a("7726"),i=a("69a8"),s=a("2d95"),n=a("5dbc"),o=a("6a99"),c=a("79e5"),l=a("9093").f,u=a("11e9").f,g=a("86cc").f,p=a("aa77").trim,d="Number",f=r[d],h=f,y=f.prototype,m=s(a("2aeb")(y))==d,v="trim"in String.prototype,C=function(t){var e=o(t,!1);if("string"==typeof e&&e.length>2){e=v?e.trim():p(e,3);var a,r,i,s=e.charCodeAt(0);if(43===s||45===s){if(a=e.charCodeAt(2),88===a||120===a)return NaN}else if(48===s){switch(e.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+e}for(var n,c=e.slice(2),l=0,u=c.length;l<u;l++)if(n=c.charCodeAt(l),n<48||n>i)return NaN;return parseInt(c,r)}}return+e};if(!f(" 0o1")||!f("0b1")||f("+0x1")){f=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof f&&(m?c((function(){y.valueOf.call(a)})):s(a)!=d)?n(new h(C(e)),a,f):C(e)};for(var _,P=a("9e1e")?l(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),x=0;P.length>x;x++)i(h,_=P[x])&&!i(f,_)&&g(f,_,u(h,_));f.prototype=y,y.constructor=f,a("2aba")(r,d,f)}},e15e:function(t,e,a){},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=chunk-55acdb99.7015810a.js.map