import { stringify } from 'qs';
import request from '../utils/request';

export async function queryCurrent(params) {
  return request(`/user/getUser?${stringify(params)}`);
}
