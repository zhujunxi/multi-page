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
			msg: "hello vue"
		};
	}
};
</script>

<style lang="less" scoped>
.box {
	background: #f00;
	color: #fff;
	display: flex;
	transform: all 1s;
	span {
		font-size: 32px;
	}
}
</style>
