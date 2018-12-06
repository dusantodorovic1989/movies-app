<template>
    <div>
        <!-- <ul >
            <li v-for="(movie,index) in filteredMovies" :key="index">
                <movie-row :movie="movie"></movie-row>
            </li>
        </ul> -->
    <template v-if="filteredMovies.length">
      <ul v-for="movie in filteredMovies" :key="movie.id">
        <movie-row :movie="movie"/>
      </ul>
    </template>
    <template v-else>
      <h1 class="failed-search">We dont have the movie with that title in our archive</h1>
    </template>



    </div>
</template>

<script>
import Movies from '../services/Movies.js'
import MovieRow from './MovieRow.vue'
export default {
     components: {
        MovieRow
    },
    created(){
        window.EventBus.$on('search',(term)=>{
            this.term = term
        })
    },
   

    data(){
        return{
        movies: [],
        term: ''
        }
    },
    computed:{
        filteredMovies(){
            return this.movies.filter((movie)=> movie.title.toLowerCase().includes(this.term.toLowerCase()))
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

