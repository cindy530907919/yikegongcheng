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
						<text class="fourmRecommendBotLiTxt_t4">200万发帖</text>
						<text class="fourmRecommendBotLiTxt_t3">HOT</text>
					</view>
				</view>
			</view>
			<view class="fourmRecommendBotLi">
				<image src="../../static/images/forum_2.png" class="fourmRecommendBotLiImg"></image>
				<view class="fourmRecommendBotLiTxt">
					<text class="fourmRecommendBotLiTxt_t1">失信老赖</text>
					<view class="fourmRecommendBotLiTxt_t2">
						<text class="fourmRecommendBotLiTxt_t4">200万发帖</text>
						<text class="fourmRecommendBotLiTxt_t3">HOT</text>
					</view>
				</view>
			</view>
			
			<view class="fourmRecommendBotLi">
				<image src="../../static/images/forum_2.png" class="fourmRecommendBotLiImg"></image>
				<view class="fourmRecommendBotLiTxt">
					<text class="fourmRecommendBotLiTxt_t1">失信老赖</text>
					<view class="fourmRecommendBotLiTxt_t2">
						<text class="fourmRecommendBotLiTxt_t4">200万发帖</text>
						<text class="fourmRecommendBotLiTxt_t3">HOT</text>
					</view>
				</view>
			</view>
			<view class="fourmRecommendBotLi">
				<image src="../../static/images/forum_2.png" class="fourmRecommendBotLiImg"></image>
				<view class="fourmRecommendBotLiTxt">
					<text class="fourmRecommendBotLiTxt_t1">失信老赖</text>
					<view class="fourmRecommendBotLiTxt_t2">
						<text class="fourmRecommendBotLiTxt_t4">200万发帖</text>
						<text class="fourmRecommendBotLiTxt_t3">HOT</text>
					</view>
				</view>
			</view>
			<view class="fourmRecommendBotLi">
				<image src="../../static/images/forum_2.png" class="fourmRecommendBotLiImg"></image>
				<view class="fourmRecommendBotLiTxt">
					<text class="fourmRecommendBotLiTxt_t1">失信老赖</text>
					<view class="fourmRecommendBotLiTxt_t2">
						<text class="fourmRecommendBotLiTxt_t4">200万发帖</text>
						<text class="fourmRecommendBotLiTxt_t3">HOT</text>
					</view>
				</view>
			</view>
			<view class="fourmRecommendBotLi">
				<image src="../../static/images/forum_2.png" class="fourmRecommendBotLiImg"></image>
				<view class="fourmRecommendBotLiTxt">
					<text class="fourmRecommendBotLiTxt_t1">失信老赖</text>
					<view class="fourmRecommendBotLiTxt_t2">
						<text class="fourmRecommendBotLiTxt_t4">200万发帖</text>
						<text class="fourmRecommendBotLiTxt_t3">HOT</text>
					</view>
				</view>
			</view>
		</view>
		<!-- 友圈公告 -->
		<view class="indexNewTask" ref="scrollView">
			<image src="../../static/images/forum_3.png" mode="widthFix" class="indexNewTaskImg"></image>
		    <view class="scroll-text"  @scrolltolower="onScrollToLower">
				<view class="scroll-item" v-for="(item, index) in scrollText" :key="index" >
					友圈公告：{{ item }}
				</view>
		    </view>
		</view>
		<view class="forumClass">
			<scroll-view class="scroll-view" scroll-x="true">
				<view class="forumClassLi">
					<text>全部分类</text>
					<view class="forumClassLiLine"></view>
				</view>
				<view class="forumClassLi">
					<text>全部分类</text>
				</view>
				<view class="forumClassLi">
					<text>全部分类</text>
				</view>
				<view class="forumClassLi">
					<text>全部分类</text>
				</view>
				<view class="forumClassLi">
					<text>全部分类</text>
				</view>
				<view class="forumClassLi">
					<text>全部分类</text>
				</view>
				<view class="forumClassLi">
					<text>全部分类</text>
				</view>
				<view class="forumClassLi">
					<text>全部分类</text>
				</view>
				<view class="forumClassLi">
					<text>全部分类</text>
				</view>
			</scroll-view>
			
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
		scrollText: ['哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈', '嘿嘿红红火火恍恍惚惚哈哈哈哈哈哈嘿嘿红红火火恍恍惚惚哈哈哈哈哈哈', '红红火火嘿嘿红红火火恍恍惚惚哈哈哈哈哈哈', '啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊'],
		scrollHeight: 40, // 滚动区域的高度，根据实际情况调整
		scrollTimer: null, // 定时器
	}
  },
    mounted() {
		this.startScroll();
    },
    beforeDestroy() {
      clearInterval(this.scrollTimer); // 组件销毁前清除定时器
    },
    methods: {
		startScroll() {
		  this.scrollTimer = setInterval(() => {
			this.scrollText.push(this.scrollText.shift()); // 循环滚动文字
			this.$forceUpdate(); // 强制更新视图
		  }, 8000); // 8秒切换一次
		},
		onScrollToLower() {
		  // 当滚动到底部时，强制滚动到顶部
		  this.$refs.scrollView.scrollTo(0, 0);
		},
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
		z-index: 0;
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
		z-index: 1;
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
		width: calc(100% - 24rpx);
		float: left;
		padding: 0 10rpx;
		box-sizing: border-box;
		height: 80rpx;
		background: #ffb955;
	}
	.fourmRecommendTopImg2{
		width: 55rpx;
		float: left;
		margin-top: 15rpx;
	}
	.fourmRecommendTopT1{
		font-size: 34rpx;
		float: left;
		margin-left: 30rpx;
		color: #222;
		margin-top: 10px;
	}
	.fourmRecommendBot{
		width:calc(100% - 22rpx);
		float: left;
		padding: 10rpx 10rpx 28rpx;
		background: #fff;
		border: 1px solid #ffb955;
	}
	.fourmRecommendBotLi{
		width: 47%;
		float: left;
		margin-left: 2%;
		margin-top: 20rpx;
	}
	.fourmRecommendBotLiImg{
		width: 70rpx;
		height: 70rpx;
		float: left;
		border-radius: 10rpx;
	}
	.fourmRecommendBotLiTxt{
		width: calc(100% - 80rpx);
		float: right;
	}
	.fourmRecommendBotLiTxt_t1{
		font-size: 32rpx;
		float: left;
		color: #222;
		width: 100%;
	}
	.fourmRecommendBotLiTxt_t2{
		float: left;
		width: 100%;
	}
	.fourmRecommendBotLiTxt_t4{
		color: #999;
		font-size: 28rpx;
		float: left;
	}
	.fourmRecommendBotLiTxt_t3{
		padding: 0rpx 2rpx;
		background: #ffdb00;
		color: #f00;
		font-size: 22rpx;
		border-radius: 4px;
		float: left;
		margin-left: 8rpx;
		border: 1px solid #f00;
		margin-top: 8rpx;
	}
	/* 公告 */
	.indexNewTask{
		width: 100%;
		float: left;
		border: 1px solid #c6bb7a;
		border-radius: 80px;
		padding: 10rpx 30rpx;
		box-sizing: border-box;
		margin-top: 30rpx;
	}
	.indexNewTaskImg{
		width: 40rpx;
		float: left;
		margin-top: 11rpx;
		margin-right: 20rpx;
	}
	
	.scroll-text {
	  width: calc(100% - 60rpx);
	  padding: 0;
	  float: left;
	  margin-top: 4rpx;
	  height: 30px;
	  overflow: hidden;
	  line-height: 30px;
	}
	.scroll-item {
	  display: inline-block;
	  padding: 0;
	  margin: 0;
	  line-height: 30px;
	  width: 100%;
	  font-size: 16px;
	  color: #222;
	  overflow: hidden;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	}
	.forumClass{
		width: 100%;
		float: left;
	}
	 .scroll-view {
		margin: 30rpx 0 20rpx;
	    white-space: nowrap; /* 使所有子元素在一行显示 */
	    overflow-x: auto; /* 允许在X轴方向上滚动 */
	    width: 100%; /* 视图宽度设置为100% */
	  }
	  .forumClassLi {
	    display: inline-block; /* 设置为内联块，保持在一行 */
	    margin-right: 20px; /* 在分类之间添加一些间隔 */
	  }
	  .forumClassLi text{
		  font-size: 30rpx;
		  color: #222
	  }
	  .forumClassLiLine {
	    height: 6rpx; /* 线条高度 */
	    background-color: #ffdb00; /* 线条颜色 */
	    width: 60rpx; /* 线条宽度 */
		margin-left: calc(50% - 30rpx);
		margin-top: 10rpx;
		border-radius: 10px;
	  }
	  
</style>