import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: "active",
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },{
      path: '/pokemons',
      name: 'pokemon',
      component: () => import('../views/pokemonsView.vue')
    },{
      path: '/pokemons/:name',
      name: 'poke',
      component: () => import('../views/PokeView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: () => import('../views/NotFoundView.vue')
    },{
      path: '/favoritos',
      name: 'favoritos',
      component: () => import('../views/FavoritosView.vue')
    }
  ]
})

export default router
