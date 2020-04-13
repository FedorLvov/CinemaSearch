import _ from 'lodash';

import * as Actions from '../constants/actions';

const initialState = {
  stats: ''
};

export default function (state = initialState, action = {}) {
  const { type, data } = action;

  switch (type) {
    case Actions.LOAD_STATS_START:
      return initialState;
    default:
      return state;
  }
}
