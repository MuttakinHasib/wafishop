import { AUTH } from '../_actions/types';

const initial = {
  user: null,
  token: null,
};

export const authReducer = (state = initial, action) => {
  switch (action.type) {
    case AUTH:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
      };

    default:
      return state;
  }
};
