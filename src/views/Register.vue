<template>
    <div>
        <!-- <Header ></Header> -->
        <div class="register2">
            <div class="container-home-register2">
                <div class="outpage" @click="Logout()">x</div>
                <Register></Register>
            </div>
        </div>
        <About ></About>
    </div>
</template>

<script>
import About from "@/components/home/About.vue";
// import Header from "@/components/home/Head.vue";
import Register from "@/components/register/Register.vue";
export default {
    components: {
        Register,
        // Header,
        About,
    },
    methods:{
        Logout(){
            const liff = this.$liff
            liff.logout()
            this.$router.push('/')
        }
    },
    mounted() {
        // window.addEventListener("scroll", function() {
        // if (document.scrollingElement.scrollTop >= 80) {
        //     document.getElementById("Head").style ="background: #ECD59F; height: 80px; border-bottom-left-radius: 15px; border-bottom-right-radius: 15px;";

        // } else {
        //     document.getElementById("Head").style = "background: #ECD59F; height: 100px;";

        // }
        // });
    }
}
</script>

<style>
.outpage{
    position: absolute;
    color: red;
    right: 0;
    top: 0;
    font-size: 30px;
    cursor: pointer;
    font-weight: 700;
    padding: 10px 30px;
}
.container-home-register2 {
  width: 60%;
  height: 450px;
  min-width: 800px;
  border-radius: 15px;
  border: 1px solid silver;
  padding: 5%;
  margin: auto;
  position: relative;
  transform:  translateY(100px);
  overflow: hidden;
  /* background: rgb(235, 235, 233); */
  /* background: #fceecd; */

  background: white;
}
.register2 {
  /* background: #fceecd; */
  background: rgb(235, 235, 233);
  height: 600px;
}
</style>