import Vue from 'vue'
import TaskList from '@/components/TaskList'

describe('TaskList.vue', () => {
  it('should create the correct status object', () => {
    const Constructor = Vue.extend(TaskList)
    const vm = new Constructor().$mount()
    expect(vm.status).toEqual({ total: 10, done: 3, todo: 1 })
  })
})
