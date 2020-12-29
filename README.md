# React Testing App

<span style="color:wheat">toContain(): Check if there is `div` that contains 'Hi there' text!</span>.

```it('renders without crashing', () => {
const div = document.createElement('div');
ReactDOM.render(<App />, div);

expect(div.innerHTML).toContain('Hi there!');

ReactDOM.unmountComponentAtNode(div);
});
```
