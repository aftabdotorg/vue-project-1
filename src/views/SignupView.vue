<script setup>
import { ref } from 'vue'
import FormC from '../components/form/FormC.vue'
import UserList from '@/components/userlist/UserList.vue'

let signUpData = ref([])

const fetchData = () => {
  const data = JSON.parse(localStorage.getItem('signup'))
  signUpData.value = data
}

fetchData()
const formData = [
  {
    id: 1,
    name: 'name',
    type: 'text',
    formType: 'signup'
  },
  {
    id: 2,
    name: 'email',
    type: 'text',
    formType: 'signup'
  },
  {
    id: 3,
    name: 'number',
    type: 'number',
    formType: 'signup'
  },
  {
    id: 3,
    name: 'password',
    type: 'password',
    formType: 'signup'
  }
]
</script>

<template>
  <section class="signup_container">
    <h1>Sign up</h1>
    <FormC :formData="formData" />
  </section>

  <h1>Registered Users</h1>
  <UserList :signUpData="signUpData" />
</template>

<style>
.signup_container + h1 {
  margin-top: 4rem;
}
</style>
