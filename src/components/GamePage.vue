<template>
	<div id="game">
		<div id="choose" v-if="!isStarted">
			<h1 class="py-5">
				You choose:
				<span class="fw-bold d-block">{{ this.getDifficulty }} Mode</span>
			</h1>
			<button type="button" class="fw-bold cs-btn" @click="isStarted = true">
				START
			</button>
		</div>
		<div id="started" v-else>
			<GameQuestions />
			<GameAnswers />
		</div>
	</div>
</template>

<script>
import GameQuestions from "./GameQuestions.vue";
import GameAnswers from "./GameAnswers.vue";

export default {
	name: "GamePage",
	components: { GameQuestions, GameAnswers },
	data() {
		return {
			isStarted: false,
			game: this.$route.params,
		};
	},
	computed: {
		getDifficulty() {
			let difficulty = "";
			difficulty = Object.keys(this.$route.params)[0].toUpperCase();
			// console.log(difficulty);
			return difficulty;
		},
	},
	methods: {},
	mounted() {
		console.log(this.$route.params);
		// console.log(Object.keys(this.$route.params)[0]);
		// console.log(this.getDifficulty);
	},
};
</script>

<style>
</style>