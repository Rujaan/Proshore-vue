import { createRouter, createWebHistory } from "vue-router";
import Login from "@/view/Login/Login.vue";
import Employee from "@/view/Employee/Employee.vue";
import Details from "@/view/Details/Details.vue";

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
    {
      path: "/employee/:id",
      name: "Details",
      component: Details,
    },
  ],
});

export default router;
