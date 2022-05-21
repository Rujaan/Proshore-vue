<template>
  <div class="p-10">
    <Admin />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Admin from "../../components/Admin/Admin.vue";

export default defineComponent({
  components: { Admin },
  setup() {
    return {};
  },
});
</script>
