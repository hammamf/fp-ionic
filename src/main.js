import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
// import router from './router'

//fontawesome
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

//ionic
import Ionic from "@ionic/vue"
import "@ionic/core/css/core.css"
import "@ionic/core/css/ionic.bundle.css"
Vue.use(Ionic);
//router
import { IonicVueRouter } from "@ionic/vue";
Vue.use(IonicVueRouter);


const router = new IonicVueRouter({
  routes: [
    { path: "/", redirect: "/home" },
    {
      path: "/home",
      name: "home",
      component: () =>
        import(/* webpackChunkName: "home" */ "@/components/HomePage"),
    },
    {
      path: "/detailLiga",
      name: "detailLiga",
      component: () =>
        import(/* webpackChunkName: "new-item" */ "@/components/detailLiga"),
    },
    {
      path: "/listClub",
      name: "listClub",
      component: () =>
        import(/* webpackChunkName: "new-item" */ "@/components/listClub"),
    },
    {
      path: "/detailClub",
      name: "detailClub",
      component: () =>
        import(/* webpackChunkName: "new-item" */ "@/components/detailClub"),
    },
    {
      path: "/lastEventClub",
      name: "lastEventClub",
      component: () =>
        import(/* webpackChunkName: "new-item" */ "@/components/lastEventClub"),
    },
    {
      path: "/lastEvent",
      name: "lastEvent",
      component: () =>
        import(/* webpackChunkName: "new-item" */ "@/components/lastEvent"),
    },
  ]
});

Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
