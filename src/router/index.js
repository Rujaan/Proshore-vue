import { createRouter, createWebHistory } from "vue-router";
import Login from "@/view/Login/Login.vue";
import Employee from "@/view/Employee/Employee.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Login",
      component: Login,
    },
    {
      path: "/employee",
      name: "Employee",
      component: Employee,
    },
  ],
});

export default router;
