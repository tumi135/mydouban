<template>
    <div class="detail_slider">
      <swiper class="swiper" :options="swiperOption" ref="mySwiper">
        <swiper-slide class="swiper-slide" v-for="item in detailSlider" :key="item.img">
          <a :href="item.url">
            <img :src="item.img" :class="imgSize(item.img)">
          </a>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {
    props: {
      detailSlider: Array
    },
      data (){
        return {
          swiperOption: {
            initialSlide: 0,
            pagination: '.swiper-pagination',
            loop: true,
            speed: 400,
            direction: 'horizontal',
            paginationClickable: true,
            mousewheelControl: true,
            autoplay: 1000,
            autoplayDisableOnInteraction: false,
            observer: true,
            observeParents: true,
            debugger: true
          }
       }
      },
      components: {
        swiper,
        swiperSlide
      },
      computed: {
        mySwiper () {
          return this.$refs.mySwiper.swiper
        }
      },
      methods: {
      imgSize (url){
        let img = new Image()
        img.src = url
        let w = img.width
        let h = img.height
        let size = w / h
        if(size > 1){
          return 'w'
        }else {
          return 'h'
        }
      }
      }
    }
</script>

<style scoped>
  .detail_slider{
    width: 100vw;
    height: 100vw;
  }
  .detail_slider .swiper{
    width: 100%;
    height: 100%;
  }
  .detail_slider .swiper-slide{
    width: 100%;
    height: 100%;
    background-color: #1e1e1e;
  }
  .detail_slider .swiper-slide a{
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
  }
  .detail_slider .swiper-slide a img{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
  }
  .detail_slider .swiper-slide a .h{
    height: 100%;
    width: auto;
  }
  .detail_slider .swiper-slide a .w{
    width: 100%;
    height: auto;
  }
</style>
