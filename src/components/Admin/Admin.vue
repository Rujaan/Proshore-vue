<template>
  <div>
    <h1 class="text-2xl">List of employees</h1>
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
      <AdminTable />
    </div>
  </div>
  <div v-if="showAddModal"><AddAdmins @close="showAddModal = false" /></div>
</template>

<script>
import { defineComponent, ref } from "vue";
import AdminTable from "../Admin/AdminTable.vue";
import AddAdmins from "..//Admin/AddAdmins.vue";

export default defineComponent({
  components: { AdminTable, AddAdmins },
  setup() {
    const showAddModal = ref(false);

    return { showAddModal };
  },
});
</script>
