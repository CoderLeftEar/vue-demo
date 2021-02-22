import Vue from 'vue'
import OButton from './button'
import OButtonGroup from './button-group'
import OIcon from './icon'
import OInput from './input'

Vue.component('o-button', OButton)
Vue.component('o-button-group', OButtonGroup)
Vue.component('o-icon', OIcon)
Vue.component('o-input', OInput)

new Vue({
  el: "#app",
  data: {
    loading1: true,
    loading2: false,
    loading3: false,
  },
  methods: {
    handleInputChange(e) {
      console.log(e);
    }
  }
})