<!-- eslint-disable vue/no-unused-vars -->
<script setup>
import { ref, onMounted } from 'vue'
import ContactCard from './ContactCard.vue'
const apiUrl = 'https://dummyjson.com/users'
const apiData = ref([])

onMounted(() => {
  fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => {
      apiData.value = data
      console.log(apiData.value.users);
    })
    .catch((err) => {
      console.log(err)
    })
})
</script>

<template>
  <h1>Contacts</h1>
  <h3>Click contact card to change color</h3>
  <ul>
    <li v-for="(user, i) in apiData.users" :key="user.id">
      <ContactCard :user="user" :i="i" />
    </li>
  </ul>
</template>

<style scoped>


ul {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin: auto;
  justify-content: center;
  align-items: center;
  padding-bottom: 1rem;
}

ul li {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 0.7rem;
  margin: auto;
  padding: 0.3rem 0.2rem;
  width: 250px;
  height: 290px;
  /* border: 1px solid grey; */
  text-transform: capitalize;

  &:hover {
    cursor: pointer;
  }
}

h3{
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(90, 54, 124);
  font-weight: 400;
  text-decoration: underline;
  margin-bottom: 10px;
}

</style>
