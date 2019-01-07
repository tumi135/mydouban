<template>
  <div>
    <div>
      我的
    </div>
    <div>
      <input type="text" :value="myValue" @input="e=>change( ['myValue',e.target.value])"/>
      <input type="text" :value="myValue2" @input="e=>change([ 'myValue2',e.target.value])"/>
    </div>
  </div>
</template>
<script>
  import {mapState, mapMutations} from 'vuex'
  export default{
      computed: {
        ...mapState({
          myValue: state => state.myValue,
          myValue2: state => state.myValue2
        })
      },
    methods: {
      ...mapMutations(['change'])
    }
  }
</script>
