<template>
<div>
    <nav class="navbar navbar-light bg-light">
  <form class="form-inline">
    <input @input="searchHandler" class="form-control mr-sm-2" type="search" placeholder="Search"  name="Search">
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
</nav>
</div>

</template>

<script>
export default {
    methods:{
        searchHandler(event){
            window.EventBus.$emit('search', event.target.value)
            
        }
    }
    
}
</script>
