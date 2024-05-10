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

			<view class="goodsConLi3"  @click="open">
				<image src="../../static/images/goods_5.png" mode="widthFix" class="goodsConLi2Img"></image>
				<text class="goodsConLi2_t1">型号 · 规格</text>
				<uni-icons class="goodsConLi2Icon" type="right" size="26" color="#c0c0c0"></uni-icons>
			</view>
		</view>
		<!-- 查看规格 弹窗 -->
		<uni-popup ref="popup" type="bottom">
			<view class="goodsPopup">
				<view class="goodsPopupTit">标题标题标题标题标题标题标题标题标题</view>
				<view class="goodsPopupPrice"><text>实付价</text>￥99.99</view>
				<view class="goodsPopupAddress">
					<image class="goodsPopupAddressImg" src="../../static/images/goods_11.png" mode="widthFix"></image>
					<uni-icons type="right" size="24" class="goodsPopupAddressIcon"color="#999"></uni-icons>
					<view class="goodsPopupAddressTxt">
						<text>难哄的驴 13866668888</text>
						<text>吉林省长春市南关区1栋101室小区街道1栋101室</text>
					</view>
				</view>
				<view class="goodsPopupAddress">
					<view class="goodsModel">
						<view class="goodsModelLi">
							<text class="goodsModelLiTit">规格</text>
							<view class="goodsModelLi_t">HJ8382白色</view>
							<view class="goodsModelLi_t">HJ8382白色</view>
							<view class="goodsModelLi_t">HJ8382白色</view>
							<view class="goodsModelLi_t">HJ8382白色</view>
							<view class="goodsModelLi_t">HJ8382白色</view>
						</view>
						
						<view class="goodsModelLi">
							<text class="goodsModelLiTit">尺寸</text>
							<view class="goodsModelLi_t">100cm*120cm</view>
							<view class="goodsModelLi_t">100cm*120cm</view>
						</view>
					</view>
				</view>
				<view class="goodsPopupAddress">
					<view class="goodsPopupNum">数量</view>
					<view class="goodsPopupNumAdd">
						<view class="goodsPopupNumAdd_1">+</view>
						<input type="number" value="1" class="goodsPopupNumAdd_Int"/>
						<view class="goodsPopupNumAdd_2">-</view>
					</view>
				</view>
				<navigator url="/pages/pay/pay" class="goodsPopupBtn">立即支付￥99.99</navigator>
			</view>
		</uni-popup>
		
		
		
		<view class="goodsCon">
			<view class="goodsConComment">
				<view class="goodsConComment_t">商品评价</view>
				<navigator url="../../pages/goods/comment" class="goodsConCommentGo">
					<uni-icons class="goodsConCommentGoIcon" type="right" size="20" color="#999"></uni-icons>
					<text>全部</text>
				</navigator>
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
		<view class="goodsConPT">
			<view class="goodsConPTTit">
				<view class="goodsConPTTitLine"></view>
				<text class="goodsConPTTit_t">商品详情</text>
				<view class="goodsConPTTitLine"></view>
			</view>
			<view class="goodsConPrice">
				<image src="../../static/images/goods_1.png" mode="widthFix"></image>
			</view>
		</view>
		<view class="margin200rpx"></view>
		<view class="goodsConMeun">
			<navigator hover-class="none" class="goodsConMeunLi">
				<image src="../../static/images/goods_8.png" mode="widthFix"></image>
				<text>店铺</text>
			</navigator>
			<navigator hover-class="none" class="goodsConMeunLi">
				<image src="../../static/images/goods_9.png" mode="widthFix"></image>
				<text>客服</text>
			</navigator>
			<navigator url="/pages/pay/pay" class="goodsConMeunBtn">立即购买</navigator>
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
				],
				show: false
			};
		},
		methods :{
			// 查看全部回复弹窗
			open() {
				this.$refs.popup.open('bottom')
			},
			close() {
				this.$refs.popup.close()
			},
			change(e) {
				this.show = e.show
			}
		}
	}
</script>

<style>
	@import url(../goods/goods.css);
</style>