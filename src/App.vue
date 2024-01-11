<script setup></script>
<template>
  <nav>
    <RouterLink to="/"> Home </RouterLink>
    <RouterLink to="/contacts">Contacts</RouterLink>
    <RouterLink to="/events">Events</RouterLink>
    <RouterLink to="/emits">Emits</RouterLink>
    <!-- <RouterLink to="/expense">Expense Tracker</RouterLink> -->
    <RouterLink to="/signup">Sign up</RouterLink>
    <RouterLink to="/login">Login</RouterLink>
  </nav>
  <RouterView />
</template>

<style scoped>
nav {
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 2rem;
  padding: 1.5rem 2rem;
  color: white;
  margin-bottom: 3rem;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
}


a {
  text-decoration: none;
  padding: 0.4rem 0.7rem;
  border: 1px solid grey;
  outline: none;
  border-radius: 0.3rem;
  font-weight: 500;
  color: rgb(116, 67, 161);
}

</style>
