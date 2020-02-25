import { connect } from 'react-redux';
import Content from './content';

const msp = state => {
    return {
        currentUser: state.session.userId
    }
}


export default connect(msp)(Content);