import { connect } from 'react-redux';
import Transaction from './transaction';
import { retrieveTransactions } from '../../../../actions/transaction_actions';

const msp = state => {
    return {
        currentUser: state.session.userId,
        transactions: state.entities.transactions
    }
}

const mdp = dispatch => {
    return {
        retrieveTransactions: id => dispatch(retrieveTransactions(id))
    }
}

export default connect(msp, mdp)(Transaction);