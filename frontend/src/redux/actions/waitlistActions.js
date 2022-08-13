import { waitlistsType } from '../types';
import * as api from '../api';

export const registerWaitlistUser = (waitlistsData) => async (dispatch) => {
  try {
    const { data } = await api.waitlistsRegister(waitlistsData);
    dispatch({
      type: waitlistsType.WAITLISTS_REGISTER,
      payload: data,
    });
    alert(data.success);
  } catch (err) {
    if (err.response && err.response.data) {
      alert(err.response.data.error);
    }
  }
};
