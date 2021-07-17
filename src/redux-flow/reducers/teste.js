import {
  GET_USER,
  LOAD_USER_ERROR,
  LOAD_USER_SUCCESS,
} from "../contants/teste";

const INITIAL_STATE = {
  loading: false,
  error: false,
  user: {},
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_USER:
      return {
        ...INITIAL_STATE,
        loading: true,
        error: false,
      };
    case LOAD_USER_SUCCESS:
      return {
        ...INITIAL_STATE,
        loading: false,
        error: false,
        user: action.data,
      };
    case LOAD_USER_ERROR:
      return {
        ...INITIAL_STATE,
        loading: false,
        error: true,
      };

    default:
      return state;
  }
}
