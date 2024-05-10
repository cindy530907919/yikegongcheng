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
		<view class="goodsPopupAddress">
			<view class="payGoodsTit">商品信息</view>
			<view class="payGoodsCon">
				<image src="../../static/images/goods_1.png" class="payGoodsConImg"></image>
				<view class="payGoodsConTxt">
					<text class="payGoodsConTxt_1">配件标题配件标题配件...</text>
					<text class="payGoodsConTxt_2">规格：NK8900 尺寸：100cm</text>
					<view class="payGoodsConTxt_3"><text class="payGoodsConTxt_3_t1">￥1995.00</text><text class="payGoodsConTxt_3_t2">x2</text></view>
				</view>
			</view>
		</view>
		<view class="goodsPopupAddress">
			<view class="payGoodsTit">支付信息</view>
			<view class="payMode">
				<image src="../../static/images/pay_1.png" mode="widthFix"></image>
				<text>微信支付</text>
				<view></view>
			</view>
		</view>
		<view class="payMeunB">
			<view class="payMeunB_t1">
				待支付：<text>￥1995.00</text>
			</view>
			<view class="payMeunB_Btn">提交支付</view>
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
	.payGoodsTit{
		width: 100%;
		float: left;
		font-size: 34rpx;
		color: #222;
		margin-bottom: 20rpx;
	}
	.payGoodsConTxt{
		width: calc(100% - 160rpx);
		float: right;
	}
	.payGoodsConImg{
		width: 140rpx;
		height: 140rpx;
		float: left;
		border-radius: 20rpx;
	}
	.payGoodsConTxt_1{
		width: 100%;
		float: left;
		font-size: 30rpx;
		color: #222;
		overflow: hidden; 
		white-space: nowrap; 
		text-overflow: ellipsis;
	}
	.payGoodsConTxt_2{
		width: 100%;
		float: left;
		font-size: 26rpx;
		color: #666;
		margin-top: 8rpx;
	}
	.payGoodsConTxt_3{
		width: 100%;
		float: left;
		margin-top: 22rpx;
	}
	.payGoodsConTxt_3_t1{
		float: left;
		color: #f00;
		font-size: 40rpx;
	}
	.payGoodsConTxt_3_t2{
		float: right;
		font-size: 30rpx;
		color: #666;
		margin-top: 16rpx;
	}
	.payMode{
		width: 100%;
		float: left;
		margin-top: 20rpx;
	}
	.payMode image{
		width: 40rpx;
		float: left;
		margin-top: 4rpx;
	}
	.payMode text{
		float: left;
		color: #222;
		margin-left: 20rpx;
		font-size: 30rpx;
	}
	.payMode view{
		width: 25rpx;
		height: 25rpx;
		border-radius: 50%;
		float: right;
		background: #ffd042;
		margin-top: 14rpx;
	}
	.payMeunB{
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 9;
		padding: 30rpx;
		width: 100%;
		background: #fff;
		box-sizing: border-box;
	}
	.payMeunB_t1{
		float: left;
		font-size: 34rpx;
		color: #222;
		margin-top: 18rpx;
	}
	.payMeunB_t1 text{
		color: #f00;
	}
	.payMeunB_Btn{
		width: 30%;
		float: right;
		background: #ffb400;
		height: 80rpx;
		line-height: 80rpx;
		text-align: center;
		color: #fff;
		font-size: 32rpx;
		border-radius: 100px;
	}
</style>