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
			<GameQuestions :question="this.getRandomQuestion" />
			<GameAnswers :answers="this.getRandomQuestion" />
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
		};
	},
	computed: {
		getDifficulty() {
			let difficulty = "";
			difficulty = Object.keys(this.$route.params)[0].toUpperCase();
			// console.log(difficulty);
			return difficulty;
		},
		getPath() {
			let game = this.$route.params;
			if (this.getDifficulty == "easy") {
				game = this.$route.params.easy;
			} else if (this.getDifficulty == "normal") {
				game = this.$route.params.normal;
			} else if (this.getDifficulty == "hard") {
				game = this.$route.params.hard;
			}
			return game;
		},
		getRandomQuestion() {
			let game = [this.getPath];
			let random = Math.floor(Math.random() * this.getPath.easy.length);
			console.log(random);
			let question = this.getPath.easy[random]["question"];
			let answers = this.getPath.easy[random]["answers"];
			console.log(question, answers);
			game.splice(random, 1);
			return question, answers;
		},
	},
	methods: {},
	mounted() {
		console.log(this.getPath);
		// console.log(Object.keys(this.$route.params)[0]);
		// console.log(this.getDifficulty);
	},
};
</script>

<style>
</style>