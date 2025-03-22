<script setup lang="ts">
import {computed, ref} from 'vue';
import {useFavorites} from '../composables/useFavorites';
import type {Meal} from '../types/meal';
import VideoModal from './VideoModal.vue';

const props = defineProps<{
	meal: Meal;
}>();

const {isFavorite, addFavorite, removeFavorite} = useFavorites();

const toggleFavorite = (event: Event) => {
	event.preventDefault();
	if (isFavorite(props.meal.idMeal)) {
		removeFavorite(props.meal.idMeal);
	} else {
		addFavorite(props.meal);
	}
};

const isModalOpen = ref(false);
const shareSuccess = ref(false);

const videoUrl = computed(() =>
	props.meal.strYoutube
		? `https://www.youtube.com/embed/${props.meal.strYoutube.split('=')[1]}`
		: '',
);

const handleShare = async (event: Event) => {
	event.preventDefault();
	const shareUrl = `${window.location.origin}/meal/${props.meal.idMeal}`;

	if (navigator.share) {
		try {
			await navigator.share({
				title: props.meal.strMeal,
				text: `Check out this recipe for ${props.meal.strMeal}!`,
				url: shareUrl,
			});
		} catch (err) {
			if (err instanceof Error && err.name !== 'AbortError') {
				console.error('Error sharing:', err);
			}
		}
	} else {
		// Fallback to clipboard
		try {
			await navigator.clipboard.writeText(shareUrl);
			shareSuccess.value = true;
			setTimeout(() => {
				shareSuccess.value = false;
			}, 2000);
		} catch (err) {
			console.error('Failed to copy:', err);
		}
	}
};
</script>

<template>
	<router-link
		:to="{name: 'meal-details', params: {id: meal.idMeal}}"
		class="bg-[#2a2a2a] rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 relative group">
		<div class="relative">
			<img
				:src="meal.strMealThumb"
				:alt="meal.strMeal"
				class="w-full h-48 object-cover relative z-10" />
			<div class="absolute inset-0 bg-[rgba(255,107,0,0.25)] z-10" />
			<button
				@click.prevent="isModalOpen = true"
				:class="props.meal.strYoutube ? 'play-button' : 'hidden'">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-10 w-10 text-white"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
				</svg>
			</button>
		</div>
		<div class="absolute top-2 right-2 flex flex-col gap-2 z-10">
			<button
				@click="toggleFavorite"
				class="p-2 bg-black/50 rounded-full hover:bg-black/70">
				<svg
					:class="[
						'w-6 h-6',
						isFavorite(meal.idMeal) ? 'text-primary fill-current' : 'text-white',
					]"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="2">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
				</svg>
			</button>
			<button
				@click="handleShare"
				class="p-2 bg-black/50 rounded-full hover:bg-black/70">
				<svg
					class="w-6 h-6 text-white"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
				</svg>
				<span
					v-if="shareSuccess"
					class="absolute -bottom-8 right-0 bg-black/75 text-white text-sm px-2 py-1 rounded">
					Copied!
				</span>
			</button>
		</div>
		<div class="p-4">
			<h3 class="text-lg font-semibold text-white mb-2">{{ meal.strMeal }}</h3>
			<div class="flex items-center justify-between text-gray-400">
				<span class="text-sm">{{ meal.strCategory }}</span>
				<span class="text-sm">{{ meal.strArea }}</span>
			</div>
		</div>
	</router-link>

	<!-- Video Modal -->
	<VideoModal
		:videoUrl="videoUrl"
		:isOpen="isModalOpen"
		@close="isModalOpen = false" />
</template>
