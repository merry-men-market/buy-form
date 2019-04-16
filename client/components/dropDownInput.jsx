import React from 'react';

class DropDownInput extends React.Component {
    constructor(props) {
        super(props);
        this.style = {
            border: '0px',
            width: '1px',
            display: 'inline-block'

        }

        this.state = {
            dropDownRendered: false,
            mode: 'Good For Day',
        }
    }

    clickHandlerArrow() {
        this.setState({
            dropDownRendered: !this.state.dropDownRendered
        });
    }

    clickHandlerOption(e) {
        var content = e.target.textContent.trim();
        this.setState({
            dropDownRendered : !this.state.dropDownRendered,
            mode : content,
        })
    }

    render() {
        return (
            <div className='dropDownInput_buySell_component'>
                    Expiration
                    <div className='dropDownInput_buySell_inputSection'>
                        <label id='dropDownInput_buySell_label'>
                            <div>
                                <div className='dropDownInput_buySell_inputDiv'>
                                    <input className='dropDownInput_buySell_input' type='hidden' name='time_in_force' value='gfd'></input>
                                    <div className='dropDownInput_buySell_inputSelection'>
                                        <span className='dropDownInput_buySell_selectMultiValue'>
                                            <div className='dropDownInput_buySell_selectValue'>
                                                <span className='dropDownInput_buySell_selectValueLabel' 
                                                role='option' aria-selected='true' id='dropDownInput_buySell_selectValue2'>
                                                    {this.state.mode}
                                                </span>
                                            </div>
                                            <div role='combobox' aria-expanded={this.state.dropDownRendered} aria-owns 
                                            aria-activedescendant='dropDownInput_buySell_selectValue2' 
                                            className='dropDownInput_buySell_selectInput' tabIndex='0'
                                            aria-readonly='false' style={this.style} >

                                            </div>
                                        </span>
                                        <span onClick={this.clickHandlerArrow.bind(this)}className='dropDownInput_buySell_selectArrowZone'>
                                            <span className='dropDownInput_buySell_selectArrow'></span>
                                        </span>
                                    </div>
                                    { this.state.dropDownRendered && 
                                    <div className='dropDownInput_buySell_selectMenuOuter'>
                                        <div role='listbbox' tabIndex='-1' className='dropDownInput_buySell_selectMenuInner'>
                                            <div onClick={this.clickHandlerOption.bind(this)} className='dropDownInput_buySell_selectedOption' role='option'>
                                                Good For Day
                                            </div>
                                            <div onClick={this.clickHandlerOption.bind(this)} className='dropDownInput_buySell_option' rol='option'>
                                                Good Till' Canceled
                                            </div>
                                        </div>
                                    </div>
                                    }
                                </div>
                            </div>
                        </label>
                    </div>
            </div>
        );
    }
};

export default DropDownInput;