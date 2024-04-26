<template>
  <view>
    <view class="indexTopPosition">
		<image src="../../static/images/indexBack.png" class="indexTopPositionBack" mode="widthFix"></image>
    	<view class="indexTopPositionCon">
    		<view class="indexTopPositionConSearch">
				<!-- 选择城市 -->
				<view class="indexTopPositionConSearchCity">
					<image src="../../static/images/index_1.png" class="indexTopPositionConSearchCityIcon" mode="widthFix"></image>
					<uni-data-picker :clear-icon="false" class="indexTopPositionConSearchCityPick" :localdata="items" popup-title="城市" @change="onchange"></uni-data-picker>
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
				<!-- 轮播 -->
				<uni-swiper-dot :info="info" :current="current" field="content" :mode="mode" class="indexTopPositionConBanner">
					<swiper class="swiper-box" @change="change">
						<swiper-item v-for="(item ,index) in info" :key="index">
							<view class="swiper-item">
								<image :src="item.content"></image>
							</view>
						</swiper-item>
					</swiper>
				</uni-swiper-dot>
    		</view>
    	</view>
    </view>
	<!-- 板块图片 -->
	<view class="indexFourClass">
		<navigator url="">
		<view class="indexFourClassLi  indexFourClassLiY">
			<text>配件商城</text>
			<image src="../../static/images/index_3.png"></image>
		</view>
		</navigator>
		<navigator url="">
		<view class="indexFourClassLi indexFourClassLiG">
			<text>车辆租赁</text>
			<image src="../../static/images/index_3.png"></image>
		</view>
		</navigator>
	</view>
	<!-- 适时任务 -->
	<view class="indexNewTask">
		<image src="../../static/images/index_5.png" mode="widthFix" class="indexNewTaskImg"></image>
		<view class="baishanLine"></view>
	    <scroll-view class="scroll-text" scroll-y :style="{ height: scrollHeight + 'px' }" @scrolltolower="onScrollToLower">
			<view class="scroll-item" v-for="(item, index) in scrollText" :key="index" >
				{{ item }}
			</view>
	    </scroll-view>
	</view>
	<!-- 板块图片 -->
	<view class="indexFourClass">
		<navigator url="">
	  	<view class="indexFourClassLi indexFourClassLiB">
	  		<text>设备商城</text>
	  		<image src="../../static/images/index_3.png"></image>
	  	</view>
		</navigator>
		<navigator url="">
	  	<view class="indexFourClassLi indexFourClassLiP">
	  		<text>本地服务</text>
	  		<image src="../../static/images/index_3.png"></image>
	  	</view>
		</navigator>
	</view>
	<!-- 文字菜单 -->
	<view class="indexNewTask">
		<navigator url="" class="indexMeunTextLi">配件</navigator>
		<navigator url="" class="indexMeunTextLi">设备</navigator>
		<navigator url="" class="indexMeunTextLi">招聘求职</navigator>
		<navigator url="" class="indexMeunTextLi">论坛</navigator>
		<navigator url="" class="indexMeunTextLi"> 充值</navigator>
	</view>
	<!-- 本地服务 -->
	<view class="indexService">
		<navigator url=""  class="indexServiceLi">
			<image src="../../static/images/index_7.png" class="indexServiceLiImg"></image>
			<view class="indexServiceLiT">
				<text class="indexServiceLiTT1">本地服务标题本地服务标题本地服务标题本地服务标题本地服务标题本地服务标题本地服务标题本地服务标题</text>
				<text class="indexServiceLiTT2">发布人：谁谁谁</text>
				<view class="indexServiceLiTT1Label">
					<text style="background: #71e58d;">电工</text>
					<text style="background: #ffdb00;">车主</text>
				</view>
			</view>
		</navigator>
		<navigator url=""  class="indexServiceLi">
			<image src="../../static/images/index_7.png" class="indexServiceLiImg"></image>
			<view class="indexServiceLiT">
				<text class="indexServiceLiTT1">本地服务标题本地服务标题本地服务标题本地服务标题本地服务标题本地服务标题本地服务标题本地服务标题</text>
				<text class="indexServiceLiTT2">发布人：谁谁谁</text>
				<view class="indexServiceLiTT1Label">
					<text style="background: #71e58d;">电工</text>
					<text style="background: #ffdb00;">车主</text>
				</view>
			</view>
		</navigator>
		<navigator url=""  class="indexServiceLi">
			<image src="../../static/images/index_7.png" class="indexServiceLiImg"></image>
			<view class="indexServiceLiT">
				<text class="indexServiceLiTT1">本地服务标题本地服务标题本地服务标题本地服务标题本地服务标题本地服务标题本地服务标题本地服务标题</text>
				<text class="indexServiceLiTT2">发布人：谁谁谁</text>
				<view class="indexServiceLiTT1Label">
					<text style="background: #71e58d;">电工</text>
					<text style="background: #ffdb00;">车主</text>
				</view>
			</view>
		</navigator>
		<navigator url=""  class="indexServiceLi">
			<image src="../../static/images/index_7.png" class="indexServiceLiImg"></image>
			<view class="indexServiceLiT">
				<text class="indexServiceLiTT1">本地服务标题本地服务标题本地服务标题本地服务标题本地服务标题本地服务标题本地服务标题本地服务标题</text>
				<text class="indexServiceLiTT2">发布人：谁谁谁</text>
				<view class="indexServiceLiTT1Label">
					<text style="background: #71e58d;">电工</text>
					<text style="background: #ffdb00;">车主</text>
				</view>
			</view>
		</navigator>
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
		   
		activePage: 0,   
		info: [{
			content: '../../static/images/banner.png'
		}, {
			content: '../../static/images/banner.png'
		}, {
			content: '../../static/images/banner.png'
		}],
		current: 0,
		mode: 'round',
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
	   onchange(e) {
	      const value = e.detail.value;
	     
	   },
	   change(e) {
	   	this.current = e.detail.current;
	   },
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
		background: #f3feee;
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
	.indexTopPositionConBanner{
		width: 100%;
		float: left;
		margin-top: 20rpx;
	}
	.swiper-box {
		height: 380rpx;
	}
	.swiper-item {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 340rpx;
		color: #fff;		
		border-radius: 30rpx;
	}
	.swiper-item image{
		border-radius: 30rpx;
		height: 300rpx;
	}
	
	.indexNewTask {
	  width: 90%;
	  overflow: hidden;
	  float: left;
	  margin: 30rpx 5% 0;
	  background: #fff;
	  border-radius: 20rpx;
	  padding: 30rpx;
	  box-sizing: border-box;
	  box-shadow: 0px 4px 10px #eee;
	}
	.indexNewTaskImg{
		width: 90rpx;
		float: left;
	}
	.baishanLine{
		width: 5rpx;
		height: 70rpx;
		float: left;
		margin: 8rpx 30rpx;
		background: #ffdb00;
		border-radius: 10px;
	}
	.scroll-text {
	  width: calc(100% - 180rpx);
	  padding: 0;
	  float: left;
	  margin-top: 4rpx;
	}
	.scroll-item {
	  display: inline-block;
	  padding: 0;
	  margin: 0;
	  line-height: 20px;
	  width: 100%;
	  font-size: 16px;
	  color: #222;
	  display: -webkit-box;
	  -webkit-box-orient: vertical;
	  -webkit-line-clamp: 2;
	  overflow: hidden;
	}
	.indexFourClass{
		width: 100%;
		float: left;
		margin-top: 30rpx;
	}
	.indexFourClassLi{
		width: 42.5%;
		float: left;
		margin-left: 5%;
	}
	.indexFourClassLiY text{
		width: 100%;
		float: left;
		padding: 20rpx 0;
		text-align: center;
		background: #ffdb00;
		border-radius: 20rpx 20rpx 0 0;
		color: #fff;
	}
	.indexFourClassLiY image{
		width: calc(100% - 4px);
		float: left;
		height: 400rpx;
		border: 2px dashed #ffdb00;
		border-top: none;
	}
	.indexFourClassLiG text{
		width: 100%;
		float: left;
		padding: 20rpx 0;
		text-align: center;
		background: #aee093;
		border-radius: 20rpx 20rpx 0 0;
		color: #fff;
	}
	.indexFourClassLiG image{
		width: calc(100% - 4px);
		float: left;
		height: 400rpx;
		border-top: none;
		border: 2px dashed #aee093;
	}
	.indexFourClassLiB text{
		width: 100%;
		float: left;
		padding: 20rpx 0;
		text-align: center;
		background: #80d4ff;
		border-radius: 20rpx 20rpx 0 0;
		color: #fff;
	}
	.indexFourClassLiB image{
		width: calc(100% - 4px);
		float: left;
		height: 400rpx;
		border-top: none;
		border: 2px dashed #80d4ff;
	}
	.indexFourClassLiP text{
		width: 100%;
		float: left;
		padding: 20rpx 0;
		text-align: center;
		background: #c9b2f7;
		border-radius: 20rpx 20rpx 0 0;
		color: #fff;
	}
	.indexFourClassLiP image{
		width: calc(100% - 4px);
		float: left;
		height: 400rpx;
		border-top: none;
		border: 2px dashed #c9b2f7;
	}
	.indexMeunTextLi{
		width: 20%;
		float: left;
		text-align: center;
		font-size: 14px;
		color: #222;
	}
	.indexService{
		width: 90%;
		float: left;
		margin-left: 5%;
		padding-bottom: 50rpx;
	}
	.indexServiceLi{
		width: 100%;
		float: left;
		margin-top: 20rpx;
		background: #fff;
		box-shadow: 0 2px 10px #eee;
		border-radius: 20rpx;
		padding: 20rpx;
		box-sizing: border-box;
	}
	.indexServiceLiImg{
		width: 160rpx;
		height: 160rpx;
		float: left;
		border-radius: 20rpx;
	}
	.indexServiceLiT{
		width: calc(100% - 180rpx);
		float: right;
	}
	.indexServiceLiTT1{
		width: 100%;
		float: left;
		font-size: 16px;
		color: #222;
		white-space: nowrap; /* 确保文本在一行内显示 */
		overflow: hidden; /* 隐藏超出容器的文本 */
		text-overflow: ellipsis; /* 使用省略号表示被截断的文本 */
		margin-top: 8rpx;
	}
	.indexServiceLiTT2{
		width: 100%;
		float: left;
		font-size: 14px;
		color: #999;
		margin-top: 5rpx;
	}
	.indexServiceLiTT1Label{
		width: 100%;
		float: left;
		margin-top: 10rpx;
	}
	.indexServiceLiTT1Label text{
		padding: 2rpx 20rpx;
		color: #fff;
		border-radius: 100px;
		float: left;
		margin-right: 10rpx;
		font-size: 14px;
		text-shadow: 0px 1px 1px #bbb;
	}
</style>