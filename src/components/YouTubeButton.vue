<script setup>
const props = defineProps({
  href: String,
});
</script>

<template>
  <a
    :href="href"
    target="_blank"
    class="px-3 py-2 rounded bg-red-500 hover:bg-red-600 text-white transition-colors"
  >
    <slot>Youtube</slot>
  </a>
</template>
