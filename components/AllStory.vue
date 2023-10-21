


<script >
export default{
    props:['stories'],
    data(){
        return{
            displaystories:this.stories.slice(0,10)

        }
    },
    mounted(){
        console.log(this.stories)
        console.log(this.displaystories)
    },     
    }
</script>
<template>

<div>
    <div>  
        <div v-for="id in displaystories">
            <StoryDetail :id="id" />
        </div>
    </div>

</div>
</template>