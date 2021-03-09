<template>
  <div >
    <Header ></Header>
    <div class="register">
      <div class="container-home-register">
        <Login></Login>
      </div>
    </div>
    <About ></About>
  </div>
</template>

<script>
import Login from "@/components/register/Login.vue";
import Header from "@/components/home/Head.vue";
import About from "@/components/home/About.vue";
export default {
  components: {
    Login,
    Header,
    About,
  },
  mounted() {
    // window.addEventListener("scroll", function() {
    //   if (document.scrollingElement.scrollTop >= 80) {
    //     document.getElementById("Head").style ="background: #ECD59F; height: 80px; border-bottom-left-radius: 15px; border-bottom-right-radius: 15px;";

    //   } else {
    //     document.getElementById("Head").style = "background: #ECD59F; height: 100px;";

    //   }
    // });
  }
};
</script>

<style>
.container-home-register {
  width: 60%;
  height: 450px;
  min-width: 800px;
  border-radius: 15px;
  border: 1px solid silver;
  margin: auto;
  position: relative;
  transform:  translateY(120px);
  overflow: hidden;
  /* background: rgb(235, 235, 233); */
  /* background: #fceecd; */

  background: white;
}
.register {
  /* background: #fceecd; */
  background: rgb(235, 235, 233);
  height: 600px;
}
</style>
