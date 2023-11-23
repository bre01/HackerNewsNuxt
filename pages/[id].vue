<script lang="ts" setup>
//import Comments from '~/components/Comments.vue';
export interface Story {
  title: string;
  url: string;
  time: number;
  kids: number[];
  score: number;
  descendents: number;
}
const route = useRoute();
console.log(route.params.id);
const domain = ref(null);
const comment = ref(null);
const story = ref();
fetch(
  `https://hacker-news.firebaseio.com/v0/item/${route.params.id}.json?print=pretty`
)
  .then((res) => res.json())
  .then((data: Story) => {
    story.value = data;
  })
  .catch((error) => console.log(error))
  .finally(() => console.log("finally"));





onMounted(() => {

});
</script>
<template>
  <Navbar />
  <div id="Comments-root" v-if="story">
    <ArticleInfoV1 :story="story"></ArticleInfoV1>

    <CommentsV1 :commentIds="story.kids"></CommentsV1>
  </div>
  <div v-else>
    <h1>loading...</h1>
  </div>
</template>

<style scoped>
#source-time {
  font-family: Georgia, "Times New Roman", Times, serif;
  color: grey;
  text-align: right;
  margin-right: 200px;
}

.container {
  display: flex;
}

.title {
  font-family: Georgia, "Times New Roman", Times, serif;
  color: rebeccapurple;
  text-align: center;
  font-size: 30px;
  padding: 20px;
}

#time {
  font-family: Georgia, "Times New Roman", Times, serif;
  text-align: right;
  color: grey;
}

#container {
  display: flex;
}

.domain {
  flex-basis: 200px;
  flex-grow: 1;
  color: orange;
  margin-right: 100px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
}

.time {
  text-align: left;
}

.container a {
  text-align: right;
}

.Comments-root {
  list-style-type: none;
}

ul {
  list-style-type: none;
}
</style>
