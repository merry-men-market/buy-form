import { isTSAnyKeyword } from "@babel/types";
import { shallow } from 'enzyme';
import React from 'react';

//components
import BuyType from '../client/components/buyType.jsx';
import App from '../client/components/app.jsx';
import DropDown from '../client/components/dropDownMenu.jsx';
import "isomorphic-fetch";
import { JestEnvironment } from "@jest/environment";

  describe('functionality of the title section', () => {

    it('Should open up a menu when the button element is pressed', () => {
        const component = shallow(<BuyType />);

        expect(component.find(DropDown).length).toBe(0);
        expect(component.find('.buyType_buySell_button').length).toBe(1);
        component.find('.buyType_buySell_button').simulate('click');
        expect(component.find(DropDown).length).toBe(1);
    });

    it('Pop-up menu should be able to change the state of the App react component', () => {
       const app = shallow(<App />);
       const buytype = shallow(<BuyType />);
       const dropDown = shallow(<DropDown />);
       expect(app.state().mode).toBe('Market Order');
       buytype.find('.buyType_buySell_button').simulate('click');
       dropDown.find('.dropDown_buySell_option').at(1).simulate('click');
       expect(dropDown.find('.dropDown_buySell_option').length).toBe(3);
       //expect(app.state().mode).toBe('Limit Order');
       
    });

    it('Depending on price should calculate the price of all the shares you want to buy', () => {

    });

  });

