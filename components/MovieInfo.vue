<template>
    <div class="movie-details">
        <div class="movie-details-poster">
            <img :src="movieData.Poster" :alt="movieData.Title">
        </div>
        <div class="movie-details-body">
            <h1>{{ movieData.Title }}</h1>
            <p>{{ movieData.Plot }}</p>
            <div class="movie-details-body-badges">
                <Badge v-for="genre in genres" :key="genre" :title="genre" />
            </div>
            <hr />
            <div class="movie-details-body-rating">
                <div v-for="rating in movieData.Ratings" :key="rating.source">
                    <p class="m-0">{{ sourceIconMap[rating.Source] }}{{ rating.Source }} <strong>{{ rating.Value }}</strong>
                    </p>
                </div>
            </div>
            <hr />
            <p><strong>Released</strong> {{ movieData.Released }}</p>
            <hr />
            <p><strong>Director</strong> {{ movieData.Director }}</p>
            <hr />
            <p><strong>Writer</strong> {{ movieData.Writer }}</p>
            <hr />
            <p><strong>Stars</strong> {{ movieData.Actors }}</p>
            <hr />
            <p><strong>Language</strong> {{ movieData.Language }}</p>
            <hr />
        </div>
    </div>
</template>

<script>
import sourceIconMap from '../constants/sourceIconMap.json'

export default {
    name: 'MovieInfo',
    props: {
        movieData: {
            required: true,
            // type: ()=>{},
        }
    },
    data() {
        return {
            sourceIconMap
        }
    },
    computed: {
        genres() {
            return this.movieData?.Genre.split(',')
        },
        posterImage() {
            return this.movieData?.Poster
        }
    }
}
</script>

<style></style>