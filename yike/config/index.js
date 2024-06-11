
export const isDev = process.env.NODE_ENV == "development";

const api_url_config = {
  dev: {
    hjs_request_url: "https://app.ykgcb.com/ykapi", // "http://101.43.225.178:8400",
    oss_server_url: "https://hjsfiles.oss-cn-beijing.aliyuncs.com",
  },
  release: {
    hjs_request_url: "https://app.ykgcb.com/ykapi",
    oss_server_url: "https://hjsfiles.oss-cn-beijing.aliyuncs.com",
  },
};

// api访问接口
export const apiUrl = isDev
  ? api_url_config.release.hjs_request_url
  : api_url_config.release.hjs_request_url;

// 阿里云访问接口
export const ossUrl = isDev
  ? api_url_config.dev.oss_server_url
  : api_url_config.release.oss_server_url;

// 用户服务协议访问地址
export const agreementUserRegisterUrl = isDev
  ? api_url_config.dev.oss_server_url
  : api_url_config.release.oss_server_url;

// 用户隐私权政策地址
export const agreementUserPrivacyUrl = isDev
  ? api_url_config.dev.oss_server_url
  : api_url_config.release.oss_server_url;

export * from './base'
export * from './key'