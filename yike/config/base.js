// 系统配置
export const applicationTitle = "鸿祺堂";
export const applicationDescribe = "鸿祺堂电商平台";
export const applicationLogoUrl = "/static/images/logo.png";
export const isWeixinOpenLocationUsePlugins = 0; // 微信小程序打开地图使用（0否, 1是）【腾讯位置服务路线规划】插件、（需要到小程序后台设置->第三方设置->插件管理里面添加【腾讯位置服务路线规划】插件，教程 https://mp.weixin.qq.com/wxopen/plugindevdoc?appid=wx50b5593e81dd937a）
export const currencySymbol = "￥"; // 货币价格符号
export const themeColor = "#fa4a3d";
export const themeColorLight = "#d1e4ff";
export const defaultUserHeadSrc = "/static/images/user.png"; // 默认用户头像
export const defaultRoundSuccessIcon = "/static/images/round-success-icon.png";
export const defaultRoundErrorIcon = "/static/images/round-error-icon.png";
// tabbar页面
export const tabbarPages = [
  "/pages/index/index",
  // "/pages/goods-category/goods-category",
  "/pages/mendian/goods-category",
  "pages/college/college",
  "/pages/user/user",
];

// 需要展示弹窗提示的页面
export const commonAppUserBasePopupPages = [
  "index",
  "goods-category",
  "cart",
  "user",
];

export const paymentList = [
  {
    id: 1,
    logo: "../../static/images/wx_pay.png",
    name: "微信支付",
    sort: "0",
    payment: "Weixin",
    payType: 1, // 现金支付
  },
  {
    id: 2,
    logo: "../../static/images/yue_pay.png",
    name: "余额支付",
    sort: "0",
    payment: "WalletPay",
    // tips: "0.00",
    payType: 1, // 现金支付
  },
];
