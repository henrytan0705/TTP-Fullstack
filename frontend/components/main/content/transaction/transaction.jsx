import React from 'react';

class Transaction extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.retrieveTransactions(this.props.currentUser);
    }

    render(){
        let transactions;
        // debugger

        if (this.props.transactions) {
            transactions = [];
            for (let i = this.props.transactions.length-1; i >= 0; i--) {
                // debugger
                transactions.push(
                <div key={`${i}${this.props.transactions}`}>
                    <p> Stock: {this.props.transactions[i].name}</p>
                    <p> Purchase Price: {this.props.transactions[i].price}</p>
                    <p> Quantity: {this.props.transactions[i].quantity}</p>
                </div>
                )
            }
            // debugger
        }
        
        return (
            <div>
                {transactions}
            </div>
        )
    }
}

export default Transaction;