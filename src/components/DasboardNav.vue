<template>
  <div>
    <!-- <nav class="navbar navbar-expand-md" navbar-light>
      <button
        class="navbar-toggler ml-auto mb-2 bg-light"
        type="button"
        data-toggle="collapse"
        data-target="#myNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="myNavbar">
        <div class="container-fluid">
          <div class="row">
            
            <div class="col-lg-3 sidebar"></div>
            
            <div class="col-lg-9"></div>
          </div>
        </div>
      </div>
    </nav>-->
    <!-- Side navigation -->
    <div class="sidenav">
      <!-- <img src="reliable.jpeg" class="Avatar" /> -->
      <br />
      <p>Andy Ivor</p>
      <hr />
      Main
      <router-link
        to="/dashboard"
        class="nav-link text-white p-3 mb-2 sidebar-link"
      >
        <i class="fas fa-home"></i> HOME
      </router-link>
      <router-link
        to="/dashboard/profile"
        class="nav-link text-white p-3 mb-2 sidebar-link"
      >
        <i class="fas fa-briefcase"></i> PROFILE
      </router-link>
    </div>

    <!-- Page content -->
    <div class="main">
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#"></a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div class="navbar-nav ml-auto">
              <a class="nav-item nav-link active" href="/">
                <span
                  style="color:#ff6377; border:2px solid; padding: 5px"
                  @click.prevent="logout"
                  >Log Out</span
                >
              </a>
            </div>
          </div>
        </nav>
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <h1>Dashboard</h1>
            </div>
          </div>
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
      console.log("token ", this.user_token);
      this.$store.dispatch("logout", this.user_token);
    },
  },
  beforeCreate() {
    if (!this.$store.getters.tokens.token) this.$router.push({ path: "/" });
  },
  created() {
    let token = this.$store.getters.tokens.token;
    // console.log(this.$store.getters.tokens);
    this.user_token = token;
  },
};
</script>

<style lang="sass" scoped>
@import "../assets/css/dashboard.scss"
</style>
