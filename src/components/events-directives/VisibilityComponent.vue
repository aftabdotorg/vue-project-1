<script setup>
import { ref } from 'vue'
const isVisible = ref(false)
const toggleVisibility = () => {
  isVisible.value = !isVisible.value
}
</script>
<template>
  <div class="conditional">
    <h1>Conditional Rendering</h1>

    <button v-if="isVisible" class="" v-on:click="toggleVisibility">hidden</button>
    <button v-else class="" v-on:click="toggleVisibility">Show</button>

    <div v-if="isVisible" class="content">
      <p class="hidden">Hidden Content</p>
    </div>
    <div v-else class="content display_none"></div>
  </div>
</template>

<style>
.content {
  background-color: rgb(114, 78, 148);
  color: #fff;
  padding: 10px;
  margin-top: 20px;
  border-radius:0.5rem;
}

.hidden {
  font-size: 2rem;
}

.display_none {
  display: none;
}

.conditional {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
