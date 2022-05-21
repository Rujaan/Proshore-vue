<template>
  <div
    class="bg-[#f5f5f9] h-screen w-full flex justify-center items-center text-[#566a7f]"
  >
    <div class="bg-white flex flex-col gap-y-3 shadow-lg rounded-lg group m-3">
      <div class="mx-10 my-20">
        <div class="w-full mb-24 flex justify-center items-center">
          <p class="text-4xl text-purple-500 -skew-y-6">Employee</p>
        </div>
        <div class="my-8">
          <h1 class="text-2xl">Welcome !</h1>
          <p class="text-sm mt-2 w-10/12">
            Please sign-in to your account to go to the employee page.
          </p>
        </div>
        <LoginForm />
      </div>
    </div>
  </div>
</template>

<script>
import LoginForm from "./LoginForm.vue";
export default {
  components: { LoginForm },
  setup() {},
};
</script>
