<template lang="html">
	<p>
		Hello, {{name}}
	</p>
</template>

<style scoped>

</style>

<script>
module.exports = {
	props: ["name"],
	data: () => {
		return {
		}
	}
}
</script>
