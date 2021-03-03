<template>
  <div >
    
    <Header ></Header>
    <div class="background" >
      
      <div style="transform: translateY(150px);">
        <div class="profile-tab">       
          <router-link to="/profile"><button v-on:click="activetab=1" v-bind:class="[ activetab === 1 ? 'active' : '' ]">ข้อมูลส่วนตัว</button></router-link>
          <router-link to="/profile/like"><button v-on:click="activetab=2" v-bind:class="[ activetab === 2 ? 'active' : '' ]">ถูกใจ</button></router-link>  
        </div>
        <div class="container-mainview" v-if="activetab === 1">
        </div>
        <div class="container-mainview" >
          <Like></Like>
        </div>
      </div>
      <div class="background2">

      </div>
    </div>
    
    
    <About ></About>
  </div>
</template>

<script>
import Header from "@/components/home/Head.vue";
import Like from "@/components/profile/Like.vue";
import About from "@/components/home/About.vue";
export default {
  components: {
    Header,
    Like,
    About, 
  },
  data() {
    return {
      activetab: 2,
    }
  },
};
</script>

<style scoped>
.background2{
  background: #f8f6e7; 
  min-width: 900px;
  height: 150px;
}
.background{
  background: #f8f6e7; 
  min-width: 900px;
  position: relative;
  height: max-content;
}
.container-mainview{
  border: 1px solid silver;
  position: relative;
  width: 70%;
  height: max-content;
  max-height: 1000px;
  min-width: 900px;
  margin:auto;
  margin-bottom: 5%;
  background: white;
  transition: 0.5s ease-in;
  overflow: auto;
}
.profile-tab{
  width: 70%;
  min-width: 900px;
  border-radius: 15px;
  height: 50px;
  margin: auto;
  position: relative;

}
.profile-tab button{
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
