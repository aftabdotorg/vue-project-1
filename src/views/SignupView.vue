<script setup>
import FormC from '../components/form/FormC.vue'

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
</script>

<template>
  <section class="signup_container">
    <FormC :formData="formData" />
  </section>
</template>

<style>
.signup_container {
  height: 100vh;
  margin: auto;
}
</style>
