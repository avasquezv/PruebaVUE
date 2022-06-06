<template>
  <div class="title">
    <h2>Lista de Juegos Disponible</h2>
    <div class="container group">
      <GamesCard
        v-for="(game, $index) in games"
        :key="$index"
        :index="game.id"
        :name="game.name"
        :rating="game.rating"
        :released="game.released"
        :updated="game.updated"
        :background_image="game.background_image"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import GamesCard from '@/components/GamesCard.vue'
import Store from '@/store'

export default {
  components: { GamesCard },
  computed: {
    ...mapState('games', {
      games: (state) => state.listado,
    }),
  },
  methods: {
    ...mapActions('games', ['getAllGames']),
  },

  beforeRouteEnter(to, from, next) {
    Store.dispatch('games/getAllGames')
    next()
  },
}
</script>
<style>
.title {
  text-align: center;
}
.group {
  gap: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 10px;
}
</style>
