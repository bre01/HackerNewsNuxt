
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
    <div v-if="story">
        <div class="title">
        <a  :href="story.url">
            {{ story.title }}
        </a>
        </div>
        <div class="details">
        <NuxtLink style="text-decoration: none;" :to="`/${id}`">
            <p><span style="text-decoration: underline ;color:burlywood ;top:-2px">Comments</span  > &nbsp&nbsp&nbsp&nbsp313 Points</p></NuxtLink>
            <p><span>{{ story.by}}&nbsp&nbsp&nbsp&nbsp&nbsp</span><span>{{ time }}</span></p>

        
        </div>

    </div>
    <div v-else>
        <h1>loading...</h1>
    </div>
    <br/>
</template>
<style scoped>
.details{
    font-family: 'Inter';
}
h3{
   font: Georgia 20px , sans-serif;; 
   color:black;
}
p{
    font: Arial 15px , sans-serif;
   color:black;
}

.time{
    font:  arial 10px , sans-serif;; 
   color:black;
}
.title{
    font-family: Georgia, 'Times New Roman', Times, serif;
    color: rebeccapurple;
    font-style: italic;
}
.title a{
    text-decoration: none;
    font-size: 30px;
    color:rgb(243, 148, 46)
}

</style>