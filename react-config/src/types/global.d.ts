declare global {
  interface HttpResponse<T = any> {
    code: HttpCode;
    message: string;
    data?: T;
  }

  type RestParameters<T extends (...args: any) => any> = T extends (
    arg1: any,
    ...args: infer P
  ) => any
    ? P
    : never;

  interface StoreAction<F extends (...args: any) => any> {
    (...args: RestParameters<F>): ReturnType<F>;
  }
  const NODE_ENV: string;
  const ApiProxyPath: string;
  const ApiDomain: string;
  const BASE_API: string;
  const DOMAIN_API: string;
}
// 解决less 报错
declare module "*.module.less" {
  const classes: {
    readonly [key: string]: string;
  };
  export default classes;
  declare module "*.less";
}

export {};
