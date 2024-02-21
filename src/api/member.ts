import { axiosInstance } from '.';

/** MEMBER */
export const signUp = async (signData: { memberId: string; nickname: string; password: string }) => {
  const { data } = await axiosInstance.post(`/api/v1/member/signup`, signData);
  return data;
};
export const login = async (loginData: { loginEmail: string; loginPassword: string }) => {
  const { data } = await axiosInstance.post(`/api/v1/member/login`, loginData);
  return data;
};
