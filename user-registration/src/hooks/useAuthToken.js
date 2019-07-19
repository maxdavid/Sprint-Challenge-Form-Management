import { default as useLocalStorage } from './useLocalStorage';

export const useAuthToken = () => {
  return useLocalStorage('token', '');
};
