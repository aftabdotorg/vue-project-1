<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
let details = ref({})

onMounted(() => {
  const id = route.params.id
  const apiUrl = `https://dummyjson.com/users/${id}`

  fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => {
      details.value = data
      console.log(details)
    })
    .catch((err) => {
      console.log(err)
    })
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
    <div>
      Company:
      <div class="company_address" v-for="item in details.company" :key="item">
        <p>{{ item }}</p>
      </div>
      {{ details.address }}
    </div>
    <div>
      Address:
      <div class="company_address" v-for="item in details.address" :key="item">
        <p>{{ item }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.singleuser_img {
  width: 300px;
}

.company_address {
  margin: auto;
  padding: 0.5rem 2rem;
  gap: 1rem;
  display: inline-flex;
}

.details_name_span {
  text-decoration: underline;
}

.details_heading {
  font-weight: 400;
}

.details_section {
  display: flex;
  border: 1px solid grey;
  flex-direction: column;
  gap: 1rem;
  /* align-items: center; */
  justify-content: center;
}
</style>
