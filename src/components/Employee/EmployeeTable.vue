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
          <div v-if="searchedEmployee.length > 0">
            <table class="min-w-full">
              <thead class="border-b">
                <tr>
                  <TableHeaders
                    input="Name"
                    value="name"
                    :filteredValue="filterValue"
                    :dir="sortDir"
                    @filtered="filterTable"
                  />
                  <TableHeaders
                    input="Address"
                    value="address"
                    :filteredValue="filterValue"
                    :dir="sortDir"
                    @filtered="filterTable"
                  />
                  <TableHeaders
                    input="Department"
                    value="department.dept"
                    :filteredValue="filterValue"
                  />
                  <TableHeaders
                    input="Manager"
                    value="manager.position"
                    :filteredValue="filterValue"
                  />
                  <TableHeaders
                    input="Role"
                    value="role"
                    :filteredValue="filterValue"
                    :dir="sortDir"
                    @filtered="filterTable"
                  />
                  <TableHeaders
                    input="Date"
                    value="joining_date"
                    :filteredValue="filterValue"
                    :dir="sortDir"
                    @filtered="filterTable"
                  />
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Option
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
                    <router-link
                      :to="{ name: 'Details', params: { id: employee.id } }"
                    >
                      {{ employee.name }}
                    </router-link>
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
                    {{ getTimeNow(employee.joining_date) }}
                  </td>
                  <td
                    class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                  >
                    <span class="flex gap-x-2 justify-center items-center">
                      <button @click="edit(employee.id)">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-4 w-4 hover:scale-105 transition-all duration-150 transform cursor-pointer hover:drop-shadow-md"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                          />
                        </svg>
                      </button>
                      <button @click="deleteData(employee.id)">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-4 w-4 hover:scale-105 transition-all duration-150 transform cursor-pointer hover:drop-shadow-md"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </button>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div v-else>No result found..</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, watchEffect, computed } from "vue";
import { getAllEmployees } from "../../services/employee/employeeServices";
import TableHeaders from "./misc/TableHeaders.vue";
import moment from "moment";

export default defineComponent({
  emits: ["edited", "deleted"],
  components: { TableHeaders },

  setup(props, { emit }) {
    const employees = ref([]);
    const error = ref(null);
    const selectedOption = ref("name");
    const searchedValue = ref("");
    const filterValue = ref("name");
    const sortDir = ref("asc");

    watchEffect((selectedOption) => {
      selectedOption.value = selectedOption;
    });

    const filterTable = (value) => {
      if (value === filterValue.value) {
        sortDir.value = sortDir.value === "asc" ? "desc" : "asc";
      }
      filterValue.value = value;
    };

    const searchedEmployee = computed(() => {
      if (searchedValue.value != "") {
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
      } else {
        return employees.value.sort((a, b) => {
          let modifier = 1;
          if (sortDir.value === "desc") modifier = -1;
          if (a[filterValue.value] < b[filterValue.value]) return -1 * modifier;
          if (a[filterValue.value] > b[filterValue.value]) return 1 * modifier;
          return 0;
        });
      }
    });

    const fetchEmployee = async () => {
      try {
        let res = await getAllEmployees();
        if (!res.statusText) {
          throw Error("data not available");
        }
        employees.value = await res.data;
      } catch (err) {
        error.value = err.message;
      }
    };
    fetchEmployee();

    const edit = (value) => {
      emit("edited", value);
    };

    const deleteData = (value) => {
      emit("deleted", value);
    };

    const getTimeNow = (date) => {
      return moment(date, "YYYYMMDD").fromNow();
    };

    return {
      employees,
      selectedOption,
      searchedValue,
      searchedEmployee,
      edit,
      deleteData,
      filterValue,
      filterTable,
      sortDir,
      getTimeNow,
    };
  },
});
</script>
