<template>
	<!-- 发布 -->
	<view class="uploadBody">
		<view class="uploadBodyTit">
			<view class="uploadBodyTitLine"></view>
			<view class="uploadBodyTit_t">今日免费发布次数剩余 <text>3</text>次</view>
		</view>
		<view class="uploadBodyForm">
			<input placeholder-style="font-size:30rpx" class="uploadBodyFormInp" type="text"
				placeholder="请输入完整帖子标题（5-30个字）" maxlength="30">
			<textarea placeholder-style="font-size:30rpx" class="uploadBodyFormTexarea" :maxlength="200"
				placeholder="请输入内容" @input="handleInput" v-model="inputContent"></textarea>
			<view class="uploadBodyFormCount">剩余字数：{{ remainingCount }}</view>
		</view>
		<view class="uploadBodyCityClass">
			<view class="uploadBodyCityClassBtn">选择城市</view>
			<view class="uploadBodyCityClassBtn">选择圈子</view>
		</view>
		
		<view class="uploadBodyUpCon">
			<uni-file-picker limit="9" title="最多选择9张图片" class="uploadBodyUpImg"></uni-file-picker>

			<uni-file-picker limit="1" file-mediatype="video">
				<view class="uploadBodyUpImg">
					<image src="../../static/images/upload_2.png" mode="widthFix"></image>
					<text>上传视频 | 最多选择1个视频</text>
				</view>
			</uni-file-picker>
			<view class="uploadBodyUpConTip">* 图片 和 视频 只能选择一种上传</view>
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
	@import url(./forum-style.css);
</style>