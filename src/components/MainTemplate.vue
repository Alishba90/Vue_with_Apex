<template>
  <div class="container">


  </div>
  <MainHeader/>
<div style="display:flex">
  <GraphArea style="position:absolute;width:72%"/>
  <SidePanel style="position:absolute;right:1em;"/>
</div>
</template>

<script>
import MainHeader from "./subcomponents/MainHeader.vue"
import GraphArea from "./subcomponents/GraphArea.vue"
import SidePanel from "./subcomponents/SidePanel.vue"
export default {
  name: 'MainTemplate',
  props: {
    msg: String
  },
  components:{
  MainHeader, GraphArea,SidePanel
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
