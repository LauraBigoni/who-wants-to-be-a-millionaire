<template>
	<div class="card mt-2 mb-5 py-2" id="questions">
		<div class="card-body">{{ this.question }}</div>
	</div>
</template>

<script>
export default {
	name: "GameQuestions",
	props: ["question"],
	data() {
		return {};
	},
	computed: {},
	mounted() {
		// console.log(this.question);
	},
};
</script>

<style>
</style>