<template>
	<!-- 发布评价 -->
	<view class="issueCon">
		<textarea class="issueConEvaluate" value="" placeholder="展开说说对商品的想法吧..." />
		<view class="issueConPicker">
			<uni-file-picker limit="3" title="最多选择3张图片"></uni-file-picker>
		</view>
		<view class="issueConBot">
			<view class="orderDfhUlLiCenter">
				<image class="orderDfhUlLiCenterImg" src="../../static/images/goods_1.png"></image>
				<view class="orderDfhUlLiCenterRight">
					<view class="orderDfhUlLiCenterRightT1">配件标题配件标题配件</view>
					<view class="orderDfhUlLiCenterRightT2">规格：NK8900 尺寸：100cm</view>
				</view>
			</view>

			<view class="issueConStar">
				<view class="issueConStarRating">
					<text class="label">商品评价</text>
					<view class="stars">
						<view v-for="(star, index) in 5" :key="index" :class="{'star': true, 'filled': index < rating}"
							@click="setRating(index + 1)"></view>
					</view>
					<text class="score">{{ rating }}分</text>
				</view>
				<view class="issueConStarRating">
					<text class="label">商家服务</text>
					<view class="stars">
						<view v-for="(star, index) in 5" :key="index"
							:class="{'star': true, 'filled': index < serviceRating}" @click="setServiceRating(index + 1)">
						</view>
					</view>
					<text class="score">{{ serviceRating }}分</text>
				</view>
			</view>
		</view>
		<view class="issueBtn">
			<view class="issueBtnLeft">
				<label class="issueBtnLeftRadio">
					<radio value="" />
					<text>匿名</text>
				</label>
				<view class="issueBtnLeftTit">匿名会隐藏头像和昵称</view>
			</view>
			<view class="issueBtnRight">
				发布
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				rating: 4,
				serviceRating: 5,
			};
		},
		methods: {
			setRating(value) {
				this.rating = value;
			},
			setServiceRating(value) {
				this.serviceRating = value;
			},
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
		width: 30%;
		float: right;
		font-size: 34rpx;
		height: 100rpx;
		line-height: 110rpx;
		background: #FF9900;
		color: #fff;
		text-align: center;
		border-radius: 100px;
	}
</style>