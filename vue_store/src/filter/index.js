// 导入需要关联到vue的插件
import date from './date.js'

export default {
  install(vue) {
    vue.filter("date", date)
  }
}
