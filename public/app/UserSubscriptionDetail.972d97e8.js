import{_ as v,r as g,o,c as r,a as s,e as p,f as h,t as n,g as d,F as f,i as k,j as l,s as S,p as D,k as C}from"./index.78dc2935.js";const x={name:"userSubscriptionDetail",data(){return{subscription:null}},created:function(){this.getSubscription(this.$route.params.id)},computed:{userIsAdmin:function(){return!!(this.$store.state&&this.$store.state.user&&this.$store.state.user.logged&&this.$store.state.user.profile&&this.$store.state.user.profile.type&&this.$store.state.user.profile.type==="admin")}},methods:{getSubscription(e){const a=this,b={timeout:3e3,needsAuth:!0},y={query:{_id:e},limit:1};this.$httpc.post("subscription/list",y,b).then(function(t){t&&t.data&&t.data&&t.data.results&&t.data.results.length===1&&(a.subscription=t.data.results[0])}).catch(function(t){console.log(t)}).then(function(){a.eventBus.emit("translateContent",a.$store.getters.getTranslates)})},splitTitle(e){return[e.slice(0,6),e.slice(6)]},splitDate(e){return e.split("T")},actionsSuspend:function(){const e=this;e.$httpc.get("/subscription/suspend/"+e.subscription._id,{timeout:1e4}).then(a=>{console.log("subscription/suspend response:",a)})},actionsActivate:function(){const e=this;e.$httpc.get("/subscription/reactivate/"+e.subscription._id,{timeout:1e4}).then(a=>{console.log("subscription/activate response:",a)})},getPaymentProviderName:function(){if(this.order&&this.order.data&&this.order.data.paymentData&&this.order.data.paymentData.codename){const e=this.order.data.paymentData.codename.split("_");if(e.constructor===Array&&e.length>0)return e[e.length-1]}return"paypal"},actionsPaid:function(){const e=this;e.$httpc.get("/order/payment/"+e.getPaymentProviderName()+"/adminsubscriptionpaid?paymentId="+e.subscription.data.agreementId+"&ba_token=run_by_admin",{timeout:1e4}).then(a=>{console.log("cycle paid response:",a),window.location.reload()})},statusClass:function(e){return e==="active"?"has-text-success":e==="suspended"?"has-text-danger":""}}},i=e=>(D("data-v-6d949710"),e=e(),C(),e),I={id:"userSubscriptionDetail"},z={key:0},A={class:"container"},N={class:"columns is-variable is-centered"},O={class:"column is-8"},w={class:"breadcrumb","aria-label":"breadcrumbs"},P=i(()=>s("span",{translate:"yes"},"Subscriptions",-1)),T={class:"is-active"},U={"aria-current":"page"},B=i(()=>s("span",{class:"subscription-word",id:"subscription-breadcrumb",translate:"yes"}," Subscription ",-1)),E=d("\xA0 "),V={class:"subscription-title"},F=d(" \xA0 #"),L={class:"title is-2"},M=i(()=>s("span",{id:"subscription-detail-title",translate:"yes",class:"is-size-3"},"Subscription",-1)),q=d(),H=i(()=>s("br",null,null,-1)),R={class:"subscription-title"},Y={class:"container subscription-detail-data"},j={class:"columns is-variable is-centered"},G={class:"column is-8"},Q={class:"columns is-variable is-centered"},J={class:"column is-6"},K={key:0},W=i(()=>s("h4",{class:"title is-4",translate:"yes"},"History",-1)),X={class:"is-size-7"},Z={key:0},$=i(()=>s("span",{translate:"yes"},"Related order",-1)),ss=d(": "),ts={class:"column is-6"},es=i(()=>s("h4",{class:"title is-4",translate:"yes"},"Main info",-1)),is={class:"info info-settings"},ns=i(()=>s("span",{translate:"yes"},"Status",-1)),os=i(()=>s("span",{translate:"yes"},"Price & Period",-1)),rs=i(()=>s("span",{translate:"yes"},"Cycles",-1)),as={key:0,id:"subscriptionCyclesInfinity",translate:"yes"},cs={key:1},ls={class:"info info-dates"},ds={key:0},us=i(()=>s("span",{translate:"yes"},"Next payment",-1)),_s={class:"is-size-7"},ps={key:1},hs=i(()=>s("span",{translate:"yes"},"Last payment",-1)),bs={class:"is-size-7"},ys={key:2},ms=i(()=>s("span",{translate:"yes"},"Created",-1)),vs={class:"is-size-7"},gs={key:3},fs=i(()=>s("span",{translate:"yes"},"Started",-1)),ks={class:"is-size-7"},Ss={class:"info info-more"},Ds=i(()=>s("span",{translate:"yes"},"Original order",-1)),Cs={key:0},xs=i(()=>s("h4",{class:"title is-5",translate:"yes"},"Available Actions",-1)),Is={key:0},zs=i(()=>s("p",{class:"is-size-7 has-text-grey-dark"}," Makes your subscription active again with related payment applying. You receive e-mail when your subscription and related services are re-activated. ",-1)),As={key:1},Ns=i(()=>s("span",{translate:"yes"},"Admin Actions",-1)),Os=i(()=>s("p",{class:"is-size-7 has-text-grey-dark",translate:"yes"}," Mark next cycle as paid. For cases when payment system failed but customer paid other way. ",-1)),ws={key:0},Ps=i(()=>s("p",{class:"is-size-7 has-text-grey-dark",translate:"yes"}," Suspends subscription and its payment. You receive e-mail when your subscription and related services are paused. ",-1)),Ts={key:1,class:"container"},Us={class:"columns is-variable is-centered"},Bs={class:"column is-8"},Es=i(()=>s("h1",{class:"title is-1",translate:"yes"},"Unauthorized",-1)),Vs=i(()=>s("span",{translate:"yes"},"To see order detail, you may need to",-1)),Fs=d(" \xA0 "),Ls=d("Log in"),Ms=d(". ");function qs(e,a,b,y,t,c){const _=g("router-link");return o(),r("div",I,[t.subscription?(o(),r("div",z,[s("div",A,[s("div",N,[s("div",O,[s("nav",w,[s("ul",null,[s("li",null,[p(_,{to:{name:"userSubscriptions"}},{default:h(()=>[P]),_:1})]),s("li",T,[s("a",U,[B,E,s("span",V,[F,s("strong",null,n(c.splitTitle(t.subscription._id)[0]),1),d(n(c.splitTitle(t.subscription._id)[1]),1)])])])])])])])]),s("h2",L,[M,q,H,s("strong",R,n(t.subscription.orderItemName),1)]),s("div",Y,[s("div",j,[s("div",G,[s("div",Q,[s("div",J,[t.subscription.history?(o(),r("div",K,[W,s("ol",null,[(o(!0),r(f,null,k(e.$helpers.reverseArrayItems(t.subscription.history),(u,m)=>(o(),r("li",{key:m},[s("div",X,n(u.date),1),s("div",null,[s("div",null,[s("strong",null,n(u.action),1)]),u.relatedOrder?(o(),r("div",Z,[$,ss,p(_,{to:{name:"userOrderDetail",params:{id:u.relatedOrder}}},{default:h(()=>[d(n(u.relatedOrder),1)]),_:2},1032,["to"])])):l("",!0)])]))),128))])])):l("",!0)]),s("div",ts,[es,s("div",is,[s("ul",null,[s("li",null,[ns,s("strong",{class:S(c.statusClass(t.subscription.status))},n(t.subscription.status),3)]),s("li",null,[os,s("strong",null,n(t.subscription.price)+" / "+n(t.subscription.duration)+" "+n(t.subscription.period),1)]),s("li",null,[rs,s("strong",null,[t.subscription.cycles<=1?(o(),r("span",as,"Infinity")):(o(),r("span",cs,n(t.subscription.cycles),1))])])])]),s("div",ls,[s("ul",null,[t.subscription&&t.subscription.dates&&t.subscription.dates.dateOrderNext?(o(),r("li",ds,[us,s("strong",null,n(c.splitDate(t.subscription.dates.dateOrderNext)[0]),1),s("span",_s,n(c.splitDate(t.subscription.dates.dateOrderNext)[1]),1)])):l("",!0),t.subscription&&t.subscription.dates&&t.subscription.dates.dateEnd?(o(),r("li",ps,[hs,s("strong",null,n(c.splitDate(t.subscription.dates.dateEnd)[0]),1),s("span",bs,n(c.splitDate(t.subscription.dates.dateEnd)[1]),1)])):l("",!0),t.subscription&&t.subscription.dates&&t.subscription.dates.dateCreated?(o(),r("li",ys,[ms,s("strong",null,n(c.splitDate(t.subscription.dates.dateCreated)[0]),1),s("span",vs,n(c.splitDate(t.subscription.dates.dateCreated)[1]),1)])):l("",!0),t.subscription&&t.subscription.dates&&t.subscription.dates.dateStart?(o(),r("li",gs,[fs,s("strong",null,n(c.splitDate(t.subscription.dates.dateStart)[0]),1),s("span",ks,n(c.splitDate(t.subscription.dates.dateStart)[1]),1)])):l("",!0)])]),s("div",Ss,[s("ul",null,[s("li",null,[Ds,s("strong",null,[p(_,{to:{name:"userOrderDetail",params:{id:t.subscription.orderOriginId}}},{default:h(()=>[d(n(t.subscription.orderOriginId),1)]),_:1},8,["to"])])]),t.subscription&&t.subscription.status?(o(),r("li",Cs,[xs,t.subscription.status==="suspended"?(o(),r("div",Is,[s("button",{onClick:a[0]||(a[0]=u=>c.actionsActivate()),class:"button",translate:"yes"},"Re-activate"),zs])):l("",!0)])):l("",!0),c.userIsAdmin?(o(),r("li",As,[Ns,s("div",null,[s("button",{onClick:a[1]||(a[1]=u=>c.actionsPaid()),class:"button",translate:"yes"},"Cycle Paid"),Os]),t.subscription.status==="active"?(o(),r("div",ws,[s("button",{onClick:a[2]||(a[2]=u=>c.actionsSuspend()),class:"button",translate:"yes"},"Suspend"),Ps])):l("",!0)])):l("",!0)])])])])])])])])):(o(),r("div",Ts,[s("div",Us,[s("div",Bs,[Es,s("p",null,[Vs,Fs,p(_,{to:{name:"login"},tag:"a",class:"","active-class":"is-active",translate:"yes"},{default:h(()=>[Ls]),_:1}),Ms])])])]))])}var Rs=v(x,[["render",qs],["__scopeId","data-v-6d949710"],["__file","/Users/marthol/Documents/GitHub/stretchshop-front-vue/src/components/users/UserSubscriptionDetail.vue"]]);export{Rs as default};
