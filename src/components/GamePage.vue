<template>
	<div id="game">
		<div id="timer" class="pt-2 display-2" v-if="!isComplete"></div>
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
					startTimerMusic();
				"
			>
				START
			</button>
		</div>
		<div id="started" v-else>
			<GameQuestions v-if="isValid" :question="getRandomQuestion()" />
			<GameAnswers
				v-if="isValid"
				:isValid="isValid"
				:answers="getAnswers()"
				:correctAnswer="getCorrectAnswer()"
				@changeIndex="getRandom()"
				@clear="clear"
				@start="start"
				@isWrong="isWrong($event)"
				@nextPrize="nextPrize($event)"
			/>
			<div id="lost" v-if="!isValid && !isComplete">
				<h1 class="py-5">You Lost.</h1>
				<router-link :to="{ name: 'home' }" class="py-3 px-4 text-center cs-btn"
					>TRY AGAIN</router-link
				>
			</div>
			<div id="win" v-if="isComplete">
				<h2 class="py-5">CONGRATULATIONS</h2>
				<h2 class="pb-5">You Won 1.000.000 $ !</h2>
			</div>
			<PrizesPage :nextPagePrize="nextPagePrize" />
		</div>
		<div id="audio">
			<audio id="lets-play" src="../assets/sounds/sounds_lets_play.mp3"></audio>
			<audio id="easy" src="../assets/sounds/sounds_easy.mp3"></audio>
			<audio
				id="wrong-answer"
				src="../assets/sounds/sounds_wrong_answer.mp3"
			></audio>
			<audio
				id="correct-answer"
				src="../assets/sounds/sounds_correct_answer.mp3"
			></audio>
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
			nextPagePrize: null,
			isComplete: false,
			timeoutId: null,
			isStopped: false,
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
				this.clear();
				return (this.isComplete = true);
			}
			// console.log(this.currentIndex);
			// console.log(this.questionsPicked);
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
					this.isStopped = true;
					this.wrongAudio();
					document.getElementById("timer").innerText = " ";
				} else if (!value) {
					this.correctAudio();
				}
			}, 2000);
			// console.log(value);
		},
		nextPrize(page) {
			this.nextPagePrize = page;
			// console.log(page);
		},
		// * AUDIO
		startTimerMusic() {
			const letsPlayAudio = document.getElementById("lets-play");
			letsPlayAudio.play();
			letsPlayAudio.volume = 0.3;
			this.timeoutId = setTimeout(() => {
				this.easyAudio();
			}, 2500);
		},
		stopTimerMusic() {
			clearTimeout(this.timeoutId);
		},
		wrongAudio() {
			const wrongAnswerAudio = document.getElementById("wrong-answer");
			wrongAnswerAudio.play();
			wrongAnswerAudio.volume = 0.5;
			if (this.isStopped) {
				this.stopTimerMusic();
			}
		},
		correctAudio() {
			const correctAnswerAudio = document.getElementById("correct-answer");
			correctAnswerAudio.play();
			correctAnswerAudio.volume = 0.3;
			// if (!this.isStopped) {
			// 	this.stopTimerMusic();
			// 	correctAnswerAudio.pause();
			// 	correctAnswerAudio.currentTime = 0;
			// }
		},
		easyAudio() {
			const easyPlayAudio = document.getElementById("easy");
			easyPlayAudio.play();
			easyPlayAudio.volume = 0.3;
			if (this.isStopped) {
				this.stopTimerMusic();
				easyPlayAudio.pause();
				easyPlayAudio.currentTime = 0;
			}
		},
	},
	mounted() {
		this.checkParams();
		// console.log(this.$route.params);
		// console.log(this.getDifficulty);
		// console.log(this.getRandom());
	},
};
</script>

<style>
</style>