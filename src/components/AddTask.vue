<template>
  <div class="add-task row">
    <img class="icon" src="../assets/add.svg" alt="add" v-show="!adding">
    <img class="icon" src="../assets/todo.svg" alt="todo" v-show="adding">
    <input
      id="new-task-title"
      ref="title"
      type="text"
      placeholder="Add new Task"
      v-model="title"
      @keyup.enter="addTask(title)"
      @focus="adding = true"
      @blur="adding = false">
    <button id="add-task" @click="addTask(title)">Add Task</button>
  </div>
</template>

<script>
export default {
  data: () => ({
    title: "",
    adding: false
  }),
  methods: {
    addTask(title) {
      if (title) {
        const task = {
          title,
          done: false
        };
        this.$emit("taskAdded", task);
        this.title = "";
      } else {
        this.$refs.title.focus();
      }
    }
  }
};
</script>

<style scoped>
.add-task {
  margin: 5px;
  width: 345px;
  justify-content: space-between;
}
input {
  width: 230px;
}
.icon {
  height: 35px;
  width: 35px;
}
button,
input {
  border: none;
  background-color: white;
  outline: none;
}
</style>
