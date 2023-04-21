export enum ResStatus {
  Success = 200,
  Unauthenticated = 401,
  Unauthorized = 403,
}

export interface ResWrapper<T, C = ResStatus.Success> {
  code: ResStatus;
  result: T;
}
