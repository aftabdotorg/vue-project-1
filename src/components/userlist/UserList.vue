<script setup>
defineProps(['signUpData'])
</script>

<template>
  <div class="user_container" v-for="{ name, email, number } in signUpData" :key="number">
    <li>{{ name }} - {{ email }}</li>
  </div>
</template>

<style>
.user_container {
  border: 1px solid grey;
  border-radius: 3px;
  display: flex;
  margin: auto;
  margin-top: 1rem;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  width: 300px;
}

.user_container li {
  padding: 0.4rem 0.8rem ;
  color: darkslategray;
  list-style-type: decimal;
}
</style>
