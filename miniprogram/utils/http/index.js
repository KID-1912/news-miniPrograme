import { promisifyAll, promisify } from 'wx-promise-pro'
import { merge } from "@lib/lodash.min.js";
import { config } from "@/config/index";
// promisify all wx‘s api
promisifyAll()

export const request = function (options) {
  const defaultOptions = {
    timeout: 12000,
    headers: {
      "Content-Type": "application/www-form-urlencoded",
    }
  };
  if (options.url.match(/^\//)) options.url = config.BASE_URL + options.url;
  return wx.pro.request(merge(defaultOptions, options));
}

request.get = function (options) {
  return request({
    method: "GET",
    ...options
  });
}

request.post = function (options) {
  return request({
    method: "POST",
    ...options
  });
}