import http from './httpService';

export function getProducts(qs) {
  return http.get(`/product/list?${qs}`).then(({ data }) => data.data);
}
