import React from 'react';

class DropDown extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='dropDown_buySell_outerSection'>
                <div className='dropDown_buySell_innerSection'>
                <header className='dropDown_buySell_title'><h3>Order Type</h3></header>
                <div className='dropDown_buySell'>
                    <a onClick={this.props.changeMode} className='dropDown_buySell_option-active' href='#'>Market Order</a><br></br>
                    <a onClick={this.props.changeMode} className='dropDown_buySell_option' href='#'>Limit Order</a><br></br>
                    <a onClick={this.props.changeMode} className='dropDown_buySell_option' href='#'>Stop Loss Order</a><br></br>
                    <a onClick={this.props.changeMode} className='dropDown_buySell_option' href='#'>Stop Limit Order</a>
                </div>
                </div>
            </div>
        );
    }
}

export default DropDown;