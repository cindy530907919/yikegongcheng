<template>
	<view class="addressCon">
		
		<view class="goodsPopupAddress" v-for="(item, index) in addressList" :key="index" @tap="goToAddressPage(item.id)">
			<image class="goodsPopupAddressImg" src="../../static/images/goods_11.png" mode="widthFix"></image>
			<uni-icons type="right" size="24" class="goodsPopupAddressIcon"color="#999"></uni-icons>
			<view class="goodsPopupAddressTxt">
				<text><span style="color: #f00;" v-if="item.is_selected == 1">[默认]</span>{{ item.name }} {{ item.phone }}</text>
				<text>{{ item.province+item.city+item.area+item.content }}</text>
			</view>
		</view>
		
		<view class="addressConBtn">
			<navigator class="addressConBtn1" url="../../pages/address/add">添加收货地址</navigator>
		</view>
	</view>
</template>

<script>
	import AddressApi from "@/api/address.js";
	export default {
		data() {
			return {
				addressList: []
			};
		},
		// 页面加载初始化
		onLoad(params) {
			this.getList();
		},
	  methods: {
	    goToAddressPage(id) {
	      // 指定跳转的路径
	      uni.navigateTo({
	        url: `/pages/address/add?id=${id}`
	      });
	    },
		getList(){
			AddressApi.getList({
			}).then(res => {
				console.log('业务获取收货地址有返回', res)
				this.addressList = res.data;
			}).catch(res => {
				console.log(res)
			})
		}
	  }
	}
</script>

<style>
	page{
		background: #f8f8f8;
	}
	.addressCon{
		width: 90%;
		float: left;
		margin: 20rpx 5%;
		padding: 0 0 160rpx;
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
	
	.goodsPopupAddressImg {
		width: 50rpx;
		float: left;
		margin-top: 20rpx;
	}
	
	.goodsPopupAddressTxt {
		width: calc(100% - 140rpx);
		float: left;
		margin-left: 20rpx;
	}
	
	.goodsPopupAddressTxt text {
		width: 100%;
		float: left;
		font-size: 30rpx;
		color: #222;
		line-height: 46rpx;
	}
	
	.goodsPopupAddressIcon {
		float: right;
		margin-top: 16rpx;
	}
	.addressConBtn{
		width: 100%;
		padding: 30rpx 0;
		background: #fff;
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 9;
	}
	.addressConBtn1{
		width: 80%;
		float: left;
		height: 100rpx;
		line-height: 100rpx;
		color: #fff;
		background: #ffb400;
		border-radius: 100px;
		text-align: center;
		margin-left: 10%;
	}
</style>