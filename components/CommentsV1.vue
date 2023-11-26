<template>
  <div class="join join-vertical w-full">
    <div class="comments" v-for="commentId in commentIds">
          <CommentV1 class="comment" :commentId="commentId"></CommentV1>
          
    </div>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps({
  commentIds: Array<Number>,
});
</script>
<style>
.comments{
  display: display;
  grid-template-columns: repeat(4,1fr);
  grid-auto-rows:minmax(100px,auto);
  max-width: 960px;
  margin: 0 auto;
  grid-gap:10px;
  grid-template-areas:
  "comment comment comment comment"
}
@media screen and (min-width: 640px){
  .comments{
    grid-template-columns: repeat(8,1fr);
    grid-template-areas:
    "gap comment comment comment comment comment aside aside"
  }
}
.comment{
  grid-area: comment;
}

</style>

