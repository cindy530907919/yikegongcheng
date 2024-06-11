import {
  CACHE_USER_INFO_KEY,
  CACHE_SYSTEM_INFO_KEY,
  CACHE_SCENE_KEY,
  applicationTitle,
  tabbarPages,
  TOKEN,
  isWeixinOpenLocationUsePlugins,
  applicationDescribe,
  CACHE_PAGE_TABBAR_SWITCH_PARAMS,
  CACHE_USER_CART_DATA_KEY,
  CACHE_LAUNCH_INFO_KEY,
} from "@/config/index";

/**
 * 数组分组
 * @param {*} arry
 * @param {*} subGroupLength
 */
export function groupArry(arry, subGroupLength) {
  let index = 0;
  let newArry = [];
  if (arry.length > subGroupLength) {
    while (index < arry.length) {
      newArry.push(arry.slice(index, (index += subGroupLength)));
    }
  } else {
    newArry = [arry];
  }
  return newArry;
}

/**
 * 默认弱提示方法
 * msg    [string]  提示信息
 * status [string]  状态 默认error [正确success, 错误error]
 */
export function showToast(msg, status) {
  if ((status || "error") == "success") {
    uni.showToast({
      icon: "success",
      title: msg,
      duration: 3000,
    });
  } else {
    uni.showToast({
      icon: "none",
      title: msg,
      duration: 3000,
    });
  }
}

/**
 * alert确认框
 * title              [string]    标题（默认空）
 * msg                [string]    提示信息，必传
 * is_show_cancel     [int]       是否显示取消按钮（默认显示 0否, 1|undefined是）
 * cancel_text        [string]    取消按钮文字（默认 取消）
 * cancel_color       [string]    取消按钮的文字颜色，必须是 16 进制格式的颜色字符串（默认 #000000）
 * confirm_text       [string]    确认按钮文字（默认 确认）
 * confirm_color      [string]    确认按钮的文字颜色，必须是 16 进制格式的颜色字符串（默认 #000000）
 * object             [boject]    回调操作对象，点击确认回调参数1，取消回调0
 * method             [string]    回调操作对象的函数
 */
export function alert(e) {
  var msg = e.msg || null;
  if (msg != null) {
    var title = e.title || "";
    var is_show_cancel = e.is_show_cancel == 0 ? false : true;
    var cancel_text = e.cancel_text || "取消";
    var confirm_text = e.confirm_text || "确认";
    var cancel_color = e.cancel_color || "#000000";
    var confirm_color = e.confirm_color || "#576B95";
    uni.showModal({
      title: title,
      content: msg,
      showCancel: is_show_cancel,
      cancelText: cancel_text,
      cancelColor: cancel_color,
      confirmText: confirm_text,
      confirmColor: confirm_color,
      success(res) {
        if (
          (e.object || null) != null &&
          typeof e.object === "object" &&
          (e.method || null) != null
        ) {
          e.object[e.method](res.confirm ? 1 : 0);
        }
      },
    });
  } else {
    showToast("提示信息为空 alert");
  }
}

/**
 * 是否为url地址
 */
export function isUrl(value) {
  var arr = ["http:/", "https:"];
  return arr.includes(value.substr(0, 6));
}

/**
 * 打开 webview页面
 * @param {*} value  url地址
 */
export function openWebView(value) {
  uni.navigateTo({
    url: "/pages/web-view/web-view?url=" + encodeURIComponent(value),
  });
}

/**
 * url主要部分
 * @param {*} url
 */
export function getUrlMainPart(url) {
  if (url.indexOf("?") == -1) {
    var value = url;
  } else {
    var tempStr = url.split("?");
    var value = tempStr[0];
  }
  return value;
}

/**
 * 当前地址是否存在tabbar中
 */
export function isTabbarPages(url) {
  var value = getUrlMainPart(url);
  if ((value || null) == null) {
    return false;
  }
  for (var i in tabbarPages) {
    if (tabbarPages[i] == value) {
      return true;
    }
  }
  return false;
}

/**
 * url参数转json对象
 * @param {*} urlParams
 */
export function urlParamsToJson(urlParams) {
  var json = new Object();
  if ((urlParams || null) != null) {
    var arr = urlParams.split("&");
    for (var i = 0; i < arr.length; i++) {
      var temp = arr[i].split("=");
      json[temp[0]] = temp[1];
    }
  }
  return json;
}

/**
 * json对象转url请求参数
 * @param {*} data
 * @returns
 */
export function jsonToUrlParams(data) {
  var str = "";
  for (var i in data) {
    if (str != "") {
      str += "&";
    }
    str += i + "=" + data[i];
  }
  return str;
}

/**
 * 事件操作
 * @param {*} e
 */
export function operationEvent(e) {
  var value = e.currentTarget.dataset.value || null;
  var type = parseInt(e.currentTarget.dataset.type);
  if (value != null) {
    switch (type) {
      // web
      case 0:
        openWebView(value);
        break;
      // 内部页面
      case 1:
        if (isTabbarPages(value)) {
          var temp = value.split("?");
          if (temp.length > 1 && (temp[1] || null) != null) {
            value = temp[0];
            var query = urlParamsToJson(temp[1]);
            uni.setStorageSync(CACHE_PAGE_TABBAR_SWITCH_PARAMS, query);
          }
          uni.switchTab({
            url: value,
          });
        } else {
          uni.navigateTo({
            url: value,
          });
        }
        break;
      // 跳转到外部小程序
      case 2:
        uni.navigateToMiniProgram({
          appId: value,
        });
        break;
      // 跳转到地图查看位置
      case 3:
        var values = value.split("|");
        if (values.length != 4) {
          showToast("事件值格式有误");
          return false;
        }
        openLocation(values[2], values[3], values[0], values[1]);
        break;
      // 拨打电话
      case 4:
        callTel(value);
        break;
    }
  }
}

export function callTel(data) {
  var value =
    typeof data == "object"
      ? data.currentTarget.dataset.value || null
      : data || null;
  if (value != null) {
    uni.makePhoneCall({
      phoneNumber: value.toString(),
    });
  }
}

// 是否为page页面地址
export function isPage(value) {
  var arr = ["/pages", "pages/"];
  return arr.indexOf(value.substr(0, 6)) != -1;
}
/**
 * 打开url
 * @param {*} value
 * @param {*} isRedirect
 */
export function openUrl(value, isRedirect = false) {
  if ((value || null) != null) {
    // web地址
    if (isUrl(value)) {
      openWebView(value);
      // 打开外部小程序协议
    } else if (value.substr(0, 8) == "appid://") {
      uni.navigateToMiniProgram({
        appId: value.substr(8),
      });
      // 地图协议
    } else if (value.substr(0, 6) == "map://") {
      var values = value.substr(6).split("|");
      if (values.length != 4) {
        showToast("事件值格式有误");
        return false;
      }
      openLocation(values[2], values[3], values[0], values[1]);
      // 电话协议
    } else if (value.substr(0, 6) == "tel://") {
      callTel(value.substr(6));
      // 默认切换或跳转页面
    } else {
      if (isPage(value)) {
        if (isTabbarPages(value)) {
          var temp = value.split("?");
          if (temp.length > 1 && (temp[1] || null) != null) {
            value = temp[0];
            var query = urlParamsToJson(temp[1]);
            uni.setStorageSync(CACHE_PAGE_TABBAR_SWITCH_PARAMS, query);
          }
          uni.switchTab({
            url: value,
          });
        } else {
          if (isRedirect) {
            uni.redirectTo({
              url: value,
            });
          } else {
            uni.navigateTo({
              url: value,
            });
          }
        }
      } else {
        showToast("未知数据（" + value + "）");
      }
    }
  }
}

/**
 * 打开地图
 * @param {*} lng 经度
 * @param {*} lat 纬度
 * @param {*} name 地图上面显示的名称
 * @param {*} address 地图上面显示的详细地址
 * @param {*} scale 缩放比例，范围5~18
 */
export function openLocation(lng, lat, name, address, scale) {
  // 参数判断
  if (lng == undefined || lat == undefined || lng == "" || lat == "") {
    showToast("坐标有误");
    return false;
  }
  lat = parseFloat(lat);
  lng = parseFloat(lng);

  // 微信小程序使用【腾讯位置服务路线规划】插件
  if (isWeixinOpenLocationUsePlugins == 1) {
    var key = "缺tencent_map_ak，需从后台返回" || null; //???
    if (key != null) {
      var plugin = requirePlugin("routePlan");
      var end_point = JSON.stringify({
        name: name || "地理位置",
        longitude: lng,
        latitude: lat,
      });
      uni.navigateTo({
        url:
          "plugin://routePlan/route-plan?key=" +
          key +
          "&referer=" +
          applicationTitle +
          "&endPoint=" +
          end_point +
          "&themeColor=" +
          "#d1e4ff" +
          "&navigation=1",
      });
      return false;
    }
  }
  // 转换坐标打开位置
  uni.openLocation({
    name: name || "地理位置",
    address: address || "",
    scale: scale || 18,
    longitude: lng,
    latitude: lat,
  });
}

// 启动位置监听（0 打开小程序监听、1小程序后台运行也监听）
export async function startLocationUpdate(type = 0) {
  return new Promise((resolve, reject) => {
    // 先停止再调用
    uni.stopLocationUpdate();
    // 关闭监听
    uni.offLocationChange();
    // 根据类型调用api
    if (type == 0) {
      // 打开小程序监听
      uni.startLocationUpdate({
        success: (res) => {
          startLocationUpdateChange(resolve);
        },
        fail: (res) => {
          reject(res.errMsg);
        },
      });
    } else {
      // 小程序后台运行监听
      uni.startLocationUpdateBackground({
        success: (res) => {
          startLocationUpdateChange(resolve);
        },
        fail: (res) => {
          reject(res.errMsg);
        },
      });
    }
  });
}

// 位置监听改变
export function startLocationUpdateChange(resolve) {
  uni.onLocationChange((res) => {
    resolve({ lng: res.longitude, lat: res.latitude });
  });
}

/**
 *  从缓存获取用户信息、可指定key和默认值
 * @param {*} key
 */
export function getUserCacheInfo(key) {
  var user = getUserInfo();
  if (!user) {
    return null;
  }
  // 是否读取key
  if ((key || null) != null) {
    return user[key];
  }
  return user;
}

/**
 * 获取用户信息, token不存在则跳转登录页
 * return     有用户数据直接返回, 则回调调用者
 */
export function getUserInfo() {
  var user = uni.getStorageSync(CACHE_USER_INFO_KEY) || null;
  var token = uni.getStorageSync(TOKEN) || null;
  if (!user || !token) {
    const currentUrl = getPageUrl(false);
    console.log(
      "currentUrl21111111111111111111111111111111111111111111111111111111",
      currentUrl
    );
    if (!currentUrl || currentUrl != "pages/login/login") {
      uni.navigateTo({
        url: "/pages/login/login",
      });
    }
    return false;
  }
  return user;
}

/**
 * 获取设备信息
 * key                指定key
 * defaultValue       默认数据（不存在则读取、默认null）
 * isDirect             是否调微信接口实时读取
 */
export function getSystemInfo(key, defaultValue, isDirect) {
  var info = null;
  if ((isDirect || false) == true) {
    info = getSystemInfoDirect() || null;
  } else {
    info = uni.getStorageSync(CACHE_SYSTEM_INFO_KEY) || null;
  }
  if (info == null || (key || null) == null) {
    return info;
  }
  return info[key] == undefined
    ? defaultValue == undefined
      ? null
      : defaultValue
    : info[key];
}

/**
 * 读取设备信息
 */
export function getSystemInfoDirect() {
  var systemInfo = uni.getSystemInfoSync();
  uni.setStorageSync(CACHE_SYSTEM_INFO_KEY, systemInfo);
  return systemInfo;
}

/**
 * 当前是否单页模式
 */
export function isCurrentSinglePage() {
  var scene = getSceneData();
  return scene == 1154 ? 1 : 0; // 1：朋友圈内打开“单页模式”
}

/**
 * 是否朋友圈单页访问提示
 * @returns
 */
export function isSinglePageCheck() {
  if (isCurrentSinglePage() == 1) {
    showToast("请前往小程序使用完整服务");
    return false;
  }
  return true;
}

/**
 * 场景值获取
 */
export function getSceneData() {
  return uni.getStorageSync(CACHE_SCENE_KEY) || 0;
}

/**
 * 场景值设置
 */
export function setSceneData(params) {
  var scene = (params.scene || null) == null ? 0 : parseInt(params.scene);
  uni.setStorageSync(tCACHE_SCENE_KEY, scene);
  return scene;
}

/**
 * 分享内容处理
 * @param {*} data
 */
export function handleShareContent(data) {
  // 获取插件配置信息
  var result = {
    title: data.title || applicationTitle,
    desc: data.desc || applicationDescribe,
    path: data.path || tabbarPages[0],
    query: handleShareQuery(data.query || ""),
    img: data.img || "", //??? 缺一张默认的分享图片300*300
  };
  result["url"] = getPageUrl();
  return result;
}

/**
 * 分享参数处理
 * @param {*} query
 */
export function handleShareQuery(query) {
  if ((query || null) == null || query.indexOf("referrer") == -1) {
    var user_id = parseInt(getUserCacheInfo("id", 0)) || 0;
    if (user_id > 0) {
      var join = (query || null) == null ? "" : "&";
      query += join + "referrer=" + user_id;
    }
  }
  return (query || null) == null ? "" : "?" + query;
}

/**
 * 获取当前页面地址
 * @param {*} is_whole 完整地址（?后面的参数）
 */
export function getPageUrl(is_whole = true) {
  var url = currentPage();
  if (is_whole == false) {
    var temp = url.split("?");
    url = temp[0];
  }
  return url;
}

/**
 * 当前页面地址
 */
export function currentPage() {
  // 来源地址、拼接当前小程序页面
  var pages = getCurrentPages();
  var page = pages[pages.length - 1];
  return handlePageUrl(page);
}

/**
 * 页面地址处理
 * @param {*} page
 */
export function handlePageUrl(page) {
  if ((page || null) == null) {
    return "";
  }
  var route = page.route;
  var options = page.options || {};
  var query = "";
  if (JSON.stringify(options) != "{}") {
    for (var i in options) {
      query += "&" + i + "=" + options[i];
    }
  }
  if ((query || null) != null) {
    route += "?" + query.substr(1);
  }
  return route;
}

// 颜色转rgba hexValue： 色值  alpha：透明度
export function hex2Rgba(hexValue, alpha) {
  const rgx = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  const hex = hexValue.replace(rgx, (m, r, g, b) => r + r + g + g + b + b);
  const rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!rgb) {
    return hexValue;
  }
  const r = parseInt(rgb[1], 16),
    g = parseInt(rgb[2], 16),
    b = parseInt(rgb[3], 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

/**
 * 上一页页面地址
 */
export function getPrevPage() {
  var value = null;
  var pages = getCurrentPages();
  var length = pages.length;
  if (length > 1) {
    value = handlePageUrl(pages[length - 2]);
  }
  return value;
}

/**
 * 设置导航车badge
 * index     tabBar 的哪一项，从左边算起（0开始）
 * type      0 移出, 1 添加 （默认 0 移出）
 * value     显示的文本，超过 4 个字符则显示成 ...（type参数为1的情况下有效）
 */
export function setTabBarBadge(index, type, value) {
  if (index !== undefined && index !== null) {
    if ((type || 0) == 0) {
      uni.removeTabBarBadge({
        index: Number(index),
      });
    } else {
      uni.setTabBarBadge({
        index: Number(index),
        text: value.toString(),
      });
    }
  }
}

// 调用页面方法
export function getPageObject(page) {
  var result = [];
  var pages = getCurrentPages();
  for (var i = 0; i < pages.length; i++) {
    if (pages[i]["route"] == page) {
      result.push(pages[i]);
    }
  }
  return result;
}

// 链接地址事件
export function urlEvent(e) {
  var value = e.currentTarget.dataset.value || null;
  var isRedirect = parseInt(e.currentTarget.dataset.redirect || 0) == 1;
  openUrl(value, isRedirect);
}

export function texteventhandle(e) {
  var event = e.currentTarget.dataset.event || null;
  if (event != null) {
    var value = e.currentTarget.dataset.value;
    switch (event) {
      // 拨打电话
      case "tel":
        calltel(value);
        break;
      // 复制文本
      case "copy":
        textCopyEvent(value);
        break;
    }
  }
}

// 剪贴板
export function textCopyEvent(data) {
  console.log("textCopyEvent", data);
  var value =
    typeof data == "object"
      ? data.currentTarget.dataset.value || null
      : data || null;
  console.log("textCopyEvent value", value);
  if (value != null) {
    uni.setClipboardData({
      data: value,
      success(res) {
        console.log("textCopyEvent res", res);
        uni.getClipboardData({
          success(res) {
            console.log("textCopyEvent2 res", res);
            showToast("复制成功", "success");
          },
        });
      },
    });
  } else {
    showToast("复制内容为空");
  }
}

/**
 * 保存图片
 * @param {*} e
 */
export function saveImageEvent(e, successCallback) {
  const path = e.currentTarget.dataset.value;
  console.log(path);
  // uni.showActionSheet({
  //   itemList: ["保存图片"],
  //   success: () => {
  //     const save = (path) => {
  //       uni.saveImageToPhotosAlbum({
  //         filePath: path,
  //         success() {
  //           if (successCallback) {
  //             successCallback();
  //           }
  //           setTimeout(() => uni.showToast({ title: "保存成功" }), 2000);
  //         },
  //       });
  //     };
  //     uni.downloadFile({
  //       url: path,
  //       success: (res) => save(res.tempFilePath),
  //     });
  //   },
  //   fail: (res) => {
  //     showToast(res.errMsg)
  //   },
  // });
   // 分割字符串以获取单独的URL
    const urls = path.split(',');
  
    // 显示操作表
    uni.showActionSheet({
      itemList: ["保存图片"],
      success: () => {
        // 对每个URL执行保存操作
        urls.forEach((url) => {
          uni.downloadFile({
            url: url,
            success: (res) => {
              if (res.statusCode === 200) {
                uni.saveImageToPhotosAlbum({
                  filePath: res.tempFilePath,
                  success() {
                    uni.showToast({ title: "保存成功" });
                  },
                  fail(err) {
                    console.error("保存图片失败:", err);
                    uni.showToast({ title: "保存失败", icon: "none" });
                  }
                });
              }
            },
            fail: (err) => {
              console.error("下载图片失败:", err);
              uni.showToast({ title: "下载失败", icon: "none" });
            }
          });
        });
  
        if (successCallback) {
          successCallback();
        }
      },
      fail: (res) => {
        uni.showToast({ title: res.errMsg, icon: "none" });
      },
    });
}

/**
 * 保存视频
 * @param {*} e
 */
export function saveVideoEvent(e, successCallback) {
  const path = e.currentTarget.dataset.value;
  uni.showActionSheet({
    itemList: ["保存视频"],
    success: () => {
      const save = (path) => {
        uni.saveVideoToPhotosAlbum({
          filePath: path,
          success() {
            if (successCallback) {
              successCallback();
            }
            setTimeout(() => uni.showToast({ title: "保存成功" }), 2000);
          },
        });
      };
      uni.downloadFile({
        url: path,
        success: (res) => save(res.tempFilePath),
      });
    },
  });
}

// 返回上一页、则回到shouy
export function pageBackPrevEvent() {
  var prevPage = getPrevPage();
  if (prevPage == null) {
    uni.switchTab({
      url: tabbarPages[0],
    });
  } else {
    uni.navigateBack();
  }
}

/**
 * 字段数据校验
 * data           待校验的数据, 一维json对象
 * validation     待校验的字段, 格式 [{fields: 'mobile', msg: '请填写手机号码', is_can_zero: 1(是否可以为0)}, ...]
 */
export function fieldsCheck(data, validation) {
  for (var i in validation) {
    var tempValue;
    const pathArr = validation[i]["fields"].split(".");
    if (pathArr.length > 1) {
      tempValue = pathArr.reduce((prev, cur) => {
        console.log("路径解析", (prev || {})[cur]);
        return (prev || {})[cur];
      }, data);
      console.log("tempValue", pathArr, tempValue);
    } else {
      tempValue = data[validation[i]["fields"]];
    }
    var tempIsCanZero = validation[i]["is_can_zero"] || null;
    if (
      tempValue == undefined ||
      tempValue.length == 0 ||
      tempValue == -1 ||
      (tempIsCanZero == null && tempValue == 0)
    ) {
      showToast(validation[i]["msg"]);
      return false;
    }
  }
  return true;
}

/**
 * 获取tab页面切换参数
 */
export function getPageTabbarSwitchParams() {
  return uni.getStorageSync(CACHE_PAGE_TABBAR_SWITCH_PARAMS) || null;
}

/**
 * 删除tab页面切换参数
 */
export function removePageTabbarSwitchParams() {
  uni.removeStorageSync(CACHE_PAGE_TABBAR_SWITCH_PARAMS);
}

/**
 * 返回总分页数
 * @param {*} total
 * @param {*} pageSize
 * @returns
 */
export function calcPageTotal(total, pageSize) {
  if (pageSize < 1) {
    pageSize = 1;
  }
  let result = parseInt(total / pageSize);
  if (result * pageSize < total) {
    result = result + 1;
  }
  return result;
}

/**
 * 系统参数获取
 */
export function getLaunchCacheInfo() {
  return uni.getStorageSync(CACHE_LAUNCH_INFO_KEY) || null;
}

/**
 * 启动参数处理
 * @param {*} params
 * @returns
 */
export function handleLaunchParams(params) {
  // 原有缓存
  var cache_params = getLaunchCacheInfo();
  // 当前参数、从query读取覆盖
  if ((params.query || null) != null) {
    params = params.query;
  }
  // query下scene参数解析处理
  if ((params.scene || null) != null) {
    params = urlParamsToJson(decodeURIComponent(params.scene));
  }
  // 原始缓存是否存在邀请id、邀请使用最开始的用户id
  if (
    (params["referrer"] || null) == null &&
    cache_params != null &&
    (cache_params.referrer || null) != null
  ) {
    params["referrer"] = cache_params.referrer;
  }
  return params;
}

/**
 * 将地址字符串解析成地址对象
 * 字符串格式，省-省id,市-市id,县-县id,县以下详细地址
 * @param {*} addressInfoStr
 * @returns
 */
export function getAddressObjFromStr(addressInfoStr) {
  addressInfoStr = addressInfoStr || "";
  const addressInfoObj = {};
  let addressArr = addressInfoStr.split(",");
  if (addressArr.length < 3) {
    addressArr = ["-", "-", "-", ""];
  }
  // 省
  const provinceArr = addressArr[0].split("-");
  addressInfoObj.provinceName = provinceArr[0];
  addressInfoObj.provinceId = provinceArr[1];
  // 市
  const cityArr = addressArr[1].split("-");
  addressInfoObj.cityName = cityArr[0];
  addressInfoObj.cityId = cityArr[1];
  // 县区
  const countyArr = addressArr[2].split("-");
  addressInfoObj.countyName = countyArr[0];
  addressInfoObj.countyId = countyArr[1];
  // address
  addressInfoObj.address = addressArr[3];
  return addressInfoObj;
}

/**
 * 将地址对象解析成持久化的地址字符串
 * @param {*} addressInfoObj
 * @returns
 */
export function getAddressStrFromObj(addressInfoObj) {
  addressInfoObj = addressInfoObj || {};
  return (
    (addressInfoObj.provinceName || "") +
    "-" +
    (addressInfoObj.provinceId || "") +
    "," +
    (addressInfoObj.cityName || "") +
    "-" +
    (addressInfoObj.cityId || "") +
    "," +
    (addressInfoObj.countyName || "") +
    "-" +
    (addressInfoObj.countyId || "") +
    "," +
    (addressInfoObj.address || "")
  );
}

/**
 * 将地址对象解析成展示的地址字符串
 * @param {*} addressInfoObj
 * @returns
 */
export function getAddressDisplayStrFromObj(addressInfoObj) {
  addressInfoObj = addressInfoObj || {};
  return (
    (addressInfoObj.provinceName || "") +
    (addressInfoObj.cityName || "") +
    (addressInfoObj.countyName || "") +
    (addressInfoObj.address || "")
  );
}

// 拼接商店地址
export function getShopAddressDisplayStrFromObj(addressInfoObj) {
  addressInfoObj = addressInfoObj || {};
  const { shopProvince, shopCity, shopCounty } = addressInfoObj;
  const getFinalStr = (str) => {
    if (!str) {
      return "";
    }
    const arr = str.split("-");
    return arr[0] || "";
  };
  return (
    getFinalStr(shopProvince) +
    getFinalStr(shopCity) +
    getFinalStr(shopCounty) +
    (addressInfoObj.address || "")
  );
}

/**
 * 获取当前时间戳
 */
export function getTimestamp() {
  return parseInt(new Date().getTime());
}

/**
 * 获取日期
 * format       日期格式（默认 yyyy-MM-dd h:m:s）
 * timestamp    时间戳（默认当前时间戳）
 */
export function getDate(format, timestamp) {
  var d = new Date(timestamp || getTimestamp());
  var date = {
    "M+": d.getMonth() + 1,
    "d+": d.getDate(),
    "h+": d.getHours(),
    "m+": d.getMinutes(),
    "s+": d.getSeconds(),
    "q+": Math.floor((d.getMonth() + 3) / 3),
    "S+": d.getMilliseconds(),
  };
  if (/(y+)/i.test(format)) {
    format = format.replace(
      RegExp.$1,
      (d.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  }
  for (var k in date) {
    if (new RegExp("(" + k + ")").test(format)) {
      format = format.replace(
        RegExp.$1,
        RegExp.$1.length == 1
          ? date[k]
          : ("00" + date[k]).substr(("" + date[k]).length)
      );
    }
  }
  return format;
}

export function getDateDefatult(timestamp) {
  return getDate("yyyy-MM-dd hh:mm:ss", timestamp);
}

// 窗口高度处理
export function windowHeightHandle(system) {
  var height = system.windowHeight;
  // 状态栏
  if (system.statusBarHeight > 0) {
    height += system.statusBarHeight;
  }
  // 导航栏
  if (system.windowTop > 0) {
    height += system.windowTop;
  }
  // 底部菜单
  if (system.windowBottom > 0) {
    height += system.windowBottom;
  }
  return height;
}

export function promiseUniUploadFile(params) {
  console.log("调用promiseUniUploadFile", params);
  return new Promise((resolve, reject) => {
    uni.uploadFile({
      ...params,
      success: function (res) {
        console.log("promiseUniUploadFile success", res);
        resolve(res);
      },
      fail: function (e) {
        console.log("promiseUniUploadFile fail", e);
        reject(e);
      },
    });
  });
}

// 清除用户缓存
export function removeUserCacheEvent() {
  // 用户信息缓存
  uni.removeStorageSync(CACHE_USER_INFO_KEY);
  showToast("清除成功", "success");
  var url = tabbarPages[0];
  setTimeout(function () {
    uni.switchTab({
      url: url,
    });
  }, 1500);
}

export function inputTelChangeEvent(e){
		// 手机号格式校验正则表达式
		  let regExp = /^1[3-9]\d{9}$/;
		  
		  if (regExp.test(e)) {
		    return true; // 手机号有效
		  } else {
		    return false; // 手机号无效
		  }
	}
