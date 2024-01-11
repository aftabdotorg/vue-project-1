<script setup>
import { ref } from 'vue'
const props = defineProps(['formData', 'fetchData'])
const formData = props.formData
const fetchData = props.fetchData

const submittedData = {}
formData.forEach((ele) => {
  submittedData[ele.name] = ref('')
})

const finalOBJ = {}

const handleFormSubmit = () => {
  for (const [key, value] of Object.entries(submittedData)) {
    // checking for empty values
    if (!value.value) {
      alert('Please fill in all fields before submitting.')
      return
    }
    finalOBJ[key] = value.value
  }

    let usrData = JSON.parse(localStorage.getItem(formData[0].formType)) || []
    usrData.push(finalOBJ)
    localStorage.setItem(formData[0].formType, JSON.stringify(usrData))
    fetchData(usrData)
    alert(`Account created for ${finalOBJ.name}`)

  formData.forEach((ele) => {
    submittedData[ele.name].value = ''
  })
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
  margin: auto;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}

.form_component input {
  font-size: 1rem;
  padding: 0.5rem 1rem;
  outline: none;
  border-radius: 0.3rem;
  border: 1px solid grey;
  font-family: inherit;
}
</style>
