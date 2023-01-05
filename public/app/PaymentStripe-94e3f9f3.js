import{o as f,c as h,t as S,h as l,a as r,f as g}from"./sett-1738b8ab.js";import{_}from"./index-8202f490.js";const v={name:"OrderPaymentStripe",props:["order","description"],data(){return{isLoading:!0,orderId:null,display:!1}},mounted(){if(typeof Stripe>"u"){var e=document.createElement("script");e.src="https://js.stripe.com/v3/",document.body.appendChild(e)}this.checkIfStripeExists()},computed:{},methods:{checkIfStripeExists(){const e=this;setTimeout(()=>{console.log("Checking if Stripe exists ..."),typeof Stripe<"u"?(console.log("Stripe FOUND"),e.checkIfFormLoaded()):(console.log("Stripe NOT found - waiting ..."),e.checkIfStripeExists())},1e3)},checkIfFormLoaded(){const e=this;setTimeout(()=>{console.log("Checking if Stripe FORM exists ..."),typeof document.querySelector("button")<"u"?(console.log("Stripe FORM FOUND"),e.paymentStripeCall()):(console.log("Stripe FORM NOT found - waiting ..."),e.checkIfFormLoaded())},1e3)},paymentStripeCall:function(){const e=this,o=Stripe(e.order.settings.stripeKey);let a=!1,s=null;e.order&&e.order.data&&e.order.data.subscription&&e.order.data.subscription.ids&&e.order.data.subscription.ids.length>0&&(a=!0,e.order.data.subscription.ids.some(t=>{t.agreed||(s=t)})),(s!==null||!a)&&(e.display=!0);let i="/order/payment/stripe/paymentintent",n,c=!1;if(s&&s!==null)i="/order/payment/stripe/subscription",n={orderId:this.order._id,data:s},c=!0;else{const t=[];this.order&&this.order.items&&this.order.items.forEach(u=>{t.push({id:u._id})}),n={orderId:this.order._id,data:this.order}}document.querySelector("button")&&(document.querySelector(".stripe-payment #payment-form button#submit").disabled=!0),e.$httpc.post(i,n,{timeout:1e4}).then(t=>{if(t.data&&t.data.data){const d=Object.assign({},t.data.data);Object.assign(t.data,d)}if(t.data&&t.data.clientSecret){var u=o.elements(),y={base:{color:"#32325d",fontFamily:"Arial, sans-serif",fontSmoothing:"antialiased",fontSize:"16px","::placeholder":{color:"#32325d"}},invalid:{fontFamily:"Arial, sans-serif",color:"#fa755a",iconColor:"#fa755a"}},p=u.create("card",{style:y});p.mount("#card-element"),p.on("change",function(d){document.querySelector("button").disabled=d.empty,document.querySelector("#card-error").textContent=d.error?d.error.message:""});var b=document.getElementById("payment-form");b.addEventListener("submit",function(d){d.preventDefault();let m=null;c&&(m={orderId:e.order._id,subscriptionId:t.data.id}),e.stripePayWithCard(o,p,t.data.clientSecret,m)})}})},stripePayWithCard:function(e,o,a,s){const i=this;this.stripeLoading(!0),e.confirmCardPayment(a,{payment_method:{card:o}}).then(function(n){if(n.error)this.stripeShowError(n.error.message);else if(console.log("The payment succeeded!"),i.stripeOrderComplete(n.paymentIntent.id),s&&s.orderId&&s.orderId.toString().trim()!==""&&s.subscriptionId&&s.subscriptionId.toString().trim()!==""){const c={orderId:s.orderId,data:{success:!0,action:"subAgree",subscriptionId:s.subscriptionId}};i.$httpc.post("/order/payment/stripe/subscription",c,{timeout:1e4}).then(t=>{t&&i.clearFinishedOrder()})}else i.clearFinishedOrder()})},stripeOrderComplete:function(e){this.stripeLoading(!1),document.querySelector(".result-message a").setAttribute("href","https://dashboard.stripe.com/test/payments/"+e),document.querySelector(".result-message").classList.remove("hidden"),document.querySelector("button").disabled=!0},stripeShowError:function(e){this.stripeLoading(!1);var o=document.querySelector("#card-error");o.textContent=e,setTimeout(function(){o.textContent=""},4e3)},stripeLoading:function(e){e?(document.querySelector("button").disabled=!0,document.querySelector("#spinner").classList.remove("hidden"),document.querySelector("#button-text").classList.add("hidden")):(document.querySelector("button").disabled=!1,document.querySelector("#spinner").classList.add("hidden"),document.querySelector("#button-text").classList.remove("hidden"))},clearFinishedOrder:function(){const e=this;setTimeout(function(){e.$parent.order={},e.$store.dispatch("setOrder",null),e.$store.state.user&&e.$store.state.user.profile===null&&e.$store.state.user.logged===!0&&e.$store.state.user.email.toString().trim()!==""&&(e.$store.state.user.logged=!1,e.$store.state.user.superadmined=!1,e.$store.state.user.profile=null,e.$httpc.defaults.headers.common.Authorization=null,e.$cookies.remove("token")),window.location.href="/"+e.$store.state.language.code+"/user/orders/"+e.order._id},2e3)}}},I={key:0,class:"stripe-payment"},q=r("h2",{class:"title is-3",translate:"yes"},"Pay with your card",-1),O={key:0},x=r("form",{id:"payment-form"},[r("div",{id:"card-element"},[l("Stripe.js injects the Card Element")]),r("button",{id:"submit"},[r("div",{class:"spinner hidden",id:"spinner"}),r("span",{id:"button-text"},[r("span",{class:"products",translate:"yes"},"Pay now"),r("span",{class:"subscription is-hidden",translate:"yes"},"Subscribe")])]),r("p",{id:"card-error",role:"alert"}),r("div",{class:"result-message hidden"},[r("h3",{translate:"yes"},"Payment succeeded"),r("p",{translate:"yes"}," You should be now redirected to order detail. "),r("p",null,[r("span",{translate:"yes"},"See the result in your"),r("a",{href:"",target:"_blank",translate:"yes"},"Stripe dashboard."),g(". ")])])],-1);function $(e,o,a,s,i,n){return i.display?(f(),h("div",I,[q,this.description?(f(),h("p",O,S(this.description),1)):l("v-if",!0),l(" Display a payment form "),x])):l("v-if",!0)}const L=_(v,[["render",$],["__file","/Users/marthol/Documents/GitHub/stretchshop-front-vue/src/components/orders/PaymentStripe.vue"]]);export{L as O};
