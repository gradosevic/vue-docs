```javascript
import Vue from 'vue/dist/vue.js';
import test from 'ava';
import Notification from '../src/Notification';

test('that it renders notification', t=>{
	let N = Vue.extend(Notification);

	let vm = new N({propsData: {
		message: 'Foobar'
	}}).$mount();

	t.is(vm.$el.textContent, 'Foobar');
});
```
