export const state = () => ({
    movies: {
        'hey': 'hhh'
    },
    // test1: [],
})

// export const getters = {
//     getCounter(state) {
//       return state.movies
//     }
// }

export const mutations = {
    addMovie: (state, payload) => {
        // console.log('ayload', payload);

        const { imdbID } = payload
        state.movies[imdbID] = payload
        // console.log(state.movies);

    },
    // pushTest: (state,payload) => {
    //     state.test1.push(payload);
    // }
}

export const actions = {
    // cacheCurrentMovie: ({commit}, payload) => {
    //     commit('addMovie', payload)
    // },
    fetchMovie: async ({ commit }, { id }) => {
        try {

            /*
                Setting the API request URL depending upon rendering.
                During SSR, server routes need to be called using absolute URL
                while during CSR, routes can be called using relative URL
            */
            const requestStringClient = `/api/getMovieDetails/${id}`
            const requestStringServer = `${process.env.CURRENT_DOMAIN}/api/getMovieDetails/${id}`
            
            const reqApi = process.client ? requestStringClient : requestStringServer
            
            const data = await fetch(reqApi)
            const parsedData = await data.json()

            // Showing Movie not found page if user try to access movie with invalid id
            if (data.status === 400) {
                throw new Error('Movie not found')
            }

            commit('addMovie', parsedData.data)
            return parsedData.data
        } catch (error) {
            throw new Error(error.message)
        }

    }
}