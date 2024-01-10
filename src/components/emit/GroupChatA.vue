<script setup>
import { defineEmits } from 'vue'
const emit = defineEmits(['message-sent'])
const sendMessage = () => {
  emit('message-sent', 'Message from Child A')
}
</script>
<template>
  <button @click="sendMessage">Send Message from A</button>
</template>
