<template>
	<!-- 详情 -->
	<view class="leasingCon">
		<image class="leasingConImg" src="../../static/images/goods_1.png" mode="widthFix"></image>
		<view class="leasingConTop">
			<text class="leasingConTop_t1">吉林 长春 工程车租赁一天/1000元工程车租赁一天/1000元</text>
			<view class="leasingConTop_t2">
				发布人：这是一个名字
			</view>
			<view class="indexServiceLiTT1Label">
				<text style="background: #71e58d;">电工</text>
				<text style="background: #ffdb00;">车主</text>
			</view>
			<view class="leasingConTop_t3">
				<image src="../../static/images/leasing_1.png" mode="widthFix"></image>
				<text>浏览量：12548</text>
			</view>
			<view class="leasingConTop_t4">发布时间：2024-04-15  16:09:32</view>
		</view>
		<view class="leasingConBot">
			<view class="leasingConBotTit">详情</view>
			<view class="leasingConBotTex">
				<text>
					内容介绍内容介绍内容介绍内容介绍内容介绍
					内容介绍内容介绍内容介绍
					内容介绍
					内容介绍内容介绍内容介绍内容介绍
					电话号1264985148地址地址地址地址地址地
					地址地址址
				</text>
				<image src="../../static/images/goods_1.png" mode="widthFix"></image>
			</view>
		</view>
		<view class="leasingMeun">
			<view class="leasingMeunLeft">
				<image src="../../static/images/goods_9.png" mode="widthFix"></image>
				<text>在线对话</text>
			</view>
			<view class="leasingMeunRight" click="makePhoneCall">
				拨打电话
			</view>
		</view>
	</view>
</template>

<script>
export default {
  methods: {
    makePhoneCall() {
      uni.makePhoneCall({
        phoneNumber: '1234567890' // 目标电话号码
      });
    }
  }
}
</script>

<style>
	page{
		background: #f8f8f8;
	}
	.leasingCon{
		width: 100%;
		float: left;
	}
	.leasingConImg{
		width: 100%;
		float: left;
	}
	.leasingConTop{
		width: 90%;
		float: left;
		margin: 20rpx 5%;
		padding: 30rpx;
		box-sizing: border-box;
		background: #fff;
		box-shadow: 0 6rpx 20rpx #eee;
		border-radius: 30rpx;
	}
	.leasingConTop_t1{
		width: 100%;
		float: left;
		font-size: 34rpx;
		color: #222;
		line-height: 46rpx;
	}
	.leasingConTop_t2{
		width: 100%;
		float: left;
		margin-top: 10rpx;
		font-size: 30rpx;
		color: #666;
	}
	.indexServiceLiTT1Label{
		width: 100%;
		float: left;
		margin-top: 20rpx;
	}
	.indexServiceLiTT1Label text{
		padding: 5rpx 20rpx;
		color: #fff;
		border-radius: 100px;
		float: left;
		margin-right: 10rpx;
		font-size: 14px;
		text-shadow: 0px 1px 1px #bbb;
	}
	.leasingConTop_t3{
		width: 100%;
		float: left;
		margin-top: 20rpx;
	}
	.leasingConTop_t3 image{
		width: 40rpx;
		float: left;
		margin-top: 5rpx;
	}
	.leasingConTop_t3 text{
		float: left;
		font-size: 30rpx;
		color: #222;
		margin-left: 20rpx;
	}
	.leasingConTop_t4{
		width: 100%;
		float: left;
		font-size: 30rpx;
		color: #999;
		margin-top: 10rpx;
	}
	.leasingConBot{
		width: 90%;
		float: left;
		margin: 0 5%;
		padding: 30rpx;
		box-sizing: border-box;
		background: #fff;
		box-shadow: 0 6rpx 20rpx #eee;
		border-radius: 30rpx;
		margin-bottom: 170rpx;
	}
	.leasingConBotTit{
		width: 100%;
		float: left;
		font-size: 32rpx;
		color: #222;
		text-align: center;
		margin-top: 20rpx;
	}
	.leasingConBotTex{
		width: 100%;
		float: left;
		margin-top: 30rpx;
	}
	.leasingConBotTex text{
		width: 100%;
		float: left;
		font-size: 30rpx;
		color: #222;
		line-height: 46rpx;
		margin-top: 20rpx;
	}
	.leasingConBotTex image{
		float: left;
		margin-top: 20rpx;
		width: 100%;
	}
	.leasingMeun{
		width: 80%;
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 99;
		padding: 30rpx 10%;
		background: #fff;
		border-top: 1px solid #f5f5f5;
	}
	.leasingMeunLeft{
		float: left;
	}
	.leasingMeunLeft image{
		width: 46rpx;
		float: left;
		margin-top: 15rpx;
	}
	.leasingMeunLeft text{
		float: left;
		font-size: 30rpx;
		color: #222;
		margin-top: 20rpx;
		margin-left: 20rpx;
	}
	.leasingMeunRight{
		float: right;
		padding: 20rpx 50rpx;
		background: #ffb400;
		border-radius: 100rpx;
		color: #fff;
		font-size: 30rpx;
	}
</style>