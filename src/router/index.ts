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

import SensualGallery from "../views/SensualGallery.vue";
import DarkFantasy from "../views/DarkFantasy.vue";
import PrivateRoom from "../views/PrivateRoom.vue";
import FantasyFAQ from "../views/FantasyFAQ.vue";
import VIPMembership from "../views/VIPMembership.vue";

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

  
  {
    path: "/gallery",
    name: "SensualGallery",
    component: SensualGallery,
  },
  {
    path: "/dark-fantasy",
    name: "DarkFantasy",
    component: DarkFantasy,
  },
  {
    path: "/private-room",
    name: "PrivateRoom",
    component: PrivateRoom,
  },
  {
    path: "/faq",
    name: "FantasyFAQ",
    component: FantasyFAQ,
  },
  {
    path: "/vip",
    name: "VIPMembership",
    component: VIPMembership,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});



export default router

