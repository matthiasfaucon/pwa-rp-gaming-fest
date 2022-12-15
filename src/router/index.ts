import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "presentation",
    component: () => import("../views/Presentation.vue"),
  },
  {
    path: "/programme",
    name: "programme",
    component: () => import("../views/Programme.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../views/Contact.vue"),
  },
  {
    path: "/billeterie",
    name: "billeterie",
    component: () => import("../views/Billeterie.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
