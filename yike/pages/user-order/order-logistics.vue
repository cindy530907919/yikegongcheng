<template>
	<!-- 查询物流 -->
	<view class="">
		<view class="orderLogistics">
			<view class="orderLogisticsTit">中通快递 897798465418</view>
			<uni-steps class="orderLogisticsCon" :options="list2" active-color="#ff850d" :active="active" direction="column" />
		</view>
		<view class="orderLogistics">
			<view class="orderDfhUlLiTop">
				<text class="orderDfhUlLiTopT1">店铺名称</text>
				<uni-icons type="right" font-size="26" color="#222" class="orderDfhUlLiTopIcon"></uni-icons>
			</view>
			<view class="orderDfhUlLiCenter">
				<image class="orderDfhUlLiCenterImg" src="../../static/images/goods_1.png"></image>
				<view class="orderDfhUlLiCenterRight">
					<view class="orderDfhUlLiCenterRightT1">配件标题配件标题配件</view>
					<view class="orderDfhUlLiCenterRightT2">规格：NK8900 尺寸：100cm</view>
					<view class="orderDfhUlLiCenterRightT3">
						<p>￥1995.00</p>
						<span>x2</span>
					</view>
				</view>
			</view>
			<view class="orderDfhUlLiTop">
				<view class="orderDfhUlLiBotTime">支付时间：2024-05-21  10:12:13</view>
				<view class="orderDfhUlLiBotTime">下单时间：2154612194089748960</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				active: 1,

				list2: [{
					title: '买家下单',
					desc: '2018-11-11'
				}, {
					title: '卖家发货',
					desc: '2018-11-12'
				}, {
					title: '买家签收',
					desc: '2018-11-13'
				}, {
					title: '交易完成',
					desc: '2018-11-14'
				}]
			}
		},
		methods: {

		}
	}
</script>
<style>
	@import url(./order.css);
</style>