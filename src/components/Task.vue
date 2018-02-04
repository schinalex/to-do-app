<template>
  <div class="task row">
    <div @click="task.done = !task.done">
      <img class="icon" src="../assets/todo.svg" alt="todo" v-show="!task.done">
      <img class="icon" src="../assets/done.svg" alt="done" v-show="task.done">
    </div>
    <div class="column">
      <div calss="title">
        <div id="task-title" v-show="!editing">{{task.title}}</div>
        <input
          ref="edit"
          type="text"
          v-model="task.title"
          v-show="editing"
          @keyup.enter="editing = !editing"
          @blur="editing = false">
      </div>
      <div class="row">
        <div>
          <button @click="edit()" class="button" v-show="!editing">Edit</button>
          <button @click="editing = !editing" class="button" v-show="editing">Save</button>
        </div>
        <div>
          <button class="button" @click="deleteTask(index)">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    task: Object,
    index: Number
  },
  data: () => ({
    editing: false
  }),
  methods: {
    deleteTask(index) {
      this.$emit("taskDeleted", index);
    },
    edit() {
      this.editing = !this.editing;
      this.$nextTick(() => this.$refs.edit.focus());
    }
  }
};
</script>

<style scoped>
.task {
  margin: 5px;
}
.icon {
  height: 35px;
  width: 35px;
}
.title {
  height: 21px;
  line-height: 21px;
}
input,
input:focus {
  border: none;
  outline: none;
}
.button,
button:focus {
  height: 15px;
  width: 35px;
  line-height: 12px;
  font-size: 12px;
  text-align: center;
  border: none;
  background-color: white;
  outline: none;
  padding: 0;
  margin: 0;
}
</style>
