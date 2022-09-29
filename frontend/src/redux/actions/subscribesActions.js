import { subscribesType } from '../types';
import * as api from '../api';
import { toast } from 'react-toastify';

export const registerSubscribesEmail = (subscribesRegisterData) => async (
  dispatch,
) => {
  try {
    const { data } = await api.subscribesRegister(subscribesRegisterData);
    dispatch({
      type: subscribesType.SUBSCRIBES_REGISTER,
      payload: data,
    });
    console.log('******* ', data);
    toast.success(data.message);
  } catch (err) {
    if (err.response && err.response.data) {
      toast.error(err.response.data.error);
    }
  }
};
