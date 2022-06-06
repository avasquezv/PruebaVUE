<template>
  <div class="container">
    <h1 class="text-center">Administrar la Lista de Opiniones</h1>
    <TableTarea />
  </div>
</template>

<script>
import TableTarea from '@/components/TableTarea.vue'
export default {
  name: 'AdminView',
  components: { TableTarea },
}
</script>

<style lang="scss" scoped></style>
