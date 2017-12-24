import React from 'react';
import ReactDOM from 'react-dom';
import Checkbox from './Checkbox'
import renderer from 'react-test-renderer';

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