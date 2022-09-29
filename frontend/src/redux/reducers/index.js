import { combineReducers } from 'redux';
import { waitlists } from './waitlistReducer';
import { subscribes } from './subscribesReducer';

export const reducers = combineReducers({
  waitlists,
  subscribes,
});
