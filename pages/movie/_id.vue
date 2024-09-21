<template>
    <div>
        <div class="container">
            <MovieInfo :movieData="movieDetails" />
            <!-- <div class="movie-details">
                <div class="movie-details-poster">
                    <img :src="movieDetails.Poster" :alt="movieDetails.Title">
                </div>
                <div class="movie-details-body">
                    <h1>{{ movieDetails.Title }}</h1>
                    <p>{{ movieDetails.Plot }}</p>
                    <div class="movie-details-body-badges">
                        <Badge v-for="genre in genres" :key="genre" :title="genre" />
                    </div>
                    <hr />
                    <div class="movie-details-body-rating">
                        <div v-for="rating in movieDetails.Ratings" :key="rating.source">
                            <p>{{ sourceIconMap[rating.Source] }}{{ rating.Source }} <strong>{{ rating.Value }}</strong>
                            </p>
                        </div>
                    </div>
                    <hr />
                    <p><strong>Released</strong> {{ movieDetails.Released }}</p>
                    <hr />
                    <p><strong>Director</strong> {{ movieDetails.Director }}</p>
                    <hr />
                    <p><strong>Writer</strong> {{ movieDetails.Writer }}</p>
                    <hr />
                    <p><strong>Stars</strong> {{ movieDetails.Actors }}</p>
                    <hr />
                    <p><strong>Language</strong> {{ movieDetails.Language }}</p>
                    <hr />
                </div>
            </div> -->
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
                    hid: 'title',
                    name: 'title',
                    content: this.movieDetails.Title
                }
            ]
        }
    }

}
</script>

<style></style>