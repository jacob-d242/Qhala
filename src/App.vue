<template>
  <div>
    <Navbar />
    <router-view />
    <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
  setup() {},
};
</script>
