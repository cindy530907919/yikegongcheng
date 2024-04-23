import request from "@/utils/request";

let IndexApi = {
  /*轮播图列表*/
  list(data, errorback) {
    return request.apiRequest("/banner/list", data, errorback);
  },
  goodsList(data, errorback) {
    return request.apiRequest("/goods/list", data, errorback);
  },
};

export default IndexApi;
