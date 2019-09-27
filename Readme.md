
## Include scripts
```html
<!-- DEVELOPMENT -->
<script src="https://unpkg.com/vue@2.6.10/dist/vue.js"></script>

<!-- PRODUCTION -->
<script src="https://cdn.jsdelivr.net/npm/vue"></script>

<!-- OR BETTER SPECIFIC -->
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.0"></script>
```

## Prevent form submition
```html
<form @submit.prevent="onSubmit">
```

```html
## Clear form fields on keydown
<form @keydown="errors.clear($event.target.name)"
```
