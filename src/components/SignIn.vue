<template>
  <div>
    <img class="wave" src />
    <div class="container">
      <div class="img">
        <img src="../assets/und_verify.svg" />
      </div>
      <div class="login-content">
        <form action="index.html">
          <!-- <img src="img/avatar.svg" /> -->
          <h2 class="title">Sign In</h2>
          <div class="input-div one">
            <div class="i">
              <i class="fas fa-user"></i>
            </div>
            <div class="div">
              <input
                type="text"
                class="input"
                placeholder="Email"
                v-model="email"
              />
            </div>
          </div>
          <div class="input-div pass">
            <div class="i">
              <i class="fas fa-lock"></i>
            </div>
            <div class="div">
              <input
                type="password"
                class="input"
                placeholder="Password"
                v-model="password"
              />
            </div>
          </div>
          <a href="#">Forgot Password?</a><br />
          <span style="color: red">{{ error1 }}</span>
          <input
            type="submit"
            class="btn"
            value="Login"
            @click.prevent="sign_in()"
          />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: null,
      password: null,
      error1: "",
    };
  },

  methods: {
    sign_in() {
      const UserData = {
        user: {
          email: this.email,
          password: this.password,
        },
      };
      this.$store.dispatch("login", UserData);
      this.error1 = this.$store.getters.tokens.login_m;
    },
  },
};
</script>

<style lang="sass" scoped>
@import "../assets/css/style.scss"
</style>
