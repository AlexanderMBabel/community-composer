import { combineReducers } from 'redux';
import pianoRollReducer from './pianoRollReducer';
import sectionsGridReducer from './sectionsGridReducer';
import instrumentReducer from './instrumentReducer';
import universalReducer from './universalReducer';
import velocityReducer from './velocityReducer';
import audioEffectReducer from './audioEffectReducer';

export default combineReducers({
  pianoRollReducer,
  sectionsGridReducer,
  instrumentReducer,
  universalReducer,
  velocityReducer,
  audioEffectReducer
});
