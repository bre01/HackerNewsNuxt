<template>
    <ul v-for="commentId in commentIds">
      <li>
        <CommentV1 :id="commentId"></CommentV1>
        <br />
      </li>
    </ul>
</template>
<script lang="ts" setup>
const props = defineProps({
    commentIds: Array<Number>
})



</script>