<template>
  <nav class="navbar navbar-expand-md navbar-light navbar-laravel">
    <div class="container">
      <router-link to="/" class="navbar-brand">MLEARN</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto"></ul>

        <ul class="navbar-nav ml-auto">
          <template v-if="userId">
            <li class="nav-item">
              <a class="nav-link" @click.prevent="signOut">Sign out</a>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
   computed: {
      userId () {
        return localStorage.getItem('GQ_USER_ID') 
      }
    },
  created() {
    console.log(this.user);
  },
  methods: {
    signOut() {
      localStorage.removeItem('GQ_USER_ID')
      localStorage.removeItem('GQ_AUTH_TOKEN')     
      this.$router.replace({ name: "login" });
    }
  }
};
</script>
