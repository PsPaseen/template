import { useForm, useFormState } from 'react-final-form';

const ACCESS_TOKEN = 'ACCESS_TOKEN';

export const setToken = (token: string) => sessionStorage.setItem(ACCESS_TOKEN, token);

export const getToken = () => sessionStorage.getItem(ACCESS_TOKEN);

export const isMobile = () => {
  return navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|IEMobile)/);
};

export const useCustomForm = <T extends any>() => {
  const { change, getFieldState } = useForm<T>();
  const formState = useFormState<T>({
    subscription: {
      initialValues: true,
      values: true,
      errors: true,
      submitFailed: true,
    },
  });

  return {
    change,
    formState,
    getFieldState,
    values: formState.values,
    errors: formState.errors,
    submitFailed: formState.submitFailed,
  };
};

export const syncDelay = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
