<template>
  <div>
    <div>我是分类</div>
    <div>{{val}}</div>
    <div>{{val2}}</div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default{
      computed: {
        ...mapState({
          val: state => state.myValue,
          val2: state => state.myValue2
        })
      }
  }
</script>
<style lang="scss" scoped>
  div{
    font-size: 50px;
  }

</style>
