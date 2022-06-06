<template>
  <div>
    <nav class="navbar navbar-primary bg-dark">
      <a class="navbar-brand" href="/">
        <i class="fa fa-headphones" aria-hidden="true"></i>Games Opinion</a
      >
      <ul class="navbar-nav d-flex flex-row">
        <li class="nav-item active pr-2">
          <router-link class="nav-link" to="/">
            <i class="fa fa-home" aria-hidden="true"></i>
            HOME
          </router-link>
        </li>
        <li class="nav-item active pl-2">
          <router-link class="nav-link" to="/list">
            <i class="fa fa-comments" aria-hidden="true"></i>
            OPINIONES
          </router-link>
        </li>
        <li class="nav-item active pl-2">
          <router-link class="nav-link" to="/admin">
            <i class="fa fa-cog" aria-hidden="true"></i>
            ADMINISTRACION
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
