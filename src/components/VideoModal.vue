<script setup lang="ts">
import {defineProps, defineEmits} from 'vue';

defineProps<{videoUrl: string; isOpen: boolean}>();
const emit = defineEmits(['close']);
</script>

<template>
	<div
		v-if="isOpen"
		class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-30">
		<div class="bg-white rounded-lg max-w-2xl w-full relative">
			<!-- Close Button -->
			<button
				@click="emit('close')"
				class="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-sm">
				✖
			</button>
			<!-- <h2 class="text-xl font-bold mb-4">Watch Video</h2> -->
			<iframe
				v-if="videoUrl"
				:src="videoUrl"
				class="w-full h-[70vh]"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerpolicy="strict-origin-when-cross-origin"
				allowfullscreen></iframe>
			<div v-else class="text-center"><p class="text-red-500 py-10">No video available.</p></div>
		</div>
	</div>
</template>