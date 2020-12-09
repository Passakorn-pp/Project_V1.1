<template>
  <div class="register">
    <Header ></Header>
    <div class="container-home-register">
      <Register_login></Register_login>
    </div>
    <About style="transform: translateY(150px);"></About>
  </div>
</template>

<script>
import Register_login from "@/components/register/Register_login.vue";
import Header from "@/components/home/Head.vue";
import About from "@/components/home/About.vue";
export default {
  components: {
    Register_login,
    Header,
    About,
  },
  mounted() {
    window.addEventListener("scroll", function() {
      if (document.scrollingElement.scrollTop >= 80) {
        document.getElementById("Head").style ="background: #ECD59F; height: 80px; border-bottom-left-radius: 15px; border-bottom-right-radius: 15px;";

        console.log("150");
      } else {
        document.getElementById("Head").style = "background: #ECD59F; height: 100px;";

        console.log("100");
      }
    });
  }
};
</script>

<style>
.container-home-register {
  width: 60%;
  height: 600px;
  border-radius: 15px;
  border: 1px solid silver;
  padding: 5%;
  margin: auto;
  position: relative;
  top: 60%;
  overflow: hidden;
  transform: translateY(150px);
  margin-bottom: 5%;
  background: rgb(235, 235, 233);
}
.register {
  background: #fceecd;
}
</style>
