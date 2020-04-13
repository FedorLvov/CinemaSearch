import * as Actions from '../constants/actions';
import * as API from '../constants/api';
import { getSimpleFetch } from '../utils/fetch'

export const loadStats = () => (dispatch) => {
  dispatch({
    type: Actions.LOAD_STATS,
    promise: getSimpleFetch('GET', API.officialSite),
  });
};