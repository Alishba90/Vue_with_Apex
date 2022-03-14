<template>
  <div id="container">
  <div id="head">
    <button>Time Series</button>
    </div>
    <div id="panel">

    </div>
</div>
</template>

<script>
export default {
  name: 'SidePanel'
}
</script>

<style scoped>
#container{
width: 25vw;
height: 85vh;
overflow: scroll;
margin-bottom: 2em;
overflow-x: hidden;

}
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px black; 
  border-radius: 10px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background:grey; 
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: grey;
overflow-y: visible; 
}
#panel{
width: 100%;
height: 100%;
background-color: rgb(27, 27, 27);
scroll-behavior: smooth;
}
#head button{
width: 100%;
height: 100%;
}

</style>