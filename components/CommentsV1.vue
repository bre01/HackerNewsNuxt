<template>
  <div class="comment-thread">
    <CommentV1 v-for="commentId in commentIds" :commentId="commentId">

    </CommentV1>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps({
  commentIds: Array<Number>,
});
</script>
<style></style>

