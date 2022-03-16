<template>
  <div class="container">



  <MainHeader/>
<div style="display:flex">
<div style="display:flex;flex-direction:column; ">
  <GraphArea style="" :charttype="charttype" />
<BottomPanel/>
</div>
  <SidePanel style="margin:0 0em"  @child="child" />

</div>
  </div>
</template>

<script>
import MainHeader from "./subcomponents/MainHeader.vue"
import GraphArea from "./subcomponents/GraphArea.vue"
import SidePanel from "./subcomponents/SidePanel.vue"
import BottomPanel from "./subcomponents/BottomPanel.vue"

export default {
  name: 'MainTemplate',

  components:{
  MainHeader, GraphArea,SidePanel,
    BottomPanel
},
data(){return{charttype:""}},
methods:{
 child(chart){

this.charttype=chart.charttype;


}

}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.container{
    background-color:		#141414;

}
</style>
