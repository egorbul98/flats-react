import { combineReducers } from 'redux';
import {filterReducer} from './filter';
import {ComplexesReducer} from './complexes';
import {reviewsReducer} from './reviews';

const rootReducer = combineReducers({
  filter: filterReducer,
  complexes: ComplexesReducer,
  reviews: reviewsReducer,
})
type rootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<rootReducerType>;
export default rootReducer;
// This would produce the following state object
