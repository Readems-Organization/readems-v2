import { combineReducers } from 'redux';
import { waitlists } from './waitlistReducer';

export const reducers = combineReducers({
  waitlists,
});
