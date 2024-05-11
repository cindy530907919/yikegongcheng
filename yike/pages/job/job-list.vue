<template>
	<!-- 招牌求职 -->
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
		<view class="jobScreen">
			<picker mode="selector" :range="jobTypes" @change="onJobTypeChange">
				<view class="jobScreenPicker">
					{{selectedJobType || '招牌列表'}}
				
				<uni-icons class="jobScreenPickerIcon" type="down" size="16" color="#222"></uni-icons>
				</view>
			</picker>
			<picker mode="selector" :range="experienceLevels" @change="onExperienceChange">
				<view class="jobScreenPicker">
					{{selectedExperience || '选择职业'}}
					<uni-icons class="jobScreenPickerIcon" type="down" size="16" color="#222"></uni-icons>
				</view>
			</picker>
		</view>
		<view class="jobAdd" @tap="goToJobPus">
			<uni-icons type="plusempty" font-size="60" color="#fff"></uni-icons>
		</view>
		<view class="leasingUl">
			<view class="leasingUlLi" @tap="goToLeasing">
				<view class="leasingUlLiTxt">
					<text class="leasingUlLiTxt_t1">吉林 长春 挖掘机租赁，2020年新车</text>
					<text class="leasingUlLiTxt_t2">发布人：这是一个名字</text>
					<view class="indexServiceLiTT1Label">
						<text style="background: #71e58d;">电工</text>
						<text style="background: #ffdb00;">车主</text>
					</view>
					<view class="leasingConTop_t3">
						<image src="../../static/images/leasing_1.png" mode="widthFix"></image>
						<text>浏览量：12548</text>
					</view>
					<view class="leasingConTop_t4">发布时间：2024-04-15  16:09:32</view>
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
				activePage: 3,
				jobTypes: ['招牌列表', '求职列表'],
				experienceLevels: ['软件开发', '数据分析', '产品经理', '市场营销'],
				selectedJobType: '',
				selectedExperience: ''
			};
		},
		methods: {
			handleClick(id) {
				this.activeId = id; // 设置当前活跃id为点击的id
			},
			goToJobPus() {
				// 指定跳转的路径
				uni.navigateTo({
					url: '../job/job-pus'
				});
			},
			onJobTypeChange(event) {
				this.selectedJobType = this.jobTypes[event.detail.value];
			},
			onExperienceChange(event) {
				this.selectedExperience = this.experienceLevels[event.detail.value];
			}
		},
	}
</script>

<style>
	page{
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
		background: #fff;
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
	.jobAdd{
		padding: 20rpx;
		position: fixed;
		right: 5%;
		bottom: 20vh;
		background: #0190ff;
		border-radius: 40rpx;
		z-index:99;
		font-weight: bold;
	}
	.leasingUl {
		width: 90%;
		float: left;
		margin-left: 5%;
		margin-bottom: 150rpx;
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

	.leasingUlLiTxt {
		width: 100%;
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

	.leasingUlLiTxt_t2 {
		width: 100%;
		float: left;
		font-size: 30rpx;
		color: #999;
		margin-top: 6rpx;
	}

	.indexServiceLiTT1Label {
		width: 100%;
		float: left;
		margin-top: 20rpx;
	}

	.indexServiceLiTT1Label text {
		padding: 5rpx 20rpx;
		color: #fff;
		border-radius: 100px;
		float: left;
		margin-right: 10rpx;
		font-size: 14px;
		text-shadow: 0px 1px 1px #bbb;
	}
	
	.jobScreen{
		width: 100%;
		float: left;
		background: #fff;
		padding: 30rpx 0;
	}
	.jobScreenPicker{
		width: 35%;
		float: left;
		text-align: center;
		font-size: 30rpx;
		color: #222;
	}
	.jobScreenPickerIcon{
		float: right;
		margin-right: 40rpx;
		margin-top: 4rpx;
	}
	.leasingConTop_t3{
		width: 100%;
		float: left;
		margin-top: 20rpx;
	}
	.leasingConTop_t3 image{
		width: 40rpx;
		float: left;
		margin-top: 5rpx;
	}
	.leasingConTop_t3 text{
		float: left;
		font-size: 30rpx;
		color: #222;
		margin-left: 20rpx;
	}
	.leasingConTop_t4{
		width: 100%;
		float: left;
		font-size: 30rpx;
		color: #999;
		margin-top: 10rpx;
	}
</style>