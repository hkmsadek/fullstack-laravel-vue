<template>
    <div>
        <div class="content">
			<div class="container-fluid">
                    <h1>I will show how all other components react to changes</h1>
                    <h2>The master component : {{counter}}</h2>
                <div>
                    <comA></comA>
                </div>
                <div>
                    <comB></comB>
                </div>
                <div>
                    <comC></comC>
                </div>

                <Button type="info" @click="changeCounter">Change the state of the counter</Button>
			</div>
            
        </div>
       
    </div>
</template>


<script>
import comA from './comA'
import comB from './comB'
import comC from './comC'
import {mapGetters, mapActions} from 'vuex'
export default {
    data(){
        return {
            localVar : 'some value'
        }
    },
    methods : {
        ...mapActions([
            'changeCounterAction'
        ])
    },
    computed : {
        ...mapGetters({
            'counter' : 'getCounter'
        })
    },
    methods : {
        changeCounter(){
            this.$store.dispatch('changeCounterAction', 1)
            //this.$store.commit('changeTheCounter', 1)
        }, 
        runSomethingWhenCounterChange(){
            console.log('i am running based on each changes happening')
        }
    },
    created(){
        
    }, 
    components : {
        comA,
        comB, 
        comC
    }, 
    watch : {
        counter(value){
            console.log('counter is changing', value)
            this.runSomethingWhenCounterChange()
            console.log('local var', this.localVar)
        }
    }
}
</script>