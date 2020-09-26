<template>
  <div class="background-search">
    <Head></Head>
    <!-- <Photo_slide></Photo_slide> -->
    <Search></Search>
    <Recommened ></Recommened>
    <!-- <New></New> -->
    <Filter2 ></Filter2>
    <About></About>
    
    
    
    
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

    window.addEventListener("scroll", function() {
      if (document.scrollingElement.scrollTop >= 100) {
        document.getElementById("Head").style =
          "background: white;  height: 80px; border-bottom-left-radius: 15px; ";
        document.getElementById("Head-logo").style =
          "font-size: 36px; color: #F6C026;";
        document.getElementById("Head-login").style = "margin-top: 1.5%; ";
        document.getElementById("Head-above").style = "margin-right: 2.0%; ";
        document.getElementById("search-head-img").style =
          "height: 40px; width: 40px;";

        let x = document.getElementsByClassName("text-above");
        let i;
        for (i = 0; i < x.length; i++) {
          x[i].style = "color: #F6C026;";
        }
        console.log("150");
      } else {
        document.getElementById("search-head-img").style =
          "height: 50px; width: 50px;";
        document.getElementById("Head").style = "height: 100px;";
        document.getElementById("Head-logo").style = "font-size: 50px;";
        document.getElementById("Head-login").style = "margin-top: 2%;";
        document.getElementById("Head-above").style = "margin-right: 2.5%;";
        document.getElementsByClassName("text-above").style = "color: black;";

        let x = document.getElementsByClassName("text-above");
        let i;
        for (i = 0; i < x.length; i++) {
          x[i].style = "color: black;";
        }
        console.log("100");
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
