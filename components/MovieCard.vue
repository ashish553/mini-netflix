<template>
  <div class="movie-thumbnail">
    <NuxtLink :to="`/movie/${imdbID}`">
      <div class="poster">
        <img :src="Poster" :alt="Title">
      </div>
    </NuxtLink>
    <div class="card-body">
      <h2 class="title">{{ Title }}</h2>
      <p>{{ Year }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    Title: {
      type: String,
      require: true,
    },
    Year: {
      type: String,
      require: true,
    },
    Poster: {
      type: String,
      require: true,
    },
    imdbID: {
      type: String,
      require: true,
    }
  }

}
</script>

<style>

</style>