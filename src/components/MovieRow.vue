<template>
    <div>
        
                <p>{{movie.title}}</p>
                <p>{{movie.director}}</p>
                <img :src="movie.imageUrl" >
                <p>{{movie.releaseDate}}</p>
                <p>{{movie.genre}}</p>
                <p>{{movie.duration}}</p>
    </div>
</template>

<script>

export default {
    props: ['movie']
    
    
}
</script>

