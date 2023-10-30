
<script >
import timestamp from 'unix-timestamp'
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
    },
    computed:{
        time(){
            const pattern = / GMT\+0800 \(China Standard Time\)$/;
            
            return timestamp.toDate(this.story.time).toString().replace(pattern, '');
        }
    }

}


</script>
<template>
    <div style="background-color: ; padding: 10px; border-style: solid;">
    <div v-if="story">
        <a :href="story.url">
            <h3>{{ story.title }}</h3>
        </a>
        <NuxtLink :to="`/${id}`">
            <p>comment</p>
        </NuxtLink>

       <span class="time">published at: {{time}} by: </span> 
        <span>{{ story.by }}</span>

    </div>
    <div v-else>
        <h1>loading...</h1>
    </div>
    <br/>
    </div>
</template>
<style scoped>
h3{
   font: Georgia 20px , sans-serif;; 
   color:black;
}
p{
    font: Arial 15px , sans-serif;; 
   color:black;
}

.time{
    font:  arial 10px , sans-serif;; 
   color:black;
}

</style>