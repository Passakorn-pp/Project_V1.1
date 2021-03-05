<template>
  <div >
      <Header ></Header>
      <div class="r_myhor">
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <div >
        <div class="myhor-tab">
                
            <button v-on:click="activetab=1" v-bind:class="[ activetab === 1 ? 'active' : '' ]">หอพักของฉัน</button>
            <button v-on:click="activetab=2" v-bind:class="[ activetab === 2 ? 'active' : '' ]">แก้ไขข้อมูล</button>
            <button v-on:click="activetab=3" v-bind:class="[ activetab === 3 ? 'active' : '' ]" style="width:15%">การเข้าชมหอพัก</button>
        </div>
        <div class="container-mainview" v-if="activetab === 1">
            <Head :room="this.room"></Head>
            <Photo :room="this.room"></Photo>

            <Table :room="this.room"></Table>

            <Body :room="this.room"></Body>

            <Comment :room="this.room"></Comment>
        </div>
        <div class="container-mainview" v-if="activetab === 2">
            <Mohor :room="this.room"></Mohor>
        </div>
        <div class="container-mainview" v-if="activetab === 3">
            <Recommend :room="this.room"></Recommend>
        </div>
      </div>
      <br>
      <br>
      <br>
      <br>
      <br>
      </div>
    <About></About>
  </div>
</template>

<script>
import Table from "@/components/view/Table.vue";
import Head from "@/components/view/Head.vue";
import Body from "@/components/view/Body.vue";
import Photo from "@/components/view/Photo.vue";
import Comment from "@/components/view/Comment.vue";
import Header from "@/components/home/Head.vue";
import Mohor from "@/components/myhome/Mohor.vue";
import Recommend from "@/components/myhome/Recommend.vue";
import About from "@/components/home/About.vue";
import Axios from "axios";
let mongo_api = "http://127.0.0.1:8000/api/getuser";
export default {
    components: {
    Photo,
    Body,
    Table,
    Head,
    Comment,
    Header,
    Mohor,
    About,
    Recommend,
  },
  data() {
      return {
          activetab: 1,
          room:null
      }
  },
  async created(){
    await Axios.post(mongo_api,{"name" : "หอพักอนงค์"})
        .then(res => {
          this.room = res.data[0]
          console.log(this.room);
        })
        .catch(err => alert(err));
  },

}
</script>

<style scoped>
.r_myhor{
  background: #f8f6e7;
  height: 100%;
}
.container-mainview{
  border: 1px solid silver;
  width: 70%;
  min-width: 1050px;
  margin:auto;
  background: white;
  transition: 0.5s ease-in;
}
.myhor-tab{
  width: 70%;
  min-width: 1050px;
  height: 50px;
  margin: auto;
  position: relative;

}
.myhor-tab button{
  width: 15%;
  height: 70%;
  float: left;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background: #e4c785;
  color: white;
  border: 1px solid silver;
  margin-right: 0.5px;
  position: relative;
  top: 30%;
  transition: 0.3s ease-in;
}
.myhor-tab button.active{
  outline: none;
  background: tomato;
  border-bottom: none;
  height: 100%;
  top: 0;

}
.myhor-tab button:focus{
  outline: none;
}
</style>