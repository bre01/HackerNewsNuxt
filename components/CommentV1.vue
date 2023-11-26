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
  <div v-if="comment" class="comment" :id="commentId">
      <a :href="`#${commentId}`" class="comment-border-link">
      <span class="sr-only">jump to comment {{ commentId }}</span></a>
    <div class="comment-heading" >
      <div class="comment-info">
      <Author :author="comment.by" class="comment-author"/>
      <div class="m-0" style="">
        {{ Math.round(showTime.hour) }} hours
        {{ showTime.min.toString().slice(0, 2) }} mins ago
      </div>
      </div>
    </div>
    <div class="comment-body">
      <div  v-html="comment.text"></div>
      <div v-if="comment.kids">
        <button @click="toggle" class="btn btn-xs sm:btn-sm md:btn-sm lg:btn-sm" v-if="!showReply">
          show {{ comment.kids.length }} replies
        </button>
        <button @click="toggle" class="btn btn-xs sm:btn-sm md:btn-sm lg:btn-sm" v-else>
          hide replies
        </button>
      </div>
    </div>
    <div v-if="comment.kids" class="replies " v-show="showReply" v-for="kid in comment.kids">
      <CommentV1 :commentId="kid" />
    </div>
  </div>
  <div v-else>
    <span class="loading loading-spinner loading-sm"></span>
  </div>
</template>
<style >

/* 
    Body, button, comment-thread, and utilities

    Notes:
        - This section sets some basic styles. You can ignore this part and 
        go directly to the comment styles.
*/





* {
    box-sizing: border-box;
}
body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    line-height: 1.4;
    color: rgba(0, 0, 0, 0.85);
    background-color: #f9f9f9;

}
button {
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    font-size: 14px;
    padding: 4px 8px;
    color: rgba(0, 0, 0, 0.85);
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 4px;
}
button:hover,
button:focus,
button:active {
    cursor: pointer;
    background-color: #ecf0f1;
}
.comment-thread {
    width: 700px;
    max-width: 100%;
    margin: auto;
    padding: 0 30px;
    background-color: #fff;
    border: 1px solid transparent; /* Removes margin collapse */
}
.m-0 {
    margin: 0;
}
.sr-only {
    position: absolute;
    left: -10000px;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
}

/* Comment */

.comment {
    position: relative;
    margin: 20px auto;
}
.comment-heading {
    display: flex;
    align-items: center;
    height: 50px;
    font-size: 14px;
}
.comment-voting {
    width: 20px;
    height: 32px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 4px;
}
.comment-voting button {
    display: block;
    width: 100%;
    height: 50%;
    padding: 0;
    border: 0;
    font-size: 10px;
}
.comment-info {
    color: rgba(0, 0, 0, 0.5);
    margin-left: 10px;
}
.comment-author {
    color: rgba(0, 0, 0, 0.85);
    font-weight: bold;
    text-decoration: none;
}
.comment-author:hover {
    text-decoration: underline;
}
.replies {
    margin-left: 20px;
}

/* Adjustments for the comment border links */

.comment-border-link {
    display: block;
    position: absolute;
    top: 50px;
    left: 0;
    width: 12px;
    height: calc(100% - 50px);
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    background-color: rgba(0, 0, 0, 0.1);
    background-clip: padding-box;
}
.comment-border-link:hover {
    background-color: rgba(0, 0, 0, 0.3);
}
.comment-body {
    padding: 0 20px;
    padding-left: 28px;
}
.replies {
    margin-left: 28px;
}
</style>
