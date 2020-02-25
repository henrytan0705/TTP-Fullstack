import { connect } from 'react-redux';
import Transcation from './transcation';

const msp = state => {
    return {
        currentUser: state.session.userId
    }
}

const mdp = dispatch => {
    return {

    }
}

export default connect(msp, mdp)(Transcation);