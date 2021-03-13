<template>
  <div>

    <div>
      <h2>กรอกข้อมูลหอพัก</h2>
      <div style="width: 80%; height:20px; border-bottom:0.5px solid silver; margin:auto"></div>
      <br>
      <form action="">
      <label for="inputname" style="margin-right:5.5%;">ชื่อหอพัก</label>
      <input name="inputname" type="text" v-model="dormitory.name" required>
      <br>
      <label for="address" style="margin-right:9.5%;">ที่อยู่</label>
      <input name="address" type="text" v-model="dormitory.address" required>
      <br>
      <br>
      <label>ส่วนติดต่อเข้าของหอพัก</label>
      <br>
      <label style="margin-right:3.3%; margin-top:1%">Facebook</label>
      <input type="text" v-model="dormitory.facebook" required>
      <br>
      <label  style="margin-right:8.7%;">LINE</label>
      <input type="text" v-model="dormitory.line" required>
      <br>
      <label  style="margin-right:5.5%;">เบอร์โทร</label>
      <input type="text" v-model="dormitory.call" required>
      <br>
      <label  style="margin-right:8.5%;">ค่าน้ำ</label>
      <input type="text" v-model="dormitory.water_bill" required>
      <br>
      <label  style="margin-right:8.5%;">ค่าไฟ</label>
      <input type="text" v-model="dormitory.elect_bill" required>
      <br>
      <br>
      <label for="gender" style="margin-right:3%;">ประเภทหอพัก</label>
      <input name="gender" type="radio" id="one" value="หอรวม" v-model="dormitory.typedormitory" style="margin-right:1%;" required>
      <label for="one" style="margin-right:3%;">หอรวม</label>
      <input name="gender" type="radio" id="one" value="หอชาย" v-model="dormitory.typedormitory" style="margin-right:1%;" required>
      <label for="one" style="margin-right:3%;">หอชาย</label>
      <input name="gender" type="radio" id="two" value="หอหญิง" v-model="dormitory.typedormitory" style="margin-right:1%;" required>
      <label for="two">หอหญิง</label>
      <br>
      <label for="typedormitory" style="margin-right:3%; margin-top:1%;">สภาพแวดล้อมหอพัก</label>
      <input name="typedormitory" type="radio" id="one" value="เงียบสงบ" v-model="dormitory.environment" style="margin-right:1%;" required>
      <label for="one" style="margin-right:3%;">เงียบสงบ</label>
      <input name="typedormitory" type="radio" id="one" value="ครึกครืน" v-model="dormitory.environment" style="margin-right:1%;" required>
      <label for="one" style="margin-right:3%;">ครึกครืน</label>
      <input name="typedormitory" type="radio" id="two" value="ย่านของกิน" v-model="dormitory.environment" style="margin-right:1%;" required>
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
      <input type="checkbox" style="margin-right:1%;" value="parking_lot" v-model="dormitory.filterDor">
      <label style="margin-right:3%;">ลานจอดรถ</label>
      <input type="checkbox" style="margin-right:1%;" value="elevators" v-model="dormitory.filterDor">
      <label style="margin-right:3%;">ลิฟท์</label>
      <input type="checkbox" style="margin-right:1%;" value="security camera" v-model="dormitory.filterDor">
      <label style="margin-right:3%;">กล้องวงจร</label>
      <input type="checkbox" style="margin-right:1%;" value="keycard" v-model="dormitory.filterDor">
      <label style="margin-right:3%;">ระบบคีย์การ์ด</label>
      <input type="checkbox" style="margin-right:1%;" value="laundry" v-model="dormitory.filterDor">
      <label style="margin-right:3%;">ร้านซักรีด</label>
      <br>
      <label  style="margin-right:3%; margin-top:3%">ห้องพักมีกี่ประเภท</label>
      <input type="number" min="1" style="width:7%" v-model="dormitory.typeroom" @change="setroom()" required>
      <div v-for="(r,index) in dormitory.room" :key="index" >
        <h6 style="margin-top:3%">ประเภทห้องที่{{index+1}}</h6>
        <label style="margin-right:3.2%;">ชื่อห้องพัก</label>
        <input type="text"  v-model="dormitory.room[index].nameroom" required>
        <br>
        <label style="margin-right:8%;">ราคา</label>
        <input type="number"  v-model="dormitory.room[index].price" required>
        <br>
        <label style="margin-right:5%;">ห้องว่าง</label>
        <input type="number"  v-model="dormitory.room[index].free" required>
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
        {{dormitory.room}}
      </div>
      <!-- {{dormitory.room}} -->
      <br>
      <button @click="PostData()">ยืนยัน</button>
      </form>
      
      
    </div>
    
  </div>
</template>

<script>
import Axios from "axios";
let mongo_api = "http://127.0.0.1:8000/api/addDataDormitory/";
export default {
  data(){
    return{
      id_user : null,
      name_user : null,
      type_user : null,

      dormitory:{
        name : null,
        address : null,
        facebook : null,
        line : null,
        call : null,
        water_bill: null,
        elect_bill: null,
        typedormitory : null,
        environment : null,
        filterDor : [],
        room :[

        ],
      },
      isCheckAll : true,
      languages : [],
        
          
        
        
        
      
    }
  },
  // async created(){
  //     await Axios.get(mongo_api)
  //       .then(res => {
  //         this.listitems = res.data
  //         this.Listitem()
  //       })
  //       .catch(err => alert(err));
  // },
  methods:{
    setroom(){
      
      if(this.dormitory.room.length < this.dormitory.typeroom){
        this.dormitory.room.push({nameroom : null, price : null, free : null,filter : [],})
        
      }
      else{
        this.dormitory.room.pop()
      }
      
    },
    getProfile(){
      const liff = this.$liff
      liff.getProfile()
      .then(profile => {
        this.userProfile = profile
        this.id_user = this.userProfile['userId']
        this.name_user =  this.userProfile['displayName']
        this.type_user = localStorage.getItem('typeUser')
      })
      .catch((err) => {
        console.error('LIFF initialize error', err)
      })
    },
    PostData(){
        Axios.post(mongo_api,{"id_user": this.id_user,"name_user" : this.name_user,"type_user" : this.type_user,
                            "name" : this.dormitory.name,
                            "water_bill" : this.dormitory.water_bill,
                            "elect_bill" : this.dormitory.elect_bill,
                            "address" : this.dormitory.address,
                            "facebook" : this.dormitory.facebook,
                            "line" : this.dormitory.line,
                            "call" : this.dormitory.call,
                            "typedormitory" : this.dormitory.typedormitory,
                            "environment" : this.dormitory.environment,
                            "filterDor" : this.dormitory.filterDor,
                            "room" : this.dormitory.room
        })
        .then(res => {
          if(res.data=="success"){
            console.log("success");
          }
        })
        .catch(err => alert(err));
    }

  },
  created(){
    this.getProfile()
  }
};
</script>

<style>

</style>
