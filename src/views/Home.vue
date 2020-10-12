<template>
  <div class="bg">
    <Header />
   
      <div v-if="!user" class="container">
        <Login />
      </div>
    <div v-else class="container align-self-center mx-auto text-center mt-5">
      <h1 class="mb-3">You are Already login</h1>
      <b-button variant="success" @click="gotoDashboard()">Go to Dashboard</b-button>
    </div>
  </div>
</template>
<script>
import Header from "./Header.vue";
import Login from "./Login.vue";
export default {
  components: {
    Header,
    Login
  },
  computed: {
    user() {
      return localStorage.getItem('GQ_USER_ID') 
    }
  },
  methods: {
    gotoDashboard() {
      this.$router.replace({ name: "Dashboard" });
    }
  }
};
</script>

<style scoped>
</style>
