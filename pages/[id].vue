<script setup >
import Comment from '~/components/Comment.vue';
const route = useRoute()
console.log(route.params.id)
const story = ref(null);

const comment = ref(null);
onMounted(()=>{
    fetch(`https://hacker-news.firebaseio.com/v0/item/${route.params.id}.json?print=pretty`).then(res => res.json()).then(data => story.value = data)
})
</script>
<template>
    <div v-if="story">
        <a :href="story.url"><h3>{{ story.title }}</h3></a>

        <ul v-for="kid in story.kids">
            <li><Comment :id="kid"></Comment>
                <br/></li></ul>
            
    </div>
    <div v-else>
        <h1>loading...</h1>
        </div>
</template>

<script>

</script>