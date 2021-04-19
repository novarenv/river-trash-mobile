import {AUTH} from '../actions/actionTypes';

const initialState = {
  user: null,
};

export const bearerToken = state => state.persist.auth.user?.accessToken;

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH.SAVE_USER_DATA:
      return {...state, user: action.payload};
    case AUTH.UPDATE_FIRST_LOGIN:
      const newUser = new Object(state.user);
      newUser.firstLogin = false;
      return {...state, user: newUser};
    case AUTH.UPDATE_USER_HAS_PIN:
      const newUserLagi = new Object(state.user);
      console.log(newUserLagi);
      newUserLagi.userHasPin = action.payload;
      return {...state, user: newUserLagi};
    default:
      return state;
  }
};

export default authReducer;
