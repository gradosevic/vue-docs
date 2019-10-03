```html
<script>
export default{
  render(){
    return this.$slots.default[0]; //first element in slot
  },
  mounted(){ //add custom class to root element
      this.$el.classList.add('custom-class');
  },
}
</script>
```
