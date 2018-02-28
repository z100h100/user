<template>
  <div class="hello">
     <h1 @click='testclick'>
         ahref="https://vuejs.org"
          target="_blank"
      </h1>
  </div>
</template>

<script>
import getData from '../router/getData'
export default {
  name: 'test1',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created(){
    //console.log('test1' )
    getData.GetColumnList();
  },
  methods:{
    testclick(){
       this.$router.push({path:'/'})
    }
  },
  beforeDestroy() {

  },
  destoryed:function(){

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
