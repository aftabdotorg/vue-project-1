
<script setup>
defineProps(['data'])
</script>

<template>
  <li class="card" v-for="{ name, username, id, email, phone, website } in data" :key="id">
    <img src="https://robohash.org/2" alt="robo" />
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

.card{
  margin: auto;
}
</style>
