import axios from 'axios';

const GET_USERS_REQUEST_ACTION = '@@users/GET_USERS_REQUEST_ACTION';
const GET_USERS_SUCCESS_ACTION = '@@users/GET_USERS_SUCCESS_ACTION';
const GET_USERS_FAILURE_ACTION = '@@users/GET_USERS_FAILURE_ACTION';

const getUsersRequestAction = () => (
  {
    type: GET_USERS_REQUEST_ACTION,
  }
)

const getUsersSuccessAction = (users) => (
  {
    type: GET_USERS_SUCCESS_ACTION,
    payload: { users },
  }
)

const getUsersFailureAction = (error) => (
  {
    type: GET_USERS_FAILURE_ACTION,
    payload: { error },
  }
)

const getUsersRequest = () => {
  return (dispatch) => {
    dispatch(getUsersRequestAction());

    axios
      .get('https://tt-front.vercel.app/prepods')
      .then((response) => {
        dispatch(getUsersSuccessAction(response.data));
      })
      .catch((error) => {
        dispatch(getUsersFailureAction(error.message));
      });
  }
}

export {
  GET_USERS_REQUEST_ACTION,
  GET_USERS_SUCCESS_ACTION,
  GET_USERS_FAILURE_ACTION,
  getUsersRequestAction,
  getUsersSuccessAction,
  getUsersFailureAction,
  getUsersRequest,
};
