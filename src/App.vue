<template>
  <div>
    <h1 class="text-lg text-red-500 bg-black p-10">
      Hello World8 ! {{ name }}
    </h1>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
const name = ref<String>("");
name.value = "hi";
</script>
