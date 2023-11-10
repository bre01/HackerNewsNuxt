<script>
    export default{
        data(){
           hey:null; 
        }
    }
</script>
<template>
    <nav id="navbar">
        <ul >
           <NuxtLink to="/"><li>HackerNuxt</li> </NuxtLink>
           <NuxtLink to="/New"><li>New</li> </NuxtLink>
           <NuxtLink to="/ask"><li>Ask Hackers</li></NuxtLink>
            <NuxtLink to="/"><li>Best</li></NuxtLink>
            <NuxtLink to="show"><li>Show Hackers</li></NuxtLink>
        </ul>
    </nav> 
</template>
<style scoped>
#navbar{
    font-size:20px;
    font-family:'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantrell, "Open Sans", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    position: sticky;
    background-color:white ;
    margin: 0px;
    top:0px;
    padding-top:20px;
    padding-bottom: 20px;
    border-bottom-width: 1px ;
    border-bottom-style: solid;
    border-bottom-color: rgb(241,243,244);
}
#navbar li{
    text-align: center;
    padding:10px;
   flex-grow:1;
   flex-shrink: 1;
   border-radius: 10px;
    flex-basis: 200px;
    color: rgb(36, 41, 47);
    text-decoration: none;
}
#navbar a{
    text-decoration: none; 

}
ul{
   display: flex;   
   margin: 0px ;
   
   list-style: none;
   column-gap:20px;
}
</style>

