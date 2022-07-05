<template>
<div>
    <div>
        <v-btn @click="quanxuan">全选</v-btn>
        <v-btn @click="fanxuan">反选</v-btn>
    </div>
    <div v-for="v in list" :key="v">
        <v-checkbox
            v-model="selected"
            :label="'第'+v+'个'"
            :value="v"
        ></v-checkbox>
    </div>
</div>
</template>
<script>
export default {
    data(){
        return {
            list: [],
            selected: [],
        }
    },
    created(){
        for(var i = 1; i<=10; i++){
            this.list.push(i)
        }
    },
    methods: {
        quanxuan(){
            this.selected = this.list
        },
        fanxuan(){
            var arr = []
            var map = {}
            this.selected.map(v => {
                map[v] = true
            })
            this.list.map(v => {
                if(!map[v]){
                    arr.push(v)
                }
            })
            this.selected = arr
        },
    },
}
</script>