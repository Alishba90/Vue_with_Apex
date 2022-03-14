<template>
  <div class="container">


  </div>
  <MainHeader/>
  <GraphArea/>
</template>

<script>
import MainHeader from "./subcomponents/MainHeader.vue"
import GraphArea from "./subcomponents/GraphArea.vue"
export default {
  name: 'MainTemplate',
  props: {
    msg: String
  },
  components:{
  MainHeader, GraphArea
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
