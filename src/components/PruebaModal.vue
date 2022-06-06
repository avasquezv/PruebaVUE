<template>
  <div id="app">
    <div v-if="showModal">
      <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title">Escribe tu Opinion para el juego {{ name }}</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true" @click="showModal = false">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <form>
                    <div class="form-group">
                      <label>Nombre</label>
                      <input v-model="nameOpinion" type="text" class="form-control" />
                    </div>
                    <div class="form-group">
                      <label>Opiniones</label>
                      <textarea v-model="textOpinion" class="form-control" rows="3"></textarea>
                    </div>
                  </form>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" @click="showModal = false">
                    Cerrar
                  </button>
                  <button @click="addOpinionModal" type="button" class="btn btn-primary">
                    Guardar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
    <button @click="showModal = true" class="btn btn-primary">Opinar</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data: () => ({
    showModal: false,
    nameOpinion: '',
    textOpinion: '',
  }),
  props: ['name', 'index'],

  methods: {
    ...mapActions('opinions', ['addOpinion']),

    addOpinionModal() {
      this.addOpinion({
        title: this.name,
        name: this.nameOpinion,
        opinion: this.textOpinion,
      })
      this.nameOpinion = ''
      this.textOpinion = ''
    },
  },
}
</script>

<style lang="scss" scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
</style>
