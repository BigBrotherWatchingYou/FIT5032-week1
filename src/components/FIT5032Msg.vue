<script setup>
import { ref, defineProps, reactive , computed } from 'vue'

const props = defineProps({ 
    msg: {
        type: String,
        required: true,
    },
})

const name = ref('fit5032')

const contact = reactive({
    email: 'wefewf@monash.edu'
})

const isVisible = ref(false)



function toggleVisibility() {
    //this function is to turn it into false or true
    isVisible.value = !isVisible.value
}

const users =reactive[(
    {name: 'Junxiang zeng',email: 'wefwe@awefwaef.com'},
    {name: 'Judxrgherghng',email: 'wrrrre@aw5555ef.com'}
)]
    

const URL = ref("https://www.monash.edu")


const clickhandler = () => {
    alert('Button clicked!');
}


const numbers = ref([1,2,3,4,5,6,7,8]);
const doubledNumbers = numbers.value.map(num => num * 2);
const evenNumbers = numbers.value.filter
</script>




<template>
    <div class="fit5032-msg">
        <h1 class="blue">{{  msg }}</h1>
        <!--<p>Welcome to FIT5032 - Web Programming!</p>-->
    </div>

<input v-model="name" />
<p>{{ name }}</p>

<p>{{ contact }}</p>

<p v-if="isVisible">wefwefwefe</p>


<button @click=""toggleVisibility>Reveal secret</button>

<ul>
    
    <li v-for="{value, key} in users":key = "key">
        {{ key }}: {{ user }}
    </li>
</ul>

<a v-bind:href="URL">Monash University</a>

<a href=URL>Monash University</a>


<p>Numbers:{{ numbers }}</p>
<p>Doubled Numbers: {{ doubledNumbers }}</p>
</template>