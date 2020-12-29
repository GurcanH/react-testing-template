# React Testing App

## test(name, fn, timeout)

`it` is an alias of `test`.

## ![it diagram](/src/assets/diagrams/it.png)

## expect(value)

The `expect` function is used every time you want to test a value.

![expext diagram](/src/assets/diagrams/expect.png)

```
it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);

    expect(div.innerHTML).toContain('Hi there!');

    ReactDOM.unmountComponentAtNode(div);
});
```

---

**toContain(item):** Use `.toContain` when you want to check that an item is in an array.

---

**JSDOM** is a library which parses and interacts with assembled HTML just like a browser.

---
