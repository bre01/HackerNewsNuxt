<template>
    <input type="radio" name="my-accordion-4" :checked="showReply" />
    <div class="collapse-title text-xl font-medium">
      <div v-if="comment" v-html="comment.text"></div>
      <div>
        {{ Math.round(showTime.hour) }} hours
        {{ showTime.min.toString().slice(0, 2) }} mins ago
      </div>
      <button
        @click="toggle"
        class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
        v-show="comment.kids"
      >
        show {{ comment.kids ? comment.kids.length : 0 }} replies
      </button>
    </div>
</template>
<script lang="ts" setup>
import {Comment} from 
const props=defineProps({
    comment:Number
})
</script>
