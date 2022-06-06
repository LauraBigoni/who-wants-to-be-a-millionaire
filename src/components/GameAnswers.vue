<template>
	<div id="answers" class="container d-flex flex-wrap justify-content-center">
		<div
			class="card my-2 m-md-2 col-12 col-md-5"
			v-for="(answer, index) in answers"
			:key="index"
			:id="'answer-' + index"
			@click="
				isClickable ? checkCorrectAnswer(answer, index) : null;
				changeIndex();
				stopTimer();
			"
			:class="{
				orange: isClickable && currentIndex === index,
				green: questionIsCorrect && currentIndex === index,
				red: !questionIsCorrect && questionIsAnswered && currentIndex === index,
			}"
		>
			<div role="button" class="card-body">
				<span>{{ answer }}</span>
			</div>
		</div>
		<div id="response" class="mt-5" v-if="questionIsAnswered">
			<h3>{{ this.questionIsCorrect ? "Correct" : "False" }}</h3>
		</div>
	</div>
</template>

<script>
export default {
	name: "GameAnswers",
	props: ["answers", "correctAnswer", "stop", "currIndex"],
	data() {
		return {
			questionIsAnswered: false,
			questionIsCorrect: false,
			isClickable: true,
			index: this.currIndex,
			currentIndex: 0,
		};
	},
	methods: {
		checkCorrectAnswer(selectedAnswer, index) {
			this.currentIndex = index;
			console.log(index);
			setTimeout(() => {
				if (selectedAnswer === this.correctAnswer) {
					this.questionIsCorrect = true;
					console.log("correct");
				} else {
					this.questionIsCorrect = false;
					console.log("incorrect");
				}
				this.isClickable = false;
			}, 4000);
			this.questionIsAnswered = true;
			this.questionIsCorrect = false;
			console.log(this.questionIsAnswered);
		},
		changeIndex() {
			setTimeout(() => {
				this.questionIsAnswered = false;
				this.questionIsCorrect = false;
				console.log(this.questionIsAnswered);
				this.$emit("changeIndex");
			}, 4000);
		},
		stopTimer() {
			this.$emit("stop");
		},
	},
	mounted() {
		console.log(this.questionIsAnswered);
	},
};
</script>

<style lang="scss" scoped>
</style>