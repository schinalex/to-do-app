import Vue from 'vue'
import StatusBar from '@/components/StatusBar'

describe('StatusBar.vue', () => {
  it('should display the correct status', () => {
    const status = {
      total: 10,
      todo: 9,
      done: 1
    }

    const Constructor = Vue.extend(StatusBar)
    const vm = new Constructor({ propsData: { status } }).$mount()
    const statusText = vm.$el.querySelector('#status').textContent

    expect(statusText).toContain(status.total)
    expect(statusText).toContain(status.todo)
    expect(statusText).toContain(status.done)
  })
})
