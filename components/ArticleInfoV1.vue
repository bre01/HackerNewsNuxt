<template>
       <a class="title" :href="story.url">
      <h3>{{ story.title }}</h3>
    </a>
    <div id="time " class="container">
      <a :href="story.url" class="domain">www.{{ domain }}</a>
    </div>
    <Time id="source-time" :time="story.time"></Time>
</template>
<script lang="ts" setup>
import { type Story} from "../pages/[id].vue"

const props=defineProps({
    story:{
        type:Object as PropType<Story>,
        required:true
    }
}) 
console.log(props.story);
const domain=computed(()=>{
    return (new URL(props.story.url)).hostname;
})





</script>

