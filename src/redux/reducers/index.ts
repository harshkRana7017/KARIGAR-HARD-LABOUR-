import { combineReducers } from 'redux';
import { authReducer } from './auth.reducer';
import { karigarReducer } from './karigar.reducer';
import { userReducer } from './user.reducer';

const appReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  karigar: karigarReducer,
});

export const rootReducer = (state: any, action: any) =>
  appReducer(state, action);

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
