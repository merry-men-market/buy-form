import React from 'react';
//compnents
import Input from './input.jsx';

class Shares extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='shares_buySell_section'>
                <label id='shares_buySell_label'>
                    <div className='shares_buySell_title'>{this.props.title ? this.props.title : 'Shares'}</div>
                    <Input placeHolder={this.props.placeHolder ? this.props.placeHolder : '0'} handleChange={this.props.handleChange}/>
                </label>
            </div>
        );
    }
};

export default Shares;