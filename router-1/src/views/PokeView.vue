<script setup>

import {useRoute,useRouter} from 'vue-router'
import {useGetData} from "@/composable/getData";
import {useFavoritosStore} from "@/store/favoritos";

const route = useRoute();
const router = useRouter();
const {data,loading,getData,error} = useGetData();
const useFavoritos = useFavoritosStore()
const {add,findPoke} = useFavoritos
getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`)


const back = () => {
  router.push('/pokemons')
}

</script>


<template>
 <p v-if="loading">
   Cargando información ...
 </p>
  <div class="alert alert-danger mt-4" v-if="error">{{error}}</div>
  <div v-else-if="data">
    <h1> {{ $route.params.name}}</h1>
    <div>
      <h5> Default</h5>
      <img :src="data.sprites?.front_default" class="img-thumbnail " alt="">
      <img :src="data.sprites?.back_default" class="img-thumbnail ms-2" alt="">
      <h5 class="mt-3"> Shiny</h5>
      <img :src="data.sprites?.front_shiny" class="img-thumbnail "  alt="">
      <img :src="data.sprites?.back_shiny" class="img-thumbnail ms-2" alt="">
    </div>

    <button :disabled="findPoke(data.name)" class="btn btn-outline-success mt-2" @click="add(data)">Agregar favoritos</button>

  </div>
  <button class="mt-5 btn btn-outline-secondary" @click="back">Regresar</button>

</template>


<style scoped>

</style>