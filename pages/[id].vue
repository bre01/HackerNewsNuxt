<script setup >
import Comments from '~/components/Comments.vue';
const route = useRoute()
console.log(route.params.id)
const story = ref(null);
const domain=ref(null);
const comment = ref(null);
onMounted(()=>{
    fetch(`https://hacker-news.firebaseio.com/v0/item/${route.params.id}.json?print=pretty`).then(res => res.json())
    .then(data => {story.value = data;return null;})
    .then(data=>{var url=new URL(story.value.url);domain.value=(url.hostname);

    console.log("succ");})
})
</script>
<template>
    <Navbar></Navbar>
    <div id="Comments-root" v-if="story">
        <a class="title" :href="story.url"><h3>{{ story.title }}</h3></a>
        <div id="time " class="container">
            <a :href="story.url" class="domain">www.{{ domain }}</a>
        </div>
        <Time id="source-time" :time="story.time "></Time>

        <ul v-for="kid in story.kids">
            <li><Comments :id="kid"></Comments>
                <br/></li></ul>
            
    </div>
    <div v-else>
        <h1>loading...</h1>
        </div>
</template>

<style scoped>
#source-time{
    font-family:Georgia, 'Times New Roman', Times, serif ;
    color: grey;
    text-align: right;
    margin-right: 200px;
}
.container{
    display: flex;
}
.title{
    font-family: Georgia, 'Times New Roman', Times, serif;
    color: rebeccapurple;
    text-align: center;
    font-size: 30px;
    padding: 20px;
}
#time{
    font-family:Georgia, 'Times New Roman', Times, serif ;
    text-align: right;
    color: grey;
}
#container{
    display: flex;
}
.domain{
    flex-basis: 200px;
    flex-grow: 1;
    color:orange;
    margin-right:100px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
        
}
.time{
    text-align: left;
}
.container a{
    text-align:right ;

}
.Comments-root{
    list-style-type: none;
}
ul{
    list-style-type: none;

}

</style>