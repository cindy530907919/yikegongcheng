<template>
	<!-- 登录 -->
	<view class="loginBack">
		<image src="../../static/images/login_2.png" mode="widthFix" class="loginBackLogo"></image>
		<view class="loginTopTit">
			商户入驻提交资料
		</view>
		<view class="signFrom">
			<view class="signFromLi">
				<input type="text" placeholder="*店铺名称（必填）" required/>
			</view>
			
			<view class="example-body">
				<uni-file-picker value="object" limit="1" title="上传营业执照(请确保照片清晰不超过1M)" @after-read="handleFile"></uni-file-picker>
			</view>
			<view class="example-body">
				<uni-file-picker value="object" limit="1" title="上传店铺头像" @after-read="handleFile"></uni-file-picker>
			</view>
			<view class="signFromExpense">
				<text class="signFromExpenseT_1">认证费用99元/年</text>
				<text class="signFromExpenseT_2">
					认证费用文字说明认证费用文字说明认证费用文字说明认证费用文字说明认证费用
				</text>
			</view>
		</view>
		<view class="clear"></view>
		<navigator class="loginWechat">
			申请入驻
		</navigator>
		<label class="loginRadio">
			<checkbox checked="true" class="loginRadioC" value="1"  checked-color="#FF5722"/>
			<view class="loginRadioText">
				同意
				<navigator url="">商户入驻协议</navigator>
				和
				<navigator url="">隐私协议</navigator>
			</view>
		</label>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				imageStyles: {
					width: 64,
					height: 64,
					border: {
						radius: '50%'
					}
				},
				listStyles: {
					// 是否显示边框
					border: true,
					// 是否显示分隔线
					dividline: true,
					// 线条样式
					borderStyle: {
						width: 1,
						color: 'blue',
						style: 'dashed',
						radius: 2
					},
				},
				
			}
		},
		methods: {
			handleFile(file) {
			  const maxSize = 1 * 1024 * 1024; // 最大文件大小（1MB）
			  if (file.size > maxSize) {
				uni.showToast({
				  title: '文件大小不能超过1MB',
				  icon: 'none'
				});
				return; // 如果文件过大，不执行上传
			  }

			  // 如果文件大小合适，执行上传逻辑
			  console.log(11111111)
			},
		}
	}
</script>

<style>
	.loginBack{
		min-height: 100vh;
		width: 100%;
		float: left;
		padding-bottom: 60px;
	}
	.loginBackLogo{
		width: 50%;
		float: left;
		margin-left: 25%;
		margin-top: 40px;
	}
	.loginTopTit{
		width: 100%;
		float: left;
		font-size: 16px;
		color: #222;
		text-align: center;
		margin-top: 30rpx;
	}
	.clear{
		clear: both
	}
	.loginWechat{
		margin: 60rpx auto;
		background: #ffdb00;
		width: 40%;
		font-size: 14px;
		color: #222;
		margin-left: 30%;
		height: 40px;
		line-height: 40px;
		text-align: center;
		border-radius: 60px;
	}
	.loginRadio {
	  display: flex; /* 开启 Flexbox 布局 */
	  align-items: center; /* 垂直居中 */
	  justify-content: center; /* 水平居中 */
	  width: 100%; /* 占满父容器宽度 */
	}
	
	.loginRadioText {
	  display: inline; /* 保持文本和链接在同一行 */
	  color: #999;
	}
	.loginRadioText navigator{
		display: inline; 
		color: #ff7800;
		text-decoration: underline;
	}
	
	.loginRadioC{
		color: #FF5722;
		transform: scale(0.9);
	    margin-right: 10rpx; /* 设置单选框和文本之间的间隔 */
	}
	.signFrom{
		width: 90%;
		float: left;
		margin-left: 5%;
		margin-top: 20rpx;
	}
	.signFromLi{
		width: 100%;
		float: left;
		padding: 20rpx;
		box-sizing: border-box;
		background: #fbfbfb;
		border-radius: 100px;
		margin-top: 20px;
	}
	.example-body {
		padding: 10px;
		padding-top: 0;
		margin-top: 15px;
		float: left;
		width: 100%;
		box-sizing: border-box;
	}
	.file-count{
		font-size: 14px;
		color: #999;
		margin-top: 3px;
		margin-left: 6px;
	}

	.custom-image-box {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	.uni-file-picker__header{
		margin-bottom: 14px;
	}
	.signFromExpense{
		width: 100%;
		float: left;
		margin-top: 30px;
	}
	.signFromExpenseT_1{
		width: 100%;
		float: left;
		font-size: 16px;
		color: #222;
	}
	.signFromExpenseT_2{
		width: 100%;
		float: left;
		font-size: 14px;
		color: #999;
		margin-top: 8px;
	}
</style>