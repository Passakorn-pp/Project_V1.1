<template>
    <div>
        <Header ></Header>
        <div class="register3">
            <div class="container-home-register3">
                <RegisterDormitory></RegisterDormitory>
            </div>
        </div>
        <About ></About>
    </div>
</template>

<script>
import About from "@/components/home/About.vue";
import Header from "@/components/home/Head.vue";
import RegisterDormitory from "@/components/register/RegisterDormitory.vue";
export default {
    components: {
        RegisterDormitory,
        Header,
        About,
    },
    mounted() {
        window.addEventListener("scroll", function() {
        if (document.scrollingElement.scrollTop >= 80) {
            document.getElementById("Head").style ="background: #ECD59F; height: 80px; border-bottom-left-radius: 15px; border-bottom-right-radius: 15px;";

        } else {
            document.getElementById("Head").style = "background: #ECD59F; height: 100px;";

        }
        });
    }
}
</script>

<style>
.container-home-register3 {
  width: 60%;
  height: 800px;
  min-width: 800px;
  border: 1px solid silver;
  padding: 5%;
  margin: auto;
  position: relative;
  transform:  translateY(120px);
  /* background: rgb(235, 235, 233); */
  /* background: #fceecd; */
  overflow: auto;
  background: white;
}
.register3 {
  /* background: #fceecd; */
  background: rgb(235, 235, 233);
  height: 1000px;
}
</style>