import { PURCHASE_STOCK, UPDATE_STOCK, SELL_STOCK, GET_STOCK } from '../actions/stock_actions';
import { merge } from 'lodash';

const stockReducer = (state ={}, action) => {
    Object.freeze(state);

    switch(action.type){
        case GET_STOCK:
            let { stock } = action;
        
            let data = {
                symbol: stock.symbol,
                name: stock.companyName,
                open: stock.open,
                close: stock.close,
                price: stock.latestPrice,
                volume: stock.latestVolume
            };

            return merge({}, state, data);
        default:
            return state;
    }
}

export default stockReducer;