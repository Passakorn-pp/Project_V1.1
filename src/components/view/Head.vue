<template>
  <div class="cotainer-view-head" id="head-view">
    <div class="cotainer-view-img-head-view">
      <img :src="room.img" class="img-head-view" >
    </div>
    <div class="cotainer-view-detail-head-view">
      <h1 class="text-head-view"> {{room.name}}</h1>
      <h5 style="float: left; text-align: left; line-height: 3;" v-if="room.gender=='man'">( หอพักชาย )</h5>
      <h5 style="float: left; text-align: left; line-height: 3;" v-if="room.gender=='woman'">( หอพักหญิง )</h5>
      <h5 style="float: left; text-align: left; line-height: 3;" v-if="room.gender=='man/woman'">( หอพัก ชาย/หญิง )</h5>
      <div style="width: 30%; float: right; margin-top:2%" > 
      <div v-if="$store.getters.getUserstate == 'User'" >
        <span style="float: right; width: 70%; text-align :left;">{{ status }}</span>
        <b-form-checkbox
          style="float: right; "
          v-model="status"
          value="เพิ่มแล้ว"
          unchecked-value="เพิ่มในรายการที่สนใจ"
          @change="setlike()"
        >
        </b-form-checkbox>
      </div>
      <div v-else style="display:none">
        <span style="float: right; width: 70%; text-align :left;">{{ status }}</span>
          <b-form-checkbox
            style="float: right; "
            v-model="status"
            value="เพิ่มแล้ว"
            unchecked-value="เพิ่มในรายการที่สนใจ"
            @change="setlike()" 
          >
          </b-form-checkbox>
        
      </div>
        
      </div>
      <br>
      <br>
      <br>
      <div v-if="room.room.length>1" style="width: 40%; float: left; text-align: left; margin-top:-1%">
        <h4 >{{"ราคา "+room.room[0].price+"-"+room.room[room.room.length-1].price+" บาท"}}</h4>
      </div>
      <div style="width: 40%; float: left; text-align: left; margin-top:-1%" v-else>
        <h4 >{{"ราคา "+room.room[0].price+" บาท"}}</h4>
      </div>

      <!-- <div style="width: 50%; float: right; margin-right:2%">
        <div v-if="room.wifi" >
          <img src="@/assets/wifi.png"  class="img-icon-view-head" style="float: right; margin-left:15px">
          
        </div >
        <div v-if="this.$store.getters.getView_home.air">
          <img src="@/assets/air-conditioner (1).png" class="img-icon-view-head" style="float: right; margin-left:15px">
          
        </div>
        <div v-if="this.$store.getters.getView_home.fan">
          <img src="@/assets/fan (1).png" class="img-icon-view-head" style="float: right; margin-left:15px">
          
        </div>
        <div v-if="this.$store.getters.getView_home.typeMen">
          <img src="@/assets/man.png" class="img-icon-view-head" style="float: right; margin-left:15px">
          
        </div>
        
        <div v-if="this.$store.getters.getView_home.typeWomen">
          <img src="@/assets/woman.png" class="img-icon-view-head" style="float: right; ">
          
        </div>
        
        
      </div> -->
      <br>
      <br>
      <div style="width: 20%; float: left; margin-top:-3%; margin-left:-2%; " >
        <b-form-rating v-model="room.star" readonly no-border  variant="warning" style="background: none;"></b-form-rating>
        
      </div>
      <div style="width: 20%; float: left; margin-top:-1.7%;" >
        <!-- <img src="@/assets/group.png" style="width:20px; height:20px; float: left; "> -->
        <div style="float: left; margin-top:-1.5%">
          <b-icon icon="person-circle" variant="secondary"></b-icon>
        </div>
        <h6 style="float: left; margin-left:4%; color: rgb(143, 143, 143)">{{room.preper}}</h6>
        
      </div>
      
      <br>
      <br>
      <div style="width: 100%; text-align: left; margin-top:-3%;" >
        <h5 style="width: 15%; float: left; ">ที่อยู่หอพัก </h5>
        <h6 style="width: 85%; float: left; margin-top:0.5%; "> {{room.address}}</h6>
      </div>
      <br>
      <br>
      <div style="width: 100%; text-align: left; margin-top:-1.5%">
        <h5 style="width: 17%; float: left; ">ติดต่อหอพัก </h5>
        <h6 style="width: 83%; float: left; margin-top:0.5%; "> <img src="@/assets/phone.png" style="width:20px; hight:20px"> {{room.call}} </h6>
        <h6 style="width: 83%; float: left; margin-top:0.5%; margin-left:17%; "> <img src="@/assets/line.png" style="width:20px; hight:20px"> {{room.line}} </h6>
        <h6 style="width: 83%; float: left; margin-top:0.5%; margin-left:17%;"> <img src="@/assets/facebook.png" style="width:20px; hight:20px"> {{room.facbook}} </h6>
      </div>
    </div>
  
    

    
  </div>
</template>

<script>
import Axios from "axios";
let setlike_api = "/api/setlike/";
let getlike_api = "/api/getlike/";
export default {
  props: [
    'room'
  ],
  data() {
    return {
      id_user : "",
      status: 'เพิ่มในรายการที่สนใจ',
      value: 3,
      like : false
    }
  },
  methods:{
    getProfile(){
      const liff = this.$liff
      liff.getProfile()
      .then(profile => {
        this.userProfile = profile
        this.id_user = this.userProfile['userId']
        Axios.post(this.$store.getters.getApi+getlike_api,{"name" : this.$route.params.Name,"user_id" : this.id_user })
        .then(res => {
          console.log(res + " :datalike");
          this.status = res.data
          console.log(this.status+" :like");
          if(this.status == "เพิ่มแล้ว"){
            this.like = true;
          }
          else{
            this.like = false;
          }
        })
        .catch(err => alert(err));
      })
      .catch((err) => {
        console.error('LIFF initialize error', err)
      })
    },
    setlike(){
      console.log(this.like +" :like");
      this.like = !this.like
      let status = ""
      if(this.like == true){
        status = "like"
      }
      else{
        status = "dislike"
      }
      Axios.post(this.$store.getters.getApi+setlike_api,{"name" : this.$route.params.Name,"user_id" : this.id_user ,"status" : status})
      .catch(err => alert(err));
    }
  },
  created(){
    this.getProfile()
    
  }
};
</script>

<style>
.img-icon-view-head{
  height: 30px;
  width: 30px;
}
.cotainer-view-img-head-view{
  width: 30%;
  float: left;
  position: relative;
  left: 5%;
  
  
}
.cotainer-view-detail-head-view{

  width: 70%;
  position: relative;
  float: left;
}
.cotainer-view-head {
  
  margin-top: 7%;
  position: relative;
  
  max-width: 100%;
  height: 300px;

 
}
.text-head-view {
  font-size: 30;
  font-weight: 900;
  color: black;
  float: left;
  text-align: left;
  width: max-content;

}
.img-head-view{
  height: 250px;
  width: 80%;
  float: left;
  border-radius:30px;
  
}
</style>
