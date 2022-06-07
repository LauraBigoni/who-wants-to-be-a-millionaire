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
				class="fw-bold cs-btn"
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
			<GameQuestions :question="getRandomQuestion()" />
			<GameAnswers
				@changeIndex="getRandom()"
				:answers="getAnswers()"
				:correctAnswer="getCorrectAnswer()"
				:isValid="isValid"
				@clear="clear"
				@start="start"
			/>
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
			time: 30,
			currentIndex: 0,
			questionsPicked: [0],
			isValid: true,
			timerId: null,
		};
	},
	computed: {
		getDifficulty() {
			let difficulty = "";
			difficulty = this.$route.params.title.toUpperCase();
			// console.log(difficulty);
			return difficulty;
		},
		getPath() {
			let game = this.$route.params;
			return game;
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
		stop() {
			this.time = 30;
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
					document.getElementById("timer").innerText = "Time's up!";
				}
			}
		},
	},
	mounted() {
		// console.log(this.getRandom());
		// console.log(this.getPath);
		// console.log(Object.keys(this.$route.params)[0]);
		// console.log(this.getDifficulty);
	},
};
</script>

<style>
</style>