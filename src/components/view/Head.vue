<template>
  <div class="cotainer-view-head" id="head-view">
    <div class="cotainer-view-img-head-view">
      <img src="@/assets/34.jpg" class="img-head-view" >
    </div>
    <div class="cotainer-view-detail-head-view">
      <h1 class="text-head-view">{{this.$store.getters.getView_name}}</h1>
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
      <div style="width: 30%; float: left">
      <b-form-rating v-model="value" readonly variant="warning"></b-form-rating>
      </div>
      <div style="width: 60%; float: right; text-align: right;">
        <div v-if="this.$store.getters.getView_wifi" >
          <img src="@/assets/wifi.png"  class="img-icon-view-head" style="float: right; margin-left:15px">
          
        </div >
        <div v-if="this.$store.getters.getView_air">
          <img src="@/assets/air-conditioner (1).png" class="img-icon-view-head" style="float: right; margin-left:15px">
          
        </div>
        <div v-if="this.$store.getters.getView_fan">
          <img src="@/assets/fan (1).png" class="img-icon-view-head" style="float: right; margin-left:15px">
          
        </div>
        <div v-if="this.$store.getters.getView_typeMen">
          <img src="@/assets/man.png" class="img-icon-view-head" style="float: right; margin-left:15px">
          
        </div>
        
        <div v-if="this.$store.getters.getView_typeWomen">
          <img src="@/assets/woman.png" class="img-icon-view-head" style="float: right;">
          
        </div>
      </div>
      <br>
      <br>
      <div style="width: 60%; float: left; text-align: left; margin:1%">
        <h4 >{{"ราคา "+this.$store.getters.getView_price+" บาท"}}</h4>
      </div>
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
}
.cotainer-view-detail-head-view{
  width: 60%;
  
  float: left;
}
.cotainer-view-head {
  margin-top: 10%;
  position: relative;
  left: 10%;
  max-width: 80%;
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
  height: 300px;
  width: 300px;
  float: left;
  border-radius:30px;
}
</style>
