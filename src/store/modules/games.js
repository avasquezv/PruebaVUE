import Axios from 'axios'
export const gamesModule = {
  namespaced: true,
  state: {
    listado: [],
    loading: false,
  },
  mutations: {
    SET_LISTADO(state, newListado) {
      state.listado = newListado
    },
    SET_LOADING(state, newLoading) {
      state.loading = newLoading
    },
  },
  actions: {
    async getAllGames(context) {
      try {
        const games = await Axios.get('/games.json')
        context.commit('SET_LISTADO', games.data)
      } catch (e) {
        console.error(e)
      } finally {
        context.commit('SET_LOADING', false)
      }
    },
  },
}
