<template>
  <div class="hello">
    <h1>
    	t2222222222222222
      </h1>
    <slot></slot>
    <slot name='t2Temp'></slot>
  </div>
</template>

<script>
export default {
  name: 't2',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
