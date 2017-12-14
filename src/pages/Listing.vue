<template>
  <div id="listing">
    <h1>Posty specjalnie dla Ciebie, {{ getName }}</h1>
    <post-tile @delete="deletePost($event)"v-for="(post, index) in posts" :key="index" :post="post" :index="index"/>
  </div>
</template>

<script>
import PostTile from '../components/PostTile.vue'
import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'listing',
    data () {
      return {
        posts: null,
      }
    },
    computed: {
      ...mapGetters([,
        'getName',
        'getPosts'
      ])
    },
    methods: {
      ...mapActions([
        'initPosts'
      ])
    },
    created () {
     this.initPosts()
     this.posts = this.getPosts
    },
    components: {
      PostTile
    }
  }
</script>