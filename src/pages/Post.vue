<template>
  <div id="post">
    <h1> {{ post.title }}</h1>
    <p> {{ post.body }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'post',
  data() {
    return {
      post: null
    }
  },
  computed: {
    ...mapGetters([
      'getPosts'
    ])
  },
  created () {
    this.post = this.getPosts[this.$route.params.id]
  },  
  watch: {
    '$route'() {
      this.post = this.getPosts[this.$route.params.id]
    }
  }
}
</script>