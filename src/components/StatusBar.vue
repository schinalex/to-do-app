<template>
  <div class="status row">
    <div id="status"><span class="bold" id="total">{{status.total}} Tasks</span> ({{status.todo}} left / {{status.done}} done)</div>
    <button @click="clearDone()">Clear Done</button>
  </div>
</template>

<script>
export default {
  props: {
    status: Object
  },
  methods: {
    clearDone() {
      this.$emit("clearDone");
    }
  }
};
</script>

<style scoped>
.status {
  width: 355px;
  justify-content: space-between;
}
.bold {
  font-weight: bold;
}
button {
  border: none;
  background-color: white;
  outline: none;
}
</style>
