<template>
	<!-- APP -->
	<view class="userInMe">
		<image :src="imageUrl" mode="widthFix" class="userInMeCode"></image>
		<view class="userServiceT1">客服微信二维码</view>
		<view class="userServiceT2" @click="goPhone()">客服电话：{{ phone }}</view>
	</view>
</template>

<script>
	import IndexApi from "@/api/index.js";
	export default {
		components: {
		},
		data() {
			return {
				phone: '',
				imageUrl:'',
			}
		},
		// 页面加载初始化
		onLoad(params) {
			this.getKefuData();
		},
		methods: {
			goPhone() {
				uni.makePhoneCall({
					// 手机号
					phoneNumber: this.phone,
					// 成功回调
					success: (res) => {},
					// 失败回调
					fail: (res) => {}
				});
			},
			getKefuData(){
				            // 这里执行确认后的操作
							IndexApi.getKefu({
							}).then(res => {
								console.log('业务获取客服有返回', res)
								this.imageUrl = res.data.img_url;
								this.phone = res.data.phone;
							}).catch(res => {
								console.log(res)
							})
			},
			
		},
		computed: {
			
		},
	}
</script>

<style>
	.userInMe{
		width: 90%;
		float: left;
		margin-left: 5%;
		margin-bottom: 40rpx;
		margin-top: 20rpx;
	}
	.userInMeCode{
		width: 30%;
		float: left;
		margin-left: 35%;
		margin-top: 100rpx;
	}
	.userServiceT1{
		width: 100%;
		float: left;
		margin-top: 30rpx;
		text-align: center;
		font-size: 30rpx;
		color: #222;
	}
	.userServiceT2{
		width: 100%;
		float: left;
		margin-top: 10rpx;
		text-align: center;
		font-size: 34rpx;
		color: #222;
	}
</style>