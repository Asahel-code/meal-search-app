<script setup>
import NavBar from "./Navbar.vue";
</script>

<template>
  <div class="bg-gray-100 h-full">
    <NavBar />
    <main>
      <router-view />
    </main>
  </div>
</template>
