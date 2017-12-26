import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import i18n from './i18n'
import Noty from 'noty'

// 引入INSPINIA所需文件，css不并入app.js会统一打包到style.css
require('@/assets/admin/css/bootstrap.css')
require('@/assets/admin/font-awesome/css/font-awesome.min.css')
require('@/assets/admin/css/animate.css')
require('@/assets/admin/css/style.css')
require('@/assets/admin/js/jquery-3.1.1.min.js')
require('@/assets/admin/js/bootstrap.min.js')
require('@/assets/admin/js/plugins/metisMenu/jquery.metisMenu.js')
require('@/assets/admin/js/plugins/slimscroll/jquery.slimscroll.min.js')
require('@/assets/admin/js/inspinia.js')
require('@/assets/admin/js/plugins/pace/pace.min.js')


// Vue.config.productionTip = true

const notyDefault = {
  type: 'info',
  layout: 'bottomRight',
  timeout: 1000,
  progressBar: true
}

Vue.prototype.$noty = function (opts) {
  new Noty(Object.assign({}, notyDefault, opts)).show()
}

Vue.prototype.$showSuccess = function (message) {
  new Noty(Object.assign({}, notyDefault, {
    text: message,
    type: 'success'
  })).show()
}

Vue.prototype.$showError = function (error) {
  let n = new Noty(Object.assign({}, notyDefault, {
    text: error,
    type: 'error',
    timeout: null,
    buttons: [
      Noty.button(i18n.t('buttons.reportIssue'), '', function () {
        window.open('https://github.com/hacdias/filemanager/issues/new')
      }),
      Noty.button(i18n.t('buttons.close'), '', function () {
        n.close()
      })
    ]
  }))

  n.show()
}

Vue.config.devtools = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  i18n,
  template: '<App/>',
  components: { App }
})
