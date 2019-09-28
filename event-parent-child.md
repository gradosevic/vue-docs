## CHILD
```html
<template>
    <div class="container">
        <p @click="onWeatherChange">Weather: {{weather}}</p>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                weather: 'sunny'
            }
        },
        methods:{
            onWeatherChange(){
                this.weather = 'cloudy';
                this.$emit('weatherChange', this.weather);
            }
        }
    }
</script>
```

## PARENT
```html
<template>
    <div class="container">
        <child-component @weatherChange="onWeatherChange"></child-component>
        Parent weather: {{parentWeather}}
    </div>
</template>

<script>
    import ChildComponent from './ChildComponent.vue';
    export default {
        components: {ChildComponent},
        data(){
            return {
                parentWeather: 'Not set'
            }
        },
        methods:{
            onWeatherChange(weather){
                this.parentWeather = weather;

            }
        }
    }
</script>

```
