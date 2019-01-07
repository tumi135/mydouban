<template>
    <div class="hot-goods">
      <ul>
        <li v-for="(item,index) in list" :key="index">
          <div class="hot-item">
            <a href="item"></a>
          </div>
        </li>
      </ul>
    </div>
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
        axios.get('/hotProducts').then(res => {
          if(res.data.code === 0){
            this.list = res.data.data.slice(0, 6)
            console.log(this.list)
          }
        })
      }
    }
</script>

<style scoped>

</style>
