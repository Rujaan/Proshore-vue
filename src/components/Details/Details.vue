<template>
  <div>
    <h1 class="text-2xl">Employee Detail</h1>
    <div class="my-10">
      <div class="flex justify-between flex-wrap items-center">
        <h1>{{ userData.name }}</h1>
        <div>Joined :{{ userData.joining_date }}</div>
      </div>
      <div class="flex flex-col mt-10 gap-y-8">
        <div>{{ userData.address }}</div>
        <div>{{ userData.department?.dept }}</div>
        <div class="flex justify-between flex-wrap">
          <div class="flex gap-y-4 flex-col">
            <div>Role : {{ userData.role }}</div>
            <div v-if="userData.role == 'Manager'">
              <h3 class="my-3">Managed Users</h3>
              <div
                v-for="managedUser in managedUsers"
                :key="managedUser"
                class="my-1"
              >
                {{ managedUser.name }}
              </div>
            </div>
          </div>
          <div>Position : {{ userData.manager?.position }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { ref } from "vue";
import {
  getEmployee,
  getAllEmployees2,
} from "../../services/employee/employeeServices";

export default {
  setup() {
    const route = useRoute();
    const userData = ref([]);
    const managedUsers = ref([]);

    const getData = async () => {
      try {
        const res = await getEmployee(route.params.id);
        if (res.data.role == "Manager") {
          getOtherEmployees();
        }
        userData.value = res.data;
      } catch (e) {
        console.log(e);
      }
    };
    getData();

    const getOtherEmployees = async () => {
      try {
        const res = await getAllEmployees2();
        managedUsers.value = res.data;
      } catch (e) {
        console.log(e);
      }
    };

    return { getData, userData, managedUsers };
  },
};
</script>
