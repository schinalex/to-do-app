import Vue from 'vue'
import Task from '@/components/Task'

describe('Task.vue', () => {
  it('should display the correct task title', () => {
    const task = {
      title: 'make a to-do app',
      done: false
    }
    const index = 1

    const Constructor = Vue.extend(Task)
    const vm = new Constructor({ propsData: { task, index } }).$mount()
    expect(vm.$el.querySelector('#task-title').textContent)
      .toContain(task.title)
  })
})
