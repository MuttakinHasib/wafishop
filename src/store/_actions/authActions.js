import axios from 'axios';
import Cookie from 'js-cookie';
import { toast } from 'react-toastify';
import { postData } from '../../../server/utils/fetchData';
import { setLoading, setNotify } from './notifyActions';
import { AUTH } from './types';

export const authRegister = userData => async dispatch => {
  try {
    dispatch(setLoading());
    const { data } = await axios.post('api/auth/register', userData);
    dispatch(setNotify({ loading: false }));
    toast.success(data.msg);

    // dispatch({ type: AUTH, payload: data });
  } catch (err) {
    dispatch(setNotify({ loading: false }));
    toast.error(err.response.data.msg);
  }
};

export const authLogin = userData => async dispatch => {
  try {
    dispatch(setLoading());
    const { data } = await axios.post('api/auth/login', userData);

    Cookie.set('refreshtoken', data.refresh_token, {
      path: 'api/auth/accessToken',
      expires: 7,
    });

    localStorage.setItem('firstLogin', true);
    dispatch(setNotify({ loading: false }));
    toast.success(data.msg);

    dispatch({
      type: AUTH,
      payload: { token: data.refresh_token, user: data.user },
    });
  } catch (err) {
    dispatch(setNotify({ loading: false }));
    toast.error(err.response.data.msg);
  }
};

export const fetchUser = () => async dispatch => {
  try {
    dispatch(setLoading());
    const { data } = await axios.get('api/auth/accessToken');

    dispatch(setNotify({ loading: false }));

    dispatch({
      type: AUTH,
      payload: { token: data.access_token, user: data.user },
    });
  } catch (err) {
    localStorage.removeItem('firstLogin');
    dispatch(setNotify({ loading: false }));
    toast.error(err.response.data.msg);
  }
};

export const logout = () => dispatch => {
  dispatch(setLoading());
  Cookie.remove('refreshtoken', { path: 'api/auth/accessToken' });
  localStorage.removeItem('firstLogin');
  dispatch({ type: AUTH, payload: { token: null, user: null } });
  dispatch(setNotify({ loading: false }));
  toast.success('Logged out');
};
