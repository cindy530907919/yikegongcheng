// src/api/index.js
import {
	apiUrl,
	TOKEN,
	USER_ID
} from "@/config/index";
import {
	getPageUrl
} from "@/utils/index";

export function request({
	url,
	method,
	errorback,
	params
}) {
	let header = {}
	console.log(apiUrl+url)
	if (uni.getStorageSync(TOKEN)) {
		header = {
			'Authorization': 'Bearer ' + uni.getStorageSync(TOKEN)
		}
	}
	return new Promise((resolve, reject) => {
		uni.request({
			url: apiUrl + url,
			method: method,
			data: {
				...params,
				uid:uni.getStorageSync(USER_ID)
			},
			header,
			dataType: "json",
			success: (res) => {
				const result = res.data;
				if (result.code === 1) {
					resolve(result);
				} else {
					const errMsg = result.info;
					const code = result.code;
					
						uni.showToast({
							icon: "none",
							title: errMsg || "网络开小差了哦~",
							duration: 3000,
						});
					
					reject(result); // 与下面的fail返回信息保持一致
				}
			},
			fail: (_err) => {
				if (errorback) {
					// 处理errorback
				} else {
					uni.showToast({
						icon: "none",
						title: "网络开小差了哦~",
						duration: 3000,
					});
				}
				reject({
					errMsg: "网络开小差了哦~"
				});
			},
		});
	});
}

export default {
	request
};