<template>
	<view class="container">
		<view class="rules">
			<text class="rules-title">亦可币使用规则：</text>
			<text class="rules-text">使用10个亦可币，使您发布的服务帖子顶置在所在列表的最前面</text>
			<text class="rules-text">每日免费发布次数使用完后，可使用10个亦可币在次发布</text>
		</view>
		<view class="packages">
			<text class="packages-title">充值套餐</text>
			<view class="package" v-for="(pkg, index) in packages" :key="index">
				<view class="package-info">
					<text class="package-price">{{ pkg.price }}</text>
					<text class="package-coins">{{ pkg.coins }}</text>
				</view>
				<radio-group>
					<radio class="radio" :value="pkg.price" :checked="selectedPackage === pkg.price"
						@change="selectPackage(pkg.price)"></radio>
				</radio-group>
			</view>
		</view>
		<button class="pay-button" @click="payNow">立即支付</button>
		<view class="history">
			<text class="history-title">充值记录</text>
			<view class="history-item" v-for="(record, index) in history" :key="index">
				<text class="history-text">{{ record }}</text>
				<text class="history-text2"> 2024-04-15 16:09:32</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				selectedPackage: null,
				packages: [{
						price: '￥10元',
						coins: '100个亦可币'
					},
					{
						price: '￥30元',
						coins: '300个亦可币'
					},
					{
						price: '￥50元',
						coins: '500个亦可币'
					},
					{
						price: '￥100元',
						coins: '1000个亦可币'
					},
				],
				history: [
					'充值588元成功到账 ',
					'充值588元成功到账'
				]
			};
		},
		methods: {
			selectPackage(price) {
				this.selectedPackage = price;
			},
			payNow() {
				if (this.selectedPackage) {
					// 处理支付逻辑
					console.log('支付:', this.selectedPackage);
				} else {
					// 提示选择套餐
					console.log('请选择充值套餐');
				}
			}
		}
	};
</script>


<style>
	page {
		background: #fff;
	}

	.container {
		padding: 20rpx;
		background-color: #ffffff;
		width: 90%;
		margin-left: 5%;
		box-sizing: border-box;
	}

	.rules {
		margin-bottom: 20rpx;
	}

	.rules-title {
		color: #ff3434;
		font-weight: bold;
		font-size: 30rpx;
	}

	.rules-text {
		font-size: 30rpx;
		color: #333333;
		margin-top: 10rpx;
		width: 100%;
		display: block;
	}

	.packages {
		margin-bottom: 20rpx;
	}

	.packages-title {
		font-size: 30rpx;
		font-weight: bold;
		color: #333333;
		margin-bottom: 20rpx;
	}

	.package {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: #fbfbfb;
		padding: 30rpx;
		margin-top: 30rpx;
		border-radius: 20rpx;
	}

	.package-info {
		display: flex;
		flex-direction: column;
	}

	.package-price {
		font-size: 40rpx;
		color: #ff3434;
		font-weight: bold;
	}

	.package-coins {
		font-size: 30rpx;
		color: #666666;
	}

	.radio {
		width: 50rpx;
		height: 50rpx;
		transform: scale(0.8);
	}

	.pay-button {
		width: 40%;
		height: 80rpx;
		background-color: #ffb400;
		color: #ffffff;
		font-size: 32rpx;
		text-align: center;
		line-height: 80rpx;
		border-radius: 100rpx;
		margin-bottom: 20rpx;
		border: none;
		margin-left: 30%;
		margin-top: 100rpx;
	}

	.history {
		margin-top: 90rpx;
	}

	.history-title {
		font-size: 30rpx;
		font-weight: bold;
		color: #333333;
		margin-bottom: 20rpx;
	}

	.history-item {
		margin-top: 20rpx;
		width: 100%;
		padding-bottom: 20rpx;
		border-bottom: 1px solid #f8f8f8;
		float: left;
	}

	.history-text {
		font-size: 30rpx;
		color: #222;
		width: 100%;
	}
	.history-text2 {
		font-size: 30rpx;
		color: #999;
		width: 100%;
		float: left;
		margin-top: 4rpx;
	}
</style>