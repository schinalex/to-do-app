import Vue from 'vue'
import Header from '@/components/Header'

describe('Header.vue', () => {
  it('should display today\'s date', () => {
    const Constructor = Vue.extend(Header)
    const vm = new Constructor().$mount()
    const today = new Date()
    const date = today.getDate()
    expect(vm.$el.querySelector('.date').textContent)
      .toContain(date)
  })
})
