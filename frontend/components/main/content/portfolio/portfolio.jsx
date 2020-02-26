import React from 'react';
import StockSearchContainer from '../stock_search/stock_search_container';

class Portfolio extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render(){
        return (
            <>
                <div>
                    <h1>Portfolio Page</h1>
                </div>
                <StockSearchContainer />
            </>
        )
    }
}

export default Portfolio;