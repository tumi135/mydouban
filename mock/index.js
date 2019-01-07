/**
 * Created by ASUS on 2018/8/19.
 */
import Mock from 'mockjs'
import slide from './home/slide'
import hotShop from './home/hot_shop'

Mock.mock('/slide', {
  code: 0,
  codeMsg: '成功',
  data: slide.list
})
Mock.mock('/hotShop', {
  code: 0,
  codeMsg: '成功',
  data: hotShop.list
})
