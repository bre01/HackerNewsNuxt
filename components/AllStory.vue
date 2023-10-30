


<script >
export default{
    props:['stories'],
    data(){
        return{
            displaystories:null

        }
    },
    mounted(){
        this.displaystories=this.stories.slice(0,10)
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