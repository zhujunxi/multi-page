<template>
	<div class="box">
		<span>{{msg}}</span>
	</div>
</template>

<script>
export default {
	name: "App",
	data() {
		return {
			msg: "hello landing-page"
		};
	}
};
</script>

<style lang="less" scoped>
@import url("./assets/style/theme.less");
</style>