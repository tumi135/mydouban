<template>
  <div class="db_swiper">
    <swiper :options="swiperOption"  ref="mySwiper">
      <!-- 这部分放你要渲染的那些内容 -->
      <swiper-slide v-for="slide in list" :key="slide.id">
        <a :href="slide.url" target="_blank"><img :src="slide.img"></a>
      </swiper-slide>
      <!-- 这是轮播的小圆点 -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import axios from 'axios'

  export default {
    components: {
      swiper,
      swiperSlide
    },
    data () {
      return {
        list : {},
        swiperOption: {
// 所有配置均为可选（同Swiper配置）
          initialSlide: 0,
          pagination:'.swiper-pagination',
//           pagination: {
//            el: '.swiper-pagination'
//           },
          loop: true,
          speed: 400,
          direction: 'horizontal',
          paginationClickable: true,
          mousewheelControl: true,
          autoplay: 1000,
//          autoplay: true,
          autoplayDisableOnInteraction: false,
          observer: true,
          observeParents: true,
          debugger: true
//          onTransitionStart (swiper) {
//            console.log(swiper)
//          }
//          是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
//          notNextTick: true,
//          autoplay: 1000,
//          loop:true,
//          direction: 'horizontal',
//          paginationType: 'bullets',
//          pagination: '.swiper-pagination',
//          prevButton:'.swiper-button-prev',
//          nextButton:'.swiper-button-next',
//          paginationClickable :true,
//          observeParents:true,
//          autoplayDisableOnInteraction:true
//          pagination: '.swiper-pagination',
//          slidesPerView: 'auto',
//          centeredSlides: true,
//          paginationClickable: true,
//          spaceBetween: 30,
//          onSlideChangeEnd: swiper => {
//          这个位置放swiper的回调方法
//            this.page = swiper.realIndex + 1
//            this.index = swiper.realIndex
//          }
        }
      }
    },
//    定义这个sweiper对象
    computed: {

      mySwiper () {
        return this.$refs.mySwiper.swiper
      }
    },
//    methods: {
//      stopPlay () {
//          this.mySwiper.stopAutoplay()
//      },
//      play () {
//          this.mySwiper.startAutoplay()
//      }
//    },
    mounted () {
//      这边就可以使用swiper这个对象去使用swiper官网中的那些方法
//       this.swiper.slideTo(1, 1000, false)
    },
    created () {
      axios.get('/slide').then(res => {
        if(res.data.code === 0){
          this.list = res.data.data
        }
      })
    }

  }
</script>
<style lang="scss" scoped>
  .db_swiper{
    margin: 2px 0 5px;
  }
  .db_swiper .swiper-slide{
    height: 100px;
    background-color: #e0e0e0;
  }
  .db_swiper .swiper-slide img{
    width: 100%;
    height: 100%;
  }
</style>
