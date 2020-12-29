# React Testing App

**toContain():** Check if there is `div` that contains 'Hi there' text!

```it('renders without crashing', () => {
const div = document.createElement('div');
ReactDOM.render(<App />, div);

expect(div.innerHTML).toContain('Hi there!');

ReactDOM.unmountComponentAtNode(div);
});
```
