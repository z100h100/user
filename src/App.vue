<template>
  <div id="app">
    <img src="./assets/logo.png" @click="ab">
    <router-view></router-view>
  </div>
</template>

<script>
import hello from '@/components/HelloWorld';
export default {
  name: 'App',
  methods:{
    ab(){
      this.$router.push({path:'/test1'})
    }
  },
  components:{
    hello
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
