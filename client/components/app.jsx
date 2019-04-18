import React from 'react';

import StockTitle from './title.jsx';
import Shares from './shares.jsx';
import Pricing from './pricing.jsx';
import EstimatedCost from './estimatedCost.jsx';
import CheckBox from './checkBox.jsx';
import ReviewOrder from './reviewOrder.jsx';
import BuyingPower from './buyingPower.jsx';
import DropDownInput from './dropDownInput.jsx';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: 'Market Order',
            shares: 'none',
            price: 0,
            ticker: 'none',
        };
    }

    componentDidMount() {
        var endpoint = window.location.pathname.split('/')[2]
        var appThis = this;
        fetch(`/api/stocks/${endpoint}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(response => {
                console.log('the response is:', response)
                return response.json();
            })
            .then(result => {
                console.log('the result is:', result);
                console.log('the ticker is: ', result[0].ticker)
                let currentPrice = result[0].currentPrice;
                let currentTicker = result[0].ticker;
                // ticker = result[0].ticker;
                // console.log('ticker is', ticker);
                appThis.setState({
                    price: currentPrice,
                    ticker: currentTicker
                })
            })
    }

    changeMode(event) {
        console.log('trim', event.target.textContent.trim())
        this.setState({
            mode: event.target.textContent.trim()
        })
    }

    handleShares(e) {
        var val = e.target.value;
        console.log(e.target.value === '');
        if (e.target.value === '' || e.target.value === '0') {
            console.log('okk')
            val = 'none';
        }
        this.setState({
            shares: val
        }, () => { console.log(this.state.shares) })
    }

    render() {
        var midContent;
        console.log(this.state.mode)
        if (this.state.mode === 'Market Order') {
            midContent =
                (
                    <div className='app_buySell_orderInfo'>

                        <Shares handleChange={this.handleShares.bind(this)} />
                        <Pricing price={this.state.price} />
                        <EstimatedCost price={this.state.price} handleCost={this.state.shares} />
                    </div>
                )
        } else if (this.state.mode === 'Limit Order') {
            midContent = (
                <div>
                    <Shares title='Limit Price' placeHolder={'$0.00'} />
                    <Shares handleChange={this.handleShares.bind(this)} />
                    <DropDownInput />
                    <Pricing />
                    <EstimatedCost price={this.state.price} handleCost={this.state.shares} />
                </div>
            )
        } else if (this.state.mode === 'Stop Loss Order') {
            midContent = (
                <div>
                    <Shares title='Stop Price' placeHolder={'$0.00'} />
                    <Shares handleChange={this.handleShares.bind(this)} />
                    <DropDownInput />
                    <EstimatedCost price={this.state.price} handleCost={this.state.shares} />
                </div>
            )
        } else {
            midContent = (
                <div>
                    <Shares title='Stop Price' placeHolder={'$0.00'} />
                    <Shares handleChange={this.handleShares.bind(this)} />
                    <DropDownInput />
                    <EstimatedCost price={this.state.price} handleCost={this.state.shares} />
                </div>
            )
        }
        return (
            <form className='app_buySell_orderForm'>
                <div className='app_buySell_cardHeader'>
                    <StockTitle changeMode={this.changeMode.bind(this)} title={this.state.ticker} />
                </div>
                {midContent}
                <CheckBox />
                <ReviewOrder price={this.state.price} sharesNum={this.state.shares} />
                <BuyingPower />
            </form>
        )
    }
}

export default App;