<template>
	<!-- 登录 -->
	<view class="loginBack">
		<image src="../../static/images/login_2.png" mode="widthFix" class="loginBackLogo"></image>
		<view class="loginTopTit">
			买配件 · 发友圈 · 求职招聘 · 在线聊天
		</view>
		<view class="clear"></view>
		<navigator class="loginWechat">
			<image src="../../static/images/wechat_b.png" mode="widthFix" class="loginWechatIcon"></image>
			<text @tap="loginEvent">微信登录</text>
		</navigator>
		<label class="loginRadio">
			<checkbox-group style="zoom:85%;" placement="column" @change="change">
			<checkbox checked="true" class="loginRadioC" value="1" checked-color="#FF5722"/>
			<view class="loginRadioText">
				同意
				<navigator url="">用户服务协议</navigator>
				和
				<navigator url="">隐私协议</navigator>
			</view>
			</checkbox-group>
		</label>
	</view>
</template>

<script>
	import {
		TOKEN,USER_ID,USER_INFO
	} from "@/config/index";
	import IndexApi from "@/api/index.js";
	import {
		showToast,
		openUrl
	} from '@/utils/index'
	
	export default {
		data() {
			return {
				token: "",
				yinsi: 1,
				range: [{
					"yinsi": 1,
					"text": '请勾选《用户服务协议》及《隐私政策》'
				}]
			};
		},
		// 页面加载初始化
		onLoad(params) {
			
		},
	
		// 页面显示
		onShow() {},
	
		methods: {
			change(n) {
				if (this.yinsi == 0) {
					this.yinsi = 1;
				} else {
					this.yinsi = 0;
				}
				console.log(this.yinsi);
			},
			openYinsi() {
				uni.navigateTo({
					url: `/pages/login/yinsi`
				});
			},
			// 成功返回
			loginEvent(e) {
				console.log('this.yinsi==',this.yinsi);
				if (this.yinsi == 0) {
					uni.showToast({
						title: '勾选隐私',
						icon: 'error',
						duration: 2000
					});
					return;
				}
				var self = this;
				uni.showLoading({
					title: '授权中...',
				});
				var action = 'login';
				uni[action]({
					provider: "weixin",
					onlyAuthorize: true,
					scope: "snsapi_userinfo",
					success: (res) => {
						console.log(res);
						if (res.code) {
							IndexApi.login({
								code: res.code
							}).then(res => {
								console.log('业务登录有返回', res)
								uni.hideLoading();
								const {
									code,
									data
								} = res
								if (code == 1) {
									uni.setStorageSync(TOKEN, data.token || '');
									uni.setStorageSync(USER_ID, data.id || '');
									uni.setStorageSync(USER_INFO, data || '');
									uni.redirectTo({
									  url: '/pages/index/index',
									});
								} else {
									uni.hideLoading();
									showToast(res.info);
								}
							}).catch(res => {
								console.log(res)
								uni.hideLoading();
							})
						} else {
							uni.hideLoading();
						}
					},
					fail: (e) => {
						console.log('授权失败, ', e)
						uni.hideLoading();
						showToast('授权失败');
					},
				});
	
			},
	
		},
	};
</script>

<style>
	.loginBack {
		height: 100vh;
		width: 100%;
		float: left;
		background: url('../../static/images/login_1.png') no-repeat center top;
		background-size: 100%;
	}

	.loginBackLogo {
		width: 50%;
		float: left;
		margin-left: 25%;
		margin-top: 55vh;
	}

	.loginTopTit {
		width: 100%;
		float: left;
		font-size: 16px;
		color: #222;
		text-align: center;
		margin-top: 20rpx;
	}

	.clear {
		clear: both
	}

	.loginWechat {
		margin: 100rpx auto;
		background: #ffdb00;
		padding: 24rpx 40rpx;
		border-radius: 100px;
		display: flex;
		/* 设置flex布局 */
		justify-content: center;
		/* 水平居中 */
		align-items: center;
		/* 垂直居中 */
		text-align: center;
		width: fit-content;
		/* 根据内容自动调整宽度 */
	}

	.loginWechat image {
		width: 44rpx;
	}

	.loginWechat text {
		font-size: 14px;
		color: #222;
		margin-left: 10px;
	}

	.loginRadio {
		display: flex;
		/* 开启 Flexbox 布局 */
		align-items: center;
		/* 垂直居中 */
		justify-content: center;
		/* 水平居中 */
		width: 100%;
		/* 占满父容器宽度 */
	}

	.loginRadioText {
		display: inline;
		/* 保持文本和链接在同一行 */
		color: #999;
	}

	.loginRadioText navigator {
		display: inline;
		color: #ff7800;
		text-decoration: underline;
	}

	.loginRadioC {
		color: #FF5722;
		transform: scale(0.9);
		margin-right: 10rpx;
		/* 设置单选框和文本之间的间隔 */
	}
</style>