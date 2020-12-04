<template>
  <div>
      <Header ></Header>
        <div class="myhor-tab">
                
            <button v-on:click="activetab=1" v-bind:class="[ activetab === 1 ? 'active' : '' ]">หอพักของฉัน</button>
            <button v-on:click="activetab=2" v-bind:class="[ activetab === 2 ? 'active' : '' ]">แก้ไขข้อมูล</button>
                
        </div>
    
    <div class="container-mainview" v-if="activetab === 1">
            <Head></Head>
            <Photo></Photo>

            <Table></Table>

            <Body></Body>

            <Comment></Comment> 
    </div>
    <div class="container-mainview" v-if="activetab === 2">
        <Mohor></Mohor>
    </div>
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
export default {
    components: {
    Photo,
    Body,
    Table,
    Head,
    Comment,
    Header,
    Mohor
  },
    data() {
        return {
            activetab: 1,
            
        }
    },
}
</script>

<style scoped>

.container-mainview{
  border: 1px solid silver;
  width: 70%;
  margin:auto;
  
  transition: 0.5s ease-in;
 
}
.myhor-tab{
  width: 70%;
  
  height: 50px;
  margin: auto;
  margin-top:10%;
  position: relative;

}
.myhor-tab button{
  width: 10%;
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