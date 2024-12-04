import { request } from "@utils/http/index";
import WXAPI from "apifm-wxapi";
WXAPI.init("xiyitao");

// 更新用户账号信息
export const fetchUpdateUserAccountInfo = (options) => {
  return WXAPI.modifyUserInfo(options);
  // return request.get({
  //   url: "/user/wxapp/login",
  //   data: options
  // });
}


// 获取用户账号信息
export const fetcheUserAccountInfo = (options) => {
  return WXAPI.userDetail(options.loginToken);
  // return request.get({
  //   url: "/user/wxapp/login",
  //   data: options
  // });
}