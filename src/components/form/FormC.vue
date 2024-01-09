<script setup>
import { ref } from 'vue'
const props = defineProps(['formData'])
const formData = props.formData
const submittedData = {}

formData.forEach((ele) => {
  submittedData[ele.name] = ref('')
})

let userArr = []
const handleFormSubmit = () => {
  let newUSR = {}
  formData.forEach((ele) => {
    newUSR[ele.name] = submittedData[ele.name].value
  })
  userArr.push(newUSR)
  localStorage.setItem('credentials', JSON.stringify(userArr))
}
</script>

<template>
  <form class="form_component" v-on:submit.prevent="handleFormSubmit">
    <input
      v-for="data in formData"
      :key="data.id"
      :placeholder="data.placeholder"
      :type="data.type"
      v-model="submittedData[data.name].value"
    />
    <button class="form_btn">Submit</button>
  </form>
</template>

<style>
.form_component {
  display: flex;
  gap: 1rem;
  flex-direction: column;
  height: 12rem;
  justify-content: center;
  align-items: center;
  margin: auto;
  /* border: 1px solid grey; */
}

.form_component input {
  font-size: 1rem;
  padding: 0.5rem 1rem;
  outline: none;
  border-radius: 0.3rem;
}

.form_btn {
  padding: 0.3rem 0.5rem;
  outline: none;
  border-radius: 0.3rem;
  background-color: aliceblue;
}
</style>
