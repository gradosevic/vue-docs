```html
<renderless-component>
	<p>regular content</p>
</renderless-component>

//Scoped slots
export default{
	render(){
		return this.$scopedSlots.default({
			items: this.value
		});
	}
}
```

```html
<example-component>
	<div slot-scope="{items: aliasItems}">
</example-component>
```
