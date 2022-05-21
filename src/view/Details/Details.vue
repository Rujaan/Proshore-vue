<template>
  <div class="p-10">
    <Details />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Details from "../../components/Details/Details.vue";

export default defineComponent({
  components: { Details },
  setup() {
    return {};
  },
});
</script>
