import {AxiosResponse} from 'axios';
import {Client} from './instance';

const getRequest = async (
  URL: string,
  Params: object,
): Promise<AxiosResponse<any>> => {
  const response = await Client.get(URL, {params: Params});
  return response;
};

const updateRequest = async (
  URL: string,
  Params: object,
): Promise<AxiosResponse<any>> => {
  const response = await Client.put(URL, {params: Params});
  return response;
};

export {getRequest, updateRequest};
