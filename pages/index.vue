<script setup>
    const {data}=await useFetch("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty")
</script>

<template>
<div>
    <AllStory :stories="data" />
</div>
</template>

<style>

</style>