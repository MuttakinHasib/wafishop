import { toast } from 'react-toastify';
import { NOTIFY, SET_LOADING } from './types';

export const setNotify = notify => {
  if (notify.success) {
    toast.success(notify.success);
  } else if (notify.error) {
    notify.error.map(err => toast.error(err));
  }
  return { type: NOTIFY, payload: notify };
};

export const setLoading = () => ({ type: SET_LOADING });
