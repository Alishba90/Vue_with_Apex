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
                    width="500"
                    :type="type"
                    :options="options"
                    :series="series"
                    height="270"
                  ></apexchart>
            </div>
<h2 style="margin-top:-1.5em" >{{this.namechart}} chart</h2>
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
      colors: [ '#E91E63']
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 2, 60, 70, 91],
        },

      ],

    type:"bar",namechart:"Bar"
    };

  },

mounted(){
const data={
value:this.series[0]['data'],
label:this.options.xaxis.categories,
}

this.emitter.emit("displaydata",data)
this.emitter.on("changingcolor",(value)=>{
this.options.colors[0]=value;

});
this.emitter.on("changingvalues",(obj)=>{

if(this.options.xaxis.categories.includes(obj.valx)){
const n=this.options.xaxis.categories.indexOf(obj.valx);
this.series[0]['data'][n]=obj.valy;
}
else{
this.options.xaxis.categories.push(obj.valx);
this.series[0]['data'].push(obj.valy);
}
})
this.emitter.on("changing",(obj)=>{
  this.type=obj.charttype
this.namechart=obj.chart

});



}

}
</script>

<style>

#container{
    background-color:		#141414;
width: 71.5vw;
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
height: 53vh;
width: 100%;
background-color: rgb(27, 27, 27);
margin-left: 1.2em;
margin-bottom: 0;
scroll-behavior: smooth;
overflow-y: scroll;

}
.area{
background-color: inherit;
font-size: 0.8em;
width: auto;
}
.subarea{
display: flex;
justify-content: center;
background: inherit;
margin: 1em 0;
width:auto;
}
.one{
height: 90%;

}

.area h2{
font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
text-align: center;
background: inherit;
}
</style>
