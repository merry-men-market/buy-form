import React from 'react';

const Pricing = (props) => (
    <div className='pricing_buySell_seciton'>
       <div className='pricing_buySell_title'><span>Market Price</span></div>
       <div className='pricing_buySell_price'><span>{props.price}</span></div>
    </div>
)

export default Pricing;