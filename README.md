# React Testing App

## Jest

> Jest is a delightful JavaScript Testing Framework with a focus on simplicity.
>
> It works with projects using: Babel, TypeScript, Node, React, Angular, Vue and more!

### test(name, fn, timeout)

`it` is an alias of `test`.

![it diagram](/src/assets/diagrams/it.png)

### expect(value)

The `expect` function is used every time you want to test a value.

![expect diagram](/src/assets/diagrams/expect.png)

---

### describe(name, fn)

`describe(name, fn)` creates a block that groups together several related tests. F

---

### beforeEach(fn, timeout)

Runs a function before each of the tests in this file runs. If the function returns a promise or is a generator, Jest waits for that promise to resolve before running the test.

---

### afterEach(fn, timeout)

Runs a function after each one of the tests in this file completes. If the function returns a promise or is a generator, Jest waits for that promise to resolve before continuing.

    let component;
    beforeEach(() => {
      component = shallow(<App />);
    });

    afterEach(() => {
      component.unmount();
    })
    describe('Show Components', () => {
      it('shows a comment box', () => {
        expect(component.find(CommentBox).length).toEqual(1);
      });

      it('shows a comment list', () => {
        expect(component.find(CommentList).length).toEqual(1);
      });
    }

---

---

---

## Enzym

> Enzyme is a JavaScript Testing utility for React that makes it easier to test your React Components' output. You can also manipulate, traverse, and in some ways simulate runtime given the output.
>
> Enzyme's API is meant to be intuitive and flexible by mimicking jQuery's API for DOM manipulation and traversal.

![enzyme diagram](/src/assets/diagrams/enzyme.png)

```
it('shows a comment box', () => {
  const component = shallow(<App />);

  expect(component.find(CommentBox).length).toEqual(1);
});
```

---

### .simulate(event[, ...args]) => Self

> Simulate events on the root node in the wrapper. It must be a single-node wrapper.

---

### .update() => Self

> Syncs the enzyme component tree snapshot with the react component tree. Useful to run before checking the render output if something external may be updating the state of the component somewhere.

> NOTE: can only be called on a wrapper instance that is also the root instance.

> NOTE: this does not force a re-render. Use wrapper.setProps({}) to force a re-render.

---

### .prop(key) => Any

> Returns the prop value for the root node of the wrapper with the provided key. It must be a single-node wrapper.

> NOTE: When called on a shallow wrapper, .prop(key) will return values for props on the root node that the component renders, not the component itself. To return the props for the entire React component, use wrapper.instance().props.
> See .instance() => ReactComponent

    it('has a text area that users can type in', () => {
      component.find('textarea').simulate('change', {
        target: { value: 'new comment' }
      });

      component.update();

      expect(component.find('textarea').prop('value')).toEqual('new comment');
    });

---

---

---

## Using Absolute Path Imports

create a `jsconfig.json` file in the root of the project, then, add the below code to it

    {
      "compilerOptions": {
        "baseUrl": "src"
      },
      "include": ["src"]
    }

---

## Redux Tests

> For testing Redux, the Provider should be created as a helper function and this function should wrap the components!!!

    import React from 'react';
    import { Provider } from 'react-redux';
    import { createStore } from 'redux';

    import reducers from 'reducers';

    const Root = props => {
      return (
        <Provider store={createStore(reducers, {})}>{props.children}</Provider>
      );
    };

    export default Root;

    ///////////////////////////////////////
    let component;
    beforeEach(() => {
      component = mount(
        <Root>
          <CommentBox />
        </Root>
      );
    });

---

## Testing Reducers Sample

    import commentsReducer from 'reducers/comments';
    import { SAVE_COMMENT } from 'actions/types';

    it('handles actions of type SAVE_COMMENT', () => {
      const action = {
        type: SAVE_COMMENT,
        payload: 'New Comment'
      };

      const newState = commentsReducer([], action);

      expect(newState).toEqual(['New Comment']);
    });

---

## Testing Actions Sample

    import { saveComment } from 'actions';
    import { SAVE_COMMENT } from 'actions/types';

    describe('saveComment', () => {
      it('has the correct type', () => {
        const action = saveComment();

        expect(action.type).toEqual(SAVE_COMMENT);
      });

      it('has the correct payload', () => {
        const action = saveComment('New Comment');

        expect(action.payload).toEqual('New Comment');
      });
    });

---

## Initializing Redux State

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
      expect(component.find('li').length).toEqual(2);
    });

---

## moxios

> Mock axios requests for testing

    import React from 'react';
    import { mount } from 'enzyme';
    import moxios from 'moxios';

    import Root from 'Root';
    import App from 'components/App';

    beforeEach(() => {
      moxios.install();
      moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
        status: 200,
        response: [{ name: 'Fetched #1' }, { name: 'Fetched #2' }]
      });
    });

    afterEach(() => {
      moxios.uninstall();
    });

    it('can fetch a list of comments and display them', done => {
      const component = mount(
        <Root>
          <App />
        </Root>
      );

      component.find('.fetch-comments').simulate('click');

      moxios.wait(() => {
        component.update();
        expect(component.find('li').length).toEqual(2);

        done();
        component.unmount();
      });
    });
