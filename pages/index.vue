<template>
  <div class="container">
    <section>
      <h1 class="align-center">Discover. Watch. Enjoy.</h1>
      <p class="align-center">Explore new releases, trending films, and all-time favorites.</p>
      <div v-if="!moviesList.length">
        <Shimmer />
      </div>
      <MoviesList v-else :moviesList="moviesList" />
    </section>
  </div>
</template>

<script>

import MoviesList from '../components/MovieList.vue';
import Shimmer from '../components/Shimmer.vue';

export default {
  name: 'IndexPage',
  components: {
    Shimmer,
    MoviesList
  },
  data() {
    return {
      moviesList: [],
      pageNumber: 1,
      reachedBottom: false // to stop the multiple fetchMovie() call after page bottom has reached
    }
  },
  methods: {

    async fetchMovies() {

      this.reachedBottom = true
      const data = await (await fetch('/api/getData/' + this.pageNumber)).json()
      this.moviesList = [...this.moviesList, ...data.data]
      this.pageNumber++
      this.reachedBottom = false

    },

    async reachedToBottom() {

      if (window.scrollY + window.innerHeight >= document.body.scrollHeight && !this.reachedBottom) {
        await this.fetchMovies()
      }

    }
  },

  async mounted() {

    await this.fetchMovies() // Load initial data when user loads the page

    window.addEventListener('scroll', this.reachedToBottom)
  },

  beforeDestroy() {
    // Removing scroll event listener when compoenets unmount
    window.removeEventListener('scroll', this.reachedToBottom);
  },

  head() {
    return {
      title: 'Homepage',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `Discover. Watch. Enjoy.`
        },
        {
          property: 'og:title',
          content: `Discover. Watch. Enjoy.`,
        },
        {
          property: 'og:description',
          content: `Discover. Watch. Enjoy.`,
        },
      ]
    }
  }
}
</script>
