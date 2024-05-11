<template>
	<!-- 发布 -->
	<view class="uploadBody">
		<view class="uploadBodyTit">
			<view class="uploadBodyTitLine"></view>
			<view class="uploadBodyTit_t">今日免费发布次数剩余 <text>3</text>次</view>
			<view class="uploadBodyTit_t2">使用10个亦可币可发布1条服务</view>
		</view>
		<view class="uploadBodyForm">
			<input placeholder-style="font-size:30rpx" class="uploadBodyFormInp" type="text"
				placeholder="请输入完整服务标题（5-30个字）" maxlength="30">
			<textarea placeholder-style="font-size:30rpx" class="uploadBodyFormTexarea" :maxlength="200"
				placeholder="请输入内容" @input="handleInput" v-model="inputContent"></textarea>
			<view class="uploadBodyFormCount">剩余字数：{{ remainingCount }}</view>
		</view>
		<view class="uploadBodyCityClass">
			<view class="uploadBodyCityClassBtn">选择城市</view>
			<view class="uploadBodyCityClassBtn">选择分类</view>
		</view>
		
		<view class="uploadBodyUpCon">
			<uni-file-picker limit="9" title="最多选择9张图片" class="uploadBodyUpImg"></uni-file-picker>

		</view>
		<view class="uploadBodySub">
			提交
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				inputContent: '', // 用户输入的内容
				remainingCount: 200 // 剩余字数
			};
		},
		watch: {
			inputContent(newValue) {
				this.remainingCount = 200 - newValue.length;
			}
		},
	}
</script>

<style>
	.uploadBody{
		width: 90%;
		float: left;
		margin-left: 5%;
		padding: 50rpx 0;
	}
	.uploadBodyTit{
		width: 100%;
		float: left;
		margin-top: 10rpx;
	}
	.uploadBodyTitLine{
		width: 8rpx;
		height: 40rpx;
		float: left;
		background: #6f5af5;
		border-radius: 10px;
		margin-top: 4rpx;
	}
	.uploadBodyTit_t{
		float: left;
		font-size: 32rpx;
		color: #222;
		margin-left: 20rpx;
	}
	.uploadBodyTit_t2{
		float: left;
		font-size: 30rpx;
		color: #999;
		margin-left: 24rpx;
		margin-top: 20rpx;
	}
	.uploadBodyTit_t text{
		color: #f00;
	}
	.uploadBodyForm{
		width: 100%;
		float: left;
		margin-top: 30rpx;
	}
	.uploadBodyFormInp{
		width: calc(100% - 40rpx);
		float: left;
		border-bottom: 1px solid #eee;
		padding: 20rpx;
		font-size: 30rpx;
		color: #222;
	}
	.uploadBodyFormTexarea{
		width: 100%;
		float: left;
		height: 200rpx;
		margin-top: 20rpx;
		padding: 20rpx;
		border-bottom: 1px solid #eee !important;
		font-size: 30rpx;
		color: #222;
		box-sizing: border-box;
	}
	.uploadBodyFormCount{
		float: left;
		margin-top: 20rpx;
		font-size: 26rpx;
		color: #999;
		margin-left: 20rpx;
	}
	.uploadBodyCityClass{
		width: 100%;
		float: left;
		margin-top: 70rpx;
	}
	.uploadBodyCityClassBtn{
		float: left;
		margin-left: 20rpx;
		border-radius: 100px;
		background: #eee;
		color: #222;
		font-size: 30rpx;
		padding: 16rpx 36rpx;
		margin-right: 20rpx;
	}
	.uploadBodyUpImg{
		float: left;
		margin-right: 20rpx;
		margin-top: 80rpx;
	}
	.uploadBodyUpImg image{
		width: 50rpx;
		float: left;
	}
	.uploadBodyUpImg text{
		float: left;
		margin-left: 20rpx;
		font-size: 30rpx;
		color: #222;
	}
	.uploadBodyUpImg uni-text{
		margin-left: 0 !important;
	}
	.uploadBodyUpCon{
		width: calc(100% - 40rpx);
		float: left;
		margin-left: 20rpx;
	}
	.uploadBodyUpConTip{
		width: 100%;
		float: left;
		margin-top: 20rpx;
		color: #f00;
		font-size: 26rpx;
	}
	.uploadBodySub{
		width: 40%;
		float: left;
		height: 90rpx;
		background: #6f5af5;
		margin: 130rpx 30% 60rpx;
		color: #fff;
		font-size: 30rpx;
		line-height: 90rpx;
		text-align: center;
		border-radius: 100px;
	}
</style>