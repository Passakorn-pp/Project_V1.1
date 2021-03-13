<template>
  <div>
    <div>
      <h2>กรอกข้อมูลส่วนตัว</h2>
      <div style="width: 80%; height:20px; border-bottom:0.5px solid silver; margin:auto"></div>
      <br>
      <br>
      <form action="">
      <label for="inputname" style="margin-right:3%;">คณะ</label>
      <select name="inputname" v-model="faculty" required>
        <option>คณะวิทยาศาสตร์</option>
        <option>คณะมัณฑนศิลป์</option>
        <option>คณะวิศวกรรมศาสตร์และเทคโนโลยีอุตสาหกรรม</option>
        <option>คณะศึกษาศาสตร์</option>
        <option>คณะอักษรศาสตร์</option>
        <option>คณะเภสัชศาสตร์</option>
        <option>คณะจิตรกรรม</option>
      </select>
      
      <br>
      <br>

      <label for="gender" style="margin-right:3%;">เพศ</label>
      <input type="radio" id="one" value="ชาย"  style="margin-right:1%;" name="gender" v-model="gender" required>
      <label for="one" style="margin-right:3%;">ชาย</label>
      <input type="radio" id="two" value="หญิง"  style="margin-right:1%;" name="gender" v-model="gender"  required>
      <label for="two">หญิง</label>
      <br>
      <br>

      <button @click="PostData()" >ยืนยัน</button>
      </form>
    </div>

    
    
  </div>
</template>

<script>
import Axios from "axios";
let mongo_api = "http://127.0.0.1:8000/api/addDataUser/";
export default {
  data(){
    return{
      faculty : null,
      gender : null,
      id_user : null,
      name_user : null,
      type_user : null,
    }
  },
  methods:{
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
        Axios.post(mongo_api,{"id_user": this.id_user,"name_user" : this.name_user,"type_user" : this.type_user,"faculty" : this.faculty,"gender" : this.gender})
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
  },
  
};
</script>

<style>

</style>
