<template>
  <div>
    <i class="fa-solid fa-arrow-left"></i>
    <h1> Main Panel</h1>
  </div>
</template>

<script>
export default {
    name: 'MainHeader',
  props: {
    
  }
}
</script>

<style scoped>
h1{
width: 100%;
height: 2rem;
font-size: 1.5em;
margin-left: 1em;
margin-top: -0.2em;
}
#MainHeader{
    background-color:		#141414;
}
div{
display: flex;
padding:2rem; 
    background-color:		#141414;
}

.fa-arrow-left{
font-size: 1.5em;
}
</style>

