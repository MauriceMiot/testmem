import { combineReducers } from 'redux';
import intermitence from './intermitence/reducer';
import forgotPassword from './forgot-password/reducer';
import auth from './auth/reducer';

const reducers: any = combineReducers({
  intermitence,
  forgotPassword,
  auth
});

export default reducers;
