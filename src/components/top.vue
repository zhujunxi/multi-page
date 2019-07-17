<template>
	<div class="top">
		<div class="top-bac">
			<h1 class="title main-title">MarketingDesk</h1>
			<h2 class="title sub-title">- 智能数字营销利器 -</h2>
			<img class="mac" :src="macUrl" alt srcset />
		</div>
	</div>
</template>

<script>
export default {
	name: "",
	data() {
		return {
			macUrl: require("@/assets/image/mac.png")
		};
	}
};
</script>

<style lang="less" scoped>
.top-bac {
	width: 100%;
	height: 260px;
	background: #397cff;
	margin-bottom: 80px;
	position: relative;
	text-align: center;
	color: #fff;
	.title {
		position: absolute;
		width: 100%;
		font-size: 36px;
		text-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
	}
	.main-title {
		top: 20px;
	}
	.sub-title {
		top: 76px;
		font-weight: normal;
		font-size: 20px;
		color: rgba(255, 255, 255, 0.8);
	}
	.mac {
		width: 280px;
		height: 160px;
		position: absolute;
		bottom: -50px;
		left: 50%;
		margin-left: -140px;
	}
}
</style>