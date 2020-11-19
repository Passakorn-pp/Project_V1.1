<template>
  <div class="cotainer-view-head" id="head-view">
    <div class="cotainer-view-img-head-view">
      <img src="@/assets/34.jpg" class="img-head-view" >
    </div>
    <div class="cotainer-view-detail-head-view">
      <h1 class="text-head-view">{{this.$store.getters.getView_home.name}}</h1>
      <div style="width: 30%; float: right; margin-top:2%" > 
      <span style="float: right; width: 70%; text-align :left;">{{ status }}</span>
        <b-form-checkbox
          style="float: right; "
          v-model="status"
          value="เพิ่มแล้ว"
          unchecked-value="เพิ่มในรายการที่สนใจ"
        >
        </b-form-checkbox> 
      </div>
      <br>
      <br>
      <br>
      <div style="width: 40%; float: left; text-align: left; ">
        <h4 >{{"ราคา "+this.$store.getters.getView_home.room[0].price+"-"+this.$store.getters.getView_home.room[1].price+" บาท"}}</h4>
      </div>
      
      <div style="width: 50%; float: right; margin-right:2%">
        <div v-if="this.$store.getters.getView_home.wifi" >
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
          <img src="@/assets/woman.png" class="img-icon-view-head" style="float: right;">
          
        </div>
        
        
      </div>
      <br>
      <br>
      <div style="width: 20%; float: left">
        <b-form-rating v-model="value"  variant="warning"></b-form-rating>
      </div>
      <br>
      <br>
      
    </div>
  
    

    
  </div>
</template>

<script>
export default {
  data() {
    return {
      status: 'เพิ่มในรายการที่สนใจ',
      value: 3
    }
  },
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
  margin-bottom: 5%;
 
}
.text-head-view {
  font-size: 30;
  font-weight: 900;
  color: black;
  float: left;
  text-align: left;
  width: 60%;

}
.img-head-view{
  height: 250px;
  width: 80%;
  float: left;
  border-radius:30px;
  
}
</style>
