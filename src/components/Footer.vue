<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>

<template>
	<footer class="bg-[#2a2a2a] py-12 mt-16">
		<div class="container mx-auto px-4">
			<div class="grid grid-cols-1 md:grid-cols-4 gap-8">
				<div>
					<h3 class="text-xl font-bold text-white mb-4">Recipe Finder</h3>
					<p class="text-gray-400 mb-4">
						Discover delicious recipes from around the world and create your dream
						meals with our extensive collection.
					</p>
					<div class="flex space-x-4">
						<a href="#" class="text-gray-400 hover:text-primary transition-colors">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-6 w-6"
								fill="currentColor"
								viewBox="0 0 24 24">
								<path
									d="M14.2342 10.1624L22.9766 0H20.9049L13.3139 8.82384L7.25095 0H0.258057L9.42642 13.3432L0.258057 24H2.32985L10.3462 14.6817L16.7491 24H23.742L14.2337 10.1624H14.2342ZM11.3966 13.4608L10.4676 12.1321L3.07634 1.55961H6.2585L12.2234 10.0919L13.1523 11.4206L20.9059 22.5113H17.7238L11.3966 13.4613V13.4608Z" />
							</svg>
						</a>
						<a href="#" class="text-gray-400 hover:text-primary transition-colors">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-6 w-6"
								fill="currentColor"
								viewBox="0 0 24 24">
								<path
									d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
							</svg>
						</a>
						<a href="#" class="text-gray-400 hover:text-primary transition-colors">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-6 w-6"
								fill="currentColor"
								viewBox="0 0 24 24">
								<path
									d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
							</svg>
						</a>
					</div>
				</div>

				<div>
					<h3 class="text-xl font-bold text-white mb-4">Quick Links</h3>
					<ul class="space-y-2">
						<li>
							<router-link
								to="/"
								class="text-gray-400 hover:text-primary transition-colors"
								>Home</router-link
							>
						</li>
						<li>
							<router-link
								to="/by-letter"
								class="text-gray-400 hover:text-primary transition-colors"
								>Explore By Letter</router-link
							>
						</li>
						<li>
							<router-link
								to="/by-ingredient"
								class="text-gray-400 hover:text-primary transition-colors"
								>Explore By Ingredient</router-link
							>
						</li>
					</ul>
				</div>

				<div>
					<h3 class="text-xl font-bold text-white mb-4">Popular Categories</h3>
					<ul class="space-y-2">
						<li>
							<a href="#" class="text-gray-400 hover:text-primary transition-colors"
								>Breakfast</a
							>
						</li>
						<li>
							<a href="#" class="text-gray-400 hover:text-primary transition-colors"
								>Lunch</a
							>
						</li>
						<li>
							<a href="#" class="text-gray-400 hover:text-primary transition-colors"
								>Dinner</a
							>
						</li>
						<li>
							<a href="#" class="text-gray-400 hover:text-primary transition-colors"
								>Desserts</a
							>
						</li>
						<li>
							<a href="#" class="text-gray-400 hover:text-primary transition-colors"
								>Vegetarian</a
							>
						</li>
					</ul>
				</div>

				<div>
					<h3 class="text-xl font-bold text-white mb-4">Newsletter</h3>
					<p class="text-gray-400 mb-4">
						Subscribe to our newsletter for the latest recipes and cooking tips.
					</p>
					<form class="space-y-2">
						<input
							type="email"
							placeholder="Your email address"
							class="w-full px-4 py-2 bg-[#3a3a3a] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary" />
						<button
							type="submit"
							class="w-full px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/80 transition-colors">
							Subscribe
						</button>
					</form>
				</div>
			</div>

			<div class="border-t border-gray-700 mt-12 pt-8 text-center">
				<p class="text-gray-400">
					©{{ currentYear }} Developed with love{{ ' ' }}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6 inline"
						fill="currentColor"
						viewBox="0 0 24 24">
						<path
							d="M12 3.59999C12.7062 2.74096 13.5907 2.04565 14.5921 1.56219C15.5936 1.07873 16.6881 0.818662 17.8 0.799988C21.2336 0.799988 23.6 3.66719 23.6 7.16359C23.6 13.3016 16.0036 14.64 12 23.2C7.99642 14.64 0.400024 13.3016 0.400024 7.16359C0.400024 3.66719 2.76642 0.799988 6.20002 0.799988C7.31192 0.818662 8.40647 1.07873 9.40793 1.56219C10.4094 2.04565 11.2938 2.74096 12 3.59999Z"
							fill="#EF314C" />
						<path
							d="M17.8 0.799988C17.582 0.799988 17.3708 0.811188 17.164 0.829588C20.2892 1.12519 22.4 3.86239 22.4 7.16359C22.4 13.008 15.5152 14.5044 11.4 22.0248C11.6068 22.4024 11.8084 22.7908 12 23.2C16.0036 14.64 23.6 13.3016 23.6 7.16359C23.6 3.66719 21.2336 0.799988 17.8 0.799988Z"
							fill="#BB193B" />
						<path
							d="M2.4 5.42918C2.33464 5.42906 2.2703 5.41292 2.21261 5.38218C2.15493 5.35144 2.10565 5.30703 2.06911 5.25284C2.03256 5.19864 2.00985 5.13632 2.00296 5.07132C1.99607 5.00632 2.00522 4.94062 2.0296 4.87998C2.34512 4.02994 2.91457 3.29759 3.66066 2.78236C4.40675 2.26712 5.29332 1.99397 6.2 1.99997C6.30609 1.99997 6.40783 2.04212 6.48284 2.11713C6.55786 2.19215 6.6 2.29389 6.6 2.39998C6.6 2.50606 6.55786 2.6078 6.48284 2.68282C6.40783 2.75783 6.30609 2.79997 6.2 2.79997C5.45319 2.79701 4.72355 3.02382 4.11003 3.44964C3.49651 3.87547 3.02882 4.4797 2.7704 5.18038C2.74036 5.25395 2.68909 5.31691 2.62312 5.36122C2.55715 5.40553 2.47947 5.42919 2.4 5.42918Z"
							fill="#F5F5F5" />
						<path
							d="M8.50838 16.0336C8.45578 16.0337 8.4037 16.0233 8.35511 16.0032C8.30651 15.9831 8.26236 15.9536 8.22518 15.9164C7.42518 15.1164 6.64638 14.4136 5.89398 13.7356C3.15118 11.2624 1.59998 9.73881 1.59998 7.16361C1.59998 7.05752 1.64212 6.95578 1.71713 6.88077C1.79215 6.80575 1.89389 6.76361 1.99998 6.76361C2.10606 6.76361 2.2078 6.80575 2.28282 6.88077C2.35783 6.95578 2.39998 7.05752 2.39998 7.16361C2.39998 9.40001 3.85558 10.8204 6.42838 13.14C7.18838 13.8264 7.97478 14.5352 8.79118 15.3508C8.8471 15.4068 8.88518 15.478 8.90061 15.5556C8.91604 15.6332 8.90812 15.7136 8.87785 15.7867C8.84758 15.8598 8.79632 15.9222 8.73056 15.9662C8.6648 16.0101 8.58748 16.0336 8.50838 16.0336Z"
							fill="#F5F5F5" />
						<path
							d="M17.8 0.400024C16.708 0.411702 15.63 0.647011 14.6324 1.09143C13.6349 1.53586 12.739 2.17997 12 2.98402C11.261 2.17997 10.3651 1.53586 9.36757 1.09143C8.37003 0.647011 7.292 0.411702 6.2 0.400024C2.6656 0.400024 0 3.30802 0 7.16363C0 10.5752 2.234 12.59 4.8212 14.9236C7.1444 17.0184 9.7776 19.3924 11.6376 23.3704C11.6698 23.4394 11.721 23.4977 11.7852 23.5386C11.8494 23.5794 11.9239 23.6011 12 23.6011C12.0761 23.6011 12.1506 23.5794 12.2148 23.5386C12.279 23.4977 12.3302 23.4394 12.3624 23.3704C14.2224 19.3924 16.8556 17.0184 19.1788 14.9236C21.7656 12.59 24 10.5752 24 7.16363C24 3.30802 21.3348 0.400024 17.8 0.400024ZM18.6432 14.3284C16.4088 16.3428 13.8952 18.6096 12 22.292C10.1048 18.6096 7.5912 16.3428 5.3568 14.3284C2.8108 12.0328 0.8 10.2196 0.8 7.16363C0.8 3.76362 3.12 1.20002 6.2 1.20002C7.24913 1.22238 8.28124 1.46963 9.22662 1.92507C10.172 2.38051 11.0086 3.03353 11.68 3.84002C11.719 3.88702 11.7679 3.92484 11.8233 3.9508C11.8786 3.97676 11.9389 3.99021 12 3.99021C12.0611 3.99021 12.1214 3.97676 12.1767 3.9508C12.2321 3.92484 12.281 3.88702 12.32 3.84002C12.9914 3.03353 13.828 2.38051 14.7734 1.92507C15.7188 1.46963 16.7509 1.22238 17.8 1.20002C20.88 1.20002 23.2 3.76362 23.2 7.16363C23.2 10.2196 21.1892 12.0328 18.6432 14.3284Z"
							fill="black" />
					</svg>
					{{ ' ' }}
					by Asahel Kigen.
				</p>
			</div>
		</div>
	</footer>
</template>
