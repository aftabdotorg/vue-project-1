<script setup>
import { ref } from 'vue'
defineProps(['data'])
const isBackgroundChanged = ref([])

const toggleBackground = (i) => {
  isBackgroundChanged.value[i] = !isBackgroundChanged.value[i]
}
</script>

<template>
  <li
    class="card"
    v-for="(user, i) in data"
    :key="user.id"
    :class="{ 'background-changed': isBackgroundChanged[i] }"
    @click="toggleBackground(i)"
  >
    <img src="https://robohash.org/4" alt="robo" />
    <div class="credentials">
      <div>Name: {{ user.name }}</div>
      <div>Username: {{ user.username }}</div>
      <div>Email: {{ user.email }}</div>
      <div>Phone: {{ user.phone }}</div>
      <div>website: {{ user.website }}</div>
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
