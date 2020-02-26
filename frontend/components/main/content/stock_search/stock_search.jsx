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
        this.purchase = this.purchase.bind(this);
        // this.searchResults;
    }

    getStock() {
        let stock = this.stockTicker.current.value;
        this.state.ticker = stock;
        this.props.fetchInfo(stock);

        if(this.stockQuantity.current) {
            this.stockQuantity.current.value = 0;
            this.calcuatePrice();
        }
    }

    calcuatePrice() {
        let quantity = this.stockQuantity.current.value;
        this.state.quantity = quantity;

        if (quantity >= 0) {
            this.state.totalCost = (this.props.stockData.price * Number(quantity)).toFixed(2);
            this.forceUpdate();
        }
    }

    purchase(){
        let data = this.props.stockData;
        
        let stock = {
            name: data.name,
            ticker: data.symbol,
            price: data.price,
            quantity: this.state.quantity,
            user_id: this.props.currentUser
        }
        
        this.props.purchase(stock);
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
                    <p>Volume: {this.props.stockData.volume} shares</p>
                    <p>Open Price: ${this.props.stockData.open} / share</p>
                    <p>Buy Price: ${this.props.stockData.price} / share</p>

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
        
        if (this.state.quantity) {
            totalCost = (
                <div>
                    <p>Total Cost for shares is: ${this.state.totalCost}</p>
                    <button onClick={this.purchase}> Buy </button>
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