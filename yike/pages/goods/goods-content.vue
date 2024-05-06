<template>
	<!-- 商品详情 -->
  <view class="swiper-container">
    <swiper
      class="swiper-box"
      indicator-dots="true"
      autoplay="true"
      interval="3000"
      circular="true"
    >
      <swiper-item v-for="(image, index) in images" :key="index">
        <image class="swiper-image" :src="image.url"></image>
      </swiper-item>
    </swiper>
  </view>
</template>

<script>
export default {
  data() {
    return {
      images: [
        { url: '/static/images/goods_1.png' }, // 替换为你的图片路径
        { url: '/static/images/goods_1.png' },
        { url: '/static/images/goods_1.png' }
      ]
    };
  }
}
</script>

<style>
@import url(../goods/goods.css);
</style>
