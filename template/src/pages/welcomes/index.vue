<template lang="html">
	<div class="content">
		<greeting name="Vue.js"></greeting>
	</div>
</template>

<style scoped>

</style>

<script>
module.exports = {
	data: () => {
		return {
			stores: require("../../stores/Stores.js")
		};
	}
}
</script>
