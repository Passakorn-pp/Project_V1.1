<template>
  <div>
    <Header style=" backgroundColor :khaki;"></Header>
    <Head></Head>
    <Photo></Photo>

    <Table></Table>

    <Body></Body>

    <Comment></Comment>
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
        document.getElementById("Head").style =
          "background: khaki; height: 80px; border-bottom-left-radius: 15px; border-bottom-right-radius: 15px;";
        document.getElementById("Head-logo").style = "font-size: 36px;";
        document.getElementById("Head-login").style = "margin-top: 1.5%;";
        console.log("150");
      } else {
        document.getElementById("Head").style =
          "background: khaki; height: 100px;";
        document.getElementById("Head-logo").style = "font-size: 50px;";
        document.getElementById("Head-login").style = "margin-top: 2%;";
        console.log("100");
      }
    });
  }
};
</script>

<style></style>
