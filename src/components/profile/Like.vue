<template>
  <div>
    <div style="width:90%; margin:auto; min-height:400px">
      <div v-for="(user,index) in this.useritem" :key="index"  >
          <div class="container-ui-recommend2">
            <div >
              <div class="container-in-ui-recommend2" @click="setview(user)">
                <b-img class="img-recommend2" :src="user.img"/>
              </div>
            </div>
                
            <div>
              <div class="container-in-ui-recommend2" style="border-right: 1px solid silver; width: 42%; height: 213px;" @click="setview(user)">
                <div class="name-home2">
                  {{ user.name }}
                </div>
                    
                <div class="name-home3" v-if="user.room['0'].price!=user.room['1'].price">
                  ราคา {{user.room['0'].price+"-"+user.room['1'].price+" บาท"}}
                </div>
                <div class="name-home3" v-else>
                  ราคา {{user.room['1'].price+" บาท"}}
                </div>
                <div class="name-home3">
                  ระยะทางจากมหาลัย {{user.distance}} เมตร
                </div>
                <div class="rating-recomend2 ">
                  <b-form-rating v-model="user.star" readonly no-border variant="warning" style="background: none;"></b-form-rating>
                </div>
                    
                <div style="padding-left: 15px; margin-top:-2%; overflow: hidden;">  
                  <div v-if="showfilter('man',user)">
                      <img src="@/assets/man.png" class="img-icon-view-head" style="float: left; margin-right:3px ">
                  </div>

                  <div v-if="showfilter('woman',user)">
                    <img src="@/assets/woman.png" class="img-icon-view-head" style="float: left; margin-right:3px ">
                  </div>

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
                      
                  <div v-if="showfilter('parking_lot',user)">
                    <img src="@/assets/parking-area.png" class="img-icon-view-head" style="float: left; margin-right:3px ">
                  </div>
                  
                  <div v-if="showfilter('elevators',user)">
                    <img src="@/assets/elevator.png" class="img-icon-view-head" style="float: left; margin-right:3px ">
                  </div>

                  <div v-if="showfilter('security camera',user)">
                    <img src="@/assets/cctv.png" class="img-icon-view-head" style="float: left; margin-right:3px ">
                  </div>

                  <div v-if="showfilter('keycard',user)">
                    <img src="@/assets/key-card.png" class="img-icon-view-head" style="float: left; margin-right:3px ">
                  </div>

                  <div v-if="showfilter('laundry',user)">
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
                    <button style="  float: left;  margin-left:2%;  border-radius:15px; background:#e4c785; ">{{user.room[index-1].nameroom}}</button> 
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
let mongo_api = "http://127.0.0.1:8000/api/getuser";
export default {
  data(){
    return{
      useritem : [],
    }
  },
  async created(){
      await Axios.get(mongo_api)
        .then(res => {
          this.listitems = res.data
          this.useritem = res.data
        })
        .catch(err => alert(err));
  },
  methods:{
    showfilter(item,user){
      if(user.selected.indexOf(item) != -1){
        return true;
      }
      else{
        return false;
      }
      
    },
    setview(value){
      this.$store.dispatch("addView",value);
      this.$router.push('/view');

  },
  },
  
}
</script>

<style>

</style>