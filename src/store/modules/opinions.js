export const opinionsModule = {
  namespaced: true,
  state: {
    listado: [],
  },
  mutation: {
    SET_LISTADO(state, newListado) {
      state.listado.push(newListado)
    },
    DELETE_LISTADO(state, newlistado) {
      state.listado.splice(newlistado, 1)
    },
  },
  actions: {
    addOpinion(context, opinion) {
      context.commit('SET_LISTADO', opinion)
    },
    deleteOpinion(context, opinion) {
      context.commit('DELETE_LISTADO', opinion)
    },
  },
}
