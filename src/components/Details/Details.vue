<template>
  <div>
    <h1 class="text-2xl">Employee Detail</h1>
    <div class="my-10">
      <div class="flex justify-between flex-wrap items-center">
        <h1>{{ userData.name }}</h1>
        <div>Joined : {{ userData.joining_date }}</div>
      </div>
      <div class="flex flex-col mt-10 gap-y-8">
        <div>{{ userData.address }}</div>
        <div>{{ userData.department.dept }}</div>
        <div>Role : {{ userData.role }}</div>
        <div>Position : {{ userData.manager.position }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { ref } from "vue";
import { getEmployee } from "../../services/employee/employeeServices";

export default {
  setup() {
    const route = useRoute();
    const userData = ref([]);

    const getData = async () => {
      try {
        const res = await getEmployee(route.params.id);
        userData.value = res.data;
      } catch (e) {
        console.log(e);
      }
    };
    getData();

    return { getData, userData };
  },
};
</script>
