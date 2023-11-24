<template>
  <h3 class="text-lg">
      <NuxtLink :to="`user/${author}`">
    <span class="badge badge-md">{{ author }}</span>
    </NuxtLink>
  </h3>
</template>
<script lang="ts" setup>
const props = defineProps({
  author: String,
});
</script>
<style scoped>
h3{
    display: inline;
    margin-left:120px;
}
</style>
