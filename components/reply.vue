
<script>
    import timestamp from 'unix-timestamp'
export default {

    props: ['id'],
    data() {
        return {
            reply: null,
            author:null,
            time:null,
        }
    },
    mounted() {
        fetch(`https://hacker-news.firebaseio.com/v0/item/${this.id}.json?print=pretty`).then(res => res.json()).then(data=> {this.reply=data.text;this.author=data.by;this.time=data.time}).catch(error=>console.log(error))

    },
    computed:{
        postTime(){
            const pattern = / GMT\+0800 \(China Standard Time\)$/;
            return timestamp.toDate(this.time).toString().replace(pattern, '');
        }
    
    }
}

</script>
<template>
    <div v-if="reply">
    <div  style=" border-color: aquamarine ;border-style:solid ;padding:10px" v-html="reply">
    </div>
    <div>
        by {{ author }} at {{ postTime }}
    </div>
    </div>
    <div v-else> 
        <div>loading</div>
    </div>
    <br />
</template>
<style>

</style>