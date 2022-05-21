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
                  Delete employee ?
                </h3>
                <div class="mt-2">
                  <div>Are you sure you wanna delete {{ formData.name }} ?</div>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              @click="deleteEmp"
              class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Yes
            </button>
            <button
              type="button"
              @click="closeModal"
              class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-red-500 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              I change my mind
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
  deleteEmployee,
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
        };
      } catch (err) {
        console.log(err);
      }
    };
    employee();

    const deleteEmp = async () => {
      try {
        const res = await deleteEmployee(props.id);
        emit("close", true);
        emit("added", true);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };

    return { closeModal, deleteEmp, employee, formData };
  },
};
</script>
