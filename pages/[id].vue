<script setup >
import Comment from '~/components/Comment.vue';
const route = useRoute()
console.log(route.params.id)
const story = ref(null);
const domain=ref(null);
const comment = ref(null);
onMounted(()=>{
    fetch(`https://hacker-news.firebaseio.com/v0/item/${route.params.id}.json?print=pretty`).then(res => res.json())
    .then(data => {story.value = data;return null;})
    .then(data=>{console.log(story.value.url);domain.value=(story.value.url.toString().slice(0,20));console.log(domain.value);

    console.log("succ");})
})
</script>
<template>
    <Navbar></Navbar>
    <div id="Comments-root" v-if="story">
        <a class="title" :href="story.url"><h3>{{ story.title }}</h3></a>

        <div id="time " class="container"><time class="item " :datetime="story.time">Publish Time:{{ story.time }}</time>
            <a :href="story.url" class="item">{{ domain }}</a>
        </div>

        <ul v-for="kid in story.kids">
            <li><Comment :id="kid"></Comment>
                <br/></li></ul>
            
    </div>
    <div v-else>
        <h1>loading...</h1>
        </div>
</template>

<style scoped>
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
.item{
    flex-basis: 200px;
    flex-grow: 1;
    color:#f54e42;
}
.time{
    text-align: left;
}
.container a{
    text-align:right ;

}
.comment{
}
.Comments-root{
    list-style-type: none;
}
ul{
    list-style-type: none;

}

</style>