import React from 'react';

class ReviewInfo extends React.Component {
    constructor(props) {
        super(props);

        this.contentStyle = {
            transition: '250ms',
        }
    }


    render() {
       return (

                                      
                        <div className='reviewInfo_buySell_contentSection'>
                            <div className='reviewInfo_buySell_upperContentSection' style={this.contentStyle}>
                                <h4 className='reviewInfo_buySell_title'>
                                    <div className='reviewInfo_buySell_errorIconSection'>
                                        <svg className='reviewInfo_buySell_errorIconSvg' width='16' height='16' viewBox='0 0 16 16'>
                                            <g fillRule='evenodd' transform='translate(0 -2)'></g>
                                        </svg>
                                    </div>
                                    <div> {(this.props.sharesNum === 'none' || this.props.sharesNum === '0') ? 'Error' : 'Not Enough Buying Power'}</div>
                                </h4>
                            </div>
                            <div className='reviewInfo_buySell_lowerContentSection' style={this.contentStyle}>
                                {   (this.props.sharesNum === 'none' || this.props.sharesNum === '0') ?
                                    <p>Please enter a valid number of shares.</p>
                                    :
                                    <p>
                                        You don’t have enough buying power to buy 1 share of AAPL.
                                        Please deposit $206.83 to purchase 1 share at market price (5% collar included).
                                        Market orders on Goblinhood are placed as limit orders up to 5% above the market price 
                                        in order to protect customers from spending more than they have in their Robinhood account. 
                                        If you want to use your full buying power of $0.00 you can place a limit order instead.
                                    </p>
                                }
                                
                            </div>
                        </div>                   
                
           
       );
    }
}

export default ReviewInfo;