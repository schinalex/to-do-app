<template>
  <div class="header column">
    <div class="row">
      <div class="date">
        {{today.date}}
      </div>
      <div>
        {{today.month}}<br>
        {{today.year}}
      </div>
    </div>
    <div class="title">Tasks</div>
  </div>
</template>

<script>
import { getDate } from '../utils/helpers.js'

export default {
  data () {
    return {
      today: getDate()
    }
  }
}
</script>

<style scoped>
.header {
  justify-content: space-around;
  height: 200px;
  width: 355px;
  background-image: url("../assets/sky.jpg");
  background-repeat: no-repeat;
  background-size: contain;
}
.date {
  height: 40px;
  line-height: 36px;
  font-size: 40px;
}
.title {
  font-size: 50px;
}
.row, .title {
  margin-left: 20px;
  color: white;
}
</style>
