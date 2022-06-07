<template>
	<div id="prizes" class="pt-5 d-flex flex-wrap justify-content-center">
		<div
			class="col-2 card m-2"
			v-for="(prize, i) in prizes"
			:key="i"
			id="'prize-' + i"
		>
			<div class="card-body p-1">{{ prize }}</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "PrizesPage",
	data() {
		return {
			prizes: [
				"€ 500",
				"€ 1.000",
				"€ 2.500",
				"€ 5.000",
				"€ 7.500",
				"€ 10.000",
				"€ 20.000",
				"€ 50.000",
				"€ 100.000",
				"€ 250.000",
				"€ 500.000",
				"€ 1.000.000",
			],
		};
	},
	mounted() {
		console.log(this.prizes.length);
	},
};
</script>

<style>
</style>