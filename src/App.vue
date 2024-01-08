<script setup></script>
<template>
  <nav>
    <li>
      <RouterLink to="/">Home</RouterLink>
    </li>
    <li>
      <RouterLink to="/contacts">Contacts</RouterLink>
    </li>
    <li>
      <RouterLink to="/signup">Sign up</RouterLink>
    </li>
  </nav>
  <RouterView />
</template>

<style>
nav {
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 2rem;
  color: white;
}

nav li {
  color: white;
  border: 1px solid grey;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
}
</style>
