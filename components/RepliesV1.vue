<template>
    <ol>
        <li class="no-number" v-for="kid in commentKidsReplyIds">
            <reply :id="kid"></reply>
        </li>
    </ol>
</template>
<script lang="ts" setup>
const props = defineProps({
    commentId: Number
})

const commentKidsReplyIds = ref([]);
const commentContentHtml = ref(null);
const time = ref(null);
const author = ref(null);


fetch(`https://hacker-news.firebaseio.com/v0/item/${props.commentId}.json?print=pretty`)
    .then(res => res.json())
    .then(res => {
        commentKidsReplyIds.value = res.kids || [];
        //commentContentHtml.value = res.text ;
        //time.value = res.time;
        //author.value = res.by
    })
    .catch(error => console.log(error))



</script>