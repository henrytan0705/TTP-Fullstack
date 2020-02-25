import React from 'react';
import NavbarMainContainer from '../../navbar/navbar_main_container';
import PortfolioContainer from './portfolio/portfolio_container';
import TransactionContainer from './transaction/transaction_container';
import { MainAuthRoute } from '../../../utils/main_route_util';

class Content extends React.Component {
    render(){
        return(
            <div>
                <NavbarMainContainer />
                <MainAuthRoute path="/portfolio" component={PortfolioContainer}/>
                <MainAuthRoute path="/transactions" component={TransactionContainer}/>
            </div>
        )
    }
}

export default Content;