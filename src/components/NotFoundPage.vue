<template>
	<div
		id="not-found"
		class="d-flex flex-column justify-content-center align-items-center"
	>
		<h1 class="display-1">4O4 | NOT FOUND</h1>
		<router-link class="cs-btn my-5" :to="{ name: 'home' }"
			>Homepage</router-link
		>
	</div>
</template>

<script>
export default {
	name: "NotFoundPage",
};
</script>

<style lang="scss" scoped>
#not-found {
	height: 60vh;
}
</style>