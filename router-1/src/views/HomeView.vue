<script setup>
import {useCounterStore} from '@/store/counter.js'
import {storeToRefs} from 'pinia'

const useCounter = useCounterStore()
const {increment} = useCounter
const {count,double} = storeToRefs(useCounter)

</script>

<template>
  <div>
    <img src="@/assets/splashBanner_pokemon.jpeg" class="img-fluid" alt="...">
  </div>
  <h1>Home: {{count}}</h1>
  <h2> Double: {{double}}</h2>
  <button class="btn btn-primary" @click="increment">increment</button>
</template>
