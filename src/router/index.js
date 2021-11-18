import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About", 
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/Info",
    name: "Info", 
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Info.vue"),
  },
  {
    path: "/Table",
    name: "Table", 
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Table.vue"),
  },
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
