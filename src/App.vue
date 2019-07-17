<template>
	<div class="page">
		<Top></Top>
		<IconGroup></IconGroup>
		<BottomBar></BottomBar>
	</div>
</template>

<script>
import Top from "./components/top.vue";
import IconGroup from "./components/icon-group.vue";
import BottomBar from "./components/bottom-bar.vue";
export default {
	name: "App",
	components: {
		Top,
		IconGroup,
		BottomBar
	},
	data() {
		return {
			msg: "hello landing-page"
		};
	}
};
</script>

<style lang="less" scoped>
// @import url("./assets/style/theme.less");

.page {
	width: 100%;
	overflow: auto;
	padding-bottom: 70px;
}
</style>