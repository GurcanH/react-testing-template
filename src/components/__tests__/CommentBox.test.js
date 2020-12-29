import React from 'react';
import { mount } from 'enzyme';

import CommentBox from 'components/CommentBox';

it('has a text area and a button', () => {
  const component = mount(<CommentBox />);

  expect(component.find('textarea').length).toEqual(1);
  expect(component.find('button').length).toEqual(1);
});
