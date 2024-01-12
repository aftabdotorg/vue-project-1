<script setup>
import { ref } from 'vue'
// import { useRouter } from 'vue-router'
defineProps(['user', 'i'])

// const router = useRouter()
const isBackgroundChanged = ref([])

const toggleBackground = (i) => {
  isBackgroundChanged.value[i] = !isBackgroundChanged.value[i]
}

// const goToDetails = () => {
//   console.log('hello')
//   router.push({ name: 'contact', params: { id: props.user.id } })
// }
</script>
<template>
  <li
    class="card"
    :class="{ 'background-changed': isBackgroundChanged[i] }"
    @click="toggleBackground(i)"
  >
    <img :src="`${user.image}`" :alt="`robo-${user.id}`" />
    <div class="credentials">
      <p>Name: {{ user.firstName }} {{ user.lastName }}</p>
      <p>Username: {{ user.username }}</p>
      <p>Email: {{ user.email }}</p>
      <p>Phone: {{ user.phone }}</p>
      <p>website: {{ user.domain }}</p>
      <div id="btn_flex">
        <button id="detail_btn">Add</button>
        <router-link :to="`/contact/${user.id}`">
          <button id="detail_btn" @click="goToDetails">Details</button>
        </router-link>
      </div>
    </div>
  </li>
</template>

<style scoped>
a {
  text-decoration: none;
}

.card {
  transition: background-color 0.3s ease;
  margin: auto;
  box-shadow:
    rgba(17, 17, 26, 0.05) 0px 1px 0px,
    rgba(17, 17, 26, 0.1) 0px 0px 8px;
  list-style-type: none;
}

.credentials {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
}

.card > img {
  height: 100px;
  widows: 100px;
}

.credentials p {
  font-size: 13px;
  font-weight: 500;
}

.background-changed {
  background-color: rgb(77, 66, 87);
  color: white;
  font-weight: 600;
}

#btn_flex{
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
}

</style>
