<script setup>
const handleClick = () => {
  alert('clicked')
}
</script>

<template>
  <div class="on_click_container">
    <h3>v-on | click</h3>
    <button v-on:click="handleClick">Click me!</button>
  </div>
</template>
