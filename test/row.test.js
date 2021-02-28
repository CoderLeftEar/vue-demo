const expect = chai.expect
import Vue from 'vue'
import Row from '../src/row'
import Col from '../src/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {
  it('存在', () => {
    expect(Row).to.exist
  })

  it('接收 gutter 属性', (done) => {
    Vue.component('o-row', Row)
    Vue.component('o-col', Col)
    let div = document.createElement('div')
    div.innerHTML = `
    <o-row gutter='20'>
      <o-col span="12"></o-col>
      <o-col span="12"></o-col>
    </o-row>`
    document.body.appendChild(div)

    const vm = new Vue({
      el: div
    })
    setTimeout(() => {
      const row = vm.$el.querySelector('.row')
      expect(getComputedStyle(row).marginLeft).to.eq('-10px')
      expect(getComputedStyle(row).marginRight).to.eq('-10px')

      const cols = vm.$el.querySelectorAll('.col')
      expect(getComputedStyle(cols[0]).paddingLeft).to.equal('10px')
      expect(getComputedStyle(cols[1]).paddingRight).to.equal('10px')
      done()
      vm.$el.remove()
      vm.$destroy()
    })
  })

  it('接收 align 属性', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)

    const Constructor = Vue.extend(Row)
    const vm = new Constructor({
      propsData: {
        align: 'right'
      }
    }).$mount(div)
    expect(getComputedStyle(vm.$el).justifyContent).to.equal('flex-end')
    vm.$el.remove()
    vm.$destroy()
  })
})