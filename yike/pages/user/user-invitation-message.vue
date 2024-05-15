<template>
	<!-- 全部消息 -->
	<view class="userInMe">
		<view class="userInMeLi">
			<image class="userInMeLiImg" src="../../static/images/forum_2.png"></image>
			<view class="userInMeLiText">
				<view class="userInMeLiT1">有个评论的人</view>
				<view class="userInMeLiT2">回复：哈哈哈</view>
				<text class="userInMeLiT3">2024-04-15  16:09:32</text>
			</view>
		</view>
		<view class="userInMeLi">
			<image class="userInMeLiImg" src="../../static/images/forum_2.png"></image>
			<view class="userInMeLiText">
				<view class="userInMeLiT1">自由的宝飞飞飞</view>
				<view class="userInMeLiT2">赞了你的评论</view>
				<text class="userInMeLiT3">2024-04-15  16:09:32</text>
			</view>
		</view>
		<view class="userInMeLi">
			<image class="userInMeLiImg" src="../../static/images/forum_2.png"></image>
			<view class="userInMeLiText">
				<view class="userInMeLiT1">有个评论的人</view>
				<view class="userInMeLiT2">回复：哈哈哈</view>
				<text class="userInMeLiT3">2024-04-15  16:09:32</text>
			</view>
		</view>
		<view class="userInMeLi">
			<image class="userInMeLiImg" src="../../static/images/forum_2.png"></image>
			<view class="userInMeLiText">
				<view class="userInMeLiT1">有个评论的人</view>
				<view class="userInMeLiT2">回复：哈哈哈</view>
				<text class="userInMeLiT3">2024-04-15  16:09:32</text>
			</view>
		</view>
		<view class="userInMeLi">
			<image class="userInMeLiImg" src="../../static/images/forum_2.png"></image>
			<view class="userInMeLiText">
				<view class="userInMeLiT1">有个评论的人</view>
				<view class="userInMeLiT2">回复：哈哈哈</view>
				<text class="userInMeLiT3">2024-04-15  16:09:32</text>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style>
	.userInMe{
		width: 90%;
		float: left;
		margin-left: 5%;
		margin-bottom: 40rpx;
		margin-top: 20rpx;
	}
	.userInMeLi{
		width: 100%;
		float: left;
		padding-bottom: 30rpx;
		border-bottom: 1px solid #f8f8f8;
		margin-top: 30rpx;
	}
	.userInMeLiImg{
		width: 120rpx;
		height: 120rpx;
		float: left;
		border-radius: 20rpx;
	}
	.userInMeLiText{
		width: calc(100% - 140rpx);
		float: right;
	}
	.userInMeLiT1{
		width: 100%;
		float: left;
		font-size: 32rpx;
		color: #222;
	}
	.userInMeLiT2{
		width: 100%;
		float: left;
		font-size: 30rpx;
		color: #222;
	}
	.userInMeLiT3{
		font-size: 26rpx;
		color: #999;
		width: 100%;
		float: left;
		margin-top: 4rpx;
	}
</style>