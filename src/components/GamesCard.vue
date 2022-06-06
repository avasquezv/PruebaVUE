<template>
  <div>
    <div class="card" style="width: 18rem">
      <img class="card-img-top" alt="cover" :src="background_image" />
      <div class="card-body">
        <h5 class="card-title">{{ name }}</h5>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Rating: {{ rating }}</li>
        <li class="list-group-item">Released: {{ released }}</li>
        <li class="list-group-item">Updated: {{ updated }}</li>
      </ul>
      <div class="card-body">
        <PruebaModal :index="index" :name="name" />
      </div>
    </div>
  </div>
</template>

<script>
import PruebaModal from '@/components/PruebaModal.vue'

export default {
  components: { PruebaModal },
  props: ['name', 'rating', 'released', 'updated', 'background_image', 'index'],
}
</script>

<style lang="scss" scoped>
.list-group {
  text-align: left;
}
</style>
