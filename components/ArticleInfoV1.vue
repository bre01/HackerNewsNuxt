<template>
    <!--
    <div class=" "style="text-align: center;">
    -->
    <div style="position: relative;">
    <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-200"
        style="width:50%; margin:auto; text-align: center;">
        <div class="collapse-title text-xl font-medium">
            <a class="title" :href="story.url">
                <h1>{{ story.title }}</h1>
            </a>
        </div>
        <div class="collapse-content">
            <div id="time " class="container">
                <a :href="story.url" class="domain">www.{{ domain }}</a>
            </div>
            <Time id="source-time" :time="story.time"></Time>
        </div>
    </div>
   <div style="text-align: right; right: 20px;">
    <div class="stats shadow" >
        <div class="stat place-items-center">
            <div class="stat-title">Replies</div>
            <div class="stat-value">{{ story.kids.length }}</div>
            <div class="stat-desc">From January 1st to February 1st</div>
        </div>

        <div class="stat place-items-center">
            <div class="stat-title">Vote</div>
            <div class="stat-value text-secondary">{{ story.score }}</div>
            <div class="stat-desc text-secondary">↗︎ 40 (2%)</div>
        </div>

    </div>
    </div>
    </div>
    <!--
    <div class="hero min-h-screen" id=" image-container"
      >
      <div class="hero-overlay bg-opacity-60"></div>
      <div class="hero-content text-center text-neutral-content">
        <div class="max-w-md">
          <h1 class="mb-5 text-5xl font-bold">{{ story.title }}</h1>
          <p class="mb-5">www.{{ domain }}</p>
<a :href="story.url">
          <button class="btn btn-primary">Go to news page</button>
          </a>
        </div>
      </div>
    -->
</template>
<script lang="ts" setup>
const props = defineProps({
    story: {
        type: Object as PropType<Story>,
        required: true
    }
})
fetch(props.story.url) // Replace with the actual news link
    .then(response => response.text())
    .then(data => {
        // Create a temporary div to hold the HTML content of the fetched page
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = data;

        // Get all images from the fetched content
        const images = tempDiv.querySelectorAll('img');

        // Find the largest image
        let largestImage = null;
        let largestSize = 0;
        images.forEach(image => {
            const size = image.width * image.height;
            if (size > largestSize) {
                largestSize = size;
                largestImage = image.src;
            }
        });

        // Set the background image of the container
        if (largestImage) {
            const imageContainer = document.getElementById('image-container');
            imageContainer.style.backgroundImage = `url(${props.story.url}${largestImage})`;

        }
    })
    .catch(error => console.error('Error fetching news:', error));









import type Story from "../Interfaces/Story.ts";

console.log(props.story);
const domain = computed(() => {
    return (new URL(props.story.url)).hostname;
})





</script>

