<template>
	<!-- 用户反馈 -->
	<view class="issueCon">
		<textarea class="issueConEvaluate" v-model="content" placeholder="请输入您的反馈内容..." />
		
		<view class="issueBtnRight" @click="toFankui()">
			发布
		</view>
	</view>
</template>

<script>
	import IndexApi from "@/api/index.js";
	export default {
		data() {
			return {
				content: ''
			};
		},
		methods: {
			toFankui(){
				            // 这里执行确认后的操作
							IndexApi.fankui({
								content: this.content
							}).then(res => {
								console.log('添加反馈有返回', res)
								uni.showToast({
									icon: "none",
									title: "反馈成功",
									duration: 3000,
								});
							}).catch(res => {
								console.log(res)
							})
			}
		},
	};
</script>


<style>
	page {
		background: #f8f8f8;
	}

	.issueCon {
		width: 90%;
		float: left;
		margin-left: 5%;
	}

	.issueConEvaluate {
		width: 100%;
		float: left;
		border: none;
		padding: 30rpx;
		border-radius: 20rpx;
		box-sizing: border-box;
		background: #fff;
		box-shadow: 0 10prx 20rpx #eee;
		font-size: 30rpx;
		margin-top: 30rpx;
	}

	.issueConPicker {
		width: 100%;
		float: left;
		margin-top: 30rpx;
		padding: 30rpx;
		border-radius: 20rpx;
		box-sizing: border-box;
		background: #fff;
		box-shadow: 0 10prx 20rpx #eee;
	}
	.issueConBot{
		width: 100%;
		float: left;
		margin-top: 30rpx;
		padding: 30rpx;
		background: #fff;
		box-sizing: border-box;
	}
	.orderDfhUlLiCenter {
		width: 100%;
		float: left;
	}

	.orderDfhUlLiCenterImg {
		width: 120rpx;
		height: 120rpx;
		float: left;
		border-radius: 10rpx;
	}

	.orderDfhUlLiCenterRight {
		width: calc(100% - 140rpx);
		float: right;
	}

	.orderDfhUlLiCenterRightT1 {
		width: 100%;
		float: left;
		color: #222;
		font-size: 30rpx;
		margin-top: 10rpx;
	}

	.orderDfhUlLiCenterRightT2 {
		width: 100%;
		float: left;
		color: #999;
		font-size: 30rpx;
		margin-top: 10rpx;
	}

	.issueConStar {
		width: 100%;
		float: left;
		margin-top: 20rpx;
	}

	.issueConStarRating {
		float: left;
		width: 100%;
		margin-top: 20rpx;
	}

	.label {
		float: left;
	}

	.stars {
		float: left;
		margin-left: 10px;
	}

	.star {
		float: left;
		width: 20px;
		height: 20px;
		background: url('../../static/images/star-empty.png') no-repeat center;
		background-size: contain;
	}

	.star.filled {
		float: left;
		background: url('../../static/images/star-filled.png') no-repeat center;
		background-size: contain;
	}

	.score {
		font-size: 16px;
		color: #FF9900;
		float: left;
		margin-left: 20rpx;
	}
	.issueBtn{
		position: fixed;
		bottom: 0;
		z-index: 9;
		left: 0;
		background: #fff;
		padding: 30rpx;
		width: 100%;
		box-sizing: border-box;
	}
	.issueBtnLeft{
		width: 50%;
		float: left;
	}
	.issueBtnLeftRadio{
		width: 100%;
		float: left;
	}
	.issueBtnLeftRadio radio{
		transform: scale(0.8);
		float: left;
	}
	.issueBtnLeftRadio text{
		float: left;
		font-size: 30rpx;
		color: #222;
		margin-left: 4rpx;
		margin-top: 4rpx
	}
	.issueBtnLeftTit{
		width: 100%;
		float: left;
		font-size: 30rpx;
		color: #999;
		margin-top: 10rpx;
	}
	.issueBtnRight{
		width: 40%;
		float: left;
		font-size: 34rpx;
		height: 90rpx;
		line-height: 100rpx;
		background: #6c90fe;
		color: #fff;
		text-align: center;
		border-radius: 100px;
		margin-left: 30%;
		margin-top: 100rpx;
	}
</style>