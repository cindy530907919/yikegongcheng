"use strict";
const common_vendor = require("../../common/vendor.js");
const uniSwiperDot = () => "../../uni_modules/uni-swiper-dot/components/uni-swiper-dot/uni-swiper-dot.js";
const _sfc_main = {
  data() {
    return {
      items: [
        {
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
        }
      ],
      info: [
        {
          colorClass: "uni-bg-red",
          url: "https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg",
          content: "内容 A"
        },
        {
          colorClass: "uni-bg-green",
          url: "https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg",
          content: "内容 B"
        },
        {
          colorClass: "uni-bg-blue",
          url: "https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg",
          content: "内容 C"
        }
      ],
      modeIndex: -1,
      styleIndex: -1,
      current: 0,
      mode: "default",
      dotsStyles: {},
      swiperDotIndex: 0
    };
  },
  components: {
    uniSwiperDot
  },
  methods: {
    onchange(e) {
      e.detail.value;
    },
    change(e) {
      this.current = e.detail.current;
    },
    selectStyle(index) {
      this.dotsStyles = this.dotStyle[index];
      this.styleIndex = index;
    },
    selectMode(mode, index) {
      this.mode = mode;
      this.modeIndex = index;
      this.styleIndex = -1;
      this.dotsStyles = this.dotStyle[0];
    },
    clickItem(e) {
      this.swiperDotIndex = e;
    },
    onBanner(index) {
      console.log(22222, index);
    }
  },
  mounted() {
  }
};
if (!Array) {
  const _easycom_uni_data_picker2 = common_vendor.resolveComponent("uni-data-picker");
  const _easycom_uni_swiper_dot2 = common_vendor.resolveComponent("uni-swiper-dot");
  (_easycom_uni_data_picker2 + _easycom_uni_swiper_dot2)();
}
const _easycom_uni_data_picker = () => "../../node-modules/@dcloudio/uni-ui/lib/uni-data-picker/uni-data-picker.js";
const _easycom_uni_swiper_dot = () => "../../uni_modules/uni-swiper-dot/components/uni-swiper-dot/uni-swiper-dot.js";
if (!Math) {
  (_easycom_uni_data_picker + _easycom_uni_swiper_dot)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.onchange),
    b: common_vendor.p({
      localdata: $data.items,
      ["popup-title"]: "城市"
    }),
    c: common_vendor.f(3, (item, index, i0) => {
      return {
        a: common_vendor.t(index + 1),
        b: common_vendor.n("swiper-item" + index),
        c: index
      };
    }),
    d: common_vendor.o((...args) => $options.change && $options.change(...args)),
    e: $data.swiperDotIndex,
    f: common_vendor.o($options.clickItem),
    g: common_vendor.p({
      info: $data.info,
      current: $data.current,
      mode: $data.mode,
      ["dots-styles"]: $data.dotsStyles,
      field: "content"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/yikegongcheng/yike/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
