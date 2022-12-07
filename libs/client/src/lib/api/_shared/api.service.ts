import axios from 'axios';

import { ApiRoot } from '../apiRoutes';

export function get<RetType>(path: string): Promise<RetType> {
  const promis = new Promise<RetType>((resolve, reject) =>
    axios
      .get(ApiRoot + '/' + path)
      .then((value) => {
        if (value.data !== '') {
          resolve(value.data);
        } else {
          reject();
        }
      })
      .catch((err) => reject(err)),
  );

  return promis;
}

export function post<DataType, RetType>(path: string, data: DataType): Promise<RetType> {
  const promis = new Promise<RetType>((resolve, reject) =>
    axios
      .post(ApiRoot + '/' + path, data)
      .then((value) => {
        if (value.data !== '') {
          resolve(value.data);
        } else {
          reject();
        }
      })
      .catch((err) => reject(err)),
  );

  return promis;
}

export function put<DataType, RetType>(path: string, data: DataType): Promise<RetType> {
  const promis = new Promise<RetType>((resolve, reject) =>
    axios
      .put(ApiRoot + '/' + path, data)
      .then((value) => {
        if (value.data !== '') {
          resolve(value.data);
        } else {
          reject();
        }
      })
      .catch((err) => reject(err)),
  );

  return promis;
}

export function del<RetType>(path: string): Promise<RetType> {
  const promis = new Promise<RetType>((resolve, reject) =>
    axios
      .delete(ApiRoot + '/' + path)
      .then((value) => {
        if (value.data !== '') {
          resolve(value.data);
        } else {
          reject();
        }
      })
      .catch((err) => reject(err)),
  );

  return promis;
}
