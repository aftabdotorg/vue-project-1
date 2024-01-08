<script setup>
import FormC from '../components/form/FormC.vue'
import UserList from "../components/userlist/UserList.vue"

const formData = [
  {
    id: 1,
    name: 'name',
    type: 'text',
    placeholder: 'enter name'
  },
  {
    id: 2,
    name: 'email',
    type: 'text',
    placeholder: 'enter email'
  },
  {
    id: 3,
    name: 'number',
    type: 'number',
    placeholder: 'enter phone'
  },
  {
    id: 3,
    name: 'password',
    type: 'password',
    placeholder: 'enter password'
  }
]

 const users = JSON.parse(localStorage.getItem("credentials"))

</script>

<template>
  <h1>Sign up</h1>

  <section class="signup_container">
    <FormC :formData="formData" />
  </section>

  <h3>Users</h3>

  <UserList :users="users" />

</template>

<style>
.signup_container {
  /* height: 100vh; */
  margin: auto;
}

h1 {
  text-align: center;
  font-size: 3rem;
}

h3 {
  text-align: center;
  margin-top: 6rem;
  font-size: 1rem;
}

</style>
