<template>
	<div class="hello">
		<h1 class="pb-5">{{ msg }}</h1>
		<h4 class="pb-5">Choose a difficulty:</h4>
		<button type="button" class="col-12 col-sm-6 col-md-4 cs-btn">Easy Mode</button>
		<button type="button" class="col-12 col-sm-6 col-md-4 cs-btn">Normal Mode</button>
		<button type="button" class="col-12 col-sm-6 col-md-4 cs-btn">Hard Mode</button>
	</div>
</template>

<script>
export default {
	name: "HomePage",
	props: {
		msg: String,
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
button {
  width: 200px;
  margin: 20px;
}
</style>
