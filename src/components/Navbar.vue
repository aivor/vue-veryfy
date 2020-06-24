<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <a class="navbar-brand" href="/">
        <span style="color : #ff6377; font: Poppins ">VERYFY</span>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav ml-auto">
          <a class="nav-item nav-link active" href="/signup">
            Sign up
            <span class="sr-only">(current)</span>
          </a>
          <a class="nav-item nav-link active" href="/">
            <span style="color:#ff6377; border:2px solid; padding: 5px">Sign in</span>
          </a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
  background: none;
}
</style>