<!-- eslint-disable vue/no-unused-vars -->
<script setup>
import { ref, onMounted } from 'vue'
import ContactCard from './ContactCard.vue'
const apiUrl = 'https://jsonplaceholder.typicode.com/users'
const apiData = ref([])

onMounted(() => {
  fetch(apiUrl)
  .then((res) => res.json())
  .then((data) => {
    apiData.value = data
  })
    .catch((err) => {
      console.log(err)
    })
})

</script>

<template>
  <h1>Contacts</h1>
  <ul>
    <li v-for="(user, i) in apiData" :key="user.id">
      <ContactCard :name="user.name" :username="user.username" :email="user.email" :phone="user.phone" :website ="user.website" :i="i" />
    </li>
  </ul>
</template>

<style>
img {
  height: 100px;
  widows: 100px;
}

ul {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin: auto;
  justify-content: center;
  align-items: center;
}

ul li {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 0.7rem;
  margin: auto;
  width: 260px;
  height: 280px;
  border: 1px solid grey;
  list-style-type: none;
  text-transform: capitalize;

  &:hover {
    cursor: pointer;
  }
}

h1 {
  text-align: center;
  font-size: 3rem;
  padding: 2rem 0;
}
</style>



















