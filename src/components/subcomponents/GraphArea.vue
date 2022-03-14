<template>
  <div id="container">
    <div id="header">
        <div id="toggle">
        </div>
        <button>Fill</button>
        <button>Actual</button>
        <div id="last">
            <button><i class="fa-solid fa-clock-rotate-left" style="margin-right:0.3em"></i>Last 1 hour</button>
           
            <button><i class="fa-solid fa-magnifying-glass"></i></button>
  
        </div>
        <button><i class="fa-solid fa-arrows-rotate"></i></button>
    </div>

    <div id="grapharea">
        <div class="area 1">
            <h2>Panel Title</h2>
            <div class="draw subarea">
            </div>
        </div>
        <div class="area 2">
            <h2>No data</h2>
            <div class="data subarea"></div>
        </div>    
    </div>
  </div>
</template>

<script>
export default {
    name: 'GraphArea',
  props: {
    
  }
}
</script>

<style>
i{font-size: 1.5em;
color:white;

}
#container{

width: 75vw;
}
#header{
display: flex;
justify-content: flex-end;
width: 100%;
height: 2rem;
padding: 0.2em 0%;

}
#last{
display: flex;

}
button{
border-radius: 5px;
padding: 0.2em 0.8em;
outline: none;
border: 2px solid rgb(43, 42, 42);
background-color: rgba(29, 28, 28, 0.877);
margin-right: 0.5em;
}
#grapharea{
height: 50vh;
width: 100%;
background-color: rgb(27, 27, 27);
margin: 1.2em;
scroll-behavior: smooth;
}
.area{
background-color: inherit;
font-size: 0.8em;
width: 100%;
height: 50%;
}
.area h2{
font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
text-align: center;
background: inherit;
}
</style>
