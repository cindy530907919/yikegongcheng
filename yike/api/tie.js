import {
	request
} from "@/utils/request";

let TieApi = {
  /*发布帖子*/
  fabu(params, errorback) {
  	return request({
  		url: "/Post/fabu",
  		method: 'get',
  		errorback: errorback,
  		params
  	});
  },
  /*帖子列表*/
  getList(params, errorback) {
  	return request({
  		url: "/Post/postList",
  		method: 'get',
  		errorback: errorback,
  		params
  	});
  },
  /*我的帖子列表*/
  getMyList(params, errorback) {
  	return request({
  		url: "/Post/myPost",
  		method: 'get',
  		errorback: errorback,
  		params
  	});
  },
  /*删除我的帖子*/
  delPost(params, errorback) {
  	return request({
  		url: "/Post/delPost",
  		method: 'get',
  		errorback: errorback,
  		params
  	});
  },
  /*帖子详情*/
  getInfo(params, errorback) {
  	return request({
  		url: "/Post/postInfo",
  		method: 'get',
  		errorback: errorback,
  		params
  	});
  }
};

export default TieApi;
