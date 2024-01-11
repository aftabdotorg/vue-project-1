<script setup>
import { ref } from 'vue'
defineProps(['user', 'i'])
// console.log(user);

const isBackgroundChanged = ref([])

const toggleBackground = (i) => {
  isBackgroundChanged.value[i] = !isBackgroundChanged.value[i]
}

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
      <router-link :to="`/contact/${user.id}`">
        <button id="detail_btn">Details</button>
      </router-link>
    </div>
  </li>
</template>

<style scoped>
a {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-decoration: none;
}

#detail_btn {
  width: 100px;
  margin: auto;
  border: 2px solid whitesmoke;
}

.card {
  transition: background-color 0.3s ease;
  margin: auto;
  box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;  list-style-type: none;

}

.credentials {
  display: flex;
  flex-direction: column;
  justify-content: center;
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
</style>
