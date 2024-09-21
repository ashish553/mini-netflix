<template>
  <div class="container">
    <div v-if="!moviesList.length">
      <Shimmer />
    </div>
    <section v-else>
      <h1 class="align-center">Discover. Watch. Enjoy.</h1>
      <p class="align-center">Explore new releases, trending films, and all-time favorites.</p>
      <MoviesList :moviesList="moviesList" />
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
      reachedBottom: false
    }
  },
  methods: {
    async fetchMovies() {
      this.reachedBottom = true
      const data = await (await fetch('/api/getData/' + this.pageNumber)).json()
      const tempData = [...this.moviesList, ...data.data]
      this.moviesList = tempData.filter((each, index) => tempData.indexOf(each))
      this.pageNumber++
      this.reachedBottom = false
    },
    async reachedToBottom() {
      
      if (window.scrollY + window.innerHeight >= document.body.scrollHeight && !this.reachedBottom) {
        console.log('reached bottom');
        await this.fetchMovies()

      }
    }
  },
  async mounted() {
    await this.fetchMovies()
    window.addEventListener('scroll', this.reachedToBottom)
  },
  beforeDestroy() {
    // Removing scrool event listener
    console.log('removing lsitener');

    window.removeEventListener('scroll', this.reachedToBottom);
  },
  head() {
    return {
      title: 'Homepage',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `Here is the list of all movies`
        },
      ]
    }
  }
}
</script>
