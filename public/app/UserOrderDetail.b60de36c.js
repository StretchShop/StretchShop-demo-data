import{O as w}from"./PaymentStripe.412abec0.js";import{_ as P,r as f,o as i,c as n,a as e,e as p,f as b,t as r,g as c,s as m,j as l,F as g,i as k}from"./index.78dc2935.js";const A={name:"userOrderDetail",components:{"payment-stripe":w},data(){return{order:null,subscription:{needToApprove:!1,count:0,total:0},productToSubscription:{}}},created:function(){this.getOrder(this.$route.params.id)},computed:{userIsAdmin:function(){return!!(this.$store.state&&this.$store.state.user&&this.$store.state.user.logged&&this.$store.state.user.profile&&this.$store.state.user.profile.type&&this.$store.state.user.profile.type==="admin")},subscriptionClass:function(){return!this.subscription||this.subscription.total>0&&this.subscription.count<this.subscription.total?"has-text-danger":"has-text-success"}},methods:{getOrder(o){const t=this,u={timeout:3e3,needsAuth:!0},_={query:{_id:o},limit:1};this.$httpc.post("order/list",_,u).then(function(s){s&&s.data&&s.data&&s.data.results&&s.data.results.length===1&&(t.order=s.data.results[0])}).then(function(){t.eventBus.emit("translateContent",t.$store.getters.getTranslates),t.order&&t.order.data&&t.order.data.subscription&&t.order.data.subscription&&t.order.data.subscription.ids&&t.order.data.subscription.ids.length>0&&(console.log("let's check the subscriptions"),t.order.data.subscription.ids.forEach(s=>{s&&s.subscription&&(t.subscription.total++,!s.agreed||s.agreed===null?t.subscription.needToApprove=!0:(t.subscription.count++,t.productToSubscription[s.product]=s.subscription))})),t.subscription.needToApprove&&t.order&&t.order.data&&t.order.data.paymentData&&t.order.data.paymentData.codename&&(t.order.data.paymentData.codename==="online_paypal_paypal"&&t.paymentPayPalCall(),t.order.data.paymentData.codename==="online_stripe"&&t.paymentStripeAction())}).catch(function(s){console.log(s)})},splitTitle(o){return[o.slice(0,6),o.slice(6)]},checkDeliveryAddress:function(){return!!(this.order&&this.order.addresses&&this.order.addresses.deliveryAddress&&Object.keys(this.order.addresses.deliveryAddress).length>0)},invoiceAddress:function(){if(this.$store.state.coredata)return this.$helpers.addressToString(this.order.addresses.invoiceAddress,this.$store.state.coredata.countries,["type"])},deliveryAddress:function(){return this.order.addresses.deliveryAddress?this.$helpers.addressToString(this.order.addresses.deliveryAddress,this.$store.state.coredata.countries,["type"]):null},checkDeliveryData:function(){return!!(this.order&&this.order.data.deliveryData&&this.order.data.deliveryData.codename)},deliveryData:function(){const o=this,t=[];if(this.order&&this.order.data.deliveryData&&this.order.data.deliveryData.codename){const u=this.order.data.deliveryData.codename;if(this.order.settings&&this.order.settings.deliveryMethods){const _=this.order.settings.deliveryMethods;Object.keys(u).forEach(s=>{if(u&&_&&u[s]&&u[s]!==null){const a=u[s];a.type=s,a.name=a.value,_[s]&&_[s].forEach(h=>{h.type&&h.codename&&h.type===s&&h.codename===a.value&&(a.name=h.name[o.$store.getters.getLanguage])}),t.push(a)}})}return t}},checkPaymentData:function(){return!!(this.order&&this.order.data.paymentData)},paymentData:function(){const o=this;let t=null;return this.order&&this.order.data.paymentData&&(t={name:typeof this.order.data.paymentData.name[o.$store.getters.getLanguage]!="undefined"?this.order.data.paymentData.name[o.$store.getters.getLanguage]:this.order.data.paymentData.codename,price:this.order.data.paymentData.price}),t},checkActions:function(){return!!(this.needsPayment("online_paypal_paypal")||this.needsPayment("online_stripe"))},getPaymentProviderName:function(){if(this.order&&this.order.data&&this.order.data.paymentData&&this.order.data.paymentData.codename){const o=this.order.data.paymentData.codename.split("_");if(o.constructor===Array&&o.length>0)return o[o.length-1]}return"paypal"},needsPayment:function(o){return!!(this.order&&this.order.data&&this.order.data.paymentData&&this.order.data.paymentData.codename&&this.order.data.paymentData.codename===o&&this.order.dates&&!this.order.dates.datePaid)},makePayment(){console.log("this.order.data.paymentData.codename",this.order.data.paymentData.codename),this.order.data.paymentData.codename.indexOf("online_paypal")>-1&&this.paymentPayPalCall()},paymentPayPalCall:function(){const o=this;o.$httpc.post("/order/payment/paypal/geturl",{orderId:o.order._id,checkoutData:null},{timeout:1e4}).then(t=>{t&&t.data&&t.data.url&&t.data.url.trim()!==""&&(window.location.href=t.data.url)})},paymentStripeAction:function(){},invoiceDownload:function(){const o=this,t=this.getOrderInvoiceRequest();console.log("invoiceData:",t),t&&t.request&&o.$httpc.get("/order/invoice/download/"+t.request,{needsAuth:!0,responseType:"arraybuffer"}).then(u=>{console.log(u),this.downloadFile(u,t.filename)})},downloadFile(o,t){var u=new Blob([o.data],{type:"application/pdf"});if(window.navigator&&window.navigator.msSaveOrOpenBlob){window.navigator.msSaveOrOpenBlob(u);return}const _=window.URL.createObjectURL(u);var s=document.createElement("a");s.href=_,s.download=t,s.click(),setTimeout(function(){window.URL.revokeObjectURL(_)},100)},orderPay:function(){const o=this;this.$httpc.get("/order/invoice/pay/"+this.order._id,{needsAuth:!0}).then(t=>{t&&t.html&&t.path&&(o.order.invoice||(o.order.invoice={}),o.order.invoice=t,o.$forceUpdate())})},orderCancel:function(){const o=this;this.$httpc.get("/order/invoice/cancel/"+this.order._id,{needsAuth:!0}).then(t=>{t&&t.success&&t.order&&(o.order||(o.order={}),o.order=t.order,o.$forceUpdate())})},makeExpedition:function(){const o=this;this.$httpc.get("/order/invoice/expeded/"+this.order._id,{needsAuth:!0}).then(t=>{t&&t.success&&t.order&&(o.order||(o.order={}),o.order=t.order,o.$forceUpdate())})},getOrderInvoiceRequest:function(){let o="",t=this.order.invoice.path.split("/");console.log(t);let u=null,_=null;return t=t.filter(Boolean),t[2]&&t[2].indexOf(".pdf")>-1&&(_=t[2],t[2]=t[2].split("."),t[2][1]&&(o=t[1]+"."+t[2][0],u=t[2][0])),{request:o,id:u,filename:_}},getSubscriptionIdFromProductId:function(o){this.order&&this.order.data&&this.order.data.subscription&&this.order.data.subscription.ids}}},T={id:"userOrderDetail"},O={key:0},C={class:"container"},S={class:"columns is-variable is-centered"},I={class:"column is-8"},x={class:"breadcrumb","aria-label":"breadcrumbs"},U=e("span",{translate:"yes"},"Orders",-1),E={class:"is-active"},L={"aria-current":"page"},B=e("span",{class:"order-word",translate:"yes"},"Order",-1),q=c(" \xA0 "),N={class:"order-title"},R=c("#"),F={class:"title is-2"},M=e("span",{translate:"yes"},"Order",-1),Y={class:"order-title"},j=c(" #"),z={class:"container"},V={key:0,class:"columns is-variable is-centered orderProgressVisual"},H={class:"column is-8"},W={class:"o-steps__wrapper"},Q={class:"o-steps o-steps--animated"},G={class:"o-steps__link o-steps__link-label-bottom"},J={class:"o-steps__marker o-steps__marker--rounded"},K={class:"step-details"},X={class:"o-step-title"},Z=e("span",{translate:"yes"},"Created",-1),$={class:"step-date"},ee=e("span",{class:"o-steps__divider"},null,-1),te={class:"o-steps__link o-steps__link-label-bottom"},se={class:"o-steps__marker o-steps__marker--rounded"},oe={class:"step-details"},re={class:"o-step-title"},ie=e("span",{translate:"yes"},"Paid",-1),ne={class:"step-date"},ae=e("span",{class:"o-steps__divider"},null,-1),de={class:"o-steps__link o-steps__link-label-bottom"},ce={class:"o-steps__marker o-steps__marker--rounded"},le={class:"step-details"},ue={class:"o-step-title"},_e=e("span",{translate:"yes"},"Expeded",-1),he={class:"step-date"},pe={class:"container order-detail-data"},me={class:"columns is-variable"},ye={class:"column is-12"},ve={key:0},fe=e("span",{translate:"yes"},"Your available actions",-1),be=c(": "),ge={key:0},ke=e("span",{translate:"yes"},"Pay order",-1),De=[ke],we={key:1},Pe=e("span",{id:"user-order-detail--subscription",translate:"yes"},"Subscriptions Approved",-1),Ae={key:0},Te=e("div",{class:"is-size-7"},[e("p",null,"Not all subscriptions are approved. Your order is not finished until all subscriptions are approved."),e("p",null,"Waiting to redirect you to payment gate to Approve next missing Subscriptions. If nothing happens, click the button bellow.")],-1),Oe=e("span",{translate:"yes"},"Approve Subscription",-1),Ce=[Oe],Se={key:1},Ie=e("div",{class:"is-size-7"},[e("p",null,"All subscriptions are approved, we are preparing to finish your order.")],-1),xe=[Ie],Ue={class:"container order-detail-data"},Ee={class:"columns is-variable"},Le={class:"column is-6 pr-6"},Be={key:0},qe={class:"columns is-variable"},Ne={class:"column is-12"},Re={class:"b-table"},Fe={class:"table-wrapper"},Me={class:"table is-hoverable is-striped is-fullwidth"},Ye=e("thead",null,[e("tr",null,[e("th",{class:""},[e("div",{class:"th-wrap",translate:"yes"},"Name")]),e("th",{class:""},[e("div",{class:"th-wrap is-pulled-right",translate:"yes"},"Qty")]),e("th",{class:""},[e("div",{class:"th-wrap is-pulled-right",translate:"yes"},"Price")])])],-1),je={key:0,class:"desc"},ze={key:0},Ve={class:"cartItemAmount has-text-right"},He={class:"has-text-right"},We={key:0,class:"desc"},Qe={key:0},Ge=e("td",null,null,-1),Je=e("td",{class:"has-text-right"},[e("strong",{translate:"yes"},"Products Total")],-1),Ke={class:"has-text-right"},Xe={key:1},Ze=e("td",null,null,-1),$e=e("td",{class:"has-text-right"},[e("span",{translate:"yes"},"Price delivery")],-1),et={class:"has-text-right"},tt={key:2},st=e("td",null,null,-1),ot=e("td",{class:"has-text-right"},[e("span",{translate:"yes"},"Price payment")],-1),rt={class:"has-text-right"},it={key:3},nt=e("td",null,null,-1),at=e("td",{class:"has-text-right"},[e("strong",{translate:"yes"},"Total price")],-1),dt={class:"has-text-right"},ct={key:1},lt=e("h3",{class:"title is-3"},[e("span",{translate:"yes"},"No items in this order")],-1),ut=[lt],_t={class:"column is-6 pl-6"},ht={class:"columns is-variable is-2"},pt={class:"column is-6"},mt=e("h3",{class:"title is-5",translate:"yes"},"You are ordering to:",-1),yt={class:"summary-block with-pre-whitespace"},vt={key:0,class:"column is-6"},ft=e("h3",{class:"title is-5",translate:"yes"},"With delivery to:",-1),bt={class:"summary-block with-pre-whitespace"},gt={key:1,class:"column is-6"},kt=e("h3",{class:"title is-5",translate:"yes"},"With delivery to:",-1),Dt=e("div",{class:"summary-block",translate:"yes"},"same as invoice address",-1),wt=[kt,Dt],Pt={class:"columns is-variable is-2"},At={class:"column is-6",id:"order-detail--delivery-settings"},Tt=e("h3",{class:"title is-5",translate:"yes"},"Your Delivery settings:",-1),Ot={key:0,class:"content summary-block"},Ct={class:"capitalize"},St=c(" - "),It={key:0,class:"column is-6"},xt={id:"order-detail--payment-settings"},Ut=e("h3",{class:"title is-5",translate:"yes"},"Your Payment settings:",-1),Et={key:0,class:"content summary-block"},Lt=e("p",null,"Having issue with your order? Don't hesitate to contact us",-1),Bt=e("hr",{class:"mb-0"},null,-1),qt={key:0,id:"orderDetailAdminActions",class:"p-4 mb-4"},Nt={class:"columns is-variable"},Rt={class:"column is-12"},Ft=c(" Admin action: "),Mt={key:1,class:"container order-invoice-detail has-text-left"},Yt=e("h3",{class:"title is-2 is-centered",translate:"yes"},"Your Invoice",-1),jt={class:"columns is-variable"},zt={class:"column is-12"},Vt={class:"columns is-variable is-centered"},Ht={key:0,class:"column is-8"},Wt=["innerHTML"],Qt={key:1,class:"container"},Gt={class:"columns is-variable is-centered"},Jt={class:"column is-8"},Kt=e("h1",{class:"title is-1",translate:"yes"},"Unauthorized",-1),Xt=e("span",{translate:"yes"},"To see order detail, you may need to",-1),Zt=c(" \xA0 "),$t=c("Log in"),es=c(". "),ts=e("p",{translate:"yes"},[c(" If you ordered without registration, "),e("br"),c(" you may need to check your email for activation message first. ")],-1);function ss(o,t,u,_,s,a){const h=f("router-link"),y=f("font-awesome-icon"),D=f("payment-stripe");return i(),n("div",T,[s.order?(i(),n("div",O,[e("div",C,[e("div",S,[e("div",I,[e("nav",x,[e("ul",null,[e("li",null,[p(h,{to:{name:"userOrders"}},{default:b(()=>[U]),_:1})]),e("li",E,[e("a",L,[B,q,e("span",N,[R,e("strong",null,r(a.splitTitle(s.order._id)[0]),1),c(r(a.splitTitle(s.order._id)[1]),1)])])])])])])])]),e("h2",F,[M,e("span",Y,[j,e("strong",null,r(a.splitTitle(s.order._id)[0]),1),c(r(a.splitTitle(s.order._id)[1]),1)])]),e("div",z,[s.order.dates?(i(),n("div",V,[e("div",H,[e("div",W,[e("nav",Q,[e("div",{class:m(s.order.dates.dateCreated?"o-steps__nav-item o-steps__nav-item-previous":"o-steps__nav-item")},[e("a",G,[e("div",J,[p(y,{icon:"cart-plus"})]),e("div",K,[e("span",X,[Z,e("span",$,r(s.order.dates.dateCreated),1)])])])],2),e("div",{class:m(s.order.dates.datePaid?"o-steps__nav-item o-steps__nav-item-previous":"o-steps__nav-item")},[ee,e("a",te,[e("div",se,[p(y,{icon:"credit-card"})]),e("div",oe,[e("span",re,[ie,e("span",ne,r(s.order.dates.datePaid),1)])])])],2),e("div",{class:m(s.order.dates.dateExpeded?"o-steps__nav-item o-steps__nav-item-previous":"o-steps__nav-item")},[ae,e("a",de,[e("div",ce,[p(y,{icon:"truck"})]),e("div",le,[e("span",ue,[_e,e("span",he,r(s.order.dates.dateExpeded),1)])])])],2)])])])])):l("",!0)]),e("div",pe,[e("div",me,[e("div",ye,[a.checkActions()?(i(),n("span",ve,[fe,be,a.needsPayment("online_paypal_paypal")?(i(),n("div",ge,[s.order.dates&&!s.order.dates.datePaid?(i(),n("button",{key:0,type:"button",class:"button",onClick:t[0]||(t[0]=d=>a.makePayment())},De)):l("",!0)])):l("",!0),a.needsPayment("online_stripe")?(i(),n("div",we,[p(D,{order:s.order,description:"Uses secured Stripe engine for comfort card payment"},null,8,["order"])])):l("",!0)])):l("",!0),s.subscription.total?(i(),n("div",{key:1,class:m(a.subscriptionClass)},[Pe,c(" "+r(s.subscription.count)+" / "+r(s.subscription.total)+" ",1),s.subscription.count<s.subscription.total?(i(),n("div",Ae,[Te,e("button",{type:"button",class:"button is-danger",onClick:t[1]||(t[1]=d=>a.makePayment())},Ce)])):(i(),n("div",Se,xe))],2)):l("",!0)])])]),e("div",Ue,[e("div",Ee,[e("div",Le,[s.order.items!=null&&s.order.items&&s.order.items.length>0?(i(),n("div",Be,[e("div",qe,[e("div",Ne,[e("div",Re,[e("div",Fe,[e("table",Me,[Ye,e("tbody",null,[(i(!0),n(g,null,k(s.order.items,(d,v)=>(i(),n("tr",{key:v},[e("th",null,[d.type!=="product"?(i(),n("span",je,[c(r(d.type)+" ",1),d.type==="subscription"?(i(),n("span",ze,[p(h,{to:{name:"userSubscriptionDetail",params:{id:s.productToSubscription[d._id]}}},{default:b(()=>[c(r(s.productToSubscription[d._id]),1)]),_:2},1032,["to"])])):l("",!0)])):l("",!0),c(" "+r(d.name[o.$store.state.language.code]),1)]),e("td",Ve,r(d.amount),1),e("td",He,[e("span",null,r(o.$helpers.numeral(d.price).format("0.00")),1),e("span",null,r(o.$store.state.currency.symbol),1),d.type!=="product"&&d.data&&d.data.subscription&&d.data.subscription.period?(i(),n("span",We," / "+r(d.data.subscription.period),1)):l("",!0)])]))),128))]),e("tfoot",null,[s.order.prices&&s.order.prices.priceItems?(i(),n("tr",Qe,[Ge,Je,e("td",Ke,r(o.$helpers.numeral(s.order.prices.priceItems).format("0.00"))+" "+r(o.$store.state.currency.symbol),1)])):l("",!0),s.order.prices&&s.order.prices.priceDelivery?(i(),n("tr",Xe,[Ze,$e,e("td",et,r(o.$helpers.numeral(s.order.prices.priceDelivery).format("0.00"))+" "+r(o.$store.state.currency.symbol),1)])):l("",!0),s.order.prices&&s.order.prices.pricePayment?(i(),n("tr",tt,[st,ot,e("td",rt,r(o.$helpers.numeral(s.order.prices.pricePayment).format("0.00"))+" "+r(o.$store.state.currency.symbol),1)])):l("",!0),s.order.prices&&s.order.prices.priceTotal?(i(),n("tr",it,[nt,at,e("td",dt,[e("strong",null,r(o.$helpers.numeral(s.order.prices.priceTotal).format("0.00")),1),c(" "+r(o.$store.state.currency.symbol),1)])])):l("",!0)])])])])])])])):(i(),n("div",ct,ut))]),e("div",_t,[e("div",ht,[e("div",pt,[mt,e("div",yt,r(a.invoiceAddress()),1)]),a.checkDeliveryAddress()?(i(),n("div",vt,[ft,e("div",bt,r(a.deliveryAddress()),1)])):(i(),n("div",gt,wt))]),e("div",Pt,[e("div",At,[Tt,a.checkDeliveryData()?(i(),n("div",Ot,[(i(!0),n(g,null,k(a.deliveryData(),(d,v)=>(i(),n("div",{key:v},[e("p",null,[e("span",Ct,r(d.type),1),St,e("strong",null,r(d.name),1),c(": "+r(o.$helpers.numeral(d.price).format("0.00"))+"\xA0"+r(o.$store.state.currency.symbol),1)])]))),128))])):l("",!0)]),a.checkPaymentData()?(i(),n("div",It,[e("div",xt,[Ut,a.paymentData()?(i(),n("div",Et,[e("p",null,[e("strong",null,r(a.paymentData().name),1),c(": "+r(o.$helpers.numeral(a.paymentData().price).format("0.00"))+"\xA0"+r(o.$store.state.currency.symbol),1)])])):l("",!0)])])):l("",!0)])])])]),Lt,Bt,a.userIsAdmin?(i(),n("div",qt,[e("div",Nt,[e("div",Rt,[Ft,e("button",{type:"button",class:"button",onClick:t[2]||(t[2]=d=>a.orderPay())},"Pay Order"),e("button",{type:"button",class:"button",onClick:t[3]||(t[3]=d=>a.orderCancel())},"Cancel Order"),e("button",{type:"button",class:"button",onClick:t[4]||(t[4]=d=>a.makeExpedition())},"Make Expedition")])])])):l("",!0),s.order&&s.order.invoice?(i(),n("div",Mt,[Yt,e("div",jt,[e("div",zt,[e("button",{type:"button",class:"button",onClick:t[5]||(t[5]=d=>a.invoiceDownload())},"Download Invoice")])]),e("div",Vt,[s.order&&s.order.invoice&&s.order.invoice.html?(i(),n("div",Ht,[e("div",{class:"order-invoice-body",innerHTML:s.order.invoice.html},null,8,Wt)])):l("",!0)])])):l("",!0)])):(i(),n("div",Qt,[e("div",Gt,[e("div",Jt,[Kt,e("p",null,[Xt,Zt,p(h,{to:{name:"login"},tag:"a",class:"","active-class":"is-active",translate:"yes"},{default:b(()=>[$t]),_:1}),es]),ts])])]))])}var is=P(A,[["render",ss],["__file","/Users/marthol/Documents/GitHub/stretchshop-front-vue/src/components/users/UserOrderDetail.vue"]]);export{is as default};