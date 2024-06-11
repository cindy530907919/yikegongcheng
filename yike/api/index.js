import request from "@/utils/request";

let IndexApi = {
  /*会员登录*/
  login(params, errorback) {
  	return request({
  		url: "/Login/wxLogin",
  		method: 'post',
  		errorback: errorback,
  		params
  	});
  }
};

export default IndexApi;
