<template>
	<div id="answers" class="container d-flex flex-wrap justify-content-center">
		<div
			class="card my-2 m-md-2 col-12 col-md-5"
			v-for="(answer, index) in answers"
			:key="index"
			:id="'answer-' + index"
			@click="isClickable ? checkCorrectAnswer(answer) : null"
		>
			<div role="button" class="card-body">
				<span>{{ answer }}</span>
			</div>
		</div>
		<div id="response" class="mt-5" v-if="questionAnswered">
			<h3 v-if="questionIsCorrect">Correct answer!</h3>
			<h3 v-else>Wrong answer!</h3>
		</div>
	</div>
</template>

<script>
export default {
	name: "GameAnswers",
	props: ["answers", "correctAnswer"],
	data() {
		return {
			questionAnswered: false,
			questionIsCorrect: false,
			isClickable: true,
		};
	},
	methods: {
		checkCorrectAnswer(selectedAnswer) {
			if (selectedAnswer === this.correctAnswer) {
				this.questionIsCorrect = true;
				console.log("correct");
			} else {
				this.questionIsCorrect = false;
				console.log("incorrect");
			}
			this.isClickable = false;
			console.log(this.isClickable);
			this.questionAnswered = true;
		},
	},
	mounted() {
		console.log(this.isClickable);
	},
};
</script>

<style lang="scss" scoped>
</style>