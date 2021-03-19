<template>
<div>
  <div class="container-view-table-head">
    <h4>ค่าใช้จ่ายต่างๆ/สิ่งอำนวยความสะดวก</h4>
  </div>
  <div class="container-view-table">
      <div class="box-filter">
        <div class="left">
          <img src="@/assets/water-drop.png" class="img">
        </div>
        <div class="right">
          <span class="text-filter">ค่าน้ำ</span>
          <br>
          <span class="text-filter">{{room.water_bill}} บาท/เดือน</span>
        </div>
          
      </div>
      <div class="box-filter">
        <div class="left">
          <img src="@/assets/lightning.png" class="img">
        </div>
        <div class="right">
          <span class="text-filter">ค่าไฟ</span>
          <br>
          <span class="text-filter">{{room.elect_bill}} บาท/หน่วย</span>
        </div>
      </div>  
      <!-- <div class="box-filter" v-if="showFilter('man')">
        <div class="left">
          <img src="@/assets/man.png" class="img">
        </div>
        <div class="right" style="line-height: 2.5;">
          <span class="text-filter" >หอพักชาย</span>         
        </div>
      </div>  
      <div class="box-filter"  v-if="showFilter('woman')">
        <div class="left">
          <img src="@/assets/woman.png" class="img">
        </div>
        <div class="right" style="line-height: 2.5;">
          <span class="text-filter" >หอพักหญิง</span> 
        </div>    
      </div> -->
      <div class="box-filter"  v-if="showFilter('parking_lot')">
        <div class="left">
          <img src="@/assets/elevator.png" class="img">
        </div>
        <div class="right" style="line-height: 2.5;">
          <span class="text-filter" >ลานจอดรถ</span> 
        </div>    
      </div> 
      <div class="box-filter"  v-if="showFilter('security camera')">
        <div class="left">
          <img src="@/assets/cctv.png" class="img">
        </div>
        <div class="right" style="line-height: 2.5;">
          <span class="text-filter" >กล้องวงจร</span> 
        </div>    
      </div> 
      <div class="box-filter"  v-if="showFilter('keycard')">
        <div class="left">
          <img src="@/assets/key-card.png" class="img">
        </div>
        <div class="right" style="line-height: 2.5;">
          <span class="text-filter" >ระบบคีย์การ์ด</span> 
        </div>    
      </div> 
      <div class="box-filter"  v-if="showFilter('laundry')">
        <div class="left">
          <img src="@/assets/laundry-shop.png" class="img">
        </div>
        <div class="right" style="line-height: 2.5;">
          <span class="text-filter" >ร้านซักรีด</span> 
        </div>    
      </div> 
      
  </div>
</div>
  
</template>

<script>
export default {
  props: [
    'room'
  ],
  data() {
    return {
      
     
    };
  },
  methods:{
    showFilter(item){
      var check = true;
      for(var i in this.room.room.length){
        if(this.room.room[i].filter[0][item] == false){
          check = false
          break;
        }
      }
      if(check == true){
        return true
      }
      else{
        return false
      }
    }
  }
};
</script>

<style>
.container-view-table-head{
  max-width: 90%;
  max-height: 100%;
  text-align: left;
  padding: 0.5%;
  background: #ECD59F;
  margin: auto;
  margin-top:5%;
  border: 1px solid silver;

}
.container-view-table {
  max-width: 90%;
  max-height: 100%;
  border: 1px solid silver;
  margin: auto;
  background: #f8f6e7;
  text-align: left;

}

.container-view-table .box-filter{
  height: 50px;
  width: 150px;
  border-radius: 15px;
  border: 1px solid silver;
  position: relative;
  display: inline-block;
  margin: 0.5%;
  margin-top: 1%;

  background: white;

  
}
.right .text-filter{
  font-size: 12px;
  
}
.left .img{
  width: 65%;
  height: 65%;
  position: relative;
  margin: 5%;
  left: 10%;
}
.box-filter .left{
  width: 40%;


  float: left;

}
.box-filter .right{

  width: 60%;

  float: left;

}

</style>
