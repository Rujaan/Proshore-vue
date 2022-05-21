<template>
  <div>
    <div class="flex justify-between flex-wrap">
      <h1 class="text-2xl">List of employees</h1>
      <button
        @click="logout"
        class="rounded relative inline-flex group items-center justify-center px-3.5 py-2 cursor-pointer border-b-4 border-l-2 active:border-red-600 active:shadow-none shadow-lg bg-gradient-to-tr from-red-600 to-red-500 border-red-700 text-white"
      >
        <span
          class="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"
        ></span>
        <span class="relative">Logout</span>
      </button>
    </div>
    <div>
      <button
        @click="showAddModal = true"
        class="rounded relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-purple-600 active:shadow-none shadow-lg bg-gradient-to-tr from-purple-600 to-purple-500 border-purple-700 text-white my-10"
      >
        <span
          class="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"
        ></span>
        <span class="relative">Add Employee</span>
      </button>
    </div>
    <div class="flex flex-col gap-y-8">
      <EmployeeTable :key="key" @edited="edited" @deleted="deleted" />
    </div>
  </div>
  <div v-if="showAddModal">
    <AddEmployee @close="showAddModal = false" @added="updateTable" />
  </div>

  <div v-if="showEditModal">
    <EditEmployee
      @close="showEditModal = false"
      @added="updateTable"
      :id="employeeId"
    />
  </div>

  <div v-if="showDeleteModal">
    <DeleteEmployee
      @close="showDeleteModal = false"
      @added="updateTable"
      :id="employeeId"
    />
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import EmployeeTable from "./EmployeeTable.vue";
import AddEmployee from "./AddEmployee.vue";
import EditEmployee from "./EditEmployee.vue";
import DeleteEmployee from "./DeleteEmployee.vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default defineComponent({
  components: { EmployeeTable, AddEmployee, EditEmployee, DeleteEmployee },
  setup() {
    const showAddModal = ref(false);
    const showEditModal = ref(false);
    const showDeleteModal = ref(false);
    const employeeId = ref(0);
    const key = ref(0);
    const store = useStore();
    const router = useRouter();

    const updateTable = () => {
      key.value++;
    };

    const edited = (value) => {
      employeeId.value = value;
      showEditModal.value = true;
    };

    const deleted = (value) => {
      employeeId.value = value;
      showDeleteModal.value = true;
    };

    const logout = () => {
      store.commit("setLoggedIn", false);
      store.commit("setUser", "");
      router.push("/");
    };

    return {
      showAddModal,
      key,
      updateTable,
      deleted,
      edited,
      showEditModal,
      employeeId,
      showDeleteModal,
      logout,
    };
  },
});
</script>
