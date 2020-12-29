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

```
it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);

    expect(div.innerHTML).toContain('Hi there!');

    ReactDOM.unmountComponentAtNode(div);
});
```

---

### beforeEach(fn, timeout)

> Runs a function before each of the tests in this file runs. If the function returns a promise or is a generator, Jest waits for that promise to resolve before running the test.

    let component;
    beforeEach(() => {
      component = shallow(<App />);
    });

    it('shows a comment box', () => {
      expect(component.find(CommentBox).length).toEqual(1);
    });

    it('shows a comment list', () => {
      expect(component.find(CommentList).length).toEqual(1);
    });

---

### afterEach(fn, timeout)

> Runs a function after each one of the tests in this file completes. If the function returns a promise or is a generator, Jest waits for that promise to resolve before continuing.

    afterEach(() => {
        component.unmount();
    })

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

> Arguments

event (String): The event name to be simulated
...args (Any [optional]): A mock event object that will get passed through to the event handlers.

---

### .update() => Self

> Syncs the enzyme component tree snapshot with the react component tree. Useful to run before checking the render output if something external may be updating the state of the component somewhere.

> NOTE: can only be called on a wrapper instance that is also the root instance.

> NOTE: this does not force a re-render. Use wrapper.setProps({}) to force a re-render.

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
