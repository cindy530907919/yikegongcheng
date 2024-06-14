<template>
	<view class="address">
		<view class="goodsPopupAddress">
			<view class="addressTit">
				<view class="addressTit_1">地址信息</view>
				<label class="radio">
					<radio :checked="isChecked" @tap="radioChange"/><text>默认收货地址</text>
				</label>
			</view>
			<view class="addressLi">
				<text class="addressLi_t1">收件人<span style="color: #f00;">*</span></text>
				<input class="addressLi_Int" type="text" placeholder="收货人名字" v-model="name"/>
			</view>
			<view class="addressLi">
				<text class="addressLi_t1">手机号<span style="color: #f00;">*</span></text>
				<input class="addressLi_Int" type="number" placeholder="手机号" v-model="phone"/>
			</view>
			<view class="addressLi">
				<text class="addressLi_t1">省市区<span style="color: #f00;">*</span></text>
				<uni-data-picker class="addressLiPicker" mode="multiLinkageSelector" :localdata="regionData" :value="selectedRegion" @change="onChange"
					placeholder="请选择地区">
				</uni-data-picker>
			</view>
			<view class="addressLi">
				<text class="addressLi_t1">详细地址<span style="color: #f00;">*</span></text>
				<input class="addressLi_Int" type="number" placeholder="小区/写字楼/门牌号" v-model="content"/>
			</view>
		</view>
		<view class="addressConBtn">
			<navigator class="addressConBtn1" url="../../pages/address/add" @click="saveAddress()">保存</navigator>
			<view class="addressConBtnDel">
				删除地址
			</view>
		</view>
	</view>
</template>

<script>
	import AddressApi from "@/api/address.js";
	import IndexApi from "@/api/index.js";
	export default {
		data() {
			return {
				name:'',
				phone:'',
				province:'',
				city:'',
				area:'',
				content:'',
				is_selected:0,
				id:0,
				selectedRegion: [], // 存储选中的省市区
				regionData: [],
				isChecked: false
			}
		},
		onLoad(params) {
			this.getCity();
			if(params){
				this.id = params.id || 0;
				// this.getInfo();
			}
		},
		methods: {
			radioChange() {
				this.isChecked = !this.isChecked;
				if(this.isChecked){
					this.is_selected = 1;
				}else{
					this.is_selected = 0;
				}
				  console.log('this.is_selected==',this.is_selected);
			    },
			onChange(event) {
				this.selectedRegion = event.value;
				console.log(JSON.stringify(this.selectedRegion));
			},
			getCity(){
				IndexApi.getCityList({
				}).then(res => {
					console.log('业务获取城市有返回', res)
					this.regionData = res.data;
				}).catch(res => {
					console.log(res)
				})
			},
			getInfo(){
				AddressApi.getInfo({
					id: this.id > 0 ? this.id : 0,
				}).then(res => {
					console.log('业务获取地址信息有返回', res)
					this.name = res.data.name;
					this.phone = res.data.phone;
					this.is_selected = res.data.is_selected;
					this.id = res.data.id;
					this.content = res.data.content;
				}).catch(res => {
					console.log(res)
				})
			},
			saveAddress(){
				// 这里执行确认后的操作
				AddressApi.addAddress({
					name:this.name,
					phone:this.phone,
					province:this.province,
					city:this.city,
					area:this.area,
					content:this.content,
					is_selected:this.is_selected,
					id: this.id > 0 ? this.id : 0,
				}).then(res => {
					console.log('业务保存地址有返回', res)
					uni.showToast({
						icon: "none",
						title: "保存成功",
						duration: 3000,
					});
				}).catch(res => {
					console.log(res)
				})
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