<script setup>
import {useFavoritosStore} from "@/store/favoritos";
import {storeToRefs} from "pinia";
import {RouterLink} from "vue-router";

const useFavoritos = useFavoritosStore()
const {remove} = useFavoritos
const {favoritos} = storeToRefs(useFavoritos)
</script>
<template>
  <h1>Favoritos</h1>
  <p v-if="favoritos.length === 0">Sin favoritos</p>
  <div v-else>
    <ul class="list-group">
      <div>
        <li  class="list-group-item" v-for="poke in favoritos" :key="poke.id">
          <Router-link  :to="`/pokemons/${poke.name}`">{{poke.name}}</Router-link >
          <div  class="mt-2">
            <button class=" btn btn-sm  btn-danger" @click="remove(poke.id)">Eliminar</button>
          </div>
        </li>
      </div>


    </ul>
  </div>

</template>



<style scoped>

</style>