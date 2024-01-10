<template>
  <div class="if_else_container">
    <h3>v-if | v-else</h3>
    <div v-if="Math.random() > 0.6">Random Num > 0.6</div>
    <div v-else>Random Num is less than 0.6</div>
    <button @click="refreshPage">Refresh</button>
  </div>
</template>

<script setup>
const refreshPage = () => {
  window.location.reload()
}


</script>
