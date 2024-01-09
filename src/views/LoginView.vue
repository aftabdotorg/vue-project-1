<script setup>
import FormC from '../components/form/FormC.vue'

const formData = [

  {
    id: 22,
    name: 'email',
    type: 'text',
    placeholder: 'enter email'
  },
  {
    id: 33,
    name: 'password',
    type: 'password',
    placeholder: 'enter password'
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
