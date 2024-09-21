<template>
  <div class="movies-list">
    <!-- <div > -->
      <MovieCard v-bind="movie" v-for="movie in moviesList" :key="movie.imdbID"/>
    <!-- </div> -->
  </div>
</template>

<script>
import MovieCard from './MovieCard.vue'

export default {
    components: {
        MovieCard
    },
    props: {
        moviesList: []
    }
}
</script>

<style>

</style>