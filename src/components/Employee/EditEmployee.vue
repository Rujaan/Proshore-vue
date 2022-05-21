<template>
  <div
    class="relative z-10"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <div
      class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
    ></div>

    <div class="fixed z-10 inset-0 overflow-y-auto">
      <div
        class="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0 relative"
      >
        <div
          class="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full"
        >
          <button
            class="absolute top-2 right-2 text-red-500 hover:text-red-700 transition-all duration-150"
            @click="closeModal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
              <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3
                  class="text-lg leading-6 font-medium text-gray-900"
                  id="modal-title"
                >
                  Update employee
                </h3>
                <div class="mt-2">
                  <form class="grid grid-cols-2 gap-x-16 gap-y-6 mt-5">
                    <!-- Name -->
                    <div class="relative z-0 w-full mb-6 group">
                      <input
                        type="Name"
                        name="Name"
                        v-model="formData.name"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                      />
                      <label
                        for="Email"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >Name</label
                      >
                    </div>
                    <!-- Address -->
                    <div class="relative z-0 w-full mb-6 group">
                      <input
                        type="Address"
                        name="Address"
                        v-model="formData.address"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                      />
                      <label
                        for="Email"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >Address</label
                      >
                    </div>
                    <!-- Department -->
                    <div class="relative z-0 w-full mb-6 group">
                      <select
                        v-model="formData.department"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      >
                        <option value="General" selected>General</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Finance">Finance</option>
                        <option value="Sales">Sales</option>
                        <option value="HR">HR</option>
                      </select>

                      <label
                        for="Type"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >Department</label
                      >
                    </div>
                    <!-- Manager -->
                    <div class="relative z-0 w-full mb-6 group">
                      <select
                        v-model="formData.manager"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      >
                        <option value="General" selected>General</option>
                        <option value="Functional">Functional</option>
                        <option value="Front Line">Front Line</option>
                      </select>

                      <label
                        for="Type"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Manager</label
                      >
                    </div>
                    <!-- Role -->
                    <div class="relative z-0 w-full mb-6 group">
                      <select
                        v-model="formData.role"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      >
                        <option value="Manager" selected>Manager</option>
                        <option value="Employee">Employee</option>
                      </select>

                      <label
                        for="Type"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >Role</label
                      >
                    </div>

                    <!-- Date -->
                    <div class="relative z-0 w-full mb-6 group">
                      <input
                        type="date"
                        name="Date"
                        v-model="formData.date"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                      />
                      <label
                        for="Email"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >Joining Date</label
                      >
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              @click="AddEmployee"
              class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Update
            </button>
            <button
              type="button"
              @click="closeModal"
              class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-red-500 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import {
  getEmployee,
  patchEmployee,
} from "../../services/employee/employeeServices";

export default {
  props: ["id"],
  emits: ["close", "added"],
  setup(props, { emit }) {
    const formData = ref([]);
    const closeModal = () => {
      emit("close", true);
    };

    const employee = async () => {
      try {
        const res = await getEmployee(props.id);
        formData.value = {
          name: res.data.name,
          address: res.data.address,
          department: res.data.department.dept,
          manager: res.data.manager.position,
          role: res.data.role,
          date: res.data.joining_date,
        };
      } catch (err) {
        console.log(err);
      }
    };
    employee();

    const AddEmployee = async () => {
      const min = 0;
      const max = 999999;
      try {
        const data = {
          id: Math.floor(Math.random() * (max - min) + min),
          name: formData.value.name,
          address: formData.value.address,
          role: formData.value.role,
          manager: {
            id: Math.floor(Math.random() * (max - min) + min),
            position: formData.value.manager,
          },

          department: {
            id: Math.floor(Math.random() * (max - min) + min),
            dept: formData.value.department,
          },

          joining_date: formData.value.date,
        };
        console.log(data);
        const res = await patchEmployee(props.id, data);
        emit("close", true);
        emit("added", true);
      } catch (err) {
        console.log(err);
      }
    };

    return { closeModal, AddEmployee, employee, formData };
  },
};
</script>
