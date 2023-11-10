<script>
    export default{
        data(){
           hey:null; 
        }
    }
</script>
<template>
    <nav id="navbar">
        <ul>
           <li>HackerNuxt</li> 
           <li>Newest</li>
            <li>Hotest</li>
            <li>Editor choice</li>
        </ul>
    </nav> 
</template>
<style scoped>
#navbar{
    position: sticky;
    background-color: brown;
    margin: 0px;
    top:0px;

}
#navbar ul li{
    flex-basis: 200px;
    border:2px solid green;
    text-align: center;
    padding:10px;
   flex-grow:1;
   border-radius: 10px;
}
ul{
   display: flex;   
   margin: 0px;
   list-style: none;
}
</style>

