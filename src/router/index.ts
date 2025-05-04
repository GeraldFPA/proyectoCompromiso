import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";

import HomePage from "../views/HomePage.vue";
import FantasyHome from "../views/FantasyHome.vue";
import StripperGalaxy from "../views/StripperGalaxy.vue";
import MagicLogin from "../views/MagicLogin.vue";
import RainbowRegister from "../views/RainbowRegister.vue";
import HotEvents from "../views/HotEvents.vue";
import NeonContact from "../views/NeonContact.vue";
import EroticAbout from "../views/EroticAbout.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/fantasy",
    name: "FantasyHome",
    component: FantasyHome,
  },
  {
    path: "/galaxy",
    name: "StripperGalaxy",
    component: StripperGalaxy,
  },
  {
    path: "/login",
    name: "MagicLogin",
    component: MagicLogin,
  },
  {
    path: "/register",
    name: "RainbowRegister",
    component: RainbowRegister,
  },
  {
    path: "/events",
    name: "HotEvents",
    component: HotEvents,
  },
  {
    path: "/contact",
    name: "NeonContact",
    component: NeonContact,
  },
  {
    path: "/about",
    name: "EroticAbout",
    component: EroticAbout,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
