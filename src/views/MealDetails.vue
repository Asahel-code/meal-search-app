<script setup lang="ts">
import {computed, ref} from 'vue';
import {useRoute} from 'vue-router';
import {mealApi} from '../api/mealApiServices';
import type {Meal} from '../types/meal';
import {useQuery} from '@tanstack/vue-query';
import VideoModal from '../components/VideoModal.vue';

const route = useRoute();

const {
	data: meal,
	isLoading,
	error,
} = useQuery<Meal>({
	queryKey: ['meal', route.params.id],
	queryFn: async () => await mealApi.getMealDetails(route.params.id as string),
});

const showFullInstructions = ref(false);

const truncatedInstructions = computed(() => {
	if (!meal.value?.strInstructions) return '';
	const words = meal.value.strInstructions.split(' ');
	return words.length > 50 && !showFullInstructions.value
		? words.slice(0, 50).join(' ') + '...'
		: meal.value.strInstructions;
});

const isModalOpen = ref(false);

const videoUrl = computed(() =>
	meal.value?.strYoutube
		? `https://www.youtube.com/embed/${meal.value.strYoutube.split('=')[1]}`
		: '',
);
</script>

<template>
	<div v-if="isLoading">Loading...</div>
	<div v-else-if="error" class="text-red-500">Error: {{ error.message }}</div>
	<div v-else-if="meal" class="max-w-[80rem] mx-auto p-8">
		<!-- Meal name -->
		<h1 class="text-4xl font-bold mb-5 text-primary">{{ meal.strMeal }}</h1>
		<div class="flex md:flex-row flex-col md:gap-x-6 gap-y-4">
			<div class="md:w-1/2 w-full">
				<!-- Image -->
				<div class="relative">
					<img
						:src="meal.strMealThumb"
						:alt="meal.strMeal"
						class="w-full md:max-h-full max-h-[500px] rounded-xl relative z-10" />
					<div class="absolute inset-0 bg-[rgba(255,107,0,0.1)] z-10" />
					<button
						@click.prevent="isModalOpen = true"
						:class="meal.strYoutube ? 'play-button' : 'hidden'">
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
				<!-- Category and region -->
				<div class="grid grid-cols-1 sm:grid-cols-2 text-lg py-2">
					<div>
						<strong class="font-bold">Category:</strong> {{ meal.strCategory }}
					</div>
					<div><strong class="font-bold">Area:</strong> {{ meal.strArea }}</div>
				</div>
			</div>
			<div class="mb-3 md:w-1/2 w-full">
				<!-- Meal description -->
				<p class="text-justify">
					{{ truncatedInstructions }}
					<button
						v-if="meal.strInstructions.split(' ').length > 50"
						@click="showFullInstructions = !showFullInstructions"
						class="text-blue-500 ml-2 underline">
						{{ showFullInstructions ? 'Read Less' : 'Read More' }}
					</button>
				</p>

				<!-- Ingredients and there specific measurements -->
				<div class="flex gap-x-8 mt-5">
					<div>
						<h2 class="text-2xl font-semibold mb-2">Ingredients</h2>
						<ul>
							<template v-for="ind in 20" :key="ind">
								<li v-if="meal[`strIngredient${ind}` as keyof Meal]">
									{{ ind }}. {{ meal[`strIngredient${ind}` as keyof Meal] }}
								</li>
							</template>
						</ul>
					</div>
					<div>
						<h2 class="text-2xl font-semibold mb-2">Measures</h2>
						<ul>
							<template v-for="ind in 20" :key="ind">
								<li v-if="meal[`strMeasure${ind}` as keyof Meal]">
									{{ meal[`strMeasure${ind}` as keyof Meal] }}
								</li>
							</template>
						</ul>
					</div>
				</div>
			</div>
		</div>

		<div class="mt-4">
			<a
				v-if="meal.strSource"
				:href="meal.strSource"
				target="_blank"
				class="ml-3 px-3 py-2 rounded border-2 border-transparent text-indigo-600 transition-colors">
				View Original Source
			</a>
		</div>
	</div>

	<!-- Video Modal -->
	<VideoModal
		:videoUrl="videoUrl"
		:isOpen="isModalOpen"
		@close="isModalOpen = false" />
</template>
