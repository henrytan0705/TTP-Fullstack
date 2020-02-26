import * as StockAPIUtil from '../utils/stock_util';

export const PURCHASE_STOCK = "PURCHASE_STOCK";
export const UPDATE_STOCK = "UPDATE_STOCK";
export const SELL_STOCK = "SELL_STOCK";
export const GET_STOCK = "GET_STOCK";

export const purchaseStock = stock => {
    return {
        type: PURCHASE_STOCK,
        stock
    }
}

export const updateStock = stock => {
    return {
        type: UPDATE_STOCK,
        stock
    }
}

export const sellStock = stock => {
    return {
        type: SELL_STOCK,
        stock
    }
}


//////////////////////////Thunk actions///////////////////////////


export const purchase = (stock) => dispatch => {
    return StockAPIUtil.purchaseStock(stock)
        .then(stock => dispatch(purchaseStock(stock)))
}

export const update = () => dispatch => {
    return StockAPIUtil.updateStock()
        .then(stock => dispatch(updateStock(stock)))
}

export const sell = () => dispatch => {
    return StockAPIUtil.sellStock()
        .then(stock => dispatch(sellStock(stock)))
}

export const fetchInfo = (stock) => dispatch => {
    return StockAPIUtil.fetchStock(stock)
        .then(res => 
            dispatch({
                type: GET_STOCK,
                stock: res
            }
        ))
}