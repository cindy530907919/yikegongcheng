<template>
  <view>
    <view class="indexTopPosition">
		<image src="../../static/images/indexBack.png" class="indexTopPositionBack" mode="widthFix"></image>
    	<view class="indexTopPositionCon">
    		<view class="indexTopPositionConSearch">
				<view class="indexTopPositionConSearchCity">
					<image src="../../static/images/index_1.png" class="indexTopPositionConSearchCityIcon" mode="widthFix"></image>
					<uni-data-picker class="indexTopPositionConSearchCityPick" :localdata="items" popup-title="城市" @change="onchange" @nodeclick="onnodeclick"></uni-data-picker>
				</view>
    			<view class="indexTopPositionConSearchInput">
    				<image src="../../static/images/index_6.png" mode="widthFix"></image>
					<input type="text" placeholder="请输入商品名称1" />
    			</view>
				<image src="../../../../static/images/index_2.png" class="indexTopPositionConSearchMes" mode="widthFix"></image>
    		</view>
			
			  
    	</view>
    </view>
  </view>
</template>

<script>
import IndexApi from '../../api/index';
export default {
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
		
	
	}
  },
  methods: {
	onchange(e) {
	   const value = e.detail.value;
	  
	},
  },
  mounted() {
    
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
		min-height: 600rpx;
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
		margin-top: 16rpx;
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
		width: 40rpx;
		float: left;
	}
	.indexTopPositionConSearchCityPick{
		float: left;
		margin-left: 10px;
	}
	.indexTopPositionConSearchInput{
		width: 55%;
		float: left;
		margin-left: 10px;
		background: #fff;
		padding: 20rpx  30rpx;
		border-radius: 50px;
		box-sizing: border-box;
	}
	.indexTopPositionConSearchInput image{
		width: 40rpx;
		float: left;
	}
	.indexTopPositionConSearchInput input{
		width: calc(100% - 60rpx);
		float: left;
		margin-left: 20rpx;
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
	
	.container {
	  display: flex;
	  flex-direction: column;
	  align-items: center;
	  justify-content: center;
	}
	
	.swiper-box {
	  height: 300px;
	  width: 100%;
	}
	.swiper-image {
	  width: 100%;
	  height: 100%;
	}
	.onChangeBanner{
		width: 100%;
		float: left;
	}
</style>