<template>
<div >
  <div id="container2">
  <div id="head">
    <button>Customization Panel</button>
    </div>
    <div id="panel">
<h4>Type of Graph</h4>
<select v-model="val.selected" @change='onChange($event)'>
  <option v-for="option in options" :value="option.value" :key="option.value">
    {{ option.text }}
  </option>
</select>
<h4>Color</h4>
<div id="pick">
<color-input v-model="color" format="hex" disable-alpha disable-text-inputs @change='onChangecolor($event)'/>
</div>

    <div class="dataheader">
<h4>Data</h4>
<button  @click="onChangevalue($event)"><i class="fa-solid fa-plus"></i></button>
    </div>
<div class="dataheader">
<h5>X-axis</h5>

<h5>Y-axis</h5>
</div>
    <div class="datainput">
<input type="text" v-model="xvalue"  id="xvalue" class="innum"  />
<input type="number" v-model="yvalue"  id="yvalue" min="0" class="innum"  />

    </div>

    </div>
</div>
</div>
</template>

<script>

export default {
  name: 'SidePanel',

data() {
    return {
val:{
      selected: '',
    charttype:"line",
    chart:"Line"
}

,
      options: [
        { text: 'Bar', value: 'bar' },
        { text: 'Line', value: 'line' },
        { text: 'Histogram', value: 'histogram' },
        { text: 'Scatter', value: 'scatter' }
      ],

color: "#E91E63",

xvalue:"Label",
yvalue:0
    }
  },

methods:{

onChangevalue(){

const values={
valx:this.xvalue,
valy:this.yvalue,
}
this.xvalue="Label";
this.yvalue=0;
this.emitter.emit("changingvalues",values);

},


onChange(){
    
this.val.charttype=this.val.selected;



if(this.val.selected=="bar"){this.val.chart="Bar";}
else if(this.val.selected=="line"){this.val.chart="Line";}
else if(this.val.selected=="histogram"){this.val.chart="Histogram";}
else{this.val.chart="Scatter";}


const chart={
charttype:this.val.charttype,
chart:this.val.chart,

};
this.emitter.emit("changing",chart) ;
 
},

onChangecolor(){


this.emitter.emit("changingcolor",this.color) ;

}
},
props:{ }
}
</script>

<style scoped>

#container2{
width: 25vw;
height: 85vh;
overflow: scroll;
margin-left:-1.2em;
overflow-x: hidden;
    background-color:		#141414;
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
h4{
background: inherit;
padding: 1em;
}
select{
text-align: center;
width: 70%;
margin:0 1em;
height: 1.5em;
border-radius: 5px;
background-color: inherit;
}
.dataheader{
display:flex;
flex-direction:row;
justify-content: space-between;
background: inherit;
}
.dataheader button{
font-size:0.8em;
height: 2.2em;
align-self: center;
}
.dataheader h5{
margin: 1em;
background: inherit;

}
#pick{
margin-left: 30%;
background-color: inherit;
}
.innum{
width: 40%;
height: 2em;
font-size: 1em;
background-color: inherit;
outline: none;
border:2 px solid #141414;
border-radius:10px ;
text-align: center;
}
.datainput{
display:flex;
flex-direction:row;
justify-content: space-between;
background: inherit;
padding: 0.7em;

}
button{
cursor: pointer;
}
</style>