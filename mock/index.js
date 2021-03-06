/**
 * Created by ASUS on 2018/8/19.
 */
import Mock from 'mockjs'
import slide from './home/slide'
import hotShop from './home/hot_shop'
import hotProducts from './home/hot_products'
import detailSlider from './detail/detail_slider'
import detailEvaluate from './detail/evaluate'

Mock.mock('/slide', {
  code: 0,
  codeMsg: '成功',
  data: slide.list
})
Mock.mock('/hotProducts', {
  code: 0,
  codeMsg: '成功',
  data: hotProducts.list
})
Mock.mock('/hotShop', {
  code: 0,
  codeMsg: '成功',
  data: hotShop.list
})
Mock.mock('/detailSlider', {
  code: 0,
  codeMsg: '成功',
  data: detailSlider.list
})
Mock.mock('/detailEvaluate', {
  code: 0,
  codeMsg: '成功',
  data: detailEvaluate.list
})
