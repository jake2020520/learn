export const request = (
  {
    url,
    data,
    method,
    headers,
    onProgress,
    requestList
  }: {
    url: string;
    data: any;
    method: string;
    headers?: any;
    onProgress?: any;
    requestList?: any[];
  } = { url: '', data: '', method: 'POST', headers: {}, requestList: [] }
) => {
  return new Promise(resolve => {
    const xhr = new XMLHttpRequest();
    xhr.upload.onprogress = onProgress;
    xhr.open(method, url);
    headers && Object.keys(headers).forEach((key: string) => xhr.setRequestHeader(key, headers[key as string]));
    xhr.send(data);
    xhr.onload = (e: any) => {
      resolve({
        data: e.target.response
      });
    };
  });
};
