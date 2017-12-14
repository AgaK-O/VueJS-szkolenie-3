<template>
  <div class="app">
    <ul>
      <li><router-link to="/">Homepage</router-link></li>
      <li><router-link to="/post/1">O nas</router-link></li>
      <li><router-link to="/post/2">Kontakt</router-link></li>
      <li><router-link to="/profile">Profile</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>
