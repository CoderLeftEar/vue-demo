import Vue from 'vue'
import Button from './button'
import ButtonGroup from './button-group'
import Icon from './icon'

Vue.component('o-button', Button)
Vue.component('o-button-group', ButtonGroup)
Vue.component('o-icon', Icon)

new Vue({
  el: "#app",
  data: {
    loading1: true,
    loading2: false,
    loading3: false,
  }
});