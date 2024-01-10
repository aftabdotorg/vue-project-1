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
      <p>Name: {{ name }}</p>
      <p>Username: {{ username }}</p>
      <p>Email: {{ email }}</p>
      <p>Phone: {{ phone }}</p>
      <p>website: {{ website }}</p>
    </div>
  </li>
</template>

<style scoped>
.card {
  transition: background-color 0.3s ease;
  margin: auto;
}


.credentials p{
   font-size: 13px;
   font-weight: 500;
}

.background-changed {
  background-color: rgb(129, 88, 167);
  color: white;
}
</style>
