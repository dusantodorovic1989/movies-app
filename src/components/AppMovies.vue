<template>
    <div>
    </div>
</template>

<script>
import Movies from '../services/Movies.js'
export default {

    data(){
        return{
        movies: []
        }
    },

    beforeRouteEnter(to, from, next) {
       moviesService.getAll()
           .then(response => {
               next(vm => {
                   vm.movies = response.data;
               })
           });
   },
    
}
</script>

