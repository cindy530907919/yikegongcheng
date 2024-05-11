<template>
	<!-- 机械租赁 -->
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
				activePage: 3
			};
		},
		methods: {
			handleClick(id) {
				this.activeId = id; // 设置当前活跃id为点击的id
			},
			goToLeasing() {
				// 指定跳转的路径
				uni.navigateTo({
					url: '../machinery/leasing-con'
				});
			}
		},
	}
</script>

<style>
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
		background: #fff;
	}

	.goodsClassList {
		white-space: nowrap;
		width: 100%;
		float: left;
		padding: 30rpx;
		box-sizing: border-box;
		border-bottom: 1px solid #f8f8f8;
		padding-bottom: 20rpx;
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

	.goodsClassTopScreen {
		width: 100%;
		float: left;
		padding: 30rpx;
		box-sizing: border-box;
	}

	.goodsClassTopScreen_t1 {
		float: left;
		font-size: 30rpx;
		color: #222;
	}

	.goodsClassTopScreen_t2 {
		float: right;
		font-size: 30rpx;
		color: #222;
		margin-left: 30rpx;
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