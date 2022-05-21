<template>
  <div class="p-10">
    <Employee />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Employee from "../../components/Employee/Employee.vue";

export default defineComponent({
  components: { Employee },
  setup() {
    return {};
  },
});
</script>
