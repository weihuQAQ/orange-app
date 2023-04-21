import { ResWrapper } from './request';

export type AuthLoginResponseSuccess = ResWrapper<{
  username: string;
}>;
