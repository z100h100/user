<template>
    <div class="hello">
        hellohellohellohello
        <!-- <h1 @click="ab1()">切换t1</h1>
        <h2 @click="ab2()">切换t2</h2>
        <h2 @click="ab3()">切换t3</h2>
        <h2>Ecosystem</h2>
        <component  :is='current'  :canshu="msg">
          <div>切换咯哦{{current}}</div>
           <p slot='t1Temp'>我是t1父亲</p>
           <p slot='t2Temp'>我是t2父亲</p>
        </component> -->
        <!-- <t1 >
          <div>没有slost === "111111111111111111111111"</div>
          <p slot='t1Temp'>我是t1父亲</p>
        </t1>

        <t2>
          <div>没有slost === "22222222222222222222"</div>
          <p slot='t2Temp'>我是t2父亲</p>
        </t2> -->
    </div>
</template>

<script>
    import t1 from './t1'
    import t2 from './t2'
    import t3 from './t3'
    import getData from '../router/getData'

    import getDataPack from '../router/getDataPack'
    export default {
        name: 'HelloWorld',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App',
                current: 't2'
            }
        },
        created() {
            getData.GetColumnList();
        },
        components: {
            t1: t1,
            t2,
            t3
        },
        methods: {
            ab1() {
                this.current = 't1';
            },
            ab2() {
                this.current = 't2'
            },
            ab3() {
                this.current = 't3'
            }
        },
        beforeDestroy() {
            console.log(getDataPack.sources);
            //getDataPack.sources.cancel('quxiao')
            while (getDataPack.sources.length>0){
                getDataPack.sources.pop()("中断请求")
                console.log(getDataPack.sources);
            }
        },
        destoryed: function () {
            console.log("destoryed 销毁完成状态======》");
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
