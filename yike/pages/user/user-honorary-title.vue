<template>
	<!-- 荣誉称号 -->
	<view class="">
		<scroll-view scroll-x="true" class="goodsClassList">
			<view v-for="item in items" :key="item.id" :class="{'active': item.id === activeId}"
				@click="handleClick(item.id)" class="goodsClassListLi">
				Item {{ item.id }}
				<!-- 显示额外的View当项目被选中 -->
				<view v-if="item.id === activeId" class="goodsClassListLiLine">
				</view>
			</view>
		</scroll-view>
		<view class="honoraryTit">*每位用户最多佩戴两个称号</view>
		<view class="honoraryUl">
			<view class="honoraryUlLi">
				<view class="honoraryUlLi_t1" style="background: #528bff;">司机</view>
				<view class="honoraryUlLi_t2 honoraryUlLi_t2On">已佩戴</view>
			</view>
			<view class="honoraryUlLi">
				<view class="honoraryUlLi_t1" style="background: #528bff;">司机</view>
				<view class="honoraryUlLi_t2">佩戴</view>
			</view>
			<view class="honoraryUlLi">
				<view class="honoraryUlLi_t1" style="background: #528bff;">司机</view>
				<view class="honoraryUlLi_t2">佩戴</view>
			</view>
			<view class="honoraryUlLi">
				<view class="honoraryUlLi_t1" style="background: #528bff;">司机</view>
				<view class="honoraryUlLi_t2">佩戴</view>
			</view>
			<view class="honoraryUlLi">
				<view class="honoraryUlLi_t1" style="background: #528bff;">司机</view>
				<view class="honoraryUlLi_t2 honoraryUlLi_t2On">已佩戴</view>
			</view>
			<view class="honoraryUlLi">
				<view class="honoraryUlLi_t1" style="background: #528bff;">司机</view>
				<view class="honoraryUlLi_t2">佩戴</view>
			</view>
			<view class="honoraryUlLi">
				<view class="honoraryUlLi_t1" style="background: #528bff;">司机</view>
				<view class="honoraryUlLi_t2">佩戴</view>
			</view>
			<view class="honoraryUlLi">
				<view class="honoraryUlLi_t1" style="background: #528bff;">司机</view>
				<view class="honoraryUlLi_t2">佩戴</view>
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
			};
		},
		methods: {
			handleClick(id) {
				this.activeId = id; // 设置当前活跃id为点击的id
			},
			
		},
	}
</script>

<style>
	.goodsClassList {
		white-space: nowrap;
		width: 100%;
		float: left;
		padding: 30rpx;
		box-sizing: border-box;
		border-bottom: 10rpx solid #f8f8f8;
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
	.honoraryTit{
		width: 90%;
		float: left;
		margin-top: 20rpx;
		color: #222;
		margin-left: 5%;
		font-size: 32rpx;
	}
	.honoraryUl{
		width: 100%;
		float: left;
		margin-top: 20rpx;
	}
	.honoraryUlLi{
		float: left;
		margin-right: 34rpx;
		margin-left: 34rpx;
		margin-top: 20rpx;
		width: 15%;
	}
	.honoraryUlLi_t1{
		padding: 10rpx 14rpx;
		color: #fff;
		border-radius: 6px;
		font-size: 30rpx;
		float: left;
		text-align: center;
		width: 100%;
	}
	.honoraryUlLi_t2{
		padding: 6rpx 14rpx;
		color: #222;
		font-size: 30rpx;
		float: left;
		text-align: center;
		width: 100%;
		margin-top: 6rpx;
	}
	.honoraryUlLi_t2On{
		color: #528bff;
	}
</style>