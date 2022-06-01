import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//Importo i componenti
import HomePage from './components/HomePage.vue';
import NotFoundPage from './components/NotFoundPage.vue';
import GamePage from './components/GamePage.vue';

// Definizione rotte
const router = new VueRouter({
  mode: 'history',
  linkExactActiveClass: 'active',
  routes: [
    { path: '/', component: HomePage, name: 'home' },
    { path: '/game', component: GamePage, name: 'game' },

    // !!! LA 404 SEMPRE ULTIMA
    { path: '*', component: NotFoundPage, name: 'not-found' }
  ]
});

export default router;