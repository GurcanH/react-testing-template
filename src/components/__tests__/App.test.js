import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';
import CommentBox from '../CommentBox';

it('shows a comment box', () => {
  const component = shallow(<App />);

  expect(component.find(CommentBox).length).toEqual(1);
});
