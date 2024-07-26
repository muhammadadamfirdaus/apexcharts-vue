<script setup>
import Dashboard from "./components/Dashboard.vue";
import Header from "./components/Header.vue";
import HelloWorld from "./components/HelloWorld.vue";
import Sidebar from "./components/Sidebar.vue";
</script>

<template>
  <Header />
  <div class="flex">
    <Sidebar />
    <div class="flex-auto p-8 pt-16 pl-24">
      <Dashboard />
      <!-- <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
      </a>
      </div>
      <HelloWorld msg="Vite + Vue" /> -->
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
