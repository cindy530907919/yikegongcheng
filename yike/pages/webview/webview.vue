<template>
  <web-view :src="webPageUrl"></web-view>
</template>

<script>
export default {
  data() {
    return {
      webPageUrl: ''
    };
  },
  onLoad(options) {
    if (options.url) {
      this.webPageUrl = decodeURIComponent(options.url);
    }
  }
};
</script>

<style>
/* 样式根据需要调整 */
</style>