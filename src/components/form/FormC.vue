<script setup>
import { ref } from 'vue'
const props = defineProps(['formData'])
const formData = props.formData

const submittedData = {}
formData.forEach((ele) => {
  submittedData[ele.name] = ref('')
})

const finalOBJ = {}

const handleFormSubmit = () => {
  for (const [key, value] of Object.entries(submittedData)) {
    finalOBJ[key] = value.value
  }
  let usrData = JSON.parse(localStorage.getItem(formData[0].formType)) || []
  usrData.push(finalOBJ)

  localStorage.setItem(formData[0].formType, JSON.stringify(usrData))
}
</script>

<template>
  <form class="form_component" @submit.prevent="handleFormSubmit">
    <input
      v-for="data in formData"
      :key="data.id"
      :placeholder="`enter ${data.name}`"
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

</style>
