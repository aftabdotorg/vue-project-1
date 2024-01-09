<script setup>
defineProps(['signUpData'])
</script>

<template>
  <div class="user_container" v-for="{ name, email, number } in signUpData" :key="number">
    <li>{{ name }}</li>
    <li>{{ email }}</li>
  </div>
</template>

<style>
.user_container {
  border: 1px solid black;
  display: flex;
  margin-top: 1rem;
  flex-direction: column;
  justify-content: left;
  padding-left: 1rem;
}
</style>
