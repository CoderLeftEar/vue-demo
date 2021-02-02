const expect = chai.expect
import Vue from 'vue'
import Button from '../src/button'

Vue.config.production = false
Vue.config.devtools = false

describe('Button', () => {
  it('存在', () => {
    expect(Button).to.exist
  })

  it('可以设置icon', () => {
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        iconName: 'settings'
      }
    }).$mount()
    let useElement = vm.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.equal('#icon-settings')
    vm.$destroy()
  })

  it('可以设置loading', () => {
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        iconName: 'settings',
        loading: true
      }
    }).$mount()
    let useElement = vm.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.equal('#icon-loading')
    vm.$destroy()
  })

  it('icon 默认的 order 是 1', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        iconName: 'settings'
      }
    }).$mount(div)
    let svg = vm.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg)
    expect(order).to.equal('1')
    vm.$el.remove()
    vm.$destroy()
  })

  it('设置 iconPosition 可以改变 order', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        iconName: 'settings',
        iconPosition: 'right'
      }
    }).$mount(div)
    let svg = vm.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg)
    expect(order).to.eq('2')
    vm.$el.remove()
    vm.$destroy()
  })

  it('点击 button 组件触发 click 事件', () => {
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        icon: 'settings'
      }
    }).$mount()

    const callback = sinon.fake()
    vm.$on('click', callback)
    vm.$el.click()
    expect(callback).to.have.been.called
  })
})