import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ShowText from './ShowText';
import renderer from 'react-test-renderer';

Enzyme.configure({ adapter: new Adapter() });


describe('Test the show text component', () => {
  it('should test if there is text', () => {
    const wrapper = shallow(<ShowText/>);
    const texts = wrapper.find('span.text');
    expect(texts.text()).toBe('this is text to show')
  });

  it('should test if there is no text', () => {
    const wrapper = shallow(<ShowText/>);
    const button = wrapper.find('button');

    button.simulate('click');

    const texts = wrapper.find('span');
    expect(texts.length).toBe(0);
  });
});


// test the snapshot
it('Matched snapshot', () => {
  const tree = renderer.create(<ShowText />).toJSON()
  expect(tree).toMatchSnapshot();
});
