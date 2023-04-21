import { request } from '../utils';
import { AuthLoginResponseSuccess } from '@types';

export const login = () => {
  return request.post<AuthLoginResponseSuccess>('/auth/login', {
    username: '',
    password: '',
  });
};
