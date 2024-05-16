<template>
	<!-- 个人资料 -->
	<view class="container">
		<view class="avatar-section">
			<image class="avatar" src="../../static/images/goods_6.png"></image>
			<text class="change-avatar">【更换头像】</text>
		</view>
		<view class="form-section">
			<view class="form-item">
				<text class="label">昵称</text>
				<input class="input" type="text" placeholder="请输入昵称" v-model="nickname"></input>
			</view>
			<view class="form-item">
				<text class="label">性别</text>
				<view class="gender-options">
					<radio-group>
						<label class="radio-label">
							<radio value="女"></radio>
							<text>女</text>
						</label>
						<label class="radio-label">
							<radio value="男" checked="checked"></radio>
							<text>男</text>
						</label>
						
					</radio-group>
				</view>
			</view>
			<view class="form-item">
				<text class="label">个人签名</text>
				<input class="input" type="text" placeholder="请输入个人签名" v-model="signature"></input>
			</view>
			<view class="form-item">
				<text class="label">生日</text>
				<input class="input" type="text" placeholder="请输入输入生日" v-model="birthday"></input>
			</view>
		</view>
		<view class="issueBtnRight">
			发布
		</view>
	</view>
</template>


<script>
	export default {
		data() {
			return {
				nickname: '',
				gender: '男',
				signature: '',
				birthday: ''
			};
		}
	};
</script>

<style>
	
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 20rpx;
	}

	.avatar-section {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: 30rpx;
		margin-top: 50rpx;
	}

	.avatar {
		width: 120rpx;
		height: 120rpx;
		border-radius: 60rpx;
		background-color: #f0f0f0;
	}

	.change-avatar {
		margin-top: 10rpx;
		font-size: 30rpx;
		color: #333333;
	}

	.form-section {
		width: 100%;
	}

	.form-item {
		display: flex;
		align-items: center;
		padding: 30rpx;
		border-bottom: 1px solid #f8f8f8;
	}

	.label {
		width: 150rpx;
		font-size: 30rpx;
		color: #333333;
	}

	.input {
		flex: 1;
		font-size: 30rpx;
		color: #999999;
		margin-top: 6rpx;
	}

	.gender-options {
		display: flex;
		align-items: center;
	}

	.radio-label {

		align-items: center;
		margin-right: 30rpx;
		font-size: 30rpx;
		color: #333333;
		float: right;
	}

	.radio-label text {
		margin-top: 15rpx !important;
	}

	.radio-label radio {
		margin-right: 10rpx;
		transform: scale(0.8);
	}
	.issueBtnRight{
		width: 40%;
		font-size: 34rpx;
		height: 90rpx;
		line-height: 100rpx;
		background: #6f5af5;
		color: #fff;
		text-align: center;
		margin-top: 80rpx;
		border-radius: 100px;
	}
</style>