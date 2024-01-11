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
  <section class="signup_container">
    <h1>Login</h1>
    <FormC :formData="formData" :handleFormSubmit="() => handleFormSubmit('signup')" />
  </section>
</template>
