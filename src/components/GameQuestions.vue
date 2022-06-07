<template>
	<div class="card mt-2 mb-5 py-2" id="question">
		<div class="card-body">{{ this.question }}</div>
	</div>
</template>

<script>
export default {
	name: "GameQuestions",
	props: ["question"],
};
</script>