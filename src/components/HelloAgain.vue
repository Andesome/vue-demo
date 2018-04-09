<template>
  <div>
    <h1 class="title">hello world again, by {{msg}}</h1>
  </div>
</template>

<script>
export default {
  name:'HelloAgain',
  props:{
    msg:String
  }
}
</script>

<style scoped>
  .title{
    color: #333;
  }
</style>

