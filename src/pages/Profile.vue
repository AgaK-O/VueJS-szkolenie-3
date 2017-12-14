<template>
  <div id="profile">
      <ul>
          <li><strong>Name</strong> {{ user.name }}</li>
          <li><strong>Surname</strong> {{ user.surname }}</li>
          <li><strong>Email</strong> {{ user.email }}</li>
      </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'profile',
  data () {
    return {
      user: {}
    }
  },
  computed: {
    ...mapGetters([
      'getUser'
    ])
  },
  created () {
    this.user = this.getUser
  }
}
</script>
