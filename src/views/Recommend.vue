<template>
  <div class="con">
    <Header ></Header>
    <Head></Head>
    <Body2></Body2>
  </div>
</template>

<script>
import Head from "@/components/recommend/Head.vue";
import Body2 from "@/components/recommend/Body2.vue";
import Header from "@/components/home/Head.vue";

export default {
  components: {
    Head,
    Body2,
    Header
  },
  mounted() {
    

    window.scrollTo(0, 0);
    window.addEventListener("scroll", function() {
      if (document.scrollingElement.scrollTop >= 100) {
        document.getElementById("Head").style ="background: #ECD59F; height: 80px; border-bottom-left-radius: 15px; border-bottom-right-radius: 15px;";
        document.getElementById("Head-logo").style = "font-size: 36px;";
        document.getElementById("Head-login").style = "margin-top: 1.5%;";
        console.log("150");
      } else {
        document.getElementById("Head").style ="background: #ECD59F; height: 100px;";
        document.getElementById("Head-logo").style = "font-size: 50px;";
        document.getElementById("Head-login").style = "margin-top: 2%;";
        console.log("100");
      }
    });
  }
};
</script>

<style>
.con {
  height: 100%;
  width: 100%;
}
</style>
