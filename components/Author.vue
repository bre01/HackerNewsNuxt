<template>
      <NuxtLink :to="`user/${author}`">
    <div class="comment-author">{{ author }}</div>
      </NuxtLink>
</template>
<script lang="ts" setup>
const props = defineProps({
  author: String,
});
</script>
<style scoped>
</style>
