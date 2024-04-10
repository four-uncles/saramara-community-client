import { axiosInstance } from '.';

/** MEMBER */
export const signUp = async (signData: { email: string; password: string; nickname: string }) => {
  const { data } = await axiosInstance.post(`/api/v1/member`, signData);
  return data;
};
export const login = async (loginData: { email: string; password: string }) => {
  const { data } = await axiosInstance.post(`/api/v1/member/login`, loginData);
  return data;
};
export const getMyInfo = async (memberId: number) => {
  const { data } = await axiosInstance.get(`/api/v1/member/${memberId}`);
  return data;
};
export const logout = async () => {
  const { data } = await axiosInstance.get(`/api/v1/member/logout`);
  return data;
};
