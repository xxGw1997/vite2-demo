<template>
  <div>
    <h1>{{ msg }}</h1>
    <div @click="$store.commit('add')">{{$store.state.couter}}</div>
    <Comp />
    <p>
      <a href="https://vitejs.dev/guide/features.html" target="_blank">
        Vite Documentation
      </a>
      |
      <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
    </p>

    <button @click="state.count++">count is: {{ state.count }}</button>
    <button @click="emit('myClick')">emit</button>
    <button @click="onclick">emit2</button>
  </div>
</template>

<script setup>
import Comp from '@/components/Comp.vue'
import { defineEmit, defineProps, reactive } from 'vue'

defineProps({
  msg: String
})

const emit = defineEmit(['myClick'])

const state = reactive({ count: 0 })

// fetch('/api/getUsers').then(res=>res.json()).then(data=>console.log('data:',data))

const onclick = ()=>{
  emit('myClick')
}
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
