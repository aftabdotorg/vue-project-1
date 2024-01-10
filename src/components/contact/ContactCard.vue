<script setup>
import { ref } from 'vue'
defineProps(['name', 'username', 'phone', 'website', 'email', 'i'])

const isBackgroundChanged = ref([])

const toggleBackground = (i) => {
  isBackgroundChanged.value[i] = !isBackgroundChanged.value[i]
}
</script>
<template>
  <li
    class="card"
    :class="{ 'background-changed': isBackgroundChanged[i] }"
    @click="toggleBackground(i)"
  >
    <img src="https://robohash.org/4" alt="robo" />
    <div class="credentials">
      <div>Name: {{ name }}</div>
      <div>Username: {{ username }}</div>
      <div>Email: {{ email }}</div>
      <div>Phone: {{ phone }}</div>
      <div>website: {{ website }}</div>
    </div>
  </li>
</template>

<style scoped>
.card {
  transition: background-color 0.3s ease;
  margin: auto;
}

.background-changed {
  background-color: rgb(129, 88, 167);
  color: white;
}
</style>
