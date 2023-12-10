import{O as w}from"./PaymentStripe-vW2Y1-6f.js";import{r as f,c as o,a as e,b as p,w as b,f as l,t as n,n as m,h as c,F as k,d as g,o as i}from"./sett-kcacPgfM.js";import{_ as P}from"./index-dpUgND6i.js";const A={name:"userOrderDetail",components:{"payment-stripe":w},data(){return{order:null,subscription:{needToApprove:!1,count:0,total:0},productToSubscription:{}}},created:function(){this.getOrder(this.$route.params.id)},computed:{userIsAdmin:function(){return!!(this.$store.state&&this.$store.state.user&&this.$store.state.user.logged&&this.$store.state.user.profile&&this.$store.state.user.profile.type&&this.$store.state.user.profile.type==="admin")},subscriptionClass:function(){return!this.subscription||this.subscription.total>0&&this.subscription.count<this.subscription.total?"has-text-danger":"has-text-success"}},methods:{getOrder(r){const t=this,u={timeout:3e3,tokenize:!0},_={query:{_id:r},limit:1};this.$httpc.post("order/list",_,u).then(function(s){s&&s.data&&s.data&&s.data.results&&s.data.results.length===1&&(t.order=s.data.results[0])}).then(function(){t.eventBus.emit("translateContent",t.$store.getters.getTranslates),t.order&&t.order.data&&t.order.data.subscription&&t.order.data.subscription&&t.order.data.subscription.ids&&t.order.data.subscription.ids.length>0&&t.order.data.subscription.ids.forEach(s=>{s&&s.subscription&&(t.subscription.total++,!s.agreed||s.agreed===null?t.subscription.needToApprove=!0:(t.subscription.count++,t.productToSubscription[s.product]=s.subscription))}),t.subscription.needToApprove&&t.order&&t.order.data&&t.order.data.paymentData&&t.order.data.paymentData.codename&&(t.order.data.paymentData.codename==="online_paypal_paypal"&&t.paymentPayPalCall(),t.order.data.paymentData.codename==="online_stripe"&&t.paymentStripeAction())}).catch(function(s){console.error(s)})},splitTitle(r){return[r.slice(0,6),r.slice(6)]},checkDeliveryAddress:function(){return!!(this.order&&this.order.addresses&&this.order.addresses.deliveryAddress&&Object.keys(this.order.addresses.deliveryAddress).length>0)},invoiceAddress:function(){if(this.$store.state.coredata)return this.$helpers.addressToString(this.order.addresses.invoiceAddress,this.$store.state.coredata.countries,["type"])},deliveryAddress:function(){return this.order.addresses.deliveryAddress?this.$helpers.addressToString(this.order.addresses.deliveryAddress,this.$store.state.coredata.countries,["type"]):null},checkDeliveryData:function(){return!!(this.order&&this.order.data.deliveryData&&this.order.data.deliveryData.codename)},deliveryData:function(){const r=this,t=[];if(this.order&&this.order.data.deliveryData&&this.order.data.deliveryData.codename){const u=this.order.data.deliveryData.codename;if(this.order.settings&&this.order.settings.deliveryMethods){const _=this.order.settings.deliveryMethods;Object.keys(u).forEach(s=>{if(u&&_&&u[s]&&u[s]!==null){const a=u[s];a.type=s,a.name=a.value,_[s]&&_[s].forEach(h=>{h.type&&h.codename&&h.type===s&&h.codename===a.value&&(a.name=h.name[r.$store.getters.getLanguage])}),t.push(a)}})}return t}},checkPaymentData:function(){return!!(this.order&&this.order.data.paymentData)},paymentData:function(){const r=this;let t=null;return this.order&&this.order.data.paymentData&&(t={name:typeof this.order.data.paymentData.name[r.$store.getters.getLanguage]<"u"?this.order.data.paymentData.name[r.$store.getters.getLanguage]:this.order.data.paymentData.codename,price:this.order.data.paymentData.price}),t},checkActions:function(){return!!(this.needsPayment("online_paypal_paypal")||this.needsPayment("online_stripe"))},getPaymentProviderName:function(){if(this.order&&this.order.data&&this.order.data.paymentData&&this.order.data.paymentData.codename){const r=this.order.data.paymentData.codename.split("_");if(r.constructor===Array&&r.length>0)return r[r.length-1]}return"paypal"},needsPayment:function(r){return!!(this.order&&this.order.data&&this.order.data.paymentData&&this.order.data.paymentData.codename&&this.order.data.paymentData.codename===r&&this.order.dates&&!this.order.dates.datePaid)},makePayment(){this.order.data.paymentData.codename.indexOf("online_paypal")>-1&&this.paymentPayPalCall()},paymentPayPalCall:function(){const r=this;r.$httpc.post("/order/payment/paypal/geturl",{orderId:r.order._id,checkoutData:null},{timeout:1e4}).then(t=>{t&&t.data&&t.data.url&&t.data.url.trim()!==""&&(window.location.href=t.data.url)})},paymentStripeAction:function(){},invoiceDownload:function(){const r=this,t=this.getOrderInvoiceRequest();t&&t.request&&r.$httpc.post("/order/invoice/download/"+t.request,{},{tokenize:!0,responseType:"arraybuffer"}).then(u=>{this.downloadFile(u,t.filename)})},downloadFile(r,t){var u=new Blob([r.data],{type:"application/pdf"});if(window.navigator&&window.navigator.msSaveOrOpenBlob){window.navigator.msSaveOrOpenBlob(u);return}const _=window.URL.createObjectURL(u);var s=document.createElement("a");s.href=_,s.download=t,s.click(),setTimeout(function(){window.URL.revokeObjectURL(_)},100)},orderPay:function(){const r=this;this.$httpc.post("/order/invoice/pay/"+this.order._id,{},{tokenize:!0}).then(t=>{t&&t.html&&t.path&&(r.order.invoice||(r.order.invoice={}),r.order.invoice=t,r.$forceUpdate())})},orderCancel:function(){const r=this;this.$httpc.post("/order/invoice/cancel/"+this.order._id,{},{tokenize:!0}).then(t=>{t&&t.success&&t.order&&(r.order||(r.order={}),r.order=t.order,r.$forceUpdate())})},makeExpedition:function(){const r=this;this.$httpc.post("/order/invoice/expeded/"+this.order._id,{},{tokenize:!0}).then(t=>{t&&t.success&&t.order&&(r.order||(r.order={}),r.order=t.order,r.$forceUpdate())})},getOrderInvoiceRequest:function(){let r="",t=this.order.invoice.path.split("/"),u=null,_=null;return t=t.filter(Boolean),t[2]&&t[2].indexOf(".pdf")>-1&&(_=t[2],t[2]=t[2].split("."),t[2][1]&&(r=t[1]+"."+t[2][0],u=t[2][0])),{request:r,id:u,filename:_}},getSubscriptionIdFromProductId:function(r){this.order&&this.order.data&&this.order.data.subscription&&this.order.data.subscription.ids}}},T={id:"userOrderDetail"},O={key:0},C={class:"container"},S={class:"columns is-variable is-centered"},I={class:"column is-8"},x={class:"breadcrumb","aria-label":"breadcrumbs"},E=e("span",{translate:"yes"},"Orders",-1),U={class:"is-active"},L={"aria-current":"page"},z=e("span",{class:"order-word",translate:"yes"},"Order",-1),B={class:"order-title"},q={class:"title is-2"},N=e("span",{translate:"yes"},"Order",-1),R={class:"order-title"},F={class:"container"},M={key:0,class:"columns is-variable is-centered orderProgressVisual"},Y={class:"column is-8"},V={class:"o-steps__wrapper"},j={class:"o-steps o-steps--animated"},H={class:"o-steps__link o-steps__link-label-bottom"},W={class:"o-steps__marker o-steps__marker--rounded"},Q={class:"step-details"},G={class:"o-step-title"},J=e("span",{translate:"yes"},"Created",-1),K={class:"step-date"},X=e("span",{class:"o-steps__divider"},null,-1),Z={class:"o-steps__link o-steps__link-label-bottom"},$={class:"o-steps__marker o-steps__marker--rounded"},ee={class:"step-details"},te={class:"o-step-title"},se=e("span",{translate:"yes"},"Paid",-1),re={class:"step-date"},oe=e("span",{class:"o-steps__divider"},null,-1),ie={class:"o-steps__link o-steps__link-label-bottom"},ne={class:"o-steps__marker o-steps__marker--rounded"},ae={class:"step-details"},de={class:"o-step-title"},ce=e("span",{translate:"yes"},"Expeded",-1),le={class:"step-date"},ue={class:"container order-detail-data"},_e={class:"columns is-variable"},he={class:"column is-12"},pe={key:0},me=e("span",{translate:"yes"},"Your available actions",-1),ye={key:0},ve=e("span",{translate:"yes"},"Pay order",-1),fe=[ve],be={key:1},ke=e("span",{id:"user-order-detail--subscription",translate:"yes"},"Subscriptions Approved",-1),ge={key:0},De=e("div",{class:"is-size-7"},[e("p",null,"Not all subscriptions are approved. Your order is not finished until all subscriptions are approved."),e("p",null,"Waiting to redirect you to payment gate to Approve next missing Subscriptions. If nothing happens, click the button bellow.")],-1),we=e("span",{translate:"yes"},"Approve Subscription",-1),Pe=[we],Ae={key:1},Te=e("div",{class:"is-size-7"},[e("p",null,"All subscriptions are approved, we are preparing to finish your order.")],-1),Oe=[Te],Ce={class:"container order-detail-data"},Se={class:"columns is-variable"},Ie={class:"column is-6 pr-6"},xe={key:0},Ee={class:"columns is-variable"},Ue={class:"column is-12"},Le={class:"b-table"},ze={class:"table-wrapper"},Be={class:"table is-hoverable is-striped is-fullwidth"},qe=e("thead",null,[e("tr",null,[e("th",{class:""},[e("div",{class:"th-wrap",translate:"yes"},"Name")]),e("th",{class:""},[e("div",{class:"th-wrap is-pulled-right",translate:"yes"},"Qty")]),e("th",{class:""},[e("div",{class:"th-wrap is-pulled-right",translate:"yes"},"Price")])])],-1),Ne={key:0,class:"desc"},Re={key:0},Fe={class:"cartItemAmount has-text-right"},Me={class:"has-text-right"},Ye={key:0,class:"desc"},Ve={key:0},je=e("td",null,null,-1),He=e("td",{class:"has-text-right"},[e("strong",{translate:"yes"},"Products Total")],-1),We={class:"has-text-right"},Qe={key:1},Ge=e("td",null,null,-1),Je=e("td",{class:"has-text-right"},[e("span",{translate:"yes"},"Price delivery")],-1),Ke={class:"has-text-right"},Xe={key:2},Ze=e("td",null,null,-1),$e=e("td",{class:"has-text-right"},[e("span",{translate:"yes"},"Price payment")],-1),et={class:"has-text-right"},tt={key:3},st=e("td",null,null,-1),rt=e("td",{class:"has-text-right"},[e("strong",{translate:"yes"},"Total price")],-1),ot={class:"has-text-right"},it={key:1},nt=e("h3",{class:"title is-3"},[e("span",{translate:"yes"},"No items in this order")],-1),at=[nt],dt={class:"column is-6 pl-6"},ct={class:"columns is-variable is-2"},lt={class:"column is-6"},ut=e("h3",{class:"title is-5",translate:"yes"},"You are ordering to:",-1),_t={class:"summary-block with-pre-whitespace"},ht={key:0,class:"column is-6"},pt=e("h3",{class:"title is-5",translate:"yes"},"With delivery to:",-1),mt={class:"summary-block with-pre-whitespace"},yt={key:1,class:"column is-6"},vt=e("h3",{class:"title is-5",translate:"yes"},"With delivery to:",-1),ft=e("div",{class:"summary-block",translate:"yes"},"same as invoice address",-1),bt=[vt,ft],kt={class:"columns is-variable is-2"},gt={class:"column is-6",id:"order-detail--delivery-settings"},Dt=e("h3",{class:"title is-5",translate:"yes"},"Your Delivery settings:",-1),wt={key:0,class:"content summary-block"},Pt={class:"capitalize"},At={key:0,class:"column is-6"},Tt={id:"order-detail--payment-settings"},Ot=e("h3",{class:"title is-5",translate:"yes"},"Your Payment settings:",-1),Ct={key:0,class:"content summary-block"},St=e("p",null,"Having issue with your order? Don't hesitate to contact us",-1),It=e("hr",{class:"mb-0"},null,-1),xt={key:0,id:"orderDetailAdminActions",class:"p-4 mb-4"},Et={class:"columns is-variable"},Ut={key:0,class:"column is-12"},Lt={key:1,class:"container order-invoice-detail has-text-left"},zt=e("h3",{class:"title is-2 is-centered",translate:"yes"},"Your Invoice",-1),Bt={class:"columns is-variable"},qt={class:"column is-12"},Nt={class:"columns is-variable is-centered"},Rt={key:0,class:"column is-8"},Ft=["innerHTML"],Mt={key:1,class:"container"},Yt={class:"columns is-variable is-centered"},Vt={class:"column is-8"},jt=e("h1",{class:"title is-1",translate:"yes"},"Unauthorized",-1),Ht=e("span",{translate:"yes"},"To see order detail, you may need to",-1),Wt=e("p",{translate:"yes"},[l(" If you ordered without registration, "),e("br"),l(" you may need to check your email for activation message first. ")],-1);function Qt(r,t,u,_,s,a){const h=f("router-link"),y=f("font-awesome-icon"),D=f("payment-stripe");return i(),o("div",T,[s.order?(i(),o("div",O,[e("div",C,[e("div",S,[e("div",I,[e("nav",x,[e("ul",null,[e("li",null,[p(h,{to:{name:"userOrders"}},{default:b(()=>[E]),_:1})]),e("li",U,[e("a",L,[z,l("   "),e("span",B,[l("#"),e("strong",null,n(a.splitTitle(s.order._id)[0]),1),l(n(a.splitTitle(s.order._id)[1]),1)])])])])])])])]),e("h2",q,[N,e("span",R,[l(" #"),e("strong",null,n(a.splitTitle(s.order._id)[0]),1),l(n(a.splitTitle(s.order._id)[1]),1)])]),e("div",F,[s.order.dates?(i(),o("div",M,[e("div",Y,[e("div",V,[e("nav",j,[e("div",{class:m(s.order.dates.dateCreated?"o-steps__nav-item o-steps__nav-item-previous":"o-steps__nav-item")},[e("a",H,[e("div",W,[p(y,{icon:"cart-plus"})]),e("div",Q,[e("span",G,[J,e("span",K,n(s.order.dates.dateCreated),1)])])])],2),e("div",{class:m(s.order.dates.datePaid?"o-steps__nav-item o-steps__nav-item-previous":"o-steps__nav-item")},[X,e("a",Z,[e("div",$,[p(y,{icon:"credit-card"})]),e("div",ee,[e("span",te,[se,e("span",re,n(s.order.dates.datePaid),1)])])])],2),e("div",{class:m(s.order.dates.dateExpeded?"o-steps__nav-item o-steps__nav-item-previous":"o-steps__nav-item")},[oe,e("a",ie,[e("div",ne,[p(y,{icon:"truck"})]),e("div",ae,[e("span",de,[ce,e("span",le,n(s.order.dates.dateExpeded),1)])])])],2)])])])])):c("",!0)]),e("div",ue,[e("div",_e,[e("div",he,[a.checkActions()?(i(),o("span",pe,[me,l(": "),a.needsPayment("online_paypal_paypal")?(i(),o("div",ye,[s.order.dates&&!s.order.dates.datePaid?(i(),o("button",{key:0,type:"button",class:"button",onClick:t[0]||(t[0]=d=>a.makePayment())},[...fe])):c("",!0)])):c("",!0),a.needsPayment("online_stripe")?(i(),o("div",be,[p(D,{order:s.order,description:"Uses secured Stripe engine for comfort card payment"},null,8,["order"])])):c("",!0)])):c("",!0),s.subscription.total?(i(),o("div",{key:1,class:m(a.subscriptionClass)},[ke,l(" "+n(s.subscription.count)+" / "+n(s.subscription.total)+" ",1),s.subscription.count<s.subscription.total?(i(),o("div",ge,[De,e("button",{type:"button",class:"button is-danger",onClick:t[1]||(t[1]=d=>a.makePayment())},[...Pe])])):(i(),o("div",Ae,[...Oe]))],2)):c("",!0)])])]),e("div",Ce,[e("div",Se,[e("div",Ie,[s.order.items!=null&&s.order.items&&s.order.items.length>0?(i(),o("div",xe,[e("div",Ee,[e("div",Ue,[e("div",Le,[e("div",ze,[e("table",Be,[qe,e("tbody",null,[(i(!0),o(k,null,g(s.order.items,(d,v)=>(i(),o("tr",{key:v},[e("th",null,[d.type!=="product"?(i(),o("span",Ne,[l(n(d.type)+" ",1),d.type==="subscription"?(i(),o("span",Re,[p(h,{to:{name:"userSubscriptionDetail",params:{id:s.productToSubscription[d._id]}}},{default:b(()=>[l(n(s.productToSubscription[d._id]),1)]),_:2},1032,["to"])])):c("",!0)])):c("",!0),l(" "+n(d.name[r.$store.state.language.code]),1)]),e("td",Fe,n(d.amount),1),e("td",Me,[e("span",null,n(r.$helpers.numeral(d.price).format("0.00")),1),e("span",null,n(r.$store.state.currency.symbol),1),d.type!=="product"&&d.data&&d.data.subscription&&d.data.subscription.period?(i(),o("span",Ye," / "+n(d.data.subscription.period),1)):c("",!0)])]))),128))]),e("tfoot",null,[s.order.prices&&s.order.prices.priceItems?(i(),o("tr",Ve,[je,He,e("td",We,n(r.$helpers.numeral(s.order.prices.priceItems).format("0.00"))+" "+n(r.$store.state.currency.symbol),1)])):c("",!0),s.order.prices&&s.order.prices.priceDelivery?(i(),o("tr",Qe,[Ge,Je,e("td",Ke,n(r.$helpers.numeral(s.order.prices.priceDelivery).format("0.00"))+" "+n(r.$store.state.currency.symbol),1)])):c("",!0),s.order.prices&&s.order.prices.pricePayment?(i(),o("tr",Xe,[Ze,$e,e("td",et,n(r.$helpers.numeral(s.order.prices.pricePayment).format("0.00"))+" "+n(r.$store.state.currency.symbol),1)])):c("",!0),s.order.prices&&s.order.prices.priceTotal?(i(),o("tr",tt,[st,rt,e("td",ot,[e("strong",null,n(r.$helpers.numeral(s.order.prices.priceTotal).format("0.00")),1),l(" "+n(r.$store.state.currency.symbol),1)])])):c("",!0)])])])])])])])):(i(),o("div",it,[...at]))]),e("div",dt,[e("div",ct,[e("div",lt,[ut,e("div",_t,n(a.invoiceAddress()),1)]),a.checkDeliveryAddress()?(i(),o("div",ht,[pt,e("div",mt,n(a.deliveryAddress()),1)])):(i(),o("div",yt,[...bt]))]),e("div",kt,[e("div",gt,[Dt,a.checkDeliveryData()?(i(),o("div",wt,[(i(!0),o(k,null,g(a.deliveryData(),(d,v)=>(i(),o("div",{key:v},[e("p",null,[e("span",Pt,n(d.type),1),l(" - "),e("strong",null,n(d.name),1),l(": "+n(r.$helpers.numeral(d.price).format("0.00"))+" "+n(r.$store.state.currency.symbol),1)])]))),128))])):c("",!0)]),a.checkPaymentData()?(i(),o("div",At,[e("div",Tt,[Ot,a.paymentData()?(i(),o("div",Ct,[e("p",null,[e("strong",null,n(a.paymentData().name),1),l(": "+n(r.$helpers.numeral(a.paymentData().price).format("0.00"))+" "+n(r.$store.state.currency.symbol),1)])])):c("",!0)])])):c("",!0)])])])]),St,It,a.userIsAdmin?(i(),o("div",xt,[e("div",Et,[s.order.dates?(i(),o("div",Ut,[l(" Admin action: "),s.order.dates.datePaid?c("",!0):(i(),o("button",{key:0,type:"button",class:"button",onClick:t[2]||(t[2]=d=>a.orderPay())},"Pay Order")),s.order.dates.dateCanceled?c("",!0):(i(),o("button",{key:1,type:"button",class:"button",onClick:t[3]||(t[3]=d=>a.orderCancel())},"Cancel Order")),s.order.dates.dateExpeded?c("",!0):(i(),o("button",{key:2,type:"button",class:"button",onClick:t[4]||(t[4]=d=>a.makeExpedition())},"Make Expedition"))])):c("",!0)])])):c("",!0),s.order&&s.order.invoice?(i(),o("div",Lt,[zt,e("div",Bt,[e("div",qt,[e("button",{type:"button",class:"button",onClick:t[5]||(t[5]=d=>a.invoiceDownload())},"Download Invoice")])]),e("div",Nt,[s.order&&s.order.invoice&&s.order.invoice.html?(i(),o("div",Rt,[e("div",{class:"order-invoice-body",innerHTML:s.order.invoice.html},null,8,Ft)])):c("",!0)])])):c("",!0)])):(i(),o("div",Mt,[e("div",Yt,[e("div",Vt,[jt,e("p",null,[Ht,l("   "),p(h,{to:{name:"login"},tag:"a",class:"","active-class":"is-active",translate:"yes"},{default:b(()=>[l("Log in")]),_:1}),l(". ")]),Wt])])]))])}const Xt=P(A,[["render",Qt],["__file","/Users/marthol/Documents/GitHub/stretchshop-front-vue/src/components/users/UserOrderDetail.vue"]]);export{Xt as default};
