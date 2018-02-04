<template>
  <div>
    <add-task @taskAdded="addTask($event)"></add-task>
    <div class="tasks">
      <to-do-task
        v-for="(task, i) in tasks"
        :key="i"
        :index="i"
        :task="task"
        @taskDeleted="deleteTask($event)">
      </to-do-task>
    </div>
    <hr>
    <status-bar
      :status="status"
      @clearDone="deleteDone"></status-bar>
  </div>
</template>

<script>
import AddTask from "./AddTask";
import Task from "./Task";
import StatusBar from "./StatusBar";
import { getTasks } from "../utils/helpers";

export default {
  components: {
    "add-task": AddTask,
    "to-do-task": Task,
    "status-bar": StatusBar
  },
  data: () => ({
    tasks: getTasks()
  }),
  watch: {
    tasks: {
      handler: tasks => localStorage.setItem("tasks", JSON.stringify(tasks)),
      deep: true
    }
  },
  computed: {
    status() {
      const total = this.tasks.length;
      const done = this.tasks.filter(task => task.done).length;
      return {
        total,
        done,
        todo: total - done
      };
    }
  },
  methods: {
    addTask(task) {
      this.tasks.unshift(task);
    },
    deleteTask(index) {
      this.tasks.splice(index, 1);
    },
    deleteDone() {
      this.tasks = this.tasks.filter(task => !task.done);
    }
  }
};
</script>

<style scoped>
.tasks {
  height: 370px;
  overflow: auto;
}
</style>
