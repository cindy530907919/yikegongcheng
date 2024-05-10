<template>
	<view class="addressCon">
		<view class="goodsPopupAddress" @tap="goToAddressPage">
			<image class="goodsPopupAddressImg" src="../../static/images/goods_11.png" mode="widthFix"></image>
			<uni-icons type="right" size="24" class="goodsPopupAddressIcon"color="#999"></uni-icons>
			<view class="goodsPopupAddressTxt">
				<text><span style="color: #f00;">[默认]</span>难哄的驴 13866668888</text>
				<text>吉林省长春市南关区1栋101室小区街道1栋101室</text>
			</view>
		</view>
		
		<view class="goodsPopupAddress" @tap="goToAddressPage">
			<image class="goodsPopupAddressImg" src="../../static/images/goods_11.png" mode="widthFix"></image>
			<uni-icons type="right" size="24" class="goodsPopupAddressIcon"color="#999"></uni-icons>
			<view class="goodsPopupAddressTxt">
				<text>难哄的驴 13866668888</text>
				<text>吉林省长春市南关区1栋101室小区街道1栋101室</text>
			</view>
		</view>
		
		<view class="goodsPopupAddress">
			<image class="goodsPopupAddressImg" src="../../static/images/goods_11.png" mode="widthFix"></image>
			<uni-icons type="right" size="24" class="goodsPopupAddressIcon"color="#999"></uni-icons>
			<view class="goodsPopupAddressTxt">
				<text>难哄的驴 13866668888</text>
				<text>吉林省长春市南关区1栋101室小区街道1栋101室</text>
			</view>
		</view>
		<view class="addressConBtn">
			<navigator class="addressConBtn1" url="../../pages/address/add">添加收货地址</navigator>
		</view>
	</view>
</template>

<script>
	export default {
	  methods: {
	    goToAddressPage() {
	      // 指定跳转的路径
	      uni.navigateTo({
	        url: '../address/add'
	      });
	    }
	  }
	}
</script>

<style>
	page{
		background: #f8f8f8;
	}
	.addressCon{
		width: 90%;
		float: left;
		margin: 20rpx 5%;
		padding: 0 0 160rpx;
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
	.addressConBtn{
		width: 100%;
		padding: 30rpx 0;
		background: #fff;
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 9;
	}
	.addressConBtn1{
		width: 80%;
		float: left;
		height: 100rpx;
		line-height: 100rpx;
		color: #fff;
		background: #ffb400;
		border-radius: 100px;
		text-align: center;
		margin-left: 10%;
	}
</style>