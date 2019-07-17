<template>
	<div class="icon-group">
		<div class="icon-item" v-for="(item, index) in introInfo" :key="index">
			<img :src="item.icon" alt srcset />
			<div class="icon-title">{{item.title}}</div>
			<div class="icon-desc">{{item.desc}}</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			introInfo: [
				{
					title: "跨媒体营销",
					desc:
						"对接多个顶级媒体平台，实现一站式自动化投放管理，与整合数据营销",
					icon: require("@/assets/image/icon-01.png")
				},
				{
					title: "跨媒体营销",
					desc:
						"对接多个顶级媒体平台，实现一站式自动化投放管理，与整合数据营销",
					icon: require("@/assets/image/icon-02.png")
				},
				{
					title: "智能驱动",
					desc:
						"标签优化+算法赋能，长久留存客户资源以到达客户数据私有化",
					icon: require("@/assets/image/icon-03.png")
				},
				{
					title: "跨媒体营销",
					desc:
						"对接多个顶级媒体平台，实现一站式自动化投放管理，与整合数据营销",
					icon: require("@/assets/image/icon-04.png")
				}
			]
		};
	}
};
</script>

<style lang="less" scoped>
.icon-group {
	width: 96%;
	display: flex;
	flex-wrap: wrap;
	padding: 2px 2%;
	.icon-item {
		width: 48%;
		box-sizing: border-box;
		padding: 20px 8px 8px 8px;
		margin: 5px 1%;
		text-align: center;
		box-shadow: 0 2px 6px rgba(72, 122, 253, 0.14);
		border: 10px;
		.icon-title {
			font-size: 16px;
			font-weight: bold;
			padding: 0px 8px 4px 8px;
		}
		.icon-desc {
			font-size: 14px;
			color: #999;
			padding: 8px 0;
		}
		img {
			width: 80px;
			height: 80px;
		}
	}
}
</style>