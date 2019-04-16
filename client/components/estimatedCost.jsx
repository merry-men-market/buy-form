import React from 'react';

class Estimate extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='estimatedCost_buySell_section'>
                <label className='estimatedCost_buySell_title'>Estimated Cost</label>
                <div className='estimatedCost_buySell_price'>${this.props.handleCost === 'none' ? 0 : (this.props.handleCost * this.props.price).toFixed(2)}</div>
            </div>
        );
    }
}

export default Estimate;