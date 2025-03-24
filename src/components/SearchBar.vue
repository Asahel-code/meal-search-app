<script setup lang="ts">
const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();

defineProps<{
  placeholder?: string
}>()

const updateQuery = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.value);
};

</script>

<template>
  <div class="w-full max-w-2xl mx-auto mb-16">
    <div class="relative">
      <input
        @input="updateQuery"
        type="text"
        :placeholder="placeholder"
        class="w-full px-6 py-4 bg-[#2a2a2a] rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
      />
      <div
        class="absolute right-2 top-1/2 transform -translate-y-1/2 p-2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
    </div>
  </div>
</template>
