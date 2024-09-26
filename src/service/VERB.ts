import {AxiosResponse} from 'axios';
import {Client} from './instance';
import {object} from 'yup';

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
  const response = await Client.put(URL, null, {params: Params}); // Params'i URL sorgu parametresi olarak gönderiyoruz
  return response;
};

const postRequest = async (URL: string, params: object) => {
  const response = await Client.post(URL, params);

  return response;
};

export {getRequest, updateRequest, postRequest};
