import { waitlistsType } from '../types';

const initialState = {
  waitlistsUser: [],
};

export const waitlists = (state = initialState, action) => {
  switch (action.type) {
    case waitlistsType.WAITLISTS_REGISTER:
      return {
        ...state,
        waitlistsUser: [...state.waitlistsUser, action.payload],
      };

    default:
      return state;
  }
};
