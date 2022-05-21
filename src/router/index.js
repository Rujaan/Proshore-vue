import { createRouter, createWebHistory } from "vue-router";
import Login from "@/view/Login/Login.vue";
import Admin from "@/view/Admin/Admin.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Login",
      component: Login,
    },
    {
      path: "/admin",
      name: "Admin",
      component: Admin,
    },
  ],
});

export default router;
