<template>
  <div class="container">
    <h1 class="text-center">Lista de opiniones</h1>
    <ul>
      <li v-for="(opinion, $index) in opinions" :key="$index">
        Opinion hecha por :{{ opinion.name }} para el juego {{ opinion.title }}
        <hr />
        Opinion:{{ opinion.opinion }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'ListView',
  computed: {
    ...mapState('opinions', {
      opinions: (state) => state.listado,
    }),
  },
  methods: {
    ...mapActions('opinions', ['SET_LISTADO']),
  },
}
</script>

<style lang="scss" scoped></style>
