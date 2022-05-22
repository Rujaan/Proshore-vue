<template>
  <form class="my-1" @submit.prevent="checkData">
    <div class="relative z-0 w-full mb-6 group">
      <input
        type="Username"
        name="Username"
        v-model="formData.username"
        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" "
        required
      />
      <label
        for="Email"
        class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >Username</label
      >
    </div>
    <div class="relative z-0 w-full mb-6 group">
      <input
        type="Password"
        name="Password"
        v-model="formData.password"
        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" "
        required
      />
      <label
        for="Email"
        class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >Password</label
      >
    </div>

    <button
      class="rounded relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-purple-600 active:shadow-none shadow-lg bg-gradient-to-tr from-purple-600 to-purple-500 border-purple-700 text-white my-10 w-full"
    >
      <span
        class="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-[25rem] group-hover:h-32 opacity-10"
      ></span>
      <span class="relative">Login</span>
    </button>
    <span class="text-red-500 mt-2">{{ error }}</span>
  </form>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  setup() {
    const store = useStore();
    const formData = ref({ username: "admin", password: "admin" });
    const router = useRouter();
    const error = ref();

    const checkData = () => {
      console.log(store.state);
      if (formData.value.username == "" && formData.value.password == "") {
        error.value = "Blank Fields";
      }
      if (
        formData.value.username == "admin" &&
        formData.value.password == "admin"
      ) {
        console.log(store);
        store.commit("setLoggedIn", true);
        store.commit("setUser", formData.value.username);
        router.push("/employee");
      } else {
        error.value = "Incorrect Username/ Pass";
      }
    };
    return {
      formData,
      checkData,
      error,
    };
  },
};
</script>
