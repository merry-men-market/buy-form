import React from 'react';
//components
import Input from './input.jsx';
import Pricing from './pricing.jsx';

class FillOut extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Input identifier='Shares' placeHolder='0'/>
                <Pricing identifier='Market Price' presenting='$195.54'/>

            </div>
        )
    }
};

export default FillOut;