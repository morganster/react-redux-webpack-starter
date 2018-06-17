
import React from 'react';
import { shallow } from 'enzyme';
import PostCard from './PostCard';

describe('<PostCard />', () => {
    it('should have at least 1 container with class card', () => {
      const wrapper = shallow(<PostCard />);
      const actual = wrapper.find('.card');
  
      expect(actual.length).toEqual(1);
  });
});
