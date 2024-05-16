<template>
  <view class="custom-tab-bar">
    <view class="tab-item" v-for="(item, index) in tabs" :key="index" @click="onChange(index)">
		<image class="nav-icon-scan" v-if="index == 2" :src="item.iconPath"></image>
		<image class="nav-icon" v-else :src="activePage == index ? item.selectedIconPath : item.iconPath"></image>
		<view :class="activePage == index ? 'active':'nav-text'">{{ item.text }}</view>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    activePage: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
	  currentIndex: 0, // 当前选中的tab索引
      tabs: [
       {
         pagePath: "/pages/index/index",
         iconPath: "/static/images/meun_1.png",
         selectedIconPath: "/static/images/meun_1_on.png",
         text: "首页"
       },
       {
         pagePath: "/pages/forum/forum-index",
         iconPath: "/static/images/meun_2.png",
         selectedIconPath: "/static/images/meun_2_on.png",
         text: "友圈"
       },
       {
         pagePath: "/pages/task/task-index",
         iconPath: "/static/images/meun_3.png",
         selectedIconPath: "/static/images/meun_3_on.png",
         text: "适时任务"
       },
       {
           pagePath: "/pages/goods/goods-index",
           iconPath: "/static/images/meun_4.png",
           selectedIconPath: "/static/images/meun_4_on.png",
           text: "商城"
       },
         
       {
         pagePath: "/pages/user/user",
         iconPath: "/static/images/meun_5.png",
         selectedIconPath: "/static/images/meun_5_on.png",
         text: "我的"
       }
      ]
    };
  },
  methods: {
   onChange(index) {
   	  //console.log('index==',this.tabs[index].pagePath);
   	  
       uni.navigateTo({
         url: this.tabs[index].pagePath
       });
   	  
     },
  }
};
</script>

<style scoped>
.custom-tab-bar {
  /* display: flex;
  justify-content: space-around;
  padding: 10px 0;
  background-color: #fff; */
  display: flex;
    justify-content: space-around;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 70px; /* 可根据实际需要调整 */
    background-color: #fff;
    box-shadow: 0 -2px 5px rgba(0,0,0,0.1);
    z-index: 1000; /* 确保tabbar在其他内容之上 */
	padding-top: 10rpx;
}
.tab-item {
  display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
	/* width: 180rpx; */
	text-align: center;
	display: inline-table;
	background: none;
}

.tab-item.active {
  color: #007AFF; /* 选中项的颜色 */
}
.nav-icon {
		width: 50rpx;
		height: 50rpx;
	}
	/* 导航 */
	.nav-text {
		font-size: 24rpx;
		font-weight: 500;
		color: #666;
	}
	.nav-icon-scan{
		width: 100rpx;
		height: 100rpx;
		margin-top: -65rpx;
		border-radius: 50%;
		border: 10rpx solid #fff;
		background: #fff;
		font-size: 24rpx;
	}
	.active{
		font-size: 24rpx;
		font-weight: 500;
		color: #222;
		font-weight: bold;
	}
</style>