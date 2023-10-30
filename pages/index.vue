<script >

    export default{
        data(){
            return{
                data:null
            }
        },
        mounted(){
            fetch("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty").then(data=>data.json()).then(json=>this.data=json)

        }

    
    }
</script>

<template>
<div v-if="data">
    <AllStory :stories="data" />
</div>
</template>

<style>

</style>