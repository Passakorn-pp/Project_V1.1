<template>
  <div class="register">
    <Header style=" backgroundColor :khaki;"></Header>
    <div class="container-home-register">
      <Register_login></Register_login>
    </div>
  </div>
</template>

<script>
import Register_login from "@/components/register/Register_login.vue";
import Header from "@/components/home/Head.vue";
export default {
  components: {
    Register_login,
    Header
  },
  mounted() {
    window.addEventListener("scroll", function() {
      if (document.scrollingElement.scrollTop >= 80) {
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

<style>
.container-home-register {
  width: 60%;
  height: 600px;
  border-radius: 15px;
  border: 1px solid silver;
  padding: 5%;
  margin: 0;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  margin-bottom: 5%;
  background: rgb(235, 235, 233);
}
.register {
  background-image: url("../assets/13.jpg");
  background-size: cover;
  width: 1550px;
  height: 1000px;
}
</style>
