<template>
  <div>
    <Header ></Header>
    <div class="profile-tab">       
      <button v-on:click="activetab=1" v-bind:class="[ activetab === 1 ? 'active' : '' ]">ข้อมูลส่วนตัว</button>
      <button v-on:click="activetab=2" v-bind:class="[ activetab === 2 ? 'active' : '' ]">ถูกใจ</button>         
    </div>
    <div class="container-mainview" v-if="activetab === 1">
      <Moregister></Moregister>
    </div>
    <div class="container-mainview" v-if="activetab === 2">
      <Like></Like>
    </div>
    <About></About>
  </div>
</template>

<script>
import Header from "@/components/home/Head.vue";
import Moregister from "@/components/profile/Moregister.vue";
import Like from "@/components/profile/Like.vue";
import About from "@/components/home/About.vue";
export default {
  components: {
    Header,
    Moregister,
    Like,
    About, 
  },
  data() {
    return {
      activetab: 1,
    }
  },
};
</script>

<style scoped>
.container-mainview{
  border: 1px solid silver;
  width: 70%;
  margin:auto;
  
  transition: 0.5s ease-in;
 
}
.profile-tab{
  width: 70%;
  
  height: 50px;
  margin: auto;
  margin-top:10%;
  position: relative;

}
.profile-tab button{
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
.profile-tab button.active{
  outline: none;
  background: tomato;
  border-bottom: none;
  height: 100%;
  top: 0;

}
.profile-tab button:focus{
  outline: none;
}
</style>
