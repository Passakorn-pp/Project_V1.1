<template>
  <div>
    <h4 style="padding:2%; background: #e4c785; width: 70%; margin:auto; margin-top:3%; border-top-left-radius: 15px; border-top-right-radius: 15px;">ข้อมูลหอพัก</h4>
    <div class="tablemodify">
      <div style="padding:4%; width:50%; float: left;">
        <div style="width:100%; overflow: hidden;">
          <label style="float: left;">ชื่อหอพัก : </label>
          <input style="margin-right:2%; width:150px; hight:80px; float: right;   border: 1px solid silver; text-align: center;" v-model="room.name">
         
        </div>
        
        <div style="width:100%; overflow: hidden;">
          <label style="float: left;">ค่าน้ำ : </label>
          <input style="margin-right:2%; width:150px; hight:80px; float: right;   border: 1px solid silver; text-align: center;" v-model="room.water_bill">
          
        </div>
        
        <div style="width:100%; overflow: hidden;">
          <label style="float: left;">ค่าไฟ : </label>
          <input style="margin-right:2%; width:150px; hight:80px; float: right;   border: 1px solid silver; text-align: center;" v-model="room.elect_bill">
          
        </div>
        
      </div>
      
      
      <div style="padding:3%; width:50%; float: left;">
        
        <div style="width:100%; overflow: hidden;">
          <label style="float: left;">เบอร์โทร : </label>
          <input style="margin-right:14%; width:150px; hight:80px; float: right;   border: 1px solid silver; text-align: center;" v-model="room.call">
          
        </div>
        <div style="width:100%; overflow: hidden;">
          <label style="float: left;">facebook : </label>
          <input style="margin-right:14%; width:150px; hight:80px; float: right;   border: 1px solid silver; text-align: center;" v-model="room.facbook">
          
        </div>
        <div style="width:100%; overflow: hidden;">
          <label style="float: left;">LINE : </label>
          <input style="margin-right:14%; width:150px; hight:80px; float: right;   border: 1px solid silver; text-align: center;" v-model="room.line">
          
        </div>
      </div>
      <div style=" width:100%; float: left; padding: 0px 25px; margin-top:-20px">
        <div style="width:100%; overflow: hidden;">
          <label style="float: left;">ที่อยู่: </label>
          <input style="margin-right:2%; width:80%; hight:300px; float: right;   border: 1px solid silver; text-align: center;" v-model="room.address">     
        </div>
      </div>
      <div style="padding:4%; width:100%; float: left;">
        <input type="checkbox" style="margin-right:1%;"  v-model="room.filterDor[0].parking_lot">
        <label style="margin-right:3%;">ลานจอดรถ</label>
        <input type="checkbox" style="margin-right:1%;"  v-model="room.filterDor[0].elevators">
        <label style="margin-right:3%;">ลิฟท์</label>
        <input type="checkbox" style="margin-right:1%;" v-model="room.filterDor[0].security_camera">
        <label style="margin-right:3%;">กล้องวงจร</label>
        <input type="checkbox" style="margin-right:1%;"  v-model="room.filterDor[0].keycard">
        <label style="margin-right:3%;">ระบบคีย์การ์ด</label>
        <input type="checkbox" style="margin-right:1%;"  v-model="room.filterDor[0].laundry">
        <label style="margin-right:3%;">ร้านซักรีด</label>
        <div v-for="(r,index) in room.room" :key="index">
          
          <div style="width:100%; overflow: hidden; border: 1px solid silver; background: #f8f6e7; margin-bottom: 2%; padding : 2%;" >
            <input type="file" :name="'file'+index" :id="'file'+index" style="display:none" @change="changeimg(index, $event)" />
            <img src="@/assets/remove.png" style="position: absolute; margin-left: 5%; width:20px; height:20px;" @click="removeroom(index)">
            <div  style="float: left; width:100px; height:100px; margin-right: 2%;">
              <img :src="r.img" style="width:100px; height:100px; position: absolute; margin-left:-3%" >
              <label :for="'file'+index" style="background: white; position: absolute; ">เลือกรูป</label>
            </div>
            
            <label style="float: left; ">ชื่อห้องพัก</label>
            <input style="margin-left:2%; width:100px; height:30px; float: left;   border: 1px solid silver; text-align: center;" v-model="r.name">
            <label style="float: left; margin-left:2%; "> : ว่าง</label>
            <input style="margin-left:2%; width:50px; height:30px; float: left;   border: 1px solid silver; text-align: center;" v-model="r.free">
            <label style="float: left; margin-left:2%; "> ห้อง </label>
            <label style="float: left; margin-left:2%;">ราคา</label>
            <input style="margin-left:2%; width:100px; height:30px; float: left;   border: 1px solid silver; text-align: center;" v-model="r.price">
            <br>
            <br>
            <input type="checkbox" style="margin-right:1%;"  :id="'wifi'+index" v-model="r.filter[0].wifi" @click="check(r)">
            <label style="margin-right:3%;" >wifi</label>
            <input type="checkbox" style="margin-right:1%;"  :id="'air'+index" v-model="r.filter[0].air">
            <label style="margin-right:3%;">แอร์</label>
            <input type="checkbox" style="margin-right:1%;"  :id="'fan'+index" v-model="r.filter[0].fan">
            <label style="margin-right:3%;">พัดลม</label>
            <input type="checkbox" style="margin-right:1%;"  :id="'tv'+index" v-model="r.filter[0].tv">
            <label style="margin-right:3%;">ทีวี</label>
            <input type="checkbox" style="margin-right:1%;"  :id="'refrigerator'+index" v-model="r.filter[0].refrigerator">
            <label style="margin-right:3%;">ตู้เย็น</label>
            <input type="checkbox" style="margin-right:1%;"  :id="'table'+index" v-model="r.filter[0].table">
            <label style="margin-right:3%;">โต๊ะ</label>
          </div>
        </div>
  
        <!-- <div style="width:100%; overflow: hidden;">
            <label style="float: left;">ห้องเล็กว่าง : </label>
            <label style="float: right; margin-left:2%; "> ห้อง </label>
            <input style="margin-right:2%; width:50px; hight:80px; float: right;   border: 1px solid silver;">
            
          </div>
          <div style="width:100%; overflow: hidden;">
            <label style="float: left;">ห้องใหญ่ว่าง : </label>
            <label style="float: right; margin-left:2%; "> ห้อง </label>
            <input style="margin-right:2%; width:50px; hight:80px; float: right;   border: 1px solid silver;">
            
          </div>
          <div style="width:100%; overflow: hidden;">
            <label style="float: left;">ราคาห้องเล็ก : </label>
            <label style="float: right; margin-left:2%; "> บาท </label>
            <input style="margin-right:2%; width:100px; hight:80px; float: right;   border: 1px solid silver;">
            
          </div>
          <div style="width:100%; overflow: hidden;">
            <label style="float: left;">ราคาห้องใหญ่ : </label>
            <label style="float: right; margin-left:2%; "> บาท </label>
            <input style="margin-right:2%; width:100px; hight:80px; float: right;   border: 1px solid silver;"> -->
            
          <!-- </div> -->
          <button @click="Addroom()" style="background: #f5e4bd; padding:1%; border-radius: 15px;  border: none; color:black; width: 300px; height: 40px;">เพิ่มประเภทห้อง</button>
          <br>
          <button @click="PostData()" style="background: #e4c785; padding:1%; margin-top:3%; border-radius: 15px;  border: none; color:white; width: 60px; height: 40px;">ยืนยัน</button>
        </div>
        
    </div>
  </div>
</template>

<script>
import Axios from "axios";
let mongo_api = "/api/updateDataDormitory/";

export default {
  data(){
    return{
      id_user : "",
    }
  },
  props: [
    'room'
  ],
  methods:{
    check(r){
      console.log(r);
    },
    removeroom(index){
      this.room.room.splice(index, 1)
    }
    ,
    changeimg(index,event){
      var selcetimg = event.target.files[0];
      console.log(selcetimg);
      this.createBase64Imange2(selcetimg,index)
    },
    createBase64Imange2(img2,index){
      const reader2 = new FileReader();
      reader2.onload = (e) => {
       this.room.room[index].img = e.target.result;
      }
      reader2.readAsDataURL(img2)

    },
    Addroom(){
      this.room.room.push({name : null, price : null, free : null,filter : [{wifi:false,air:false,fan:false,tv:false,refrigerator:false,table:false}],img:null})
    },
    PostData(){
      // const liff = this.$liff
      // liff.getProfile()
      // .then(profile => {
      //   this.userProfile = profile
      //   this.id_user = this.userProfile['userId']
        Axios.post(this.$store.getters.getApi+mongo_api,{"id_user": "U2adb705541e0ba188353355c15ccc074",
                            "name" : this.room.name,
                            "water_bill" : this.room.water_bill,
                            "elect_bill" : this.room.elect_bill,
                            "address" : this.room.address,
                            "facebook" : this.room.facbook,
                            "line" : this.room.line,
                            "call" : this.room.call,
                            "typedormitory" : this.room.gender,
                            "environment" : this.room.tags,
                            "filterDor" : this.room.filterDor,
                            "room" : this.room.room
        })
        .then(res => {
          if(res.data=="success"){
            alert("บันทึกสำเร็จ")
          }
        })
        .catch(err => alert(err));
      // })
      // .catch((err) => {
      //   console.error('LIFF initialize error', err)
      // })
        
    }
    
  }
}
</script>

<style scoped>

.tablemodify{
    margin:  auto;
    height: max-content;
    width: 70%;
    border: 1px solid silver;
    overflow: hidden;
    margin-bottom: 5%;
    
}
</style>