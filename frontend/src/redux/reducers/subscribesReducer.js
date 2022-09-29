import { subscribesType } from '../types';

const initialState = {
  subscribesEmails: [],
};

export const subscribes = (state = initialState, action) => {
  switch (action.type) {
    case subscribesType.SUBSCRIBES_REGISTER:
      return {
        ...state,
        subscribesEmails: [...state.subscribesEmails, action.payload],
      };

    default:
      return state;
  }
};
