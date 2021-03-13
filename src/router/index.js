import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Recommend from "../views/Recommend.vue";
import View from "../views/View.vue";
import Login from "../views/Login";
import Register from "../views/Register";
import RegisterDormitory from "../views/RegisterDormitory";
import Profile from "../views/Profile";
import Profile_like from "../views/Profile_like";
import Myhor from "../views/Myhor";
import test from "../views/Test";
import Carousel3d from 'vue-carousel-3d';

Vue.use(Carousel3d);


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/recommend",
    name: "recommend",
    component: Recommend
  },
  {
    path: "/view/:Name",
    name: "view",
    component: View
  },
  {
    path: "/Login",
    name: "Login",
    component: Login
  },
  {
    path: "/RegisterDormitory:id",
    name: "registerDormitory",
    component: RegisterDormitory
  },
  {
    path: "/Register:id",
    name: "register",
    component: Register
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile
  },
  {
    path: "/profile/like",
    name: "profile_like",
    component: Profile_like
  },
  {
    path: "/myhor:Name",
    name: "myhor",
    component: Myhor
  },
  {
    path: "/test",
    name: "test",
    component: test
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return {
        selector: to.hash,
        behavior: 'smooth',
      }
    }
  }
});

export default router;