# React Testing App

**toContain(item):** Use `.toContain` when you want to check that an item is in an array.

```
it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);

    expect(div.innerHTML).toContain('Hi there!');

    ReactDOM.unmountComponentAtNode(div);
});
```
