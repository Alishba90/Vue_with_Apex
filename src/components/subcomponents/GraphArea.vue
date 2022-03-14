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
        <div class="area one">
            <h2>Panel Title</h2>
            <div class="draw subarea">
                <apexchart
                    width="400"
                    type="bar"
                    :options="options"
                    :series="series"
                    height="200"
                  ></apexchart>
            </div>
        </div>
        <div class="area two">
            <h2>Data</h2>
            <div class="data subarea">
                  <table>
                  </table>
            </div>
        </div>    
    </div>
  </div>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";
export default {
    name: 'GraphArea',
 components: {
      apexchart: VueApexCharts,
  },
  data: function () {
    return {
      options: {
        chart: {
          id: "vuechart-example",
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
        },
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 2, 60, 70, 91],
        },
      ],
    };
  },
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

}
.subarea{
display: flex;
justify-content: center;
background: inherit;
margin: 1.2em;
}
.one{
height: 70%;
}
.two{
height: 30%;
overflow-y: visible;
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
.area h2{
font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
text-align: center;
background: inherit;
}
</style>
