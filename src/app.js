import Vue from 'vue'
import OButton from './button'
import OButtonGroup from './button-group'
import OIcon from './icon'
import OInput from './input'
import ORow from './row'
import OCol from './col'

Vue.component('o-button', OButton)
Vue.component('o-button-group', OButtonGroup)
Vue.component('o-icon', OIcon)
Vue.component('o-input', OInput)
Vue.component('o-row', ORow)
Vue.component('o-col', OCol)

new Vue({
  el: "#app",
  data: {
    loading1: true,
    loading2: false,
    loading3: false,
    message: 'Hello'
  },
  methods: {
    handleInputChange(e) {
      console.log(e);
    }
  }
})