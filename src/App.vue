<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <!-- Image and text -->
  <nav class="navbar navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <img src="@/assets/pokebola.png" width="30" height="30" class="d-inline-block align-top" alt="">
        Saldos Dubai
      </router-link>
      <div >
        <RouterLink class="btn btn-outline-secondary me-2" to="/">Home</RouterLink>
        <RouterLink class="btn btn-outline-secondary me-2" to="/about">About</RouterLink>
        <RouterLink class="btn btn-outline-secondary me-2" to="/pokemons">Pokemon</RouterLink>
        <RouterLink class="btn btn-outline-secondary me-2" to="/favoritos">Favoritos</RouterLink>

      </div>
    </div>

  </nav>
  <div class="container text-center">
    <RouterView />
  </div>

</template>

