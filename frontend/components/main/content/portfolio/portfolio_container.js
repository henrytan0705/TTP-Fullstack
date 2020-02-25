import { connect } from 'react-redux';
import Portfolio from './portfolio';

const msp = state => {
    return {
        currentUser: state.session.userId
    }
}

const mdp = dispatch => {
    return {

    }
}

export default connect(msp, mdp)(Portfolio);