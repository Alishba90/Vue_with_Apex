<template>
<div style="    background-color:		#141414;padding-bottom:0.8em">
  <div id="container3">
<h2>Data</h2>
<div id="tablearea">
<table>
  <tr>
    <th>Label:</th>
    <td v-for="item in label" :key="item">{{item}}</td>
 
  </tr>
  <tr>

    <th>Value:</th>
    <td v-for="item in this.valueke" :key="item">{{item}}</td>
 
  </tr>
</table>
</div>
</div>
</div>
</template>

<script>
export default {
 name: 'BottomPanel',
 data: function () {
return{
label:[1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
valueke:[30, 40, 45, 50, 2, 60, 70, 91]
}

},
mounted(){
console.log("ia ma najn");
this.emitter.on("displaydata",(obj)=>{
this.label=obj.label;
console.log("ia ma najn",obj);
this.valueke=obj.value;
})
}


}
</script>

<style scoped>
::-webkit-scrollbar {
  width: 5px;
height: 5px;
}
::-webkit-scrollbar-thumb {
  background:grey; 
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: grey;
overflow-y: visible; 
overflow-x: visible;
}
#container3{
height: 12em;
width: 71vw;
background-color: rgb(27, 27, 27);
margin: 0.5em 1.2em;
margin-right: 1.9em;
scroll-behavior: smooth;
overflow-y:hidden;
overflow-x: scroll;

}
 h2{
font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
margin-left: 35%;
background: inherit;
position:fixed;
}
#tablearea{
justify-content: space-around;
display: flex;

width:99%;
}
table{
border-radius:15px ;
margin:3em 0;
border-collapse: collapse;
}
th ,td{
border: 1px solid rgb(230, 213, 213);
text-align: center;
padding: 0.5em 1.5em;
border-collapse: collapse;
}
</style>