<script>
export default {
    props: ['id'],
    data() {
        return {
            comment: null,
        }
    },
    mounted() {
        fetch(`https://hacker-news.firebaseio.com/v0/item/${this.id}.json?print=pretty`).then(res => res.json()).then(data=> this.comment=data.text).catch(error=>console.log(error))

    }
}
</script>
<template>
    <div v-html="comment"></div>
</template>
