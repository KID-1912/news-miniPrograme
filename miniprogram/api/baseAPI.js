import { request } from "@utils/http/index";
import WXAPI from "apifm-wxapi";
WXAPI.init("xiyitao");

// 微信用户登录账号
export const fetchWxLoginAccount = (options) => {
  return WXAPI.login_wx(options.code);
}

// 微信用户信息注册账号
export const fetchWxUserInfoRegister = (options) => {
  // register_complex
  return WXAPI.register_complex(options);
}