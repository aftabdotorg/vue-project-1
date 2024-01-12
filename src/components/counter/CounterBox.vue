<script setup>
import { useCounterStore } from '../../stores/CounterStore.js'

const store = useCounterStore()
</script>

<template>
  <h2>Count: {{ store.count }}</h2>
  <div class="btn_container_counter">
    <button :disabled="store.count === 0" @click="store.decrement">-</button>
    <button @click="store.increment">+</button>
  </div>
</template>

<style scoped>
.btn_container_counter {
  display: flex;
  width: 100px;
  justify-content: space-around;
}

.btn_container_counter > button {
  width: 30px;
  cursor: pointer;
  font-weight: bold;
}
</style>
