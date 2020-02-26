import React from 'react';

class StockSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            ticker: "",
            quantity: 0,
            totalCost: null
        };
        this.stockTicker = React.createRef();
        this.stockQuantity = React.createRef();
        this.getStock = this.getStock.bind(this);
        this.calcuatePrice = this.calcuatePrice.bind(this);
    }

    getStock() {
        let stock = this.stockTicker.current.value;
        this.state.ticker = stock;
        this.props.fetchInfo(stock);
    }

    calcuatePrice() {
        let quantity = this.stockQuantity.current.value;

        if (quantity >= 0) {
            this.state.totalCost = (this.props.stockData.price * Number(quantity)).toFixed(2);
            this.forceUpdate();
        }
    }

    componentDidMount(){
        this._mount = true;
    }

    componentWillUnmount() {
        this._mount = false;
    }

    componentDidUpdate(){
        // this.calcuatePrice();
    }

    render(){
        let searchResults;
        let totalCost;
        
        if (this.props.stockData.symbol) {
            searchResults = (
                <div>
                    <p>Company Name: {this.props.stockData.name}</p>
                    <p>Ticker: {this.props.stockData.symbol}</p>
                    <p>Price: ${this.props.stockData.price} per share</p>

                    <form action="">
                        <input
                            className=""
                            type="number"
                            placeholder="Quantity"
                            onChange={this.calcuatePrice}
                            ref={this.stockQuantity}
                        />

                    </form>
                </div>
            )
        }
        
        if (this.state.totalCost) {
            totalCost = (
                <div>
                    <p>Total Cost for shares is: ${this.state.totalCost}</p>
                </div>
            )
        }

        return (
            <div>
                <h1>Stock Search Section(Search By Ticker Symbol)</h1>
                
                <form>
                    <input 
                        className=""
                        type="text" 
                        placeholder="Ticker"
                        ref={this.stockTicker}
                    />

                    <button onClick={this.getStock}>
                        Search
                    </button>

                </form>

                {searchResults}

                

                {totalCost}
            </div>
        )
    }
}

export default StockSearch;