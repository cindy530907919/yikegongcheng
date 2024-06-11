// src/api/index.js
import {
	apiUrl,
	TOKEN
} from "@/config/index";
import {
	getPageUrl
} from "@/utils/index";

/**
 * 返回一个Promise(发送post请求)
 * errorback是否错误回调
 */
export function uploadFile({
	url,
	method,
	errorback,
	params
}) {
	let header = {}
	if (uni.getStorageSync(TOKEN)) {
		header = {
			'Authorization': 'Bearer ' + uni.getStorageSync(TOKEN)
		}
	}
	
	return new Promise((resolve, reject) => {
		uni.uploadFile({
			url: apiUrl + url,
			filePath: tempFilePaths[0],
			name: 'file',
			header,
			success: (res) => {
				const result = res.data;
				if (result.code === 200) {
					resolve(result);
				} else {
					const errMsg = result.msg;
					const code = result.code;
					if (errMsg) {
						if (code == 401) {
							const currentUrl = getPageUrl(false);
							if (!currentUrl || currentUrl != "pages/login/login") {
								uni.navigateTo({
									url: "/pages/login/login",
								});
							}
						}
						if (errorback) {
							// 处理errorback
						} else {
							uni.showToast({
								icon: "none",
								title: errMsg,
								duration: 3000,
							});
						}
						reject({
							errMsg: result.str
						}); // 与下面的fail返回信息保持一致
					}
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
export function request({
	url,
	method,
	errorback,
	params
}) {
	let header = {}
	console.log(apiUrl + url)
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
				...params
			},
			header,
			dataType: "json",
			success: (res) => {
				const result = res.data;
				if (result.code === 200) {
					resolve(result);
				} else {
					const errMsg = result.msg;
					const code = result.code;
					if (code == 401) {
						const currentUrl = getPageUrl(false);
						if (!currentUrl || currentUrl != "pages/login/login") {
							uni.navigateTo({
								url: "/pages/login/login",
							});
						}
					}
					if (errorback) {
						// 处理errorback
					} else {
						uni.showToast({
							icon: "none",
							title: errMsg || "网络开小差了哦~",
							duration: 3000,
						});
					}
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
	request,
	uploadFile
};