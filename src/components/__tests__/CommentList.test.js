import React from 'react';
import { mount } from 'enzyme';

import Root from 'Root';
import CommentList from 'components/CommentList';

let component;

beforeEach(() => {
  const initialState = {
    comments: ['Comment 1', 'Comment 2']
  };
  component = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});
it('creates one LI per comment', () => {
  console.log(component.find('li').length);
});
