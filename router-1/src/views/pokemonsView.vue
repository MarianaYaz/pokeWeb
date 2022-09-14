<script setup>
import {useGetData} from "@/composable/getData";
import {RouterLink} from "vue-router";

const {data,loading,getData,error} = useGetData();
getData("https://pokeapi.co/api/v2/pokemon")
</script>

<template>
  <h1 class="mt-4 mb-4"> Lista de pokemon </h1>
  <p v-if="loading">Cargando información ...</p>
  <div class="alert alert-danger mt-2" v-if="error">{{error}}</div>

  <div class="mb-4" v-else-if="data">
    <button :disabled="!data.previous" class="btn btn-secondary me-2 mb-3"  @click="getData(data.previous)">Previous</button>
    <button :disabled="!data.next" class="btn btn-secondary mb-3" @click="getData(data.next)">Next</button>
    <ul class="list-group" >
    <li class="list-group-item " v-for="pokemon in data.results">
      <Router-link class="card-title link-dark" :to="`/pokemons/${pokemon.name}`" >{{pokemon.name}}</Router-Link>

    </li>
    </ul>

  </div>

</template>


