<template>
	<!-- 配件商城 -->
	<view class="">
		<view class="indexTopPositionConSearch">
			<!-- 搜索 -->
			<view class="indexTopPositionConSearchInput">
				<image src="../../static/images/index_6.png" mode="widthFix"></image>
				<input type="text" placeholder="请输入搜索关键字" />
			</view>
			<!-- 消息 -->
			<view class="indexTopPositionConSearchMesR">
				<view class="indexTopPositionConSearchMesNew"></view>
				<image src="../../static/images/index_2.png" class="indexTopPositionConSearchMes" mode="widthFix">
				</image>
			</view>
		</view>

		<view class="goodsClassTop">
			<scroll-view scroll-x="true" class="goodsClassList">
				<view v-for="item in items" :key="item.id" :class="{'active': item.id === activeId}"
					@click="handleClick(item.id)" class="goodsClassListLi">
					Item {{ item.id }}
					<!-- 显示额外的View当项目被选中 -->
					<view v-if="item.id === activeId" class="goodsClassListLiLine">
					</view>
				</view>
			</scroll-view>
			<view class="goodsClassTopScreen">
				<view class="goodsClassTopScreen_t1">默认筛选</view>
				<view class="goodsClassTopScreen_t2">好评</view>
				<view class="goodsClassTopScreen_t2">销量</view>
			</view>
		</view>
		<view class="goodsUl">
			<navigator url="./goods-content" hover-class="none" class="goodsUlLi">
				<image src="../../static/images/goods_1.png" class="goodsUlLiImg"></image>
				<view class="goodsUlLiCon">

					<text class="goodsUlLiTit">配件标题配件标题配件标题配件标题标题</text>
					<view class="goodsUlLiHot">
						<image class="goodsUlLiHotImg" src="../../static/images/goods_2.png" mode="widthFix"></image>
						<text class="goodsUlLiHot_t1">销量：5684</text>
					</view>
					<view class="goodsUlLiPrice">
						<text>惊喜价</text>
						￥88.88
					</view>
				</view>
			</navigator>

			<navigator url="./goods-content" hover-class="none" class="goodsUlLi">
				<image src="../../static/images/goods_1.png" class="goodsUlLiImg"></image>
				<view class="goodsUlLiCon">

					<text class="goodsUlLiTit">配件标题配件标题配件标题配件标题标题</text>
					<view class="goodsUlLiHot">
						<image class="goodsUlLiHotImg" src="../../static/images/goods_2.png" mode="widthFix"></image>
						<text class="goodsUlLiHot_t1">销量：5684</text>
					</view>
					<view class="goodsUlLiPrice">
						<text>惊喜价</text>
						￥88.88
					</view>
				</view>
			</navigator>

			<navigator url="./goods-content" hover-class="none" class="goodsUlLi">
				<image src="../../static/images/goods_1.png" class="goodsUlLiImg"></image>
				<view class="goodsUlLiCon">

					<text class="goodsUlLiTit">配件标题配件标题配件标题配件标题标题</text>
					<view class="goodsUlLiHot">
						<image class="goodsUlLiHotImg" src="../../static/images/goods_2.png" mode="widthFix"></image>
						<text class="goodsUlLiHot_t1">销量：5684</text>
					</view>
					<view class="goodsUlLiPrice">
						<text>惊喜价</text>
						￥88.88
					</view>
				</view>
			</navigator>

			<navigator url="./goods-content" hover-class="none" class="goodsUlLi">
				<image src="../../static/images/goods_1.png" class="goodsUlLiImg"></image>
				<view class="goodsUlLiCon">

					<text class="goodsUlLiTit">配件标题配件标题配件标题配件标题标题</text>
					<view class="goodsUlLiHot">
						<image class="goodsUlLiHotImg" src="../../static/images/goods_2.png" mode="widthFix"></image>
						<text class="goodsUlLiHot_t1">销量：5684</text>
					</view>
					<view class="goodsUlLiPrice">
						<text>惊喜价</text>
						￥88.88
					</view>
				</view>
			</navigator>
		</view>
		<custom-tabs-bar :activePage="activePage"></custom-tabs-bar> <!-- current属性指示哪个tab是活跃的 -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				items: [{
						id: 1
					},
					{
						id: 2
					},
					{
						id: 3
					},
					{
						id: 4
					},
					{
						id: 5
					},
					{
						id: 6
					},
					{
						id: 7
					},
					{
						id: 8
					},
					{
						id: 9
					},
					{
						id: 10
					}
				],
				activeId: 1,
				activePage: 3
			};
		},
		methods: {
			handleClick(id) {
				this.activeId = id; // 设置当前活跃id为点击的id
			}
		}
	}
</script>

<style>
	@import url(./goods.css);

	page {
		background: #fbfbfb;
	}
</style>