<!-- 

export default {
    props: ['id'],
    data() {
        return {
            comment: null,
            kids: [],
            showReply: false,
            time: null,
            user:null,
            commentId:this.id
            
        }
    },
    methods: {
        toggle() {
            this.showReply = !this.showReply;
            console.log(this.showReply);
        },
    },
    computed:{
        showTime(){
            return {hour:(parseInt(timestamp.now())-parseInt(this.time))/3600,min:(parseInt(timestamp.now())-parseInt(this.time))%60}
        },
        postTime(){
            const pattern = / GMT\+0800 \(China Standard Time\)$/;
            return timestamp.toDate(this.time).toString().replace(pattern, '');
        }

    },
    mounted() {
        fetch(`https://hacker-news.firebaseio.com/v0/item/${this.id}.json?print=pretty`).then(res => res.json()).then(res=>{this.kids=res.kids||[];this.comment=res.text;this.time=res.time;this.user=res.by}).catch(error => console.log(error))
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


}-->
<script lang="ts" setup>
const props = defineProps({
  id: Number,
});
import timestamp from "unix-timestamp";
export interface Comment {
  id: number;
  parent: number;
  text: string;
  time: number;
  by: string;
  kids: number[];
  type: string;
}
const comment = ref();
fetch(
  `https://hacker-news.firebaseio.com/v0/item/${props.id}.json?print=pretty`
)
  .then((res) => res.json())
  .then((data: Comment) => {
    comment.value = data;
    console.log(comment.value);
  })
  .catch((error) => console.log(error))
  .finally(() => console.log("finally"));
const showReply = ref(false);
function toggle() {
  showReply.value = !showReply.value;
  console.log(showReply.value);
}
const showTime = computed(() => {
  return {
    hour: (parseInt(timestamp.now()) - parseInt(comment.value.time)) / 3600,
    min: (parseInt(timestamp.now()) - parseInt(comment.value.time)) % 60,
  };
});
</script>
<template>
  <link rel="preconnect" href="https://rsms.me/" />
  <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
  <div class="comment">
    <div class="collapse collapse-arrow join-item border border-base-300">
      <input type="radio" name="my-accordion-4" checked="checked" />
      <div class="collapse-title text-xl font-medium">
        Click to open this one and close others
      </div>
      <div class="collapse-content">
        <p>hello</p>
      </div>
    </div>

    <div v-if="comment" id="comment-root">
      <div class="comment-html" v-html="comment.text"></div>
      <div>
        {{ Math.round(showTime.hour) }} hours
        {{ showTime.min.toString().slice(0, 2) }} mins ago
      </div>
      <button
        @click="toggle"
        class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
        :hidden="!comment.kids"
      >
        show {{ comment.kids ? comment.kids.length : 0 }} replies
      </button>
      <br />
      <br />
      <div v-if="comment && comment.kids">
        <div v-for="kid in comment.kids" v-show="showReply">
          <CommentV1 :id="kid" />
        </div>
      </div>
    </div>
    <div v-else>
      <h1>loading...</h1>
    </div>
  </div>
</template>
<style scoped>
#author {
  position: relative;
  top: -20px;
  left: 21px;
  font-family: Garamond;
  font-size: 15px;
  color: indianred;
  font-style: italic;
}

#comment-root {
  grid-column: 1/6;
  margin-left: 40px;
}

.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  padding: 10px;
  list-style: none;
}

.no-number {
  list-style: none;
}

.comment {
  position: relative;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  border-bottom: 1px solid rgb(201, 203, 204);
  padding-bottom: 16px;
  overflow: hidden;
}

.comment-html {
  font-family: "inter";
}

:root {
  --font: var(--font-sans);
  --font-sans: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantrell, "Open Sans", "Helvetica Neue", Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  --font-serif: "Source Serif Pro", "Iowan Old Style", "Sitka Text", Palatino,
    "Book Antiqua", serif;
  --theme-colors: 255, 102, 0;
  --line-colors: rgb(241, 243, 244);
}
</style>
