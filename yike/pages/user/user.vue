<template>
	<view>
		<view class="userBack">
			<image class="userBackImg" src="../../static/images/user_1.png"></image>
			<view class="userTit">个人中心</view>
			<image src="../../static/images/user_5.png" class="userBackSkin"></image>
			<view class="userVipPopul">
				<image src="../../static/images/user_4.png" class="userVipPopulImg"></image>
				<view class="userVipPopulText">大v认证：通过累计点赞超过20万获得</view>
			</view>
			<view class="userBackInformation">
				<view class="userBackInformationLeft">
					<image src="../../static/images/user_21.png" class="userBackInformationAvatar" @tap="goToPersonal">
					</image>
					<image src="../../static/images/user_3.png" mode="widthFix" class="userBackInformationAvatarVip">
					</image>
				</view>
				<view class="userBackInformationRight">
					<view class="userBackInformationRightName">
						<view class="userBackInformationRightName_t">
							泰国人没有心
						</view>
						<view class="indexServiceLiTT1Label" @tap="goToTitle">
							<text style="background: #71e58d;">电工</text>
							<text style="background: #ffdb00;">车主</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="userCon">
			<view class="userBackInformationRightSignature" @tap="goToPersonal">个性签名：娃哈哈哈哈哈</view>
			<image src="../../static/images/user_6.png" mode="widthFix" class="userConBanner" @tap="goToTitle"></image>
			<view class="userConMyInfo">
				<view class="userConMyInfoLi">
					<span>588</span>
					<p>我的亦可币</p>
				</view>
				<view class="userConMyInfoLi" @tap="goToinvitation">
					<span>12</span>
					<p>我的帖子</p>
				</view>
				<view class="userConMyInfoLi">
					<span>{{ formattedNumber }}</span>
					<p>收到的赞</p>
				</view>
				<view class="userConMyMessage">
					<image class="userConMyMessageImg" src="../../static/images/user_7.png"></image>
					<view class="userConMyMessageText" @tap="goToInvitationMessage">
						<view class="userConMyMessageText_t1">互动消息<view></view></view>
						<view class="userConMyMessageText_t2">难哄的驴 点赞了你的评论</view>
					</view>
					<uni-icons type="right" font-size="20" color="#222" class="userConMyMessageIcon"></uni-icons>
				</view>
			</view>
			<view class="userConFunction">
				<view class="userConFunctionTit">常用功能</view>
				<view class="userConFunctionUl">
					<navigator url="../../pages/user/user-toup" class="userConFunctionUlLi">
						<image src="../../static/images/user_8.png" mode="widthFix"></image>
						<view>账号充值</view>
					</navigator>
					<navigator url="" class="userConFunctionUlLi">
						<image src="../../static/images/user_9.png" mode="widthFix"></image>
						<view>我的私聊</view>
					</navigator>
					<navigator url="../../pages/user/user-honorary-title" class="userConFunctionUlLi">
						<image src="../../static/images/user_10.png" mode="widthFix"></image>
						<view>荣誉称号</view>
					</navigator>
					<navigator url="../../pages/user/user-my-invitation" class="userConFunctionUlLi">
						<image src="../../static/images/user_11.png" mode="widthFix"></image>
						<view>我的发帖</view>
					</navigator>
					<navigator url="../../pages/user-order/order-dfh" class="userConFunctionUlLi">
						<image src="../../static/images/user_12.png" mode="widthFix"></image>
						<view>我的订单</view>
					</navigator>
					<navigator url="../../pages/address/index" class="userConFunctionUlLi">
						<image src="../../static/images/user_13.png" mode="widthFix"></image>
						<view>收获地址</view>
					</navigator>
					<navigator url="../../pages/user/user-personal" class="userConFunctionUlLi">
						<image src="../../static/images/user_14.png" mode="widthFix"></image>
						<view>个人信息</view>
					</navigator>
					<navigator url="../../pages/user/user-my-service" class="userConFunctionUlLi">
						<image src="../../static/images/user_15.png" mode="widthFix"></image>
						<view>我的发布</view>
					</navigator>
				</view>
			</view>
			<view class="userConFunction">
				<view class="userConFunctionTit">辅助功能</view>
				<view class="userConFunction2Ul">
					<navigator url="../../pages/user/user-service" class="userConFunction2UlLi">
						<image src="../../static/images/user_16.png" mode="widthFix"></image>
						<text>app客服</text>
						<uni-icons class="userConFunction2UlLiIcon" type="right" font-size="20"
							color="#c7c7c7"></uni-icons>
					</navigator>
					<navigator url="../../pages/user/user-feedback" class="userConFunction2UlLi">
						<image src="../../static/images/user_17.png" mode="widthFix"></image>
						<text>用户反馈</text>
						<uni-icons class="userConFunction2UlLiIcon" type="right" font-size="20"
							color="#c7c7c7"></uni-icons>
					</navigator>
					<navigator url="../../pages/merchant/signin" class="userConFunction2UlLi">
						<image src="../../static/images/user_18.png" mode="widthFix"></image>
						<text>商户入驻</text>
						<uni-icons class="userConFunction2UlLiIcon" type="right" font-size="20"
							color="#c7c7c7"></uni-icons>
					</navigator>
					<navigator url="" class="userConFunction2UlLi">
						<image src="../../static/images/user_19.png" mode="widthFix"></image>
						<text>隐私声明</text>
						<uni-icons class="userConFunction2UlLiIcon" type="right" font-size="20"
							color="#c7c7c7"></uni-icons>
					</navigator>
					<navigator class="userConFunction2UlLi" @click="goOut()">
						<image src="../../static/images/user_20.png" mode="widthFix"></image>
						<text>退出登录</text>
						<uni-icons class="userConFunction2UlLiIcon" type="right" font-size="20"
							color="#c7c7c7"></uni-icons>
					</navigator>
				</view>
			</view>
		</view>
		<custom-tabs-bar activePage="4"></custom-tabs-bar>
	</view>
</template>

<script>
	import CustomTabsBar from '@/components/custom-tabs-bar/custom-tabs-bar.vue';
	import IndexApi from "@/api/index.js";
	import {
		USER_INFO
	} from "@/config/index";
	export default {
		components: {
			CustomTabsBar
		},
		data() {
			return {
				number: 1543637,
				userInfo:null,
			}
		},
		// 页面加载初始化
		onLoad(params) {
			this.userInfo = uni.getStorageSync(USER_INFO);
		},
		methods: {
			goToTitle() {
				uni.navigateTo({
					url: '../../pages/user/user-honorary-title'
				});
			},
			goToPersonal() {
				uni.navigateTo({
					url: '../../pages/user/user-personal'
				});
			},
			goToinvitation() {
				uni.navigateTo({
					url: '../../pages/user/user-my-invitation'
				});
			},
			goToInvitationMessage() {
				uni.navigateTo({
					url: '../../pages/user/user-invitation-message'
				});
			},
			goOut(){
				uni.showModal({
				    title: '提示',
				    content: '确认退出登录吗？',
				    success: function (res) {
				        if (res.confirm) {
				            console.log('用户点击确定');
				            // 这里执行确认后的操作
							IndexApi.loginOut({
								uid: 1 
							}).then(res => {
								console.log('业务退出登录有返回', res)
								uni.clearStorageSync();
								      uni.redirectTo({
								        url: '/pages/login/login'
								      });
							}).catch(res => {
								console.log(res)
							})
				        } else if (res.cancel) {
				            console.log('用户点击取消');
				            // 这里执行取消后的操作
				        }
				    }
				});
			},
			
		},
		computed: {
			formattedNumber() {
				if (this.number >= 100000) {
					return (this.number / 10000).toFixed(0) + 'w'; // 超过100,000显示为“10w”等
				} else if (this.number >= 10000) {
					return (this.number / 10000).toFixed(1) + 'w'; // 超过10,000显示为“1w”等
				} else {
					return this.number; // 不超过10,000直接显示数字
				}
			}
		},
	}
</script>

<style>
	page {
		background: #f8f8f8;
	}

	.userBack {
		width: 100%;
		position: relative;
		height: 540rpx;
		float: left;
	}

	.userBackImg {
		width: 100%;
		height: 400rpx;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 1;
	}

	.userTit {
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

	.userBackSkin {
		width: 60rpx;
		height: 60rpx;
		position: absolute;
		top: 80rpx;
		right: 40rpx;
		z-index: 2;
	}

	.userVipPopul {
		position: absolute;
		top: 290rpx;
		left: 260rpx;
		z-index: 4;
		background: rgba(255, 255, 255, 0.7);
		border-radius: 30rpx;
		padding: 10rpx 10rpx;
		width: 48%;
	}

	.userVipPopulImg {
		width: 70rpx;
		height: 70rpx;
		float: left;
		margin-top: 4rpx;
	}

	.userVipPopulText {
		float: right;
		width: calc(100% - 80rpx);
		font-size: 30rpx;
		color: #222;
	}

	.userBackInformation {
		width: 90%;
		position: absolute;
		top: 530rpx;
		left: 5%;
		z-index: 2;
	}

	.userBackInformationLeft {
		width: 200rpx;
		height: 200rpx;
		float: left;
		border-radius: 50%;
		position: absolute;
		left: 0;
		bottom: 0;
		z-index: 3;
	}

	.userBackInformationAvatar {
		width: 100%;
		height: 100%;

	}

	.userBackInformationAvatarVip {
		width: 70rpx;
		position: absolute;
		right: -10rpx;
		bottom: 0;
		z-index: 3;
	}

	.userBackInformationRight {
		width: calc(100% - 220rpx);
		position: absolute;
		right: 0;
		bottom: 10rpx;
		z-index: 3;
	}

	.userBackInformationRightName {
		width: 100%;
		float: left;
	}

	.userBackInformationRightName_t {
		float: left;
		color: #222;
		font-size: 34rpx;
		width: 100%;
		overflow: hidden;
		/* 隐藏溢出的文本 */
		white-space: nowrap;
		/* 防止文本换行 */
		text-overflow: ellipsis;
	}

	.indexServiceLiTT1Label {
		width: 100%;
		float: left;
		margin-top: 10rpx;
	}

	.indexServiceLiTT1Label text {
		padding: 5rpx 20rpx;
		color: #fff;
		border-radius: 100px;
		float: left;
		margin-right: 10rpx;
		font-size: 14px;
		text-shadow: 0px 1px 1px #bbb;
	}

	.userCon {
		width: 90%;
		float: left;
		margin: 20rpx 5%;
		padding-bottom: 260rpx;
	}

	.userBackInformationRightSignature {
		width: 100%;
		float: left;
		font-size: 30rpx;
		color: #666;
	}

	.userConBanner {
		width: 100%;
		float: left;
		margin-top: 30rpx;
	}

	.userConMyInfo {
		width: 100%;
		float: left;
		padding: 30rpx;
		box-sizing: border-box;
		background: #fff;
		border-radius: 30rpx;
		margin-top: 30rpx;
	}

	.userConMyInfoLi {
		width: 33.33%;
		float: left;
	}

	.userConMyInfoLi span {
		width: 100%;
		float: left;
		font-size: 40rpx;
		color: #222;
		font-weight: bold;
		text-align: center;
	}

	.userConMyInfoLi p {
		width: 100%;
		float: left;
		font-size: 30rpx;
		color: #222;
		text-align: center;
		margin-top: 10rpx;
	}

	.userConMyMessage {
		width: 100%;
		float: left;
		margin-top: 30rpx;
	}

	.userConMyMessageImg {
		width: 120rpx;
		float: left;
		height: 120rpx;
		border-radius: 50%;
	}

	.userConMyMessageText {
		width: calc(100% - 190rpx);
		float: left;
		margin-left: 20rpx;
	}

	.userConMyMessageText_t1 {
		width: 100%;
		float: left;
		font-size: 32rpx;
		color: #666;
		margin-top: 20rpx;
	}

	.userConMyMessageText_t2 {
		width: 100%;
		float: left;
		font-size: 30rpx;
		color: #999;
	}

	.userConMyMessageIcon {
		float: right;
		margin-top: 50rpx;
	}

	.userConFunction {
		width: 100%;
		float: left;
		background-image: linear-gradient(to bottom,
				#fff7d4 0%,
				#fff 30%
				/* 这里不要有, */
			);
		border-radius: 30rpx;
		margin-top: 30rpx;
	}

	.userConFunctionTit {
		width: 90%;
		float: left;
		font-size: 34rpx;
		color: #222;
		margin-left: 5%;
		margin-top: 30rpx;
	}

	.userConFunctionUl {
		width: 100%;
		float: left;
		margin-top: 20rpx;
	}

	.userConFunctionUlLi {
		width: 22.5%;
		float: left;
		margin-left: 2%;
		margin-top: 20rpx;
		margin-bottom: 30rpx;
	}

	.userConFunctionUlLi image {
		width: 80rpx;
		float: left;
		margin-left: calc(50% - 40rpx);
	}

	.userConFunctionUlLi view {
		width: 100%;
		float: left;
		font-size: 30rpx;
		color: #222;
		margin-top: 10rpx;
		text-align: center;
	}

	.userConFunction2Ul {
		width: 90%;
		float: left;
		margin-top: 20rpx;
		margin-left: 5%;
	}

	.userConFunction2UlLi {
		width: 100%;
		float: left;
		padding-bottom: 30rpx;
		margin-top: 30rpx;
	}

	.userConFunction2UlLi image {
		width: 48rpx;
		float: left;
	}

	.userConFunction2UlLi text {
		float: left;
		color: #222;
		font-size: 30rpx;
		margin-left: 20rpx;
		margin-top: 4rpx;
	}

	.userConFunction2UlLiIcon {
		float: right !important;
		margin-top: 20rpx;
	}
</style>