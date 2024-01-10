<script setup>
import { ref } from 'vue'
import GroupChatA from '../components/emit/GroupChatA.vue'
import GroupChatB from '../components/emit/GroupChatB.vue'

const receivedMessage = ref('')

const handleMessage = (message) => {
  receivedMessage.value = message
}
</script>

<template>
  <section class="emit_section">
    <GroupChatA @message-sent="handleMessage" />
    <GroupChatB :receivedMessage="receivedMessage" />
  </section>
</template>


<style>
.emit_section{
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    justify-content: center;
}
</style>