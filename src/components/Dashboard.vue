<template>
  <div>
    <DashboardNav></DashboardNav>
    <router-view></router-view>
  </div>
</template>
<script>
import DashboardNav from "./DasboardNav";
export default {
  components: {
    DashboardNav,
  },
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
<style scoped></style>
