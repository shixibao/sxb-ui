import Vue from 'vue'
import App from './App.vue'
import sxbUi from './packages/index'

Vue.config.productionTip = false
Vue.use(sxbUi)

new Vue({
  render: h => h(App),
}).$mount('#app')
