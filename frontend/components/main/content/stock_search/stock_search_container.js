import { connect } from 'react-redux';
import StockSearch from './stock_search';
import { fetchInfo, purchase, sell } from '../../../../actions/stock_actions.js';

const msp = state => {
    return {
        currentUser: state.session.userId,
        stockData: state.entities.searchedStock
    }
}

const mdp = dispatch => {
    return {
        fetchInfo: stock => dispatch(fetchInfo(stock)),
        purchase: stock => dispatch(purchase(stock)),
        sell: stock => dispatch(sell(stock))
    }
}

export default connect(msp, mdp)(StockSearch);