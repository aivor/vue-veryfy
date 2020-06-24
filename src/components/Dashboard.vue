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
};
</script>
<style scoped></style>
