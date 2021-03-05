<template>
  <div >
    <div >
      <Header ></Header>
      <div class="container-main-recommend">
        <Body2></Body2>
      </div>
      
      <!-- <Add></Add> -->
      <Sell></Sell>
      
    </div>
    
  </div>
  
</template>

<script>
import Body2 from "@/components/recommend/Body2 copy.vue";
import Header from "@/components/home/Head.vue";
// import Add from "@/components/recommend/Add.vue";
import Sell from "@/components/recommend/Sell.vue";

export default {
  data() {
    return{
    };
  },
  components: {
    Body2,
    Header,
    // Add,
    Sell,
  },
  mounted() {
    window.scrollTo(0, 0);
    window.addEventListener("scroll", function() {
      if (document.scrollingElement.scrollTop >= 100) {
        document.getElementById("Head").style ="background: #ECD59F; height: 80px; border-bottom-left-radius: 15px; border-bottom-right-radius: 15px;";

      } else {
        document.getElementById("Head").style ="background: #ECD59F; height: 100px;";

      }
    });

  },
  
};
</script>

<style scoped>

</style>
