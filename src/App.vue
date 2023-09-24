<template lang="">
  <div class="flex place-items-center h-screen flex-col p-4 py-10">
    <h1 class="text-3xl font-bold underline">Hello world!</h1>
    <br /><br />
    <span class="p-float-label">
      <InputText id="username" v-model="value" />
      <label for="username">Username</label>
    </span>
    <br />
    <div class="card flex justify-content-center">
      <Rating v-model="star" :cancel="false" />
    </div>
    <br />
    <loading />
    <br />
    <Splitbutton />
    <br />
    <div>
      <MySteps />
    </div>
  </div>
</template>

<script setup>
import loading from "./components/Loading.vue";
import Splitbutton from "./components/SplitButton.vue";
import MySteps from "./components/MySteps.vue";
import Steps from 'primevue/steps';
import { ref } from "vue";

const value = ref(null);
const star = ref(null);
</script>

<style scoped>
/* .container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
} */
</style>
