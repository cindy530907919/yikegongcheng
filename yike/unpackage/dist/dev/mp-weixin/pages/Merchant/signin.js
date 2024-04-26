"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      imageStyles: {
        width: 64,
        height: 64,
        border: {
          radius: "50%"
        }
      },
      listStyles: {
        // 是否显示边框
        border: true,
        // 是否显示分隔线
        dividline: true,
        // 线条样式
        borderStyle: {
          width: 1,
          color: "blue",
          style: "dashed",
          radius: 2
        }
      }
    };
  },
  methods: {
    handleFile(file) {
      const maxSize = 1 * 1024 * 1024;
      if (file.size > maxSize) {
        common_vendor.index.showToast({
          title: "文件大小不能超过1MB",
          icon: "none"
        });
        return;
      }
      console.log(11111111);
    }
  }
};
if (!Array) {
  const _easycom_uni_file_picker2 = common_vendor.resolveComponent("uni-file-picker");
  _easycom_uni_file_picker2();
}
const _easycom_uni_file_picker = () => "../../node-modules/@dcloudio/uni-ui/lib/uni-file-picker/uni-file-picker.js";
if (!Math) {
  _easycom_uni_file_picker();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.handleFile),
    b: common_vendor.p({
      value: "object",
      limit: "1",
      title: "上传营业执照(请确保照片清晰不超过1M)"
    }),
    c: common_vendor.o($options.handleFile),
    d: common_vendor.p({
      value: "object",
      limit: "1",
      title: "上传店铺头像"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/yikegongcheng/yike/pages/Merchant/signin.vue"]]);
wx.createPage(MiniProgramPage);
