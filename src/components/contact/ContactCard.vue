<script setup>
import { ref } from 'vue'
defineProps(['user', 'i'])

const isBackgroundChanged = ref([])

const toggleBackground = (i) => {
  isBackgroundChanged.value[i] = !isBackgroundChanged.value[i]
}

function generateImageUrl(userId) {
  return `https://robohash.org/${userId}`
}
</script>
<template>
  <li
    class="card"
    :class="{ 'background-changed': isBackgroundChanged[i] }"
    @click="toggleBackground(i)"
  >
    <img :src="generateImageUrl(user.id)" :alt="`robo-${user.id}`" />
    <div class="credentials">
      <p>Name: {{ user.name }}</p>
      <p>Username: {{ user.username }}</p>
      <p>Email: {{ user.email }}</p>
      <p>Phone: {{ user.phone }}</p>
      <p>website: {{ user.website }}</p>
    </div>
  </li>
</template>

<style scoped>
.card {
  transition: background-color 0.3s ease;
  margin: auto;
}

.card > img {
  height: 100px;
  widows: 100px;
}

.credentials p {
  font-size: 13px;
  font-weight: 500;
}

.background-changed {
  background-color: rgb(52, 13, 85);
  color: white;
}
</style>
