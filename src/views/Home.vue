<template>
  <div class="background-search">
    <Head></Head>
    <!-- <Photo_slide></Photo_slide> -->
    <Search></Search>
    <Recommened id="homeR"></Recommened>
    <!-- <New></New> -->
    <Filter2 ></Filter2>
    <About ></About>
    
    
    
    
  </div>
</template>

<script>
// @ is an alias to /src

import Head from "@/components/home/Head.vue";
// import Photo_slide from "@/components/home/Photo-Slide.vue";
import Recommened from "@/components/home/Recommened.vue";
import Search from "@/components/home/Search.vue";
// import New from "@/components/home/New.vue";
import About from "@/components/home/About.vue";
import Filter2 from "@/components/home/Filter2.vue";

export default {
  name: "Home",
  components: {
    Head,
    // Photo_slide,
    Recommened,
    Search,
    // New,
    About,
    
    Filter2,
  
  },
  mounted() {
    window.scrollTo(0, 0);
    window.addEventListener("scroll", function() {
      if (document.scrollingElement.scrollTop >= 100) {
        document.getElementById("Head").style ="background: #ECD59F;  height: 80px; border-bottom-left-radius: 15px; ";
        

        document.getElementById("Head-above").style = "margin-right: 2.0%; ";



      } else {
        
        document.getElementById("Head").style = "height: 100px; background: #ECD59F;";
        document.getElementById("Head-above").style = "margin-right: 2.5%;";


      }
    });
  }
};
</script>
<style>

.background-search {
  background: white;
}

</style>
