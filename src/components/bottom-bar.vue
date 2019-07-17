<template>
	<div class="bottom-bar">
		<a id="call" class="tel" href="tel:18682088658">
			<img :src="telIcon" alt srcset />
			186-8208-8658
		</a>
		<div id="show" class="button" @click="handleClick()">预约演示</div>
	</div>
</template>

<script>
export default {
	name: "",
	data() {
		return {
			telIcon: require("@/assets/image/tel.png")
		};
	},
	methods: {
		handleClick() {
			console.log(123);

			alert("弹出预约表单");
		}
	}
};
</script>

<style lang="less" scoped>
.bottom-bar {
	width: 100%;
	height: 50px;
	background: #fff;
	position: fixed;
	bottom: 0;
	left: 0;
	box-shadow: 0 0px 3px rgba(0, 0, 0, 0.1);
	display: flex;
	justify-content: space-between;
}
a {
	color: #333;
	text-decoration: none;
}
.tel {
	display: flex;
	align-items: center;
	padding: 0 12px;
	img {
		width: 30px;
		height: 30px;
		animation: shake 3.3s infinite;
	}
}
.button {
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 22px;
	font-size: 18px;
	font-weight: bold;
	background: #397cff;
	color: #fff;
}

@-webkit-keyframes shake {
	from,
	to {
		-webkit-transform: translate3d(0, 0, 0);
		transform: translate3d(0, 0, 0);
	}
	10%,
	30%,
	50%,
	70%,
	90% {
		-webkit-transform: translate3d(-4px, 0, 0);
		transform: translate3d(-4px, 0, 0);
	}
	20%,
	40%,
	60%,
	80% {
		-webkit-transform: translate3d(4px, 0, 0);
		transform: translate3d(4px, 0, 0);
	}
}
</style>