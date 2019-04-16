import React from 'react';

class CheckBox extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='app_buySell_checkBox' role='button' aria-disabled='false' tabIndex='0'>
                <div className='checkBox_buySell_checkboxSection'>
                    <div className='checkBox_buySell_checkBox' role='checkbox' aria-checked='true' aria-disabled='false'>
                        <svg className='checkBox_buySell_checkMarkSvg' width='12' height='9' viewBox='0 0 12 9' version='1.1'>
                            <g fillRule='evenodd' transform='rotate(45 6.914 7.621)'>
                                <rect width='2' height='10' x='4'></rect>
                                <rect width='5' height='2' y='8'></rect>
                            </g>
                        </svg>
                    </div>
                </div>
                <span id='checkBox_buySell_description'>
                This order should only execute <br /> during normal market hours.
                </span>

            </div>
        );
    }
};

export default CheckBox;