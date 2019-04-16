import React from 'react';

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.inputStyle = {
            textAlign: 'right',
        }
        this.state = {

        };
    }

    

    render () {
        return (
            <div>
                <input onChange={this.props.handleChange} className='input_buySell_input' min='0' placeholder={this.props.placeHolder} 
                step='1'type='number' style={this.inputStyle}></input>
            </div>
        );
    }
}

export default Input;