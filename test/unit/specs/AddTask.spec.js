import Vue from 'vue'
import AddTask from '@/components/AddTask'

describe('AddTask.vue', () => {
  it('should display the correct task title', () => {
    const Constructor = Vue.extend(AddTask)
    const vm = new Constructor().$mount()

    expect(vm.addTask).toHaveBeenCalled()
  })
})
