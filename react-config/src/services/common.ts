import http from "@/utils/http";
/**
 * 获取登陆的用户信息
 */
export const getLoginApi = ({
  env,
  username,
  password,
}: {
  env: string;
  username: string;
  password: string;
}) => {
  return http.post<any, HttpResponse>(
    "/api/submit/login",
    `env=${env}&username=${username}&password=${password}`
  );
};
/**
 * 列表数据
 */
export const getHostListApi = ({
  env,
  username,
  password,
}: {
  env: string;
  username: string;
  password: string;
}) => {
  return http.post<any, HttpResponse>("/api/", "", {
    headers: {
      userId: "64",
      "app-type": 0,
      "cache-control": "no-cache",
      "content-type": "application/x-www-form-urlencoded",
      "device-id": "rewrwrwrfsfasfafadfafaff",
      "os-type": 0,
      sign: "fasdfafdsafafafdsf",
      timestamp: "1589120328562",
      version: "1.0",
    },
  });
};
