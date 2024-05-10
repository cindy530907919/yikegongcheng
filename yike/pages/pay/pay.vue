<template>
	<view class="payCon">
		<view class="goodsPopupAddress">
			<image class="goodsPopupAddressImg" src="../../static/images/goods_11.png" mode="widthFix"></image>
			<uni-icons type="right" size="24" class="goodsPopupAddressIcon" color="#999"></uni-icons>
			<view class="goodsPopupAddressTxt">
				<text>难哄的驴 13866668888</text>
				<text>吉林省长春市南关区1栋101室小区街道1栋101室</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style>
	page {
		background: #f8f8f8;
	}
	.payCon{
		width: 90%;
		float: left;
		margin-left: 5%;
		padding: 20rpx 0;
	}
	.goodsPopupAddress {
		width: 100%;
		float: left;
		background: #fff;
		border-radius: 30rpx;
		box-shadow: 0 4px 10px #ddd;
		box-sizing: border-box;
		padding: 30rpx;
		margin-top: 30rpx;
	}

	.goodsPopupAddressImg {
		width: 50rpx;
		float: left;
		margin-top: 20rpx;
	}

	.goodsPopupAddressTxt {
		width: calc(100% - 140rpx);
		float: left;
		margin-left: 20rpx;
	}

	.goodsPopupAddressTxt text {
		width: 100%;
		float: left;
		font-size: 30rpx;
		color: #222;
		line-height: 46rpx;
	}

	.goodsPopupAddressIcon {
		float: right;
		margin-top: 16rpx;
	}
</style>