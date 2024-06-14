import {
	request
} from "@/utils/request";

let IndexApi = {
  /*会员登录*/
  login(params, errorback) {
  	return request({
  		url: "/Login/wxLogin",
  		method: 'post',
  		errorback: errorback,
  		params
  	});
  },
  /*会员退出登录*/
  loginOut(params, errorback) {
  	return request({
  		url: "/Login/loginOut",
  		method: 'post',
  		errorback: errorback,
  		params
  	});
  },
  /*城市选择*/
  getCityList(params, errorback) {
  	return request({
  		url: "/City/getCityList",
  		method: 'get',
  		errorback: errorback,
  		params
  	});
  },
  /*轮播图*/
  getBanner(params, errorback) {
  	return request({
  		url: "/Other/getBanner",
  		method: 'get',
  		errorback: errorback,
  		params
  	});
  },
  /*客服二维码和电话*/
  getKefu(params, errorback) {
  	return request({
  		url: "/Other/kefu",
  		method: 'get',
  		errorback: errorback,
  		params
  	});
  },
  /*维护个人信息*/
  editInfo(params, errorback) {
  	return request({
  		url: "/Other/editInfo",
  		method: 'post',
  		errorback: errorback,
  		params
  	});
  },
  /*获取个人信息*/
  getUserInfo(params, errorback) {
  	return request({
  		url: "/Other/getUserInfo",
  		method: 'get',
  		errorback: errorback,
  		params
  	});
  },
  /*用户反馈*/
  fankui(params, errorback) {
  	return request({
  		url: "/Other/fankui",
  		method: 'post',
  		errorback: errorback,
  		params
  	});
  }
};

export default IndexApi;
