import { NOTIFY, SET_LOADING } from '../_actions/types';
const initial = {
  loading: false,
};
export const notifyReducer = (state = initial, action) => {
  switch (action.type) {
    case NOTIFY:
      return {
        ...state,
        loading: action.payload.loading || false,
      };
    case SET_LOADING:
      return { ...state, loading: true };

    default:
      return state;
  }
};
