import {
	request
} from "@/utils/request";

let AddressApi = {
  /*添加收货地址*/
  addAddress(params, errorback) {
  	return request({
  		url: "/Other/address",
  		method: 'post',
  		errorback: errorback,
  		params
  	});
  },
  /*收货地址列表*/
  getList(params, errorback) {
  	return request({
  		url: "/Other/addressList",
  		method: 'get',
  		errorback: errorback,
  		params
  	});
  },
  /*删除地址*/
  delAddress(params, errorback) {
  	return request({
  		url: "/Other/delAddress",
  		method: 'get',
  		errorback: errorback,
  		params
  	});
  },
  /*地址详情*/
  getInfo(params, errorback) {
  	return request({
  		url: "/Other/addressInfo",
  		method: 'get',
  		errorback: errorback,
  		params
  	});
  }
};

export default AddressApi;
