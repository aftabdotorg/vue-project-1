<script setup>
defineProps(['signUpData'])
import { ref } from 'vue'
const user = ref({})
const handleClick = (name, signUpData) => {
   user.value = signUpData.find((ele) => ele.name === name)
}
</script>

<template>
  <div class="user_container" v-for="{ name, number } in signUpData" :key="number">
    <li @click.prevent="handleClick(name, signUpData)">
      <span> Name : {{ name }} </span>
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
}
</style>
