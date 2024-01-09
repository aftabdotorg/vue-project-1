<template>
  <div class="if_else_container">
    <h3>v-if | v-else</h3>
    <div v-if="Math.random() > 0.5">Now you see me</div>
    <div v-else>Now you don't</div>
    <button @click="refreshPage">Refresh Page</button>
  </div>
</template>

<script setup>
const refreshPage = () => {
  window.location.reload()
}
</script>
