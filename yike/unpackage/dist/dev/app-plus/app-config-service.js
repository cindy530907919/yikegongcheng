
  ;(function(){
  let u=void 0,isReady=false,onReadyCallbacks=[],isServiceReady=false,onServiceReadyCallbacks=[];
  const __uniConfig = {"pages":[],"globalStyle":{"backgroundColor":"#ffffff","navigationBar":{"backgroundColor":"#F8F8F8","titleText":"亦可工程","type":"default","titleColor":"#000000"},"isNVue":false},"nvue":{"compiler":"uni-app","styleCompiler":"uni-app","flex-direction":"column"},"renderer":"auto","appname":"亦可工程宝","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":true},"compilerVersion":"4.15","entryPagePath":"pages/index/index","entryPageQuery":"","realEntryPagePath":"","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000},"locales":{},"darkmode":false,"themeConfig":{}};
  const __uniRoutes = [{"path":"pages/index/index","meta":{"isQuit":true,"isEntry":true,"navigationBar":{"backgroundColor":"#adfdc0","titleText":"亦可工程","style":"custom","type":"default","titleColor":"#000000"},"isNVue":false}},{"path":"pages/login/login","meta":{"navigationBar":{"style":"custom","type":"default"},"isNVue":false}},{"path":"pages/webview/webview","meta":{"navigationBar":{"titleText":"外部链接","type":"default"},"isNVue":false}},{"path":"pages/login/yinsi","meta":{"navigationBar":{"titleText":"用户隐私服务协议及隐私政策","type":"default"},"isNVue":false}},{"path":"pages/device/device-lease","meta":{"navigationBar":{"backgroundColor":"#caffd4","titleText":"设备租赁","type":"default","titleColor":"#000000"},"isNVue":false}},{"path":"pages/device/device-con","meta":{"navigationBar":{"backgroundColor":"#caffd4","titleText":"租赁详情","type":"default","titleColor":"#000000"},"isNVue":false}},{"path":"pages/device/device-shop","meta":{"navigationBar":{"backgroundColor":"#caffd4","titleText":"设备商城","type":"default","titleColor":"#000000"},"isNVue":false}},{"path":"pages/user/user","meta":{"navigationBar":{"titleText":"个人中心","style":"custom","type":"default","titleColor":"#000000"},"isNVue":false}},{"path":"pages/user/user-personal","meta":{"navigationBar":{"titleText":"个人资料","type":"default","titleColor":"#000000"},"isNVue":false}},{"path":"pages/user/user-toup","meta":{"navigationBar":{"titleText":"账号充值","type":"default"},"isNVue":false}},{"path":"pages/user/user-feedback","meta":{"navigationBar":{"titleText":"用户反馈","type":"default"},"isNVue":false}},{"path":"pages/user/user-my-service","meta":{"navigationBar":{"titleText":"我发布的服务","type":"default"},"isNVue":false}},{"path":"pages/user-order/issue-evaluate","meta":{"navigationBar":{"titleText":"发布评价","type":"default"},"isNVue":false}},{"path":"pages/user-order/order-logistics","meta":{"navigationBar":{"titleText":"查询物流","type":"default"},"isNVue":false}},{"path":"pages/user-order/order-dsh","meta":{"navigationBar":{"titleText":"我的订单","type":"default"},"isNVue":false}},{"path":"pages/user-order/order-ywc","meta":{"navigationBar":{"titleText":"我的订单","type":"default"},"isNVue":false}},{"path":"pages/user-order/order-dfh","meta":{"navigationBar":{"titleText":"我的订单","type":"default"},"isNVue":false}},{"path":"pages/user/user-my-invitation","meta":{"navigationBar":{"titleText":"我的帖子","type":"default"},"isNVue":false}},{"path":"pages/user/user-honorary-title","meta":{"navigationBar":{"titleText":"荣誉称号","type":"default"},"isNVue":false}},{"path":"pages/user/user-service","meta":{"navigationBar":{"titleText":"APP客服","type":"default"},"isNVue":false}},{"path":"pages/user/user-invitation-message","meta":{"navigationBar":{"titleText":"全部消息","type":"default"},"isNVue":false}},{"path":"pages/job/job-pus","meta":{"navigationBar":{"titleText":"发布","type":"default"},"isNVue":false}},{"path":"pages/job/job-list","meta":{"navigationBar":{"backgroundColor":"#caffd4","titleText":"招牌求职","type":"default","titleColor":"#000000"},"isNVue":false}},{"path":"pages/local/publish","meta":{"navigationBar":{"backgroundColor":"#fff","titleText":"发布服务","type":"default","titleColor":"#000000"},"isNVue":false}},{"path":"pages/local/service-con","meta":{"navigationBar":{"backgroundColor":"#fff","titleText":"详情","type":"default","titleColor":"#000000"},"isNVue":false}},{"path":"pages/local/service","meta":{"navigationBar":{"backgroundColor":"#caffd4","titleText":"本地服务","type":"default","titleColor":"#000000"},"isNVue":false}},{"path":"pages/machinery/leasing","meta":{"navigationBar":{"backgroundColor":"#caffd4","titleText":"机械租赁","type":"default","titleColor":"#000000"},"isNVue":false}},{"path":"pages/machinery/leasing-con","meta":{"navigationBar":{"backgroundColor":"#fff","titleText":"详情","type":"default","titleColor":"#000000"},"isNVue":false}},{"path":"pages/address/index","meta":{"navigationBar":{"backgroundColor":"#fff","titleText":"收货地址","type":"default","titleColor":"#000000"},"isNVue":false}},{"path":"pages/address/add","meta":{"navigationBar":{"backgroundColor":"#fff","titleText":"编辑收货地址","type":"default","titleColor":"#000000"},"isNVue":false}},{"path":"pages/goods/comment","meta":{"navigationBar":{"backgroundColor":"#fff","titleText":"全部评价","type":"default","titleColor":"#000000"},"isNVue":false}},{"path":"pages/goods/goods-index","meta":{"navigationBar":{"backgroundColor":"#caffd4","titleText":"配件商城","style":"custom","type":"default","titleColor":"#000000"},"isNVue":false}},{"path":"pages/pay/pay","meta":{"navigationBar":{"backgroundColor":"#fff","titleText":"确认订单","type":"default","titleColor":"#000000"},"isNVue":false}},{"path":"pages/goods/goods-content","meta":{"navigationBar":{"backgroundColor":"#fff","titleText":"详情","type":"default","titleColor":"#000000"},"isNVue":false}},{"path":"pages/forum/forum-index","meta":{"navigationBar":{"backgroundColor":"#ffdb00","titleText":"友圈","style":"custom","type":"default","titleColor":"#000000"},"isNVue":false}},{"path":"pages/forum/forum-list","meta":{"navigationBar":{"backgroundColor":"#fff","titleText":"圈子","type":"default","titleColor":"#000000"},"isNVue":false}},{"path":"pages/forum/forum-content","meta":{"navigationBar":{"backgroundColor":"#fff","titleText":"详情","type":"default","titleColor":"#000000"},"isNVue":false}},{"path":"pages/forum/forum-upload","meta":{"navigationBar":{"backgroundColor":"#fff","titleText":"发布帖子","type":"default","titleColor":"#000000"},"isNVue":false}},{"path":"pages/merchant/signin","meta":{"navigationBar":{"titleText":"商户入驻","type":"default"},"isNVue":false}},{"path":"pages/task/task-index","meta":{"navigationBar":{"titleText":"适时任务","style":"custom","type":"default"},"isNVue":false}}].map(uniRoute=>(uniRoute.meta.route=uniRoute.path,__uniConfig.pages.push(uniRoute.path),uniRoute.path='/'+uniRoute.path,uniRoute));
  __uniConfig.styles=[];//styles
  __uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
  __uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
  service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:16})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:u,window:u,document:u,frames:u,self:u,location:u,navigator:u,localStorage:u,history:u,Caches:u,screen:u,alert:u,confirm:u,prompt:u,fetch:u,XMLHttpRequest:u,WebSocket:u,webkit:u,print:u}}}}); 
  })();
  