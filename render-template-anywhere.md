##Render template anywhere with Portal Vue

```javascript
npm install --save portal-vue
````

https://portal-vue.linusb.org/guide/getting-started.html#setup

```html
<portal to="destination">
  <p>This slot content will be rendered wherever the
    <portal-target> with name 'destination'
    is located.
  </p>
</portal>

<portal-target name="destination">
  <!--
  This component can be located anwhere in your App.
  The slot content of the above portal component will be rendered here.
  -->
</portal-target>
```
