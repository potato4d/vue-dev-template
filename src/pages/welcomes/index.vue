<template lang="html">
	<div class="content">
		<h1>Hello, Vue.js</h1>
		<btn text="Show GitHub" link="https://github.com/potato4d/vue-dev-template"></btn>
	</div>
</template>

<style scoped>
.content{
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.content:before{
	position: absolute;

	top: 0;
	left: 0;

	width: 100%;
	height: 10px;
	background: #3AB982;
	content: "";

}

h1{
	font-family: Hiragino Sans;
	font-weight: 100;
}
</style>

<script>
module.exports = {
	data: () => {
		return {
			stores: {
				ApplicationStore : require("../../stores/ApplicationStore.js")
			}
		};
	}
}
</script>