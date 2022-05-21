<template>
  <div class="flex border-emerald-400 group rounded-md">
    <select
      name=""
      id=""
      class="bg-white py-1 border-t-2 border-l-2 border-b-2 border-black rounded-l group-hover:border-purple-500 transition-all transform duration-100 pl-2"
      v-model="selectedOption"
    >
      <option value="name">Name</option>
      <option value="address">Address</option>
      <option value="dept">Department</option>
    </select>
    <div
      class="flex justify-center items-center border-t-2 border-b-2 border-black group-hover:border-purple-500 transition-all transform duration-100 pl-2"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>
    <input
      type="text"
      class="w-full py-1 border-t-2 border-r-2 border-b-2 border-black focus:outline-none rounded-r group-hover:border-purple-500 transition-all transform duration-100 pl-2"
      v-model="searchedValue"
    />
  </div>
  <div class="flex flex-col">
    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
        <div class="overflow-x-auto">
          <table class="min-w-full">
            <thead class="border-b">
              <tr>
                <th
                  scope="col"
                  class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                >
                  Name
                </th>
                <th
                  scope="col"
                  class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                >
                  Address
                </th>
                <th
                  scope="col"
                  class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                >
                  Department
                </th>
                <th
                  scope="col"
                  class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                >
                  Manager
                </th>
                <th
                  scope="col"
                  class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                >
                  Role
                </th>
                <th
                  scope="col"
                  class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                >
                  Joining Date
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                class="border-b"
                v-for="employee in searchedEmployee"
                :key="employee.id"
              >
                <td
                  class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                >
                  {{ employee.name }}
                </td>

                <td
                  class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                >
                  {{ employee.address }}
                </td>
                <td
                  class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                >
                  {{ employee.department.dept }}
                </td>
                <td
                  class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                >
                  {{ employee.manager.position }}
                </td>
                <td
                  class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                >
                  {{ employee.role }}
                </td>
                <td
                  class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                >
                  {{ employee.joining_date }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, watchEffect, computed } from "vue";

export default defineComponent({
  setup() {
    const employees = ref([]);
    const error = ref(null);
    const selectedOption = ref("name");
    const searchedValue = ref("");

    watchEffect((selectedOption) => {
      selectedOption.value = selectedOption;
    });

    const searchedEmployee = computed(() => {
      switch (selectedOption.value) {
        case "name":
          return employees.value.filter((employee) =>
            employee.name
              .toUpperCase()
              .includes(searchedValue.value.toUpperCase())
          );
        case "address":
          return employees.value.filter((employee) =>
            employee.address
              .toUpperCase()
              .includes(searchedValue.value.toUpperCase())
          );
        case "dept":
          return employees.value.filter((employee) =>
            employee.department.dept
              .toUpperCase()
              .includes(searchedValue.value.toUpperCase())
          );
      }
    });

    const fetchEmployee = async () => {
      try {
        let res = await fetch(" http://localhost:3000/employee");
        if (!res.ok) {
          throw Error("data not available");
        }
        employees.value = await res.json();
      } catch (err) {
        error.value = err.message;
        console.log(error.value);
      }
    };
    fetchEmployee();

    return { employees, selectedOption, searchedValue, searchedEmployee };
  },
});
</script>
