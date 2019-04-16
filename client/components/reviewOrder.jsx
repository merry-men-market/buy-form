import React from 'react';

import ReviewInfo from './reviewInfo.jsx';

class ReviewOrder extends React.Component {
    constructor(props) {
        super(props);

        this.sectionStyle = {
            
            transitionDuration: '300ms',           
        }
        
        this.state = {
            sharesNum : 'none',
            infoRendered : false,
        }
    }

    

    clickHandler(e) {
        var currentShares = this.props.sharesNum;
        var buttonType = e.target.textContent.trim();
        if(buttonType === 'Back' && this.state.infoRendered) {
        this.setState({
            sharesNum: currentShares,
            infoRendered: !this.state.infoRendered,
        })
    } else if(buttonType === 'Review Order' && !this.state.infoRendered) {
        this.setState({
            sharesNum: currentShares,
            infoRendered: !this.state.infoRendered,
        })
    } else {
        console.log(e.target.textContent, 'clicked');
    }

    }


    render() {
        var buttonName;
        
        if(this.state.infoRendered && this.state.sharesNum === 'none') {
            buttonName =  'Back';
        } else if(this.state.infoRendered && this.state.sharesNum > 0) {
            buttonName = 'Deposit $' + this.props.price;
        } else {
            buttonName = 'Review Order'
        }


        return(
            <div className='reviewOrder_buySell_closedUp'>
                <div className='reviewOrder_buySell_section'>
                    <div className='reviewInfo_buySell_transitionSection' style={this.sectionStyle}>
                        <div className='reviewInfo_buySell_reviewSection'>
                            <div>
                { this.state.infoRendered &&
                    <ReviewInfo sharesNum={this.state.sharesNum} />
                }
                            </div>
                        </div>
                    </div>
                        <div className='reviewOrder_buySell_buttonSection'>
                        
                            <button type='button' onClick={this.clickHandler.bind(this)}className='reviewOrder_buySell_button'>                           
                            <span className='reviewOrder_buySell_buttonDescription'>{buttonName}</span>
                            </button>
                         
                            {
                                (this.state.infoRendered && (this.state.sharesNum > 0)) && 
                                <div>
                                    <button type='button' onClick={this.clickHandler.bind(this)} className='reviewOrder_buySell_backButton'><span id='reviewOrder_buySell_backSpan'>Back</span></button>
                                </div>
                            }
                        </div>
                   
                </div>
            </div>
        )
    }
};

export default ReviewOrder; 