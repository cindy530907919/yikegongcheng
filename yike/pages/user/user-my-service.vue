<template>
	<!-- 我的服务 -->
	<view class="myInvitation">
		<view class="myInvitationLi">
			<view class="myInvitationLiT_1">
				<view v-show="showElement" class="myInvitationPup">
					<text>编辑</text>
					<text>删除</text>
				</view> 
				<text class="myInvitationLiT_1_1">帖子标题帖子标题帖子标题帖子标题帖子标题</text>
			</view>
			<view class="myInvitationLiT_2">2024-04-15  16:09:32</view>
			<view class="myInvitationLiT_3">
				<image src="../../static/images/forum_8.png" mode="widthFix"></image>
				<text>251</text>
			</view>
			<uni-icons class="myInvitationLiTIcon" type="more-filled" font-size="28" color="#222" @click="toggleElement"></uni-icons>
			<view class="myInvitationLiT_4">刷新置顶</view>
		</view>
	</view>
</template>

<script>
	export default {  
	  data() {  
	    return {  
	      showElement: false  
	    };  
	  },  
	  methods: {  
	    toggleElement() {  
	      this.showElement = !this.showElement;  
	    }  
	  }  
	};  
</script>

<style>
	.myInvitation{
		width: 90%;
		float: left;
		margin-left: 5%;
		margin-top: 10rpx;
		padding-bottom: 100rpx;
	}
	.myInvitationLi{
		width: 100%;
		float: left;
		margin-top: 30rpx;
		padding-bottom: 30rpx;
		border-bottom: 1px solid #f8f8f8;
		position: relative;
	}
	.myInvitationLiClass{
		float: left;
		font-size: 26rpx;
		color: #fff;
		background: #6c90fe;
		border-radius: 60px;
		padding: 5rpx 20rpx;
	}
	.myInvitationLiT_1{
		width: 100%;
		float: left;
	}
	.myInvitationLiT_1_1{
		width: 100%;
		float: left;
		font-size: 32rpx;
		font-weight: bold;
		color: #222;
		overflow: hidden; /* 隐藏溢出的文本 */ 
		white-space: nowrap; /* 防止文本换行 */ 
		text-overflow: ellipsis;
		margin-top: 20rpx;
	}
	
	.myInvitationLiTIcon{
		float: right;
		width: 60rpx;
		height: 40rpx;
		text-align: center;
		line-height: 40rpx;
		background: #f8f8f8;
		border-radius: 10rpx;
		margin-top: 40rpx;
		margin-left: 20rpx;
	}
	.myInvitationPup{
		position: absolute;
		right: 0;
		top: 65rpx;
		z-index: 1;
		background: #fff;
		box-shadow: 0 10rpx 20rpx #eee;
		padding: 0 20rpx;
		width: 140rpx;
		box-sizing: border-box;
		border-radius: 10px;
	}
	.myInvitationPup text{
		width: 100%;
		float: left;
		font-size: 30rpx;
		color: #222;
		text-align: center;
		padding: 20rpx 0;
	}
	.myInvitationLiT_2{
		width: 100%;
		float: left;
		font-size: 30rpx;
		color: #999;
		margin-top: 14rpx;
	}
	.myInvitationLiT_3{
		float: left;
		margin-top: 34rpx;
	}
	.myInvitationLiT_3 image{
		float: left;
		width: 40rpx;
	}
	.myInvitationLiT_3 text{
		font-size: 30rpx;
		color: #222;
		float: left;
		margin-left: 10rpx;
		margin-top: 4rpx;
	}
	.myInvitationLiT_4{
		float: right;
		padding: 8rpx 20rpx;
		background-color: #ffe157;
		color: #5f0303;
		border-radius: 100px;
		margin-top: 30rpx;
		
	}
</style>