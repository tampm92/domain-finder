import { request } from "../utils/request";

export const searchDomain = ({ domain = "", page = 0, limit = 10 } = {}) => {
  return request({
    url: "/v1/domains/search",
    method: "get",
    params: { domain, page, limit },
  });
};
