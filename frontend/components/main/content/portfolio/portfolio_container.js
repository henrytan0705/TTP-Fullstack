import { connect } from 'react-redux';
import Portfolio from './portfolio';
import { purchase, update, sell } from '../../../../actions/stock_actions.js';

const msp = state => {
    return {
        currentUser: state.session.userId
    }
}

const mdp = dispatch => {
    return {
        purchase: stock => dispatch(purchase(stock)),
        update: stock => dispatch(update(stock)),
        sell: stock => dispatch(sell(stock)),
    }
}

export default connect(msp, mdp)(Portfolio);