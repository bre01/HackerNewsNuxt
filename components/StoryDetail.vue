
<script >
export default {
    props: ['id'],
    data() {
        return {
            story: null,
        }
    },
    mounted() {
        console.log('hello')
        console.log(this.id)
        fetch(`https://hacker-news.firebaseio.com/v0/item/${this.id}.json?print=pretty`).then(res => res.json()).then(data => this.story = data)
    }
}


</script>
<template>
    <div v-if="story">
        <a :href="story.url">
            <h3>{{ story.title }}</h3>
        </a>
        <NuxtLink :to="`/${id}`">
            <p>comment</p>
        </NuxtLink>

    </div>
    <div v-else>
        <h1>loading...</h1>
    </div>
</template>