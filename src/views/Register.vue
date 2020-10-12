<template>
  <div class="container">
      <h5 class="text-center">Create account in Mlearn</h5>
    <div class="col-4 offset-md-4">
      <div class="form-group">
        <label for="email">Full Name</label>
        <input
          type="text"
          class="form-control"
          id="name"
          placeholder="Enter full name"
          v-model="name"
        >
      </div>
      <div class="form-group">
        <label for="email">Email address</label>
        <input
          type="email"
          class="form-control"
          id="email"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          v-model="email"
        >
        <small
          id="emailHelp"
          class="form-text text-muted"
        >We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          class="form-control"
          id="password"
          placeholder="Password"
          v-model="password"
        >
      </div>
       <div class="form-group" v-if="error != null">
        <p class="text-danger text-center">{{ error }}</p>
      </div>
      <div class="form-group">
        <button
          type="submit"
          class="btn btn-primary form-control"
          @click="register()"
        >Create Account</button>
      </div>
      <div class="form-group">
        <p @click="$router.push({ name: 'login' }) " class="text-center">Login</p>
      </div>
    </div>
  </div>
</template>
<script>
import * as querys from "../plugins/query";
import { parseGraphqlError } from "../plugins/utils";

export default {
  name: "register",
  created() {},
  data() {
    return {
      name: null,
      email: null,
      password: null,
      error: null
    };
  },
  methods: {
    async register() {
      await this.$apollo
        .mutate({
          mutation: querys.REGISTERATION_QUERY,
          variables: { name: this.name, email: this.email, password: this.password }
        })
        .then(({ data }) => {
          const { token, user } = data.newUser;
          localStorage.setItem("GQ_USER_ID", user.id)
          localStorage.setItem("GQ_AUTH_TOKEN", token) 
          this.$router.push({ name: "Dashboard" })
        })
        .catch(err => {
          this.error =
            parseGraphqlError(err) || "Something went wrong. Try again...";
        });
    }
  }
};
</script>

<style scoped>
.container {
  margin-top: 80px;
}

p:hover {
  color: grey;
  cursor: pointer;
}
</style>
