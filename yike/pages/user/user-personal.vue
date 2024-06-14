<template>
	<!-- 个人资料 -->
	<view class="container">
		<view class="avatar-section" @click="goUpload()">
			<image class="avatar" :src="head_url"></image>
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
					<radio-group @change="radioChange">
						<label class="radio-label">
							<radio value="女" :checked="gender == '女'"></radio>
							<text>女</text>
						</label>
						<label class="radio-label">
							<radio value="男" :checked="gender == '男'"></radio>
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
		<view class="issueBtnRight" @click="putUserData()">
			发布
		</view>
	</view>
</template>


<script>
	import IndexApi from "@/api/index.js";
	import {
		USER_INFO
	} from "@/config/index";
	export default {
		data() {
			return {
				nickname: '',
				gender: '男',
				signature: '',
				birthday: '',
				userInfo:{
								"uid":1,
				    "nickname": "张三",
				    "head_url": "xxx.png",
				    "phone": "",
				    "sex": "女",
				    "birthday": "2024-09-08",
				    "background": null,
				    "abstract": "个性签名",
				    "province": "吉林省",
				    "city": "长春市",
				    "area": "经开区",
				    "openid": "opYhc6_Yeil7o3KKPMcquGw5JsK8",
				    "ykb": 10,
				    "tie": 0,
				    "zan": 0,
				    "honor": [
				        "司机",
				        "称号2"
				    ]
				},
				head_url:''
			};
		},
		// 页面加载初始化
		onLoad(params) {
			// this.userInfo = uni.getStorageSync(USER_INFO);
			this.getUserData();
		},
		methods: {
			radioChange(e) {
			      this.gender = e.detail.value;
			    },
			goUpload() {
				uni.chooseImage({
									count: 6, //默认9
									sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
									sourceType: ['album'], //从相册选择
									success: function (res) {
										
										Promise.all(res.tempFilePaths.map(file => {
										  return new Promise((resolve, reject) => {
										    uni.uploadFile({
										      url: 'https://app.ykgcb.com/ykapi/Upload/file', // 服务器接收上传文件的URL
										      filePath: file, // 文件路径
										      name: 'file', // 这是后端接收文件时的字段名
										      formData: {
										        'user': 'test' // 其他POST请求中的额外参数
										      },
										      success: (uploadFileRes) => {
										        console.log(uploadFileRes.data);
												let datas = JSON.parse(uploadFileRes.data);
												console.log(datas.data);
												this.head_url = datas.data;
										        resolve(uploadFileRes);
										      },
										      fail: (error) => {
										        reject(error);
										      }
										    });
										  });
										})).then(res => {
										  console.log('All files have been uploaded', res);
										}).catch(error => {
										  console.error('Error uploading files', error);
										});
									}
								});
			},
			getUserData(){
				console.log('业务获取个人信息有返回==', this.userInfo.uid)
				            // 这里执行确认后的操作
							IndexApi.getUserInfo({
								uid:this.userInfo.uid
							}).then(res => {
								console.log('业务获取个人信息有返回', res)
								this.userInfo = res.data;
								uni.setStorageSync(USER_INFO, res.data || '');
								this.nickname = res.data.nickname;
								this.gender = res.data.sex;
								this.signature = res.data.abstract;
								this.birthday = res.data.birthday;
								this.head_url = res.data.head_url;
							}).catch(res => {
								console.log(res)
							})
			},
			putUserData(){
				            // 这里执行确认后的操作
							IndexApi.editInfo({
								uid:parseInt(this.userInfo.uid),
								head_url: this.head_url,
								nickname: this.nickname,
								sex: this.gender,
								abstract: this.signature,
								birthday: this.birthday
							}).then(res => {
								console.log('业务修改个人信息有返回', res)
								uni.showToast({
									icon: "none",
									title: "修改成功",
									duration: 3000,
								});
								this.getUserData();
							}).catch(res => {
								console.log(res)
							})
			}
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