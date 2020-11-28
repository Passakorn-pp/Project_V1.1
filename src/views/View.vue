<template>
<div>
  <Header ></Header>
  <div class="container-mainview">
    
    <Head></Head>
    <Photo></Photo>

    <Table></Table>

    <Body></Body>

    <Comment></Comment>
  </div>
</div>
  
</template>

<script>
import Table from "@/components/view/Table.vue";
import Head from "@/components/view/Head.vue";
import Body from "@/components/view/Body.vue";
import Photo from "@/components/view/Photo.vue";
import Header from "@/components/home/Head.vue";
import Comment from "@/components/view/Comment.vue";

export default {
  data() {
    return {
      name: "palm"
    };
  },
  components: {
    Photo,
    Header,
    Body,
    Table,
    Head,
    Comment
  },
  
  mounted() {
    window.scrollTo(0, 0);
    window.addEventListener("scroll", function() {
      if (document.scrollingElement.scrollTop >= 100) {
        document.getElementById("Head").style ="background: #ECD59F; height: 80px; border-bottom-left-radius: 15px; border-bottom-right-radius: 15px;";

        console.log("150");
      } else {
        document.getElementById("Head").style = "background: #ECD59F; height: 100px;";

        console.log("100");
      }
    });
  },
  beforeDestroy(){
    this.$store.dispatch("addView",this.$store.getters.getView_home);

  }
};
</script>

<style>
.container-mainview{
  border: 1px solid black;
  width: 70%;
  margin: 10% auto;
}
</style>
