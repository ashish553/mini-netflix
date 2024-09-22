<template>
    <div>
        <div class="container">
            <MovieInfo :movieData="movieDetails" />
        </div>
    </div>
</template>

<script>
import Badge from '../../components/Badge.vue';
import MovieInfo from '../../components/MovieInfo.vue';

export default {
    name: 'MovieDetail',
    data() {
        return {
            // 
        }
    },
    components: {
        Badge,
        MovieInfo
    },
    async asyncData({ params, error, store }) {

        try {

            // Check if Store has current requested movie data,
            // If Yes, then return data from Store
            if (store.state.movies[params.id]) {

                return {
                    movieDetails: store.state.movies[params.id]
                }
            }

            // Otherwise request data from external api and then cache that into Store for further request
            const movieDetails = await store.dispatch('fetchMovie', params)

            return {
                movieDetails
            }

        } catch (err) {

            error({ message: err.message, errCode: 'm101', statusCode: 404 })

        }
    },
    head() {
        return {
            title: this.movieDetails.Title,
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: `Movie descrition for ${this.movieDetails.Title}`
                },
                {
                    property: 'og:title',
                    content: this.movieDetails.Title,
                },
                {
                    property: 'og:description',
                    content: `Movie descrition for ${this.movieDetails.Title}`,
                },
            ]
        }
    }

}
</script>

<style></style>