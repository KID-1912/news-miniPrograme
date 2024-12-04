import { request } from "@utils/http/index";

// 获取首页推荐数据
export const fetchHomeRecommend = () => {
  return request.get({
    url: "/api/channel/one/0/0"
  });
}