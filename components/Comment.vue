<script>
import reply from './reply.vue';
import timestamp from "unix-timestamp";
export default {
    props: ['id'],
    data() {
        return {
            comment: null,
            kids: [],
            showReply: false,
            time: null
        }
    },
    methods: {
        toggle() {
            this.showReply = !this.showReply;
            console.log(this.showReply);
            console.log(parseInt(this.time));
            console.log(this.time=timestamp.now());
        },
    },
    computed:{
        showTime()admin{
            return {hour:(parseInt(timestamp.now())-parseInt(this.time))/3600,min:(parseInt(timestamp.now())-parseInt(this.time))%60}
        }
    },
    mounted() {
        fetch(`https://hacker-news.firebaseio.com/v0/item/${this.id}.json?print=pretty`).then(res => res.json()).then(res=>{this.kids=res.kids||[];this.comment=res.text;this.time=res.time}).catch(error => console.log(error))
   },
    /*
    async mounted() {
        const res = await fetch(`https://hacker-news.firebaseio.com/v0/item/${this.id}.json?print=pretty`);
        const data = await res.json();
        this.comment = data.text;
        if(data.kids==undefined){
            console.log(data)
        }
        this.kids = data.kids || [];
    },*/


}
</script>
<template>
    <div style="border-style: solid;border-color: greenyellow; padding: 10px; ">
        <div v-html="comment"></div>
        <div>{{ showTime.hour }} hours {{showTime.min }} ago </div>
        <button @click="toggle" :hidden="!kids.length">show {{kids.length}} replies</button>
        <br/>
        <br/>   
        <ol  :hidden="!showReply">

            <li v-for="kid in kids">
                <reply :id="kid"></reply>
            </li>
        </ol>
    </div>
</template>
