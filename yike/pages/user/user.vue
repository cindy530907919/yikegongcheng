<template>
	<view>
		<view class="userBack">
			<image class="userBackImg" src="../../static/images/user_1.png"></image>
			<view class="userTit">个人中心</view>
			<image src="../../static/images/user_5.png" class="userBackSkin"></image>
			<view class="userBackInformation">
				<view class="userBackInformationLeft">
					<image src="../../static/images/user_21.png" class="userBackInformationAvatar"></image>
					<image src="../../static/images/user_3.png" mode="widthFix" class="userBackInformationAvatarVip"></image>
				</view>
				<view class="userBackInformationRight">
					<view class="userBackInformationRightName">
						<view class="userBackInformationRightName_t">
							泰国人没有心
						</view>
						<view class="indexServiceLiTT1Label">
							<text style="background: #71e58d;">电工</text>
							<text style="background: #ffdb00;">车主</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="userCon">
			<view class="userBackInformationRightSignature">个性签名：娃哈哈哈哈哈</view>
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
	page{
		background: #f8f8f8;
	}
	.userBack{
		width: 100%;
		position: relative;
		height: 540rpx;
		float: left;
	}
	.userBackImg{
		width: 100%;
		height: 400rpx;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 1;
	}
	.userTit{
		width: 100%;
		position: absolute;
		top: 80rpx;
		left: 0;
		z-index: 2;
		text-align: center;
		color: #222;
		font-size: 34rpx;
		font-weight: bold;
	}
	.userBackSkin{
		width: 60rpx;
		height: 60rpx;
		position: absolute;
		top: 80rpx;
		right: 40rpx;
		z-index: 2;
	}
	.userBackInformation{
		width: 90%;
		position: absolute;
		top: 530rpx;
		left: 5%;
		z-index: 2;
	}
	.userBackInformationLeft{
		width: 200rpx;
		height: 200rpx;
		float: left;
		border-radius: 50%;
		position: absolute;
		left: 0;
		bottom: 0;
		z-index: 3;
	}
	.userBackInformationAvatar{
		width: 100%;
		height: 100%;
		
	}
	.userBackInformationAvatarVip{
		width: 70rpx;
		position: absolute;
		right:  -10rpx;
		bottom: 0;
		z-index: 3;
	}
	.userBackInformationRight{
		width: calc(100% - 220rpx);
		position: absolute;
		right:  0;
		bottom: 10rpx;
		z-index: 3;
	}
	.userBackInformationRightName{
		width: 100%;
		float: left;
	}
	.userBackInformationRightName_t{
		float: left;
		color: #222;
		font-size: 34rpx;
		width: 100%;
		overflow: hidden; /* 隐藏溢出的文本 */ 
		white-space: nowrap; /* 防止文本换行 */ 
		text-overflow: ellipsis;
	}
	.indexServiceLiTT1Label{
		width: 100%;
		float: left;
		margin-top: 10rpx;
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
	.userCon{
		width: 100%;
		float: left;
	}
	.userBackInformationRightSignature{
		width: 100%;
		float: left;
		font-size: 30rpx;
		color: #999;
	}
	
</style>