import { UPDATE_GRID } from '../actions/types';
import createInitialGrid from '../utils/createInitialGrid';
const initialState = {
  grid: createInitialGrid()
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_GRID:
      return {
        grid: action.payload
      };
    default:
      return state;
  }
};
