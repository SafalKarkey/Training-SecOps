# DOM Clobbering Challenge

## Vulnerability

The javacript code checks if the current user is admin
```javascript
if (window.isAdmin) {
    // Show special admin panel
}
```

## Working of DOM Clobbering

HTML elements with `name` attributes automatically become global variables, so the `isAdmin` variable can be overridden by injecting an HTML element like:
```html
<img name="isAdmin"> 
```

## The Attack

1. `window.isAdmin` is `undefined` initially (falsy)
2. `window.isAdmin` points to DOM element after injection (truthy)
3. Result: Admin check passes and flag is shown

## Payload

```html
<img name="isAdmin">
```