<script lang="ts" setup>
import type Comment from "../Interfaces/Comment.ts";
import timestamp from "unix-timestamp";
const props = defineProps({
  commentId: Number,
});
const comment = ref();
fetch(
  `https://hacker-news.firebaseio.com/v0/item/${props.commentId}.json?print=pretty`
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
    hour:
      (parseInt(timestamp.now()) -
        parseInt(comment.value ? comment.value.time : 0)) /
      3600,
    min:
      (parseInt(timestamp.now()) -
        parseInt(comment.value ? comment.value.time : 0)) %
      60,
  };
});
</script>
<template>
  <link rel="preconnect" href="https://rsms.me/" />
  <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
  <div v-if="comment" class="comment">
    <div v-html="comment.text"></div>
    <div class="badge  badge-accent" style="display:inline;margin-right:20px">
      {{ Math.round(showTime.hour) }} hours
      {{ showTime.min.toString().slice(0, 2) }} mins ago
    </div>
    <Author :author="comment.by">

    </Author>
    <div v-if="comment.kids">
    <button
      @click="toggle"
      class="btn btn-xs sm:btn-sm md:btn-sm lg:btn-sm"
      v-if="!showReply"
    >
      show {{comment.kids.length}} replies
    </button>
    <button 
      @click="toggle"
      class="btn btn-xs sm:btn-sm md:btn-sm lg:btn-sm"
    v-else>
      hide replies
    </button>
    </div>
    <div v-if=" comment.kids" v-show="showReply">
      <div v-for="kid in comment.kids">
        <CommentV1 :commentId="kid" />
      </div>
    </div>
  </div>
  <div v-else>
    <span class="loading loading-spinner loading-sm"></span>
  </div>
  <!--
    <div v-if="comment" id="comment-root">
      <div v-if="comment" class="comment-html" v-html="comment.text"></div>
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
    -->
</template>
<style scoped>
/*
.innerComment{
  margin:20px;
  padding-bottom: 3px;
  border-top: 1px solid rgb(201,203,204);
  padding-top:8px;
}
*/
</style>
