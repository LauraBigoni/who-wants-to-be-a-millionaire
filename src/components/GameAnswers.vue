<template>
	<div id="answers" class="container d-flex flex-wrap justify-content-center">
		<div
			class="card my-2 m-md-2 col-12 col-md-5"
			v-for="(answer, index) in answers"
			:key="index"
			:id="'answer-' + index"
			@click="
				isClickable ? checkCorrectAnswer(answer) : null; changeIndex()
			"
		>
			<div role="button" class="card-body">
				<span>{{ answer }}</span>
			</div>
		</div>
		<div id="response" class="mt-5" v-if="questionIsAnswered">
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
			questionIsAnswered: false,
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
			this.questionIsAnswered = true;
		},
		changeIndex() {
			this.$emit('changeIndex');
		},
	},
	mounted() {
		// console.log(this.isClickable);
	},
};
</script>

<style lang="scss" scoped>
</style>