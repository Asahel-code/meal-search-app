<script setup lang="ts">
import { ref } from 'vue';
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';

const openNav = ref(false);
const setOpenNav = (isOpen: boolean) => {
  openNav.value = isOpen;
};
</script>

<template>
	<div class="min-h-screen">
		<NavBar  :openNav="openNav" :setOpenNav="setOpenNav" />
		<div class="mt-20 min-h-screen" @click="setOpenNav(false)">
			<router-view />
		</div>
		<Footer />
	</div>
</template>
