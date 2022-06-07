<template>
	<div id="answers" class="container d-flex flex-wrap justify-content-center">
		<div
			class="card my-2 m-md-2 col-12 col-md-5"
			v-for="(answer, i) in answers"
			:key="i"
			:id="'answer-' + i"
			@click="
				isClickable ? checkCorrectAnswer(answer, i) : null;
				isValid ? changeIndex() : null;
				stopTimer();
			"
			:class="{
				orange: isActive && currentIndex === i,
				green: questionIsCorrect && currentIndex === i,
				red: questionIsWrong && currentIndex === i,
			}"
		>
			<div role="button" class="card-body">
				<span>{{ answer }}</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "GameAnswers",
	props: ["answers", "correctAnswer", "stop", "isValid"],
	data() {
		return {
			questionIsAnswered: false,
			questionIsCorrect: false,
			questionIsWrong: false,
			isClickable: true,
			isActive: false,
			currentIndex: 0,
		};
	},
	methods: {
		checkCorrectAnswer(selectedAnswer, index) {
			this.currentIndex = index;
			this.isActive = true;
			console.log(index);

			setTimeout(() => {
				if (selectedAnswer === this.correctAnswer) {
					this.questionIsCorrect = true;
					this.isActive = false;
					console.log("correct");
				} else {
					this.questionIsWrong = true;
					this.isActive = false;
					console.log("incorrect");
				}
				this.isClickable = false;
			}, 2000);
			this.questionIsAnswered = true;
			console.log(this.isValid);
			// console.log(this.questionIsAnswered);
		},
		changeIndex() {
			setTimeout(() => {
				this.isClickable = true;
				this.questionIsAnswered = false;
				this.questionIsCorrect = false;
				this.questionIsWrong = false;
				// console.log(this.questionIsAnswered);
				this.$emit("changeIndex");
			}, 4000);
		},
		stopTimer() {
			this.$emit("stop");
		},
		clearTimer() {
			this.$emit("clear");
		},
	},
	mounted() {
		
	},
};
</script>

<style lang="scss" scoped>
</style>