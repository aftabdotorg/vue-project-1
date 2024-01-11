<script setup>
defineProps(['signUpData'])
</script>

<template>
  <div class="user_container" v-for="{ name, email, number } in signUpData" :key="number">
    <li>
      <span> Name : {{ name }} </span>
    </li>
    <li>
      <span> Email : {{ email }} </span>
    </li>
  </div>
</template>

<style>
.user_container {
  border: 1px solid grey;
  border-radius: 10px;
  display: flex;
  margin: auto;
  margin-top: 1rem;
  flex-direction: column;
  width: 300px;
}

.user_container li {
  font-weight: 500;
  padding: 0.4rem 0.8rem;
  color: darkslategray;
  list-style-type: none;
}
</style>
