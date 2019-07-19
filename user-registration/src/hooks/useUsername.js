import { default as useLocalStorage } from './useLocalStorage';

export const useUsername = () => {
  return useLocalStorage('username', '');
};
