import http from './httpService';

export function createPayment() {
  return http.post('/payment/create').then(({ data }) => data.data);
}
