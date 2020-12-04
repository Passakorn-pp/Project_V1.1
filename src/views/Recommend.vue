<template>
  <div class="con">
    <Header ></Header>
    <Head></Head>
    <Body2></Body2>
    <Add></Add>
    <Sell></Sell>
  </div>
  
</template>

<script>
import Head from "@/components/recommend/Head.vue";
import Body2 from "@/components/recommend/Body2.vue";
import Header from "@/components/home/Head.vue";
import Add from "@/components/recommend/Add.vue";
import Sell from "@/components/recommend/Sell.vue";
export default {
  components: {
    Head,
    Body2,
    Header,
    Add,
    Sell
  },
  mounted() {
    

    window.scrollTo(0, 0);
    window.addEventListener("scroll", function() {
      if (document.scrollingElement.scrollTop >= 100) {
        document.getElementById("Head").style ="background: #ECD59F; height: 80px; border-bottom-left-radius: 15px; border-bottom-right-radius: 15px;";

        console.log("150");
      } else {
        document.getElementById("Head").style ="background: #ECD59F; height: 100px;";

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
  outline: none;
}
</style>
