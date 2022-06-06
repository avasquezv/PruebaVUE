<template>
  <table class="table table-striped">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Persona</th>
        <th scope="col">Juego</th>
        <th scope="col">Opinion</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(opinion, $index) in opinions" :key="$index">
        <th scope="row">{{ $index }}</th>
        <td>{{ opinion.name }}</td>
        <td>{{ opinion.title }}</td>
        <td>{{ opinion.opinion }}</td>
        <td>
          <button @click="deleteOpinion($index)" class="btn btn-danger">Eliminar</button>
          <button class="btn btn-info">Editar</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  props: ['name', 'opinion', 'title'],
  computed: {
    ...mapState('opinions', {
      opinions: (state) => state.listado,
    }),
  },
  methods: {
    ...mapActions('opinions', ['deleteOpinion']),
  },
}
</script>

<style lang="scss" scoped></style>
