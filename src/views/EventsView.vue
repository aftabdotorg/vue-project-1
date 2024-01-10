<script setup>
import IfElseComponent from '../components/events-directives/IfElseComponent.vue'
import ClickAlertComponent from '../components/events-directives/ClickAlertComponent.vue'
import VisibilityComponent from '../components/events-directives/VisibilityComponent.vue'
</script>

<template>
    <h1>Events and directives</h1>
  <section class="events_flex section_events">
    <IfElseComponent />
    <ClickAlertComponent />
  </section>

  <section class="section_events">
    <VisibilityComponent />
  </section>
</template>

<style>
.section_events {
    height: 200px;
    /* border: 1px solid grey; */
    padding: 3rem 0 ;

}

.events_flex {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.events_flex > div {
  width: 150px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid rgb(79, 15, 138);
  padding: 1rem;
  border-radius: 5px;
}
</style>
