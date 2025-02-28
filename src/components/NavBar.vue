<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <nav class="bg-[#1a1a1a] py-4 border-b border-gray-600">
    <div class="container mx-auto px-4 flex items-center justify-between">
      <RouterLink to="/" class="flex items-center space-x-2 w-10 h-10">
        <img class="" src="/logo.svg" alt="logo" />
      </RouterLink>
      
      <div class="flex space-x-8">
        <RouterLink to="/my-favourite" class="text-white hover:text-primary transition-colors">
          Favorites
        </RouterLink>
        <RouterLink to="/by-letter" class="text-white hover:text-primary transition-colors">
          Explore By Letter
        </RouterLink>
        <RouterLink to="/by-ingredient" class="text-white hover:text-primary transition-colors">
          Explore By Ingredient
        </RouterLink>
      </div>
    </div>
  </nav>
</template>