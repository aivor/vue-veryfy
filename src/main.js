import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import store from "./store/store";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import LandingPage from "./components/LandingPage";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import "./store/store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: LandingPage,
    children: [
      { path: "/signup", component: SignUp },
      { path: "/", component: SignIn },
    ],
  },
  {
    path: "/dashboard",
    component: Dashboard,
    children: [{ path: "/dashboard/profile", component: Profile }],
  },
];
const router = new VueRouter({
  mode: "history",
  routes,
});

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");

export default router;
