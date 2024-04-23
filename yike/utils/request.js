// src/api/index.js
import { API_BASE_URL } from './config';

const apiRequest = (url, method, data, header = {}) => {
  return new Promise((resolve, reject) => {
    uni.request({
      url: `${API_BASE_URL}${url}`,
      method: method,
      data: data,
      header: {
        'content-type': 'application/json', // 根据实际API调整
      },
      success: (res) => {
        if (res.statusCode === 200) {
          resolve(res.data);
        } else {
          reject(res.errMsg);
        }
      },
      fail: (err) => {
        reject(err);
      }
    });
  });
};

export default {
  apiRequest,
};