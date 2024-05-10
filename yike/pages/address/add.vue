<template>
	<view class="address">
		<view class="goodsPopupAddress">
			<view class="addressTit">
				<view class="addressTit_1">地址信息</view>
				<label class="radio">
					<radio value="" /><text>默认收货地址</text>
				</label>
			</view>
			<view class="addressLi">
				<text class="addressLi_t1">收件人<span style="color: #f00;">*</span></text>
				<input class="addressLi_Int" type="text" placeholder="收货人名字" />
			</view>
			<view class="addressLi">
				<text class="addressLi_t1">手机号<span style="color: #f00;">*</span></text>
				<input class="addressLi_Int" type="number" placeholder="手机号" />
			</view>
			<view class="addressLi">
				<text class="addressLi_t1">省市区<span style="color: #f00;">*</span></text>
				<uni-data-picker class="addressLiPicker" mode="multiLinkageSelector" :localdata="regionData" :value="selectedRegion" @change="onChange"
					placeholder="请选择地区">
				</uni-data-picker>
			</view>
			<view class="addressLi">
				<text class="addressLi_t1">详细地址<span style="color: #f00;">*</span></text>
				<input class="addressLi_Int" type="number" placeholder="小区/写字楼/门牌号" />
			</view>
		</view>
		<view class="addressConBtn">
			<navigator class="addressConBtn1" url="../../pages/address/add">保存</navigator>
			<view class="addressConBtnDel">
				删除地址
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				selectedRegion: [], // 存储选中的省市区
				regionData: [{
						text: '北京市',
						value: 'beijing',
						children: [{
								text: '市辖区',
								value: 'shixiaqu',
								children: [{
										text: '东城区',
										value: 'dongcheng'
									},
									{
										text: '西城区',
										value: 'xicheng'
									},
									// 更多区...
								]
							},
							// 更多市...
						]
					},
					// 更多省...
				]
			}
		},
		methods: {
			onChange(event) {
				this.selectedRegion = event.value;
			}
		}
	}
</script>

<style>
	page {
		background: #f8f8f8;
	}

	.address {
		width: 90%;
		float: left;
		margin: 20rpx 5%;
	}

	.goodsPopupAddress {
		width: 100%;
		float: left;
		background: #fff;
		border-radius: 30rpx;
		box-shadow: 0 4px 10px #ddd;
		box-sizing: border-box;
		padding: 30rpx;
		margin-top: 30rpx;
	}

	.addressTit {
		width: 100%;
		float: left;
	}

	.addressTit_1 {
		float: left;
		font-size: 32rpx;
		color: #222;
		font-weight: bold;
	}

	.radio {
		float: right;
	}

	.radio radio {
		transform: scale(0.8);
	}

	.radio text {
		float: right;
		font-size: 30rpx;
		color: #222;
		margin-top: 5rpx;
	}
	.addressLi{
		width: 100%;
		float: left;
		margin-top: 30rpx;
	}
	.addressLi_t1{
		width: 28%;
		float: left;
		font-size: 30rpx;
		color: #222;
		margin-top: 14rpx;
	}
	.addressLi_Int{
		width: calc(70% - 40rpx);
		float: right;
		background: #f8f8f8;
		border-radius: 10px;
		padding: 20rpx;
		font-size: 30rpx;
		color: #222;
	}
	.addressLiPicker {
		width: 70%;
		float: right;
		background: #f8f8f8;
		border-radius: 10px;
		border: none;
		font-size: 30rpx;
		color: #222;
	}
	.input-value-border{
		border: none !important;
	}
	.addressConBtn {
		width: 100%;
		padding: 30rpx 0;
		background: #fff;
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 9;
		
	}

	.addressConBtn1 {
		width: 60%;
		float: left;
		height: 100rpx;
		line-height: 100rpx;
		color: #fff;
		background: #ffb400;
		border-radius: 100px;
		text-align: center;
		margin-left: 10%;
	}
	
	.addressConBtnDel{
		color: #f00;
		font-size: 30rpx;
		float: left;
		margin-left: 40rpx;
		line-height: 100rpx;
	}
</style>