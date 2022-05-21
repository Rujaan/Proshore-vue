<template>
  <th
    scope="col"
    class="text-sm font-medium text-gray-900 px-6 py-4 text-left cursor-pointer"
    @click="filterTable(value)"
  >
    {{ input }}
    {{ dir }}
    <button class="self-center" v-if="showArrow">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-3 w-3"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
        v-if="direction"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M8 7l4-4m0 0l4 4m-4-4v18"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-3 w-3"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
        v-else
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M16 17l-4 4m0 0l-4-4m4 4V3"
        />
      </svg>
    </button>
  </th>
</template>

<script>
import { computed } from "vue";
export default {
  props: ["input", "value", "filteredValue", "filter", "dir"],
  setup(props, { emit }) {
    const filterTable = (value) => {
      emit("filtered", value);
    };

    const showArrow = computed(() => {
      if (props.filteredValue == props.value) {
        return true;
      } else {
        return false;
      }
    });

    const direction = computed(() => {
      if (props.dir == "asc") {
        return true;
      } else {
        return false;
      }
    });

    return { filterTable, showArrow, direction };
  },
};
</script>
