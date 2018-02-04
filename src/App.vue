<template>
  <div id="app">
    <div class="column center">
      <app-header></app-header>
      <task-list></task-list>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
import TaskList from './components/TaskList'

export default {
  name: 'App',
  components: {
    'app-header': Header,
    'task-list': TaskList
  }
}
</script>

<style>
#app {
  display: flex;
  justify-content: center;
}
.column {
  display: flex;
  flex-direction: column;
}
.row {
  display: flex;
}
.center {
  justify-content: center;
}
</style>
