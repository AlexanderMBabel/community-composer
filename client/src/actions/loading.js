import { IS_LOADING } from './types';

export const isLoading = loading => dispatch => {
  dispatch({
    type: IS_LOADING,
    payload: loading
  });
};
