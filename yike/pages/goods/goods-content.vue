<template>
	<!-- 商品详情 -->
	<view class="swiper-container">
		<swiper class="swiper-box" indicator-dots="true" autoplay="true" interval="3000" circular="true">
			<swiper-item v-for="(image, index) in images" :key="index">
				<image class="swiper-image" :src="image.url"></image>
			</swiper-item>
		</swiper>
		<view class="goodsCon">
			<view class="goodsConTit">配件标题配件标题配件标题配件标题标题配件标题配件标题配件标题</view>
			<view class="goodsConLi">
				<view class="goodsConLiLeft">
					<image src="../../static/images/goods_2.png" mode="widthFix"></image>
					<text>销量：5684</text>
				</view>
				<view class="goodsConLiRight">
					<image src="../../static/images/goods_3.png" mode="widthFix"></image>
					<text>销量：5684</text>
				</view>
			</view>
			<navigator hover-class="none" class="goodsConLi2">
				<image src="../../static/images/goods_4.png" mode="widthFix" class="goodsConLi2Img"></image>
				<text class="goodsConLi2_t1">来自 正东机械的店铺</text>
				<uni-icons class="goodsConLi2Icon" type="right" size="26" color="#c0c0c0"></uni-icons>
			</navigator>

			<view hover-class="none" class="goodsConLi3">
				<image src="../../static/images/goods_5.png" mode="widthFix" class="goodsConLi2Img"></image>
				<text class="goodsConLi2_t1">型号 · 规格</text>
				<uni-icons class="goodsConLi2Icon" type="right" size="26" color="#c0c0c0"></uni-icons>
			</view>
		</view>

		<view class="goodsCon">
			<view class="goodsConComment">
				<view class="goodsConComment_t">商品评价</view>
				<view class="goodsConCommentGo">
					<uni-icons class="goodsConCommentGoIcon" type="right" size="20" color="#999"></uni-icons>
					<text>全部</text>
				</view>
			</view>
			<view class="goodsConCommentUl">
				<view class="goodsConCommentUlLi">
					<image src="../../static/images/goods_6.png" class="goodsConCommentUlLiImg"></image>
					<view class="goodsConCommentUlLiLeft">
						<text class="goodsConCommentUlLiLeft_t1">匿名买家 型号：HJ1500 尺寸尺寸尺寸100*120m</text>
						<view class="goodsConCommentUlLiLeft_t2">
							便宜又实惠，不错便宜又实惠
						</view>
					</view>
				</view>
				<view class="goodsConCommentUlLi">
					<image src="../../static/images/goods_6.png" class="goodsConCommentUlLiImg"></image>
					<view class="goodsConCommentUlLiLeft">
						<text class="goodsConCommentUlLiLeft_t1">匿名买家 型号：HJ1500 尺寸尺寸尺寸100*120m</text>
						<view class="goodsConCommentUlLiLeft_t2">
							便宜又实惠，不错便宜又实惠
						</view>
					</view>
				</view>
				<view class="goodsConCommentUlLi">
					<image src="../../static/images/goods_6.png" class="goodsConCommentUlLiImg"></image>
					<view class="goodsConCommentUlLiLeft">
						<text class="goodsConCommentUlLiLeft_t1">匿名买家 型号：HJ1500 尺寸尺寸尺寸100*120m</text>
						<view class="goodsConCommentUlLiLeft_t2">
							便宜又实惠，不错便宜又实惠
						</view>
					</view>
				</view>
				<view class="goodsConCommentUlLi">
					<image src="../../static/images/goods_6.png" class="goodsConCommentUlLiImg"></image>
					<view class="goodsConCommentUlLiLeft">
						<text class="goodsConCommentUlLiLeft_t1">匿名买家 型号：HJ1500 尺寸尺寸尺寸100*120m</text>
						<view class="goodsConCommentUlLiLeft_t2">
							便宜又实惠，不错便宜又实惠
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="goodsCon">
			<view class="goodsConShop">
				<image src="../../static/images/goods_7.png" class="goodsConShopImg"></image>
				<view class="goodsConShopLeft">
					<view class="goodsConShopLeft_t">
						<view class="goodsConShop_t_top">店铺名称</view>
						<view class="goodsConShop_t_Bot">
							<view class="goodsConShop_t_Bot_V">
								<image src="../../static/images/goods_10.png" mode="widthFix"></image>
								<text>已认证</text>
							</view>
							<view class="goodsConShop_t_Bot_score">
								店铺评分<text>4.9</text>分
							</view>
						</view>
					</view>
					
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				images: [{
						url: '/static/images/goods_1.png'
					}, // 替换为你的图片路径
					{
						url: '/static/images/goods_1.png'
					},
					{
						url: '/static/images/goods_1.png'
					}
				]
			};
		}
	}
</script>

<style>
	@import url(../goods/goods.css);
</style>