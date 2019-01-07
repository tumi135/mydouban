<template>
    <div class="hot-goods"></div>
</template>

<script>
  import axios from 'axios'
    export default {
    data (){
      return {
        list : {}
      }
    },
      created (){
        axios.get('/hotShop').then(res => {
          var myList
          if(res.data.code === 0){
            this.list = res.data.data
          }
        })
      }
    }
</script>

<style scoped>

</style>
