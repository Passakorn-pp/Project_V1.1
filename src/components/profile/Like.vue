<template>
  <div>
    <div style="width:90%; margin:auto; min-height:400px">

      <div v-for="(user,index) in this.useritem" :key="index"  >
          <div class="container-ui-recommend2">
            <div >
              <div class="container-in-ui-recommend2" @click="setview(user)">
                <b-img class="img-recommend2" :src="user.dormitory[0].img"/>
              </div>
            </div>
                
            <div>
              <div class="container-in-ui-recommend2" style="border-right: 1px solid silver; width: 42%; height: 213px;" @click="setview(user)">
                <div class="name-home2">
                  {{ user.dormitory[0].name }}
                </div>
                    
                <div class="name-home3" v-if="user.room[0].price!=user.room[user.room.length-1].price">
                  ราคา {{user.room[0].price+"-"+user.room[user.room.length-1].price+" บาท"}}
                </div>
                <div class="name-home3" v-else>
                  ราคา {{user.room[user.room.length-1].price+" บาท"}}
                </div>
                <div class="name-home3">
                  ระยะทางจากมหาลัย {{user.dormitory[0].distance}} เมตร
                </div>
                <div class="rating-recomend2 ">
                  <b-form-rating v-model="user.dormitory[0].star" readonly no-border variant="warning" style="background: none;"></b-form-rating>
                </div>
                    
                <div style="padding-left: 15px; margin-top:-2%; overflow: hidden;">  
                  <div v-if="showfilter('wifi',user)">
                    <img src="@/assets/wifi.png"  class="img-icon-view-head" style="float: left; margin-right:3px ">
                  </div>

                  <div v-if="showfilter('air',user)">
                    <img src="@/assets/air-conditioner (1).png" class="img-icon-view-head" style="float: left; margin-right:3px ">
                  </div>

                  <div v-if="showfilter('fan',user)">
                    <img src="@/assets/fan (1).png" class="img-icon-view-head" style="float: left; margin-right:3px ">
                  </div>
                      
                  <div v-if="showfilter('tv',user)">
                    <img src="@/assets/television.png" class="img-icon-view-head" style="float: left; margin-right:3px ">
                  </div>

                  <div v-if="showfilter('refrigerator',user)">
                    <img src="@/assets/refrigerator.png" class="img-icon-view-head" style="float: left; margin-right:3px ">
                  </div>

                  <div v-if="showfilter('table',user)">
                    <img src="@/assets/desk.png" class="img-icon-view-head" style="float: left; margin-right:3px ">
                  </div>

                  <br>
                  <br>
                      
                  <div v-if="showfilterDor('parking_lot',user)">
                    <img src="@/assets/parking-area.png" class="img-icon-view-head" style="float: left; margin-right:3px ">
                  </div>
                  
                  <div v-if="showfilterDor('elevators',user)">
                    <img src="@/assets/elevator.png" class="img-icon-view-head" style="float: left; margin-right:3px ">
                  </div>

                  <div v-if="showfilterDor('security camera',user)">
                    <img src="@/assets/cctv.png" class="img-icon-view-head" style="float: left; margin-right:3px ">
                  </div>

                  <div v-if="showfilterDor('keycard',user)">
                    <img src="@/assets/key-card.png" class="img-icon-view-head" style="float: left; margin-right:3px ">
                  </div>

                  <div v-if="showfilterDor('laundry',user)">
                    <img src="@/assets/laundry-shop.png" class="img-icon-view-head" style="float: left; margin-right:3px ">
                  </div>
                </div>

                    
              </div>
            </div>
                
            <div>
              <div class="container-in-ui-recommend2" @click="setview(user)" style="width: 25%; height: 213px;">
                <div class="name-home2">
                  ขนาดห้อง
                </div>
                <div v-for="index in user.room.length" :key="index">
                  <div class="ss">
                    <button style="  float: left;  margin-left:2%;  border-radius:15px; background:#e4c785; ">{{user.room[index-1].name}}</button> 
                    <h6 style="  float: right; margin-right:3%; ">ว่าง <h3 style="color:red; display: inline-block; ">{{user.room[index-1].free}}</h3> ห้อง</h6>
                  </div>

                </div>
              </div>
            </div>

              
          </div>
        </div>
    </div>    
  </div>
</template>

<script>
import Axios from "axios";
let mongo_api = "http://127.0.0.1:8000/api/GetUserLike/";
let history_api = "http://127.0.0.1:8000/api/history/";
export default {
  data(){
    return{
      useritem : [],
      id_user : "",
    }
  },
  created(){
    const liff = this.$liff
    liff.getProfile()
    .then(profile => {
      this.userProfile = profile
      this.id_user = this.userProfile['userId']
      Axios.post(mongo_api,{"user_id" : this.id_user })
      .then(res => {
        this.useritem = res.data.dormitory
        console.log(this.useritem);
      })
      .catch(err => alert(err));
    })
    .catch((err) => {
      console.error('LIFF initialize error', err)
    })
      
  },
  methods:{
    showfilter(item,user){
      var check = false;
      
      for(var i=0; i<user.room.length; i++){
        if(user.room[i].filter[0][item] == true){
          check = true
          break;
        }
      }
      if(check == true){
        return true
      }
      else{
        return false
      }
      
    },
    showfilterDor(item,user){
      if(user.filterdormitory[0][item] == false){
        return false
      }
      else{
        return true
      }
      
    },
    getProfile(){
      
    },
    setview(value){
      // this.$store.dispatch("addView",value);
      Axios.post(history_api,{"name": value.dormitory[0].name,"user_id":this.id_user})
      .then(() => {
        this.$router.push({name:'view',params:{Name:value.dormitory[0].name}});
      })
      .catch(err => alert(err));

  },
  },
  
}
</script>

<style>

</style>