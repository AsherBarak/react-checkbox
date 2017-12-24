import React from 'react';
import ReactDOM from 'react-dom';
import Checkbox from './Checkbox'
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Checkbox />, div);
  });

// Snapshot
it('Renders consistent tree', () => {
    const component = renderer.create(
      <Checkbox />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

// DOM using enzime
it('Reacts renders box and content', () => {
    const component = shallow(
      <Checkbox>test</Checkbox>,
    );
    expect(component.text()).toEqual(' ☐ test');
  });
  
  it('Reacts to click by UI change', () => {
    const component = shallow(
      <Checkbox>test</Checkbox>,
    );
    component.find('.icon').simulate('click');
    expect(component.text()).toEqual(' ☑ test');
  });