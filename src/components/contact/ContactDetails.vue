<script setup>
import { onMounted, ref } from 'vue'
import { useContactStore } from '@/stores/ContactStore'

import { useRoute } from 'vue-router'
const contactStore = useContactStore()

const route = useRoute()
let details = ref({})
let loading = ref(false)

onMounted(async () => {
  const id = route.params.id
  try {
    loading.value = true
    details.value = await contactStore.fetchDataById(id)
  } catch (error) {
    console.error('Error fetching details:', error)
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <h1 class="details_heading">
    Contact Details for <span class="details_name_span"> {{ details.firstName }} </span>
  </h1>

  <section class="details_section">
    <img class="singleuser_img" :src="`${details.image}`" :alt="`${details.username}`" />
    <p>Name: {{ details.firstName }} {{ details.lastName }}</p>
    <p>Username: {{ details.username }}</p>
    <p>Email: {{ details.email }}</p>
    <p>Phone: {{ details.phone }}</p>
    <p>DOB: {{ details.birthDate }}</p>
    <p>Age: {{ details.age }}</p>
    <p>Bloodgroup: {{ details.bloodGroup }}</p>
    <p>University: {{ details.university }}</p>
    <p>Gender: {{ details.gender }}</p>
    <p v-if="details.company">Company: {{ details.company.name }}</p>
    <p v-if="details.address">
      Address: {{ details.address.address }} , {{ details.address.city }},
      {{ details.address.state }}, {{ details.address.postalCode }}
    </p>
  </section>
</template>

<style scoped>
.singleuser_img {
  width: 300px;
}

.details_name_span {
  text-decoration: underline;
}

.details_heading {
  font-weight: 400;
}

.details_section {
  display: flex;
  /* border: 1px solid grey; */
  flex-direction: column;
  gap: 1rem;
  padding-bottom: 1rem;
  align-items: center;
  justify-content: center;
}

.details_section > img {
  width: 250px;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow:
    rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
}

.details_section > p {
  border-bottom: 1px solid grey;
  width: 100%;
  padding-left: 2rem;
}
</style>
