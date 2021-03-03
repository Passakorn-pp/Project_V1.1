<template>
  <div>

    <div>
      <h2>กรอกข้อมูลหอพัก</h2>
      <div style="width: 80%; height:20px; border-bottom:0.5px solid silver; margin:auto"></div>
      <br>
      <label for="inputname" style="margin-right:3%;">ชื่อหอพัก</label>
      <input type="text" v-model="dormitory.name">
      <br>
      <label  style="margin-right:6.8%;">ที่อยู่</label>
      <input type="text" v-model="dormitory.name">
      <br>
      <br>
      <label>ส่วนติดต่อเข้าของหอพัก</label>
      <br>
      <label  style="margin-right:3%; margin-top:1%">Facebook</label>
      <input type="text" v-model="dormitory.name">
      <br>
      <label  style="margin-right:8.3%;">LINE</label>
      <input type="text" v-model="dormitory.name">
      <br>
      <label  style="margin-right:5.2%;">เบอร์โทร</label>
      <input type="text" v-model="dormitory.name">
      <br>
      <br>
      <label  style="margin-right:3%;">ประเภทหอพัก</label>
      <input type="radio" id="one" value="หอรวม" v-model="dormitory.typedormitory" style="margin-right:1%;">
      <label for="one" style="margin-right:3%;">หอรวม</label>
      <input type="radio" id="one" value="หอชาย" v-model="dormitory.typedormitory" style="margin-right:1%;">
      <label for="one" style="margin-right:3%;">หอชาย</label>
      <input type="radio" id="two" value="หอหญิง" v-model="dormitory.typedormitory" style="margin-right:1%;">
      <label for="two">หอหญิง</label>
      <br>
      <label  style="margin-right:3%; margin-top:1%;">สภาพแวดล้อมหอพัก</label>
      <input type="radio" id="one" value="เงียบสงบ" v-model="dormitory.environment" style="margin-right:1%;">
      <label for="one" style="margin-right:3%;">เงียบสงบ</label>
      <input type="radio" id="one" value="ครึกครืน" v-model="dormitory.environment" style="margin-right:1%;">
      <label for="one" style="margin-right:3%;">ครึกครืน</label>
      <input type="radio" id="two" value="ย่านของกิน" v-model="dormitory.environment" style="margin-right:1%;">
      <label for="two">ย่านของกิน</label>
      <br>
      <!-- <h5>สิ่งอำนวยความสะดวกภายในห้อง</h5>
      <input type="checkbox" style="margin-right:1%;">
      <label style="margin-right:3%;">wifi</label>
      <input type="checkbox" style="margin-right:1%;">
      <label style="margin-right:3%;">แอร์</label>
      <input type="checkbox" style="margin-right:1%;">
      <label style="margin-right:3%;">พัดลม</label>
      <input type="checkbox" style="margin-right:1%;">
      <label style="margin-right:3%;">ทีวี</label>
      <input type="checkbox" style="margin-right:1%;">
      <label style="margin-right:3%;">ตู้เย็น</label>
      <input type="checkbox" style="margin-right:1%;">
      <label style="margin-right:3%;">โต๊ะ</label>
      <br>
      <br> -->
      <h5 style="margin-top:2%;">สิ่งอำนวยความสะดวกหอพัก</h5>
      <input type="checkbox" style="margin-right:1%;">
      <label style="margin-right:3%;">ลานจอดรถ</label>
      <input type="checkbox" style="margin-right:1%;">
      <label style="margin-right:3%;">ลิฟท์</label>
      <input type="checkbox" style="margin-right:1%;">
      <label style="margin-right:3%;">กล้องวงจร</label>
      <input type="checkbox" style="margin-right:1%;">
      <label style="margin-right:3%;">ระบบคีย์การ์ด</label>
      <input type="checkbox" style="margin-right:1%;">
      <label style="margin-right:3%;">ร้านซักรีด</label>
      <br>
      <label  style="margin-right:3%; margin-top:3%">ห้องพักมีกี่ประเภท</label>
      <input type="number" min="1" style="width:7%" v-model="dormitory.typeroom" @change="setroom()">
      <div v-for="(r,index) in dormitory.room" :key="index" >
        <h6 style="margin-top:3%">ประเภทห้องที่{{index+1}}</h6>
        <label style="margin-right:3%;">ชื่อห้องพัก</label>
        <input type="text" :id="'name'+index" v-model="dormitory.room[index].nameroom">
        <br>
        <label style="margin-right:7.5%;">ราคา</label>
        <input type="text" :id="'price'+index" v-model="dormitory.room[index].price">
        <br>
        <label style="margin-right:4.5%;">ห้องว่าง</label>
        <input type="text" :id="'price'+index" v-model="dormitory.room[index].free">
        <br>
        <h5 style="margin-top:2%">สิ่งอำนวยความสะดวกภายในห้อง</h5>
        <input type="checkbox" style="margin-right:1%;" value="wifi" :id="'wifi'+index" v-model="dormitory.room[index].filter">
        <label style="margin-right:3%;" >wifi</label>
        <input type="checkbox" style="margin-right:1%;" value="air" :id="'air'+index" v-model="dormitory.room[index].filter">
        <label style="margin-right:3%;">แอร์</label>
        <input type="checkbox" style="margin-right:1%;" value="fan" :id="'fan'+index" v-model="dormitory.room[index].filter">
        <label style="margin-right:3%;">พัดลม</label>
        <input type="checkbox" style="margin-right:1%;" value="tv" :id="'tv'+index" v-model="dormitory.room[index].filter">
        <label style="margin-right:3%;">ทีวี</label>
        <input type="checkbox" style="margin-right:1%;" value="refrigerator" :id="'refrigerator'+index" v-model="dormitory.room[index].filter">
        <label style="margin-right:3%;">ตู้เย็น</label>
        <input type="checkbox" style="margin-right:1%;" value="table" :id="'table'+index" v-model="dormitory.room[index].filter">
        <label style="margin-right:3%;">โต๊ะ</label>
        <br>
      </div>
      <!-- {{dormitory.room}} -->

      
      
    </div>
    
  </div>
</template>

<script>
export default {
  data(){
    return{
      faculty : null,
      gender : null,

      dormitory:{
        name : null,
        typedormitory : null,
        environment : null,
        room :[
        ],
      },
      isCheckAll : true,
      languages : [],
        
          
        
        
        
      
    }
  },
  methods:{
    setroom(){
      
      if(this.dormitory.room.length < this.dormitory.typeroom){
        this.dormitory.room.push({nameroom : null, price : null, free : null, img : "",filter : [],})
        
      }
      else{
        this.dormitory.room.pop()
      }
      
    },

  }
};
</script>

<style>

</style>
