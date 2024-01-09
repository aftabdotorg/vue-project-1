<script setup>
import FormC from '../components/form/FormC.vue'

const formData = [
  {
    id: 22,
    name: 'email',
    type: 'text',
    formType: 'login'
  },
  {
    id: 33,
    name: 'password',
    type: 'password',
    formType: 'login'
  }
]
</script>

<template>
  <h1>Login</h1>

  <section class="signup_container">
    <FormC :formData="formData" />
  </section>
</template>

<style>
.signup_container {
  margin: auto;
}

h1 {
  text-align: center;
  font-size: 3rem;
}
</style>
