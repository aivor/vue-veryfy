<template>
  <div style="">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 main">
          <h1>profile</h1>
          <p>profile would be displayed here</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user_token: null,
    };
  },
  methods: {
    logout() {
      this.$store.dispatch("logout", this.user_token);
    },
  },
  //   beforeCreate() {
  //     if (!this.$store.getters.tokens) this.$router.push({ path: "/" });
  //   },
  created() {
    let token = this.$store.getters.tokens;
    // console.log(this.$store.getters.tokens);
    this.user_token = token;
  },
};
</script>

<style lang="css" scoped>
.main {
  margin-left: 30rem;
  margin-top: 4rem;
}
</style>
