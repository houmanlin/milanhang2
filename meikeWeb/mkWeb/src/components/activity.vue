<template>
  <div class="wrap">
    <div class="content"></div>
    <commonFooter></commonFooter>
  </div>
</template>
<script>
import commonFooter from '../components/common/common-footer'
import axios from "axios"
export default {
  components: {
    commonFooter
  },
  // mounted(){
  //   var that =this;
  //   axios.post('api/rest/agent/checkAgentPhone',{
  //     phone: '13654451234'
  //   },{
  //     headers:{
  //       "content-type": "application/x-www-form-urlencoded"
  //     }
  //   }).then(function (res) {
  //     console.log(res)
  //   })
  // },
}
</script>
<style lang="less" scoped>
.content{
  width: 1367px;
  margin: auto;
}
</style>
