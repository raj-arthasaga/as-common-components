import { combineReducers } from 'redux';
import {} from './login/reducer';

const rootReducer = combineReducers({
  Blog: BlogReducer,
  suggestBlogs: suggestBlogs,
});

export default rootReducer;
