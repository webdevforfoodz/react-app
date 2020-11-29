import { combineReducers } from 'redux';

import walletReducer from './walletReducer.js';
import getWaifuBalance from './waifuBalanceReducer.js';

const allReducers = combineReducers({
    wallet: walletReducer,
    waifuBalance: getWaifuBalance,
    // waifuStaked: getWaifuStaked,
    // haremEarned: getHaremEarned
})

export default allReducers;