import { shallow } from 'enzyme';
import { Button } from '../../components';

describe('Button Component Test', () => {
  test('Should to display the component correctly', () => {
    const wrapper = shallow(<Button type="button" />);
    expect(wrapper).toMatchInlineSnapshot();
  });

  test('Should to display the button with class w-full & text inside', () => {
    const wrapper = shallow(<Button type="button" text="Click me!" classes="w-full" />);
    const classes = wrapper.find('.w-text');
    expect(wrapper.text()).toBe('Click me!')
    expect(classes).toBe('Click me!')
  });
});