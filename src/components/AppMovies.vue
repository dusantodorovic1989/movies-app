<template>
    <div>
        <ul >
            <li v-for="(movie,index) in movies" :key="index">
                <movie-row :movie="movie"></movie-row>
            </li>
        </ul>



    </div>
</template>

<script>
import Movies from '../services/Movies.js'
import MovieRow from './MovieRow.vue'
export default {
    components: {
        MovieRow
    },

    data(){
        return{
        movies: []
        }
    },

    beforeRouteEnter(to, from, next) {
       Movies.getAll()
           .then(response => {
               next(vm => {
                   vm.movies = response.data;
               })
           });
   },
    
}
</script>

