import { connect } from 'react-redux';
import Splash from './splash';

const msp = state => {
    return {
        currentUser: state.session.userId
    }
}

export default connect(msp)(Splash);