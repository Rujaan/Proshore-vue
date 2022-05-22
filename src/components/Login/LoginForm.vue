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
        :type="passInput"
        name="Password"
        v-model="formData.password"
        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" "
        required
      />
      <label
        for="Email"
        class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >Password
      </label>

      <span
        class="absolute right-0 top-3 cursor-pointer"
        v-if="!showPass"
        @click="showPassword(true)"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
          />
        </svg>
      </span>
      <span
        class="absolute right-0 top-3 cursor-pointer"
        v-else
        @click="showPassword(false)"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          />
        </svg>
      </span>
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
    const showPass = ref(false);
    const passInput = ref("Password");

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

    const showPassword = (value) => {
      if (value == false) {
        showPass.value = false;
        passInput.value = "Password";
      } else {
        showPass.value = true;
        passInput.value = "Input";
      }
    };
    return {
      formData,
      checkData,
      error,
      showPass,
      passInput,
      showPassword,
    };
  },
};
</script>
