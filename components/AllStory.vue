


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
    <div class="grid-container">  
        <div class="all-story" v-for="id in displaystories">
            <StoryDetail :id="id" />
        </div>
    </div>

</div>
</template>
<style scoped>
.all-story{
    border-bottom: 1px solid #e5e5e5; 
    margin-left: 80px;
    grid-column:1/4;
}

.grid-container{
    display: grid;
    grid-template-columns: repeat(4,1fr);

}
</style>