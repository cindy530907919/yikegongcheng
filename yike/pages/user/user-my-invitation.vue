<template>
	<!-- 我的帖子 -->
	<view class="myInvitation">
		<view class="myInvitationLi" v-for="(item, index) in tieList" :key="index">
			<view class="myInvitationLiT_1">
				<view class="myInvitationLiClass">{{ item.cname ? item.cname : '暂无' }}</view>
				<uni-icons class="myInvitationLiTIcon" type="more-filled" font-size="28" color="#222" @click="toggleElement(item.id)"></uni-icons>
				<view v-show="showElementId === item.id" class="myInvitationPup">
					<text @click="editItem(item)">编辑</text>
					<text @click="deleteItem(item)">删除</text>
				</view> 
					
				<text class="myInvitationLiT_1_1">{{ item.title }}</text>
			</view>
			<view class="myInvitationLiT_2">{{ item.create_time }}</view>
			<view class="myInvitationLiT_3">
				<image src="../../static/images/forum_8.png" mode="widthFix"></image>
				<text>251</text>
			</view>
			<view class="myInvitationLiT_4">刷新置顶</view>
		</view>
		
	</view>
</template>

<script>
	import TieApi from "@/api/tie.js";
	export default {  
	  data() {  
	    return {  
	      showElementId: null,
			tieList:[]
	    };  
	  }, 
	   // 页面加载初始化
	   onLoad(params) {
	   	this.getList();
	   },
	  methods: {  
	    toggleElement(id) {  
	      this.showElementId = this.showElementId === id ? null : id;  
	    },
		  getList(){
		  	TieApi.getMyList({
				page:1,pageSize:20
		  	}).then(res => {
		  		console.log('业务获取帖子列表有返回', res)
		  		this.tieList = res.data;
		  	}).catch(res => {
		  		console.log(res)
		  	})
		  },
		  editItem(item) {
		        // handle edit
		        console.log('Edit', item);
		      },
		      deleteItem(item) {
		        // handle delete
		        console.log('Delete', item);
				uni.showModal({
					title: '提示',
					content: '确认删除该帖吗？',
					success: function(res) {
						if (res.confirm) {
							console.log('用户点击确定');
							TieApi.delPost({
								tid: item.id,
							}).then(res => {
								console.log('业务删除有返回', res)
								uni.showToast({
									icon: "none",
									title: "删除成功",
									duration: 3000,
								});
								this.getList();
							}).catch(res => {
								console.log(res)
							})
						} else if (res.cancel) {
							console.log('用户点击取消');
							// 这里执行取消后的操作
						}
					}
				});
		      }
	  }  
	};  
</script>

<style>
	.myInvitation{
		width: 90%;
		float: left;
		margin-left: 5%;
		margin-top: 30rpx;
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
		margin-top: 4rpx;
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
		margin-top: 10rpx;
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