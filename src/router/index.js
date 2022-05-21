import { createRouter, createWebHistory } from "vue-router";
import Login from "@/view/Login/Login.vue";
import Employee from "@/view/Employee/Employee.vue";
import Details from "@/view/Details/Details.vue";
import store from "../store/user";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Login",
      component: Login,
      beforeEnter: (to, from, next) => {
        if (store.state.loggedIn) {
          next("/employee");
        } else {
          next();
        }
      },
    },
    {
      path: "/employee",
      name: "Employee",
      component: Employee,
      beforeEnter: (to, from, next) => {
        if (store.state.loggedIn) {
          next();
        } else {
          next("/");
        }
      },
    },
    {
      path: "/employee/:id",
      name: "Details",
      component: Details,
      beforeEnter: (to, from, next) => {
        if (store.state.loggedIn) {
          next();
        } else {
          next("/");
        }
      },
    },
  ],
});

export default router;
