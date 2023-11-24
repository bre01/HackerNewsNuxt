<template>
  <div class="join join-vertical w-full">
    <div v-for="commentId in commentIds">
          <CommentV1 :id="commentId"></CommentV1>
          
    </div>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps({
  commentIds: Array<Number>,
});
</script>
