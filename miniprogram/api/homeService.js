import { request } from "@utils/http/index";
export const fetchHomeRecommend = () => {
  return request.get({
    url: "/api/channel/one/0/0"
  });
}