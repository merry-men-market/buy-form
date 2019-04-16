import React from 'react';

class BuyingPower extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='buyingPower_buySell_component'>
                {'$0.00 '}
                {'Buying Power Available'}
            </div>
        )
    }
}

export default BuyingPower;