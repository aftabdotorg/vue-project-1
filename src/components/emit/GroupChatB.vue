<script setup>
defineProps(['receivedMessage'])
</script>

<template>
  <p>Received Message in B: {{ receivedMessage }}</p>
</template>

<style scoped>
p {
  border: 2px solid grey;
  padding: 3rem;
}
</style>
