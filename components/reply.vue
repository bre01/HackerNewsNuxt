
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
    <div  class='replay' v-html="reply">
    </div>
    <div id="author">
        by {{ author }} &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp{{ postTime }}
    </div>
    </div>
    <div v-else> 
        <div>loading</div>
    </div>
    <br />
</template>
<style scoped>
.replay{
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    border-color: aquamarine ;border-style:solid ;
    border-radius: 30px; 
    padding: 20px;
}

#author{
    position: relative;
    top:-20px;
    left:21px;
    font-family: Garamond;
    font-size: 15px;
    color: indianred;
    font-style: italic;
}

</style>