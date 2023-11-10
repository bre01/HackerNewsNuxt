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
<link rel="preconnect" href="https://rsms.me/">
<link rel="stylesheet" href="https://rsms.me/inter/inter.css">
<Navbar></Navbar>
<div v-if="data">
    <AllStory :stories="data" />
</div>
</template>

<style>
body{ margin-top: 0 !important; }

</style>