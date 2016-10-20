<template lang="html">
	<a v-bind:class=" 'btn ' + (kind ? 'btn-' + kind : 'btn-default') " v-bind:href="link" target="_blank">
		<span>{{text}}</span>
	</a>
</template>

<script>
module.exports = {
	props: ["kind", "text", "link"],
	data: function () {
		return {
		}
	}
}
</script>

<style lang="css">
.btn{
	width: 120px;
	height: 35px;

	display: flex;
	align-items: center;
	justify-content: center;

	cursor: pointer;

	border-bottom: solid 3px;
	font-size: 14px;

	text-decoration: none;
}

.btn:hover{
	border-bottom-width: 1px;
	margin-top: 2px;
}

.btn-default{
	color: #fff;
	background: #3AB982;
	border-bottom-color: #2f9368;
}
</style>
