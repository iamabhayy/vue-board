<template>
<div class="container p-2">
    <b-card header-tag="header">
      <template v-slot:header>
        <b class="mb-0">Welcome to login page.</b>
        <p class="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </template>
      <div class="d-flex bd-highlight">
        <div class="p-2 mr-2 flex-fill bd-highlight">
          <b-card no-body bg-variant="light" class="p-4">
            <b-form-group
              id="input-group-1"
              label="Email address:"
              label-for="input-1"
              description="We'll never share your email with anyone else."
            >
              <b-form-input
                id="input-1"
                v-model="form.email"
                type="email"
                required
                placeholder="Enter email"
              ></b-form-input>
            </b-form-group>
            <b-form-group
              id="input-group-1"
              label="Password:"
              label-for="input-1"
              description="We'll never share your email with anyone else."
            >
              <b-form-input
                id="input-1"
                v-model="form.password"
                type="password"
                required
                placeholder="Enter password"
              ></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-4">
              <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
                <b-form-checkbox value="me">Remember login</b-form-checkbox>
              </b-form-checkbox-group>
            </b-form-group>
            <div class="form-group" v-if="error != null">
        <p class="text-danger text-center">{{ error }}</p>
      </div>
            <b-button type="submit"  @click.prevent="login()" variant="success">Login</b-button>
          </b-card>
        </div>
        <div class="p-2 ml-2 flex-fill bd-highlight">
          <p class="lead bold"  @click="$router.push({ name: 'register' })">
            Register now for
            <span class="text-success" >FREE</span>
          </p>
          <ul class="list-unstyled" style="line-height: 2">
            <li>
              <small class="fa fa-check text-success"></small> See all your orders
            </li>
            <li>
              <small class="fa fa-check text-success"></small> Shipping is always free
            </li>
            <li>
              <small class="fa fa-check text-success"></small> Save your favorites
            </li>
            <li>
              <small class="fa fa-check text-success"></small> Fast checkout
            </li>
            <li>
              <small class="fa fa-check text-success"></small> Get a gift
              <small>(only new customers)</small>
            </li>
            <li>
              <small class="fa fa-check text-success"></small> Holiday discounts up to 30% off
            </li>
          </ul>
        </div>
         </div>
    </b-card>
</div>

</template>
<script>
import * as querys from "../plugins/query";
import { parseGraphqlError } from "../plugins/utils";

export default {
  name: "login",
  created() {},
  data() {
    return {
       form: {
        email: "",
        password: "",
        checked: [],
      },
      error: null
    };
  },
  methods: {
    async login() {
      
      await this.$apollo
        .mutate({
          mutation: querys.LOGIN_QUERY,
          variables: { email: this.form.email, password: this.form.password }
        })
        .then(({ data }) => {
          const { token, user } = data.user;
          localStorage.setItem("GQ_USER_ID", user.id)
          localStorage.setItem("GQ_AUTH_TOKEN", token) 
          this.$router.push('/admin')
        })
        .catch(err => {
          console.log(err)
          this.error = parseGraphqlError(err) || "Something went wrong. Try again...";
        });
    }
  }
};
</script>

<style scoped>
.container {
  margin-top: 70px;
}

p:hover {
  color: grey;
  cursor: pointer;
}
</style>
