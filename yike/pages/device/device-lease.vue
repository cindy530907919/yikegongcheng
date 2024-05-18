<template>
	<!-- 设备商城-->
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
		<view class="devicebtn">
			<navigator url="../../pages/device/device-lease" class="devicebtn_2">设备租赁</navigator>
			<navigator url="../../pages/device/device-shop" class="devicebtn_1">设备商城</navigator>
		</view>
		<view :class="{'goodsClassTop': true, 'sticky': isSticky}">
			<scroll-view scroll-x="true" class="goodsClassList">
				<view v-for="item in items" :key="item.id" :class="{'active': item.id === activeId}"
					@click="handleClick(item.id)" class="goodsClassListLi">
					Item {{ item.id }}
					<!-- 显示额外的View当项目被选中 -->
					<view v-if="item.id === activeId" class="goodsClassListLiLine">
					</view>
				</view>
			</scroll-view>
		</view>

		
		
		<view class="leasingUl">
			<view class="leasingUlLi" @tap="goToLeasing">
				<image class="leasingUlLiImg" src="../../static/images/goods_1.png"></image>
				<view class="leasingUlLiTxt">
					<text class="leasingUlLiTxt_t1">吉林 长春 挖掘机租赁，2020年新车</text>
					<text class="leasingUlLiTxt_t2">发布人：这是一个名字</text>
					<view class="indexServiceLiTT1Label">
						<text style="background: #71e58d;">电工</text>
						<text style="background: #ffdb00;">车主</text>
					</view>
				</view>
			</view>
			
			<view class="leasingUlLi" @tap="goToLeasing">
				<image class="leasingUlLiImg" src="../../static/images/goods_1.png"></image>
				<view class="leasingUlLiTxt">
					<text class="leasingUlLiTxt_t1">吉林 长春 挖掘机租赁，2020年新车</text>
					<text class="leasingUlLiTxt_t2">发布人：这是一个名字</text>
					<view class="indexServiceLiTT1Label">
						<text style="background: #71e58d;">电工</text>
						<text style="background: #ffdb00;">车主</text>
					</view>
				</view>
			</view>
			
			<view class="leasingUlLi" @tap="goToLeasing">
				<image class="leasingUlLiImg" src="../../static/images/goods_1.png"></image>
				<view class="leasingUlLiTxt">
					<text class="leasingUlLiTxt_t1">吉林 长春 挖掘机租赁，2020年新车</text>
					<text class="leasingUlLiTxt_t2">发布人：这是一个名字</text>
					<view class="indexServiceLiTT1Label">
						<text style="background: #71e58d;">电工</text>
						<text style="background: #ffdb00;">车主</text>
					</view>
				</view>
			</view>
			
			<view class="leasingUlLi" @tap="goToLeasing">
				<image class="leasingUlLiImg" src="../../static/images/goods_1.png"></image>
				<view class="leasingUlLiTxt">
					<text class="leasingUlLiTxt_t1">吉林 长春 挖掘机租赁，2020年新车</text>
					<text class="leasingUlLiTxt_t2">发布人：这是一个名字</text>
					<view class="indexServiceLiTT1Label">
						<text style="background: #71e58d;">电工</text>
						<text style="background: #ffdb00;">车主</text>
					</view>
				</view>
			</view>
			
			<view class="leasingUlLi" @tap="goToLeasing">
				<image class="leasingUlLiImg" src="../../static/images/goods_1.png"></image>
				<view class="leasingUlLiTxt">
					<text class="leasingUlLiTxt_t1">吉林 长春 挖掘机租赁，2020年新车</text>
					<text class="leasingUlLiTxt_t2">发布人：这是一个名字</text>
					<view class="indexServiceLiTT1Label">
						<text style="background: #71e58d;">电工</text>
						<text style="background: #ffdb00;">车主</text>
					</view>
				</view>
			</view>
			
			<view class="leasingUlLi" @tap="goToLeasing">
				<image class="leasingUlLiImg" src="../../static/images/goods_1.png"></image>
				<view class="leasingUlLiTxt">
					<text class="leasingUlLiTxt_t1">吉林 长春 挖掘机租赁，2020年新车</text>
					<text class="leasingUlLiTxt_t2">发布人：这是一个名字</text>
					<view class="indexServiceLiTT1Label">
						<text style="background: #71e58d;">电工</text>
						<text style="background: #ffdb00;">车主</text>
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
				topThreshold: 0, // 根据实际布局调整
				isSticky: false
			};
		},
		methods: {
			handleClick(id) {
				this.activeId = id; // 设置当前活跃id为点击的id
			},
			getGoodsClassTopOffsetTop() {
				const query = uni.createSelectorQuery().in(this);
				query.select('.goodsClassTop').boundingClientRect(data => {
					this.goodsClassTopOffsetTop = data.top;
				}).exec();
			},
			onPageScroll(e) {
				if (e.scrollTop >= this.goodsClassTopOffsetTop) {
					this.isFixedTop = true;
				} else {
					this.isFixedTop = false;
				}
			},
			goToLeasing() {
				// 指定跳转的路径
				uni.navigateTo({
					url: '../device/device-con'
				});
			}
		},
		onReady() {
			// 页面准备好之后计算元素的位置
			const query = uni.createSelectorQuery();
			query.select('.goodsClassTop').boundingClientRect(rect => {
				this.topThreshold = rect.top;
			}).exec();
		},
		onPageScroll(e) {
			// 监听页面滚动事件
			if (e.scrollTop >= this.topThreshold) {
				this.isSticky = true; // 当页面滚动超过阈值时，激活吸顶
			} else {
				this.isSticky = false; // 未超过阈值，取消吸顶
			}
		},
	}
</script>


<style>
	page {
		background: #f8f8f8;
	}

	.indexTopPositionConSearch {
		width: 100%;
		float: left;
		background: #caffd4;
		padding: 20rpx 5% 30rpx;
		box-sizing: border-box;
	}

	.indexTopPositionConSearchInput {
		width: 80%;
		float: left;
		margin-left: 6px;
		background: #fff;
		padding: 15rpx 20rpx;
		border-radius: 50px;
		box-sizing: border-box;
	}

	.indexTopPositionConSearchInput image {
		width: 35rpx;
		float: left;
	}

	.indexTopPositionConSearchInput input {
		width: calc(100% - 60rpx);
		float: left;
		margin-left: 20rpx;
		font-size: 12px;
		margin-top: 4rpx;
	}

	.indexTopPositionConSearchMesR {
		float: right;
		margin-top: 20rpx;
	}

	.indexTopPositionConBanner image {
		width: 100%;
		float: left;
	}

	.indexTopPositionConSearchMesNew {
		float: right;
		width: 20rpx;
		height: 20rpx;
		border-radius: 50%;
		margin-top: 20rpx;
		background: #f00;
		margin-left: 10rpx;
	}

	.indexTopPositionConSearchMes {
		width: 40rpx;
		float: right;
	}

	.goodsClassTop {
		width: 100%;
		float: left;
	}

	.goodsClassList {
		white-space: nowrap;
		width: 100%;
		float: left;
		padding: 30rpx;
		box-sizing: border-box;
		padding-bottom: 20rpx;
		background: #fff;
	}

	.goodsClassListLi {
		display: inline-block;
		margin-right: 30rpx;
		border-radius: 4px;
		width: 120rpx;
		text-align: center;
	}

	.goodsClassListLiLine {
		width: 60rpx;
		float: left;
		height: 6px;
		border-radius: 10px;
		background: #ffdb00;
		margin-left: 30rpx;
		margin-top: 10rpx;
	}

	.devicebtn {
		width: 100%;
		display: flex;
		justify-content: center;
	}

	.devicebtn_1 {
		width: 30%;
		margin: 40rpx 2%;
		background: #e8e8e8;
		color: #222;
		font-size: 30rpx;
		height: 80rpx;
		line-height: 80rpx;
		text-align: center;
		border-radius: 10rpx;
	}

	.devicebtn_2 {
		width: 30%;
		margin: 40rpx 2%;
		background: #ffea68;
		color: #b60000;
		font-size: 30rpx;
		height: 80rpx;
		line-height: 80rpx;
		text-align: center;
		border-radius: 10rpx;
	}



	.goodsUl {
		width: 100%;
		float: left;
		margin-top: 20rpx;
		padding-bottom: 60rpx;
	}

	.goodsUlLi {
		width: 45.5%;
		float: left;
		margin-top: 30rpx;
		margin-left: 3%;
		background: #fff;
		box-shadow: 0 4px 10px #eee;
		border-radius: 30rpx;
	}

	.goodsUlLiCon {
		width: 100%;
		float: left;
		padding: 20rpx;
		box-sizing: border-box;
	}

	.goodsUlLiTit {
		width: 100%;
		float: left;
		color: #222;
		font-size: 30rpx;
		line-height: 46rpx;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
		text-overflow: ellipsis;

	}

	.goodsUlLiImg {
		width: 100%;
		float: left;
		height: 360rpx;
		border-radius: 30rpx 30rpx 0 0;
	}

	.goodsUlLiHot {
		width: 100%;
		float: left;
		margin-top: 15rpx;
	}

	.goodsUlLiHotImg {
		width: 34rpx;
		float: left;
	}

	.goodsUlLiHot_t1 {
		float: left;
		margin-left: 10rpx;
		font-size: 30rpx;
		color: #222;
	}

	.goodsUlLiPrice {
		width: 100%;
		float: left;
		margin-top: 20rpx;
		font-size: 30rpx;
		color: #f00;
	}

	.goodsUlLiPrice text {
		padding: 0 10rpx;
		float: left;
		background: #ffc9c9;
		color: #f00;
		font-size: 30rpx;
		border-radius: 4px;
		margin-right: 10rpx;
	}

	.sticky {
		position: fixed;
		top: 0;
		width: 100%;
		background-color: #fff;
		z-index: 3;
		/* 保证吸顶元素在最前面 */
		box-shadow: 0 4px 10rpx rgba(205, 195, 140, 0.2);
	}
	
	
	
	.leasingUl {
		width: 90%;
		float: left;
		margin-left: 5%;
		padding-bottom: 50rpx;
	}
	
	.leasingUlLi {
		width: 100%;
		float: left;
		padding: 30rpx;
		box-sizing: border-box;
		background: #fff;
		border-radius: 20rpx;
		box-shadow: 0 6rpx 20rpx #eee;
		margin-top: 30rpx;
	}
	
	.leasingUlLiImg {
		width: 180rpx;
		height: 180rpx;
		float: left;
		border-radius: 20rpx;
	}
	
	.leasingUlLiTxt {
		width: calc(100% - 200rpx);
		float: right;
	}
	
	.leasingUlLiTxt_t1 {
		width: 100%;
		float: left;
		font-size: 32rpx;
		color: #222;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		word-break: break-all;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.leasingUlLiTxt_t2{
		width: 100%;
		float: left;
		font-size: 30rpx;
		color: #999;
		margin-top: 6rpx;
	}
	.indexServiceLiTT1Label{
		width: 100%;
		float: left;
		margin-top: 10rpx;
	}
	.indexServiceLiTT1Label text{
		padding: 5rpx 20rpx;
		color: #fff;
		border-radius: 100px;
		float: left;
		margin-right: 10rpx;
		font-size: 14px;
		text-shadow: 0px 1px 1px #bbb;
	}
	
</style>