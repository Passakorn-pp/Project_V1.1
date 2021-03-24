<template>
<div style="background: #f8f6e7;">
  <Header ></Header>
  <div class="container-mainview" id="c-main">
    
    <Head :room="this.room"></Head>
    <Photo></Photo>

    <Table :room="this.room"></Table>

    <Body :room="this.room"></Body>

    <Comment :room="this.room"></Comment>

  </div >
  
  <!-- <button class="button-tap" id="button-tap" @click="tap(!check)"  >หอพักใกล้เคียง</button>
  <button class="button-tap" id="button-tap2" style="top: 55%;" @click="tap(!check)">หอพักแนะนำ</button> -->
  <!-- <div class="container-tapview" id="c-tap">
    <RecommenTap></RecommenTap>
  </div> -->
  <About></About>
</div>
  
</template>

<script>
import Table from "@/components/view/Table.vue";
import Head from "@/components/view/Head.vue";
import Body from "@/components/view/Body.vue";
import Photo from "@/components/view/Photo.vue";
import Header from "@/components/home/Head.vue";
import Comment from "@/components/view/Comment.vue";
// import RecommenTap from '../components/view/RecommenTap.vue';
import About from "@/components/home/About.vue";
import Axios from "axios";
let mongo_api = "/api/DormitoryClick/";
export default {
  data() {
    return {
      name: "palm",
      allimg:null,
      check: true,
      room: null
    };
  },
  components: {
    Photo,
    Header,
    Body,
    Table,
    Head,
    Comment,
    // RecommenTap,
    About,
  },
  // methods:{
  //   tap(c){
  //     this.check = !this.check
  //     console.log(this.check)
  //     if(c==false){
  //       document.getElementById("c-main").style = "transform: translateX(-400px) ",
  //       document.getElementById("c-tap").style = "transform: translateX(-50px) ",
  //       document.getElementById("button-tap").style = "transform: translateX(-570px) "
  //       document.getElementById("button-tap2").style = "transform: translateX(-570px); top:50%"
  //     }
  //     else{
  //       document.getElementById("c-main").style = "transform: translateX(0px) ",
  //       document.getElementById("c-tap").style = "transform: translateX(700px) ",
  //       document.getElementById("button-tap").style = "transform: translateX(0px); transform: rotate(90deg); "
  //       document.getElementById("button-tap2").style = "transform: translateX(0px); top:55%; transform: rotate(90deg);"
  //     }
      
  //   }
  // },
  // methods:{
  //   async fetchFood() {
  //     await this.$store.dispatch("fetchFood");

  //   },
  // },
  async created(){
    await Axios.post(this.$store.getters.getApi+mongo_api,{"name" : this.$route.params.Name})
        .then(res => {
          console.log(res.data);
          this.room = res.data.dormitory[0]
        })
        .catch(err => alert(err));
  },
  mounted() {
    window.scrollTo({top:0, left:0, behavior: 'smooth'})
    // window.addEventListener("scroll", function() {
    //   if (document.scrollingElement.scrollTop >= 100) {
    //     document.getElementById("Head").style ="background: #ECD59F; height: 80px; border-bottom-left-radius: 15px; border-bottom-right-radius: 15px;";

    //   } else {
    //     document.getElementById("Head").style = "background: #ECD59F; height: 100px;";

    //   }
    // });
  },

};
</script>

<style scoped>
.container-tapview{
  z-index: 14;
  width: 35%;
  border: 1px solid black;
  transition: 0.5s ease-in;
  border-radius: 15px;
  background: #fceecd;
  position: fixed;
  right: 0;
  top:15%;
  height: 80%;

  transform: translateX(700px);
  overflow: auto;
  
}
.container-mainview{
  border: 1px solid silver;
  width: 70%;
  min-width: 1050px;
  margin: auto;
  margin-top:5%;
  transition: 0.5s ease-in;
  background: white;

}
.button-tap{
  z-index: 15;
  background: #e4be65;
  transform: rotate(90deg);
  top: 30%;
  right: 0;
  position: fixed;
  width: 10%;
  height: 10%;
  border-radius: 15px;
  border: none;
  color: white;
  transition: 0.5s ease-in;
  outline: none;
}
.button-tap:focus{
  background: tomato;
}
</style>
