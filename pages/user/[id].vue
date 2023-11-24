<script lang="ts" setup>
import type User from "../../Interfaces/User.ts";

const route = useRoute();
const user=ref();
fetch(
  `https://hacker-news.firebaseio.com/v0/user/${route.params.id}.json?print=pretty`
).then(
   (res) =>res.json()
).then(
   (data:User)=>
   {
        user.value=data;
       console.log(data);}
)
</script>
<template>
    <div v-if="user">
    <h1>
       {{ route.params.id }} 
    </h1>
    <h2>
        {{ user.created}}
    </h2> 
    </div>
    <div v-else>
        <h1>loading</h1>
    </div>
</template>