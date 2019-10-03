### When to use?
When you want the template inside of slot access the data from the child component hosting the slot content
Definition: A scoped slot is a special type of slot that functions as a reusable template (that can be passed data to) instead of already-rendered-elements.

## Parent
```html
<template>
	<child-component>
		<template slot-scope="{childData}">
			<another-component :childData={childData}></another-component>
		</template>
	</child-component>
</template>
```

## Child
```html
<template>
	<slot :childData={childData}></slot>
</template>
```

## Example
```html
<renderless-component>
	<p>regular content</p>
</renderless-component>

<script>
//Scoped slots
export default{
	render(){
		return this.$scopedSlots.default({
			items: this.value
		});
	}
}
</script>

<example-component>
	<div slot-scope="{items: aliasItems}">
</example-component>
```
