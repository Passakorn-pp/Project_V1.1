<template>
<div>
    <div class="carousel-recommend-head" >
       <h4>แนะนำผู้ใช้ที่สนใจ</h4> 
    </div>
    <div style="width:75%; border: 1px solid silver; margin: auto; background: white;">
        <div style=" width:100%;">
            <flickity ref="flickity2" :options="flickityOptions">
                <div class="flip-card" style="width:100%;  background: rgb(252, 243, 207);" >
                  <img src="@/assets/user.png" alt="Avatar" style="width:150px;height:150px; float:left; margin-left:10%">
                  <div style=" justify-content: center; padding: 25px 20%; ">
                    <h5>ผู้ใช้ทั่วไปเข้ามาชมหอพัก {{data.NoUser.length}} คน</h5>
                    <h5>ผู้ใช้ที่เป็นสมาชิกเข้ามาชมหอพัก {{data.User.length}} คน</h5>
                  </div>
                </div>
                <div  div class="carousel-recommend" v-for="(user,index) in peple" :key="index" >
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img src="@/assets/peple5.png" alt="Avatar" style="width:150px;height:150px;">
                            </div>
                            <div class="flip-card-back">
                                <!-- <h5>{{user.name}}</h5> -->
                                <h5 style="margin-top:20%">{{user.datauser[0].faculty}}</h5>
                                <h5>เพศ {{user.datauser[0].gender}}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </flickity>
        </div>
    </div>
    
  <div class="recommend">
      <div class="report">
          <h5 style="float: left; width: 50%;">จำนวนคนเข้ามาดูหอทั้งหมด {{data.NoUser.length+data.User.length}} คน</h5>
          <div style="width: 30%; float: right;">
              <b-form-rating v-model="home.star" readonly no-border variant="warning" style="background: none; "></b-form-rating>
          </div>
          <h5 style="float: left; width: 50%;">จำนวนคนกดถูกใจ {{this.like.length}} คน </h5>
          
      </div>
      <!-- <div style="margin: auto; ">
              <b-button  style="width: 80%; background: #e4c785;">
                ความคิดเห็นล่าสุด
                
                <b-badge variant="light">9 <span class="sr-only">unread messages</span></b-badge>
              </b-button>
              
        </div> -->
  </div>
</div>
  
</template>

<script>
import Axios from "axios";
let mongo_api = "/api/gethistory/";
let getlike_api = "/api/GetMormitoryLike/";

import Flickity from 'vue-flickity';
export default {
  components: {
    Flickity,
  },
  props: [
    'room'
  ],
  data() {
    return {
      home :  this.room,
      data : null,
      like : null,
      flickityOptions: {
        pageDots: false,
        wrapAround: false,
        draggable: false,
        prevNextButtons: true,
        
        // any options from Flickity can be used
      },
      peple:[
          {
              name:"A",
              faculty:"วิทยาศาสตร์",
              sex:"ชาย"
          },
          {
              name:"B",
              faculty:"ศึกษาศาสตร์",
              sex:"ชาย"
          },
          {
              name:"C",
              faculty:"วิทยาศาสตร์",
              sex:"ชาย"
          },
          {
              name:"D",
              faculty:"วิศวกรรมศาสตร์",
              sex:"หญิง"
          },
          {
              name:"E",
              faculty:"เภสัชศาสตร์",
              sex:"หญิง"
          }
          
      ]
        
    }
  },
  created(){
    Axios.post(this.$store.getters.getApi+mongo_api,{"name" : this.$route.params.Name})
        .then(res => {
          this.data = res.data
          this.peple = this.data.User
          console.log(this.peple);
        })
        .catch(err => alert(err));
    Axios.post(this.$store.getters.getApi+getlike_api,{"name" : this.$route.params.Name})
        .then(res => {
          this.like = res.data
        })
        .catch(err => alert(err));
  }
}
</script>

<style scoped>
.flip-card {
  background-color: transparent;
  width: 150px;
  height: 150px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-front {
  background-color: #bbb;
  color: black;
}

.flip-card-back {
  background-color: #f8f6e7;
  color: black;
  transform: rotateY(180deg);
}
.report{
    width: 100%;
    height: 100px;
    text-align: left;
    padding: 2%;
}
.carousel-recommend-head{
  
  width:75%; 
  padding:1%;
  text-align: center;
  background: #ECD59F;
  margin:auto;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border: 1px solid silver;
  margin-top: 2%;
}
.img-recommend{
  height: 400px;
  width: 100%;
}
.carousel-recommend{
  width: 150px;
  height: 150px;
  color: black;
  position: relative;
  float: left;
  margin-right: 15px;
  background: aquamarine;
}
.recommend{
    border: 1px solid silver;
    border-radius: 15px;
    margin: 3% auto;
    height: 100px;
    width: 70%;
}
</style>