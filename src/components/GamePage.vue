<template>
	<div id="game">
		<div id="timer" class="pt-2 display-2"></div>
		<div id="choose" v-if="!isStarted">
			<h1 class="py-5">
				You choose:
				<span class="fw-bold d-block">{{ this.getDifficulty }} Mode</span>
			</h1>
			<button
				type="button"
				class="cs-btn"
				@click="
					isStarted = true;
					start();
					countdownTimer();
				"
			>
				START
			</button>
		</div>
		<div id="started" v-else>
			<GameQuestions v-if="isValid" :question="getRandomQuestion()" />
			<GameAnswers
				v-if="isValid"
				@changeIndex="getRandom()"
				:answers="getAnswers()"
				:correctAnswer="getCorrectAnswer()"
				:isValid="isValid"
				@clear="clear"
				@start="start"
				@isWrong="isWrong($event)"
			/>
			<div id="lost" v-if="!isValid">
				<h1 class="py-5">You Lost.</h1>
				<router-link :to="{ name: 'home' }" class="py-3 px-4 text-center cs-btn"
					>TRY AGAIN</router-link
				>
			</div>
			<PrizesPage />
		</div>
	</div>
</template>

<script>
import GameQuestions from "./GameQuestions.vue";
import GameAnswers from "./GameAnswers.vue";
import PrizesPage from "./PrizesPage.vue";

export default {
	name: "GamePage",
	components: { GameQuestions, GameAnswers, PrizesPage },
	data() {
		return {
			isStarted: false,
			time: 30,
			currentIndex: 0,
			questionsPicked: [0],
			isValid: true,
			timerId: null,
		};
	},
	computed: {
		getPath() {
			let game = this.$route.params;
			return game;
		},
		getDifficulty() {
			let difficulty = "";
			difficulty = this.getPath.title.toUpperCase();
			// console.log(difficulty);
			return difficulty;
		},
	},
	methods: {
		getRandom() {
			this.countdownTimer();
			this.currentIndex =
				Math.floor(Math.random() * this.getPath.level.length) + 1;
			if (!this.questionsPicked.includes(this.currentIndex)) {
				this.questionsPicked.push(this.currentIndex);
			} else if (this.questionsPicked.length !== 12) {
				this.getRandom();
			} else if (this.questionsPicked.length == 12) {
				this.isValid = false;
				return false;
			}
			console.log(this.currentIndex);
			console.log(this.questionsPicked);
		},
		getRandomQuestion() {
			let question = this.getPath.level[this.currentIndex]["question"];
			// console.log(question);
			return question;
		},
		getAnswers() {
			let answers = this.getPath.level[this.currentIndex]["all_answers"];
			// console.log(answers);
			return answers;
		},
		getCorrectAnswer() {
			let correctAnswer =
				this.getPath.level[this.currentIndex]["correct_answer"];
			// console.log(correctAnswer);
			return correctAnswer;
		},
		start() {
			this.timerId = setInterval(this.countdownTimer, 1000);
		},
		clear() {
			clearInterval(this.timerId);
			this.time = 30;
			this.timerId = null;
		},
		countdownTimer() {
			if (this.isStarted) {
				document.getElementById("timer").innerText = this.time + " " + "sec";
				this.time--;
				if (this.time == -1) {
					this.clear();
					this.isValid = false;
					document.getElementById("timer").innerText = "Time's up!";
				}
			}
		},
		checkParams() {
			if (!Object.prototype.hasOwnProperty.call(this.$route.params, "level")) {
				this.$router.push({
					name: "not-found",
				});
			}
		},
		isWrong(value) {
			setTimeout(() => {
				if (value) {
					this.clear();
					this.isValid = false;
					document.getElementById("timer").innerText = " ";
				}
			}, 2000);
			console.log(value);
		},
	},
	mounted() {
		this.checkParams();
		// console.log(this.$route.params);
		// console.log(this.getDifficulty);
		// console.log(this.getRandom());
		// console.log(this.getPath.title);
	},
};
</script>

<style>
</style>