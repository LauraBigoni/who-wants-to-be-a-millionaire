<template>
	<div id="app" class="text-center">
		<div class="container-fluid">
			<div class="row">
				<div class="logo-box py-5 col-12 d-flex flex-column align-items-center">
					<img
						class="img-fluid"
						alt="Millionaire logo"
						src="./assets/img/logo.png"
					/>
				</div>
        <router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	name: "App",
	data() {
		return {
		};
	},
};
</script>

<style lang="scss">
// * importo il componente scss che include gli altri componenti
@import "./assets/scss/style.scss";
#app {
	background-color: var(--primary-bg-color);
	color: var(--text-color);
	.logo-box {
		background-color: var(--secondary-bg-color);
	}
	img {
		max-width: 250px;
	}
}
</style>
