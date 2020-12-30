import React from 'react';
import { mount } from 'enzyme';

import Root from 'Root';
import App from 'components/App';

it('can fetch a list of comments and display them', () => {
  // Attempt to render the *entire* app
  const component = mount(
    <Root>
      <App />
    </Root>
  );
  // find the 'fetchComments' button and click it

  component.find('.fetch-comments').simulate('click');

  // Expect to find a list of comments!

  expect(component.find('li').length).toEqual(500);
});
