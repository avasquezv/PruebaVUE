<template>
  <div id="app">
    <header>
      <NavBar />
    </header>
    <main>
      <div class="container">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
export default {
  components: { NavBar },
}
</script>

<style lang="scss"></style>
