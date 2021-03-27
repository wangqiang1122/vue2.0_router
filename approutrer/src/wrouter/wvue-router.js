import Link from './wrouter-link'
import View from './wrouter-view'

let Vue;
// 实现一个产检 挂在¥router

class WVueRouter{
    constructor(options) {
        this.$options = options
        // 需要创建响应式的current属性
        Vue.util.defineReactive(this,'current','/')
        // 监控url变化
         window.addEventListener('hashchange',this.onHashChange.bind(this))
         window.addEventListener('load', this.onHashChange.bind(this))
         // 创建一个路由映射表
        this.routeMap = {}
        options.routes.forEach(route => {
          this.routeMap[route.path] = route
        })
    }
    onHashChange() {
        this.current = window.location.hash.slice(1) // 获取路由
    }
}

WVueRouter.install = function (_Vue) {
    Vue = _Vue
    Vue.mixin({
        beforeCreate() { 
          // 确保根实例的时候才执行
          console.log(this.$options.router)
          if (this.$options.router) {
            Vue.prototype.$router = this.$options.router
          }
    
        }
      })
    Vue.component('router-link', Link)
    Vue.component('router-view', View)
}


export default WVueRouter;
