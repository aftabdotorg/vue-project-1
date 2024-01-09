<script setup>
import IfElseComponent from '../components/home/IfElseComponent.vue'
import ClickAlertComponent from '../components/home/ClickAlertComponent.vue'
import VisibilityComponent from '../components/home/VisibilityComponent.vue'
</script>

<template>
  <h1>Home Page</h1>
  <section class="home_flex">
    <IfElseComponent />
    <ClickAlertComponent />
  </section>
  <VisibilityComponent />
</template>

<style>
h1 {
  display: flex;
  justify-content: center;
  align-items: center;
}

.home_flex {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.home_flex > div {
  width: 150px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid rgb(79, 15, 138);
  padding: 1rem;
  border-radius: 5px;
}

.on_click_container > button {
  padding: 0.2rem 0.3rem;
}
</style>
