<script setup>
defineProps(['users'])
</script>

<template>
  <div class="user_container" v-for="{ name, email, number } in users" :key="number">
    <li>{{ name }}</li>
    <li>{{ email }}</li>
  </div>
</template>

<style>
.user_container{
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 1rem;
}
</style>
