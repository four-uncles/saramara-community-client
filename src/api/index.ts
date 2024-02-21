import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 15000,
  withCredentials: true,
});

const onRequest = async (config: InternalAxiosRequestConfig) => {
  //   const { method, url } = config;
  config.timeout = 15000;

  return config;
};

const onResponse = async (response: AxiosResponse) => {
  //   const { method, url } = response.config;
  //   const { status } = response;

  return response;
};

const onErrorResponse = async (error: AxiosError | Error): Promise<AxiosError> => {
  if (axios.isAxiosError(error)) {
    // const { message } = error;
    // const { method, url } = error.config as AxiosRequestConfig;
    // const originRequest = error.config;
  } else {
    console.error(error.message);
  }
  return Promise.reject(error);
};

axiosInstance.interceptors.request.use(onRequest, err => Promise.reject(err));
axiosInstance.interceptors.response.use(onResponse, onErrorResponse);
