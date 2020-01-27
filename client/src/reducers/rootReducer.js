import { combineReducers } from 'redux';
import pianoRollReducer from './pianoRollReducer';
import sectionsGridReducer from './sectionsGridReducer';
import instrumentReducer from './instrumentReducer';

export default combineReducers({
  pianoRollReducer,
  sectionsGridReducer,
  instrumentReducer
});
