import { GET_USERS_FAILURE_ACTION, GET_USERS_REQUEST_ACTION, GET_USERS_SUCCESS_ACTION } from './usersActions';

const initialState = {
  loading: false,
  users: [],
  error: null,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_REQUEST_ACTION:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case GET_USERS_SUCCESS_ACTION:
      return {
        ...state,
        loading: false,
        error: null,
        users: action.payload.users,
      };

    case GET_USERS_FAILURE_ACTION:
      return {
        ...state,
        loading: false,
        error: 'Ошибка загрузки пользователей',
      };

    default:
      return state;
  }
}

export default usersReducer;
