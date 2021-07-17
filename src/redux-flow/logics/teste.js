import api from "../../services/api";
import { userSuccess, userError, getUser } from "../actions/teste";

export const loadUser = () => async (dispatch, getState) => {
  dispatch(getUser());
  await api
    .get("/users/arielbetti", {
    }).then((res) => {
      dispatch(userSuccess(res.data))
    }).catch((error) => {
      dispatch(userError(error && error.message ? error.data : 'Ocorreu um erro'));
    });
};

export default loadUser;
