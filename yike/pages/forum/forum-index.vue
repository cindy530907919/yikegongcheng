<template>
  <view class="">
	  <view class="indexTopPosition">
		<image src="../../static/images/forumBack.png" class="indexTopPositionBack" mode="widthFix"></image>
		<view class="indexTopPositionCon">
			<view class="indexTopPositionConSearch">
				<!-- 选择城市 -->
				<view class="indexTopPositionConSearchCity">
					<image src="../../static/images/index_1.png" class="indexTopPositionConSearchCityIcon" mode="widthFix"></image>
					<uni-data-picker :clear-icon="false" class="indexTopPositionConSearchCityPick" :localdata="items" popup-title="城市"></uni-data-picker>
				</view>
				<!-- 搜索 -->
				<view class="indexTopPositionConSearchInput">
					<image src="../../static/images/index_6.png" mode="widthFix"></image>
					<input type="text" placeholder="请输入商品名称" />
				</view>
				<!-- 消息 -->
				<view class="indexTopPositionConSearchMesR">
					<view class="indexTopPositionConSearchMesNew"></view>
					<image src="../../static/images/index_2.png" class="indexTopPositionConSearchMes" mode="widthFix"></image>
				</view>
			</view>
		</view>
	  </view>
	  <view class="fourmRecommend">
	  	<view class="fourmRecommendTop">
			<image src="../../static/images/forum_16.png"  class="fourmRecommendTopImg1"></image>
			<view class="fourmRecommendTopLine">
				<image src="../../static/images/forum_1.png" mode="widthFix" class="fourmRecommendTopImg2"></image>
				<view class="fourmRecommendTopT1">吉林长春 · 推荐圈子</view>
			</view>
	  	</view>
		<view class="fourmRecommendBot">
			<view class="fourmRecommendBotLi">
				<image src="../../static/images/forum_2.png" class="fourmRecommendBotLiImg"></image>
				<view class="fourmRecommendBotLiTxt">
					<text class="fourmRecommendBotLiTxt_t1">失信老赖</text>
					<view class="fourmRecommendBotLiTxt_t2">
						200万发帖
						<text class="fourmRecommendBotLiTxt_t3">HOT</text>
					</view>
				</view>
			</view>
		</view>
	  </view>
	  
	<custom-tabs-bar :activePage="activePage"></custom-tabs-bar> <!-- current属性指示哪个tab是活跃的 -->
  </view>
</template>

<script>
import IndexApi from '../../api/index';
import CustomTabsBar from '@/components/custom-tabs-bar/custom-tabs-bar.vue';
export default {
	components: {
		CustomTabsBar
	},
  data() {
   return {
		
		items: [{
		   	text: "吉林",
		   	value: "1-0",
		   	children: [
		   	   {
		   		 text: "长春",
		   		 value: "1-1"
		   	   },
		   	   {
		   		 text: "四平",
		   		 value: "1-2"
		   	   }
		   	]
		      },
		      {
		   	 text: "辽宁",
		   	 value: "2-0"
		      },
		      {
		   	 text: "黑龙江",
		   	 value: "3-0"
		}],
		activePage: 1,   
		
	}
  },
    mounted() {
		
    },
    beforeDestroy() {
      
	},
    methods: {
		
    }
};
</script>
<style>
	page{
		background: #fffbe4;
	}
	.indexTopPosition{
		width: 100%;
		float: left;
		position: relative;
		min-height: 500rpx;
	}
	.indexTopPositionBack{
		width: 100%;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 1;
	}
	.indexTopPositionCon{
		width: 100%;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 2;
	}
	.indexTopPositionConSearch{
		width: 90%;
		float: left;
		margin: 20px 5%;
	}
	.indexTopPositionConSearchCity{
		float: left;
		margin-top: 10rpx;
	}
	.input-value-border{
		border: none !important;
		margin:0 0 !important;
		padding: 0 0 !important;
	}
	.input-value{
		height: 44rpx !important;
	}
	.placeholder{
		color: #222 !important;
	}
	.indexTopPositionConSearchCityIcon{
		width: 36rpx;
		float: left;
	}
	.indexTopPositionConSearchCityPick{
		float: left;
		margin-left: 4px;
	}
	.indexTopPositionConSearchInput{
		width: 50%;
		float: left;
		margin-left: 6px;
		background: #fff;
		padding: 15rpx  20rpx;
		border-radius: 50px;
		box-sizing: border-box;
	}
	.indexTopPositionConSearchInput image{
		width: 35rpx;
		float: left;
	}
	.indexTopPositionConSearchInput input{
		width: calc(100% - 60rpx);
		float: left;
		margin-left: 20rpx;
		font-size: 12px;
		margin-top: 4rpx;
	}
	.indexTopPositionConSearchMesR{
		float: right;
		margin-top: 20rpx;
	}
	
	.indexTopPositionConBanner image{
		width: 100%;
		float: left;
	}
	.indexTopPositionConSearchMesNew{
		float: right;
		width: 20rpx;
		height: 20rpx;
		border-radius: 50%;
		margin-top: 20rpx;
		background: #f00;
		margin-left: 10rpx;
	}
	.indexTopPositionConSearchMes{
		width: 40rpx;
		float: right;
	}
	.title {
			font-size: 14px;
			font-weight: bold;
			margin: 20px 0 5px 0;
		}
	
		.data-pickerview {
			height: 400px;
			border: 1px #e5e5e5 solid;
		}
	
		 .popper__arrow {
	    top: -6px;
	    left: 50%;
	    margin-right: 3px;
	    border-top-width: 0;
	    border-bottom-color: #EBEEF5;
	}
	 .popper__arrow {
	    top: -6px;
	    left: 50%;
	    margin-right: 3px;
	    border-top-width: 0;
	    border-bottom-color: #EBEEF5;
	}
	/* 推荐 */
	.fourmRecommend{
		width: 90%;
		position: absolute;
		left: 5%;
		top: 150rpx;
	}
	.fourmRecommendTop{
		width: 100%;
		float: left;
	}
	.fourmRecommendTopImg1{
		width: 24rpx;
		float: left;
		height: 80rpx;
	}
	.fourmRecommendTopLine{
		width: calc(100% - 32rpx);
		float: left;
		padding: 0 20rpx;
		box-sizing: border-box;
		border: 4rpx solid #000;
		height: 72;
		border-left: none;
		background: #ffdb00;
	}
	.fourmRecommendTopImg2{
		width: 50rpx;
		float: left;
		margin-top: 10rpx;
	}
	.fourmRecommendTopT1{
		font-size: 34rpx;
		float: left;
		margin-left: 30rpx;
		color: #222;
		line-height: 72rpx;
		
	}
	.fourmRecommendBot{
		width: calc(100% - 8rpx);
		float: left;
		padding: 30rpx;
		box-sizing: border-box;
		background: #fff;
		border: 4rpx solid #000;
		border-top: none;
	}
</style>