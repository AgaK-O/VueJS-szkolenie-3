import Vue from 'vue'
import VueRouter from 'vue-router'
import Listing from './pages/Listing.vue'
import Post from './pages/Post.vue'
import Profile from './pages/Profile.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', component: Listing },
    { path: '/post/:id', component: Post },
    { path: '/profile', component: Profile }
  ]
})

export default router