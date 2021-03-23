<template>
  <div >
    <h4 style="padding:2%; background: #e4c785; width: 60%; min-width: 500px; margin:auto; margin-top:3%; border-top-left-radius: 15px; border-top-right-radius: 15px; ">ข้อมูลส่วนตัว</h4>
    <div class="table-modify">
      <div style="padding:4%; ">
        <label>คณะ : </label>
        <select  v-model="user[0].faculty" style="margin-left:2%; width:150px; hight:80px;   border: 1px solid silver; " >
            <option>คณะวิทยาศาสตร์</option>
            <option>คณะมัณฑนศิลป์</option>
            <option>คณะวิศวกรรมศาสตร์และเทคโนโลยีอุตสาหกรรม</option>
            <option>คณะศึกษาศาสตร์</option>
            <option>คณะอักษรศาสตร์</option>
            <option>คณะเภสัชศาสตร์</option>
            <option>คณะจิตรกรรม</option>
        </select>
      </div>
      <div>
        <label>เพศ : </label>
        <input type="radio" id="ชาย" value="ชาย" style="margin-left:2%;" v-model="user[0].gender"/>
        <label for="ชาย" style="margin-left:1%;" >ชาย</label>
        <input type="radio" id="หญิง" value="หญิง" style="margin-left:2%;" v-model="user[0].gender"/>
        <label for="หญิง" style="margin-left:1%;">หญิง</label>
      </div>
      <button style="background: #e4c785; padding:1%; margin-top:3%; border-radius: 15px;  border: none; color:white; width: 60px; height: 40px;" @click="updata()">ยืนยัน</button>

    </div>
  </div>
</template>

<script>
import Axios from "axios";
let getdata = "http://127.0.0.1:8000/api/GetData/";
let updatedata = "http://127.0.0.1:8000/api/updateData/";
export default {
  data() {
    return {
      user : null,
      id_user : "",
    }
  },
  created(){
    const liff = this.$liff
    liff.getProfile()
    .then(profile => {
      this.userProfile = profile
      this.id_user = this.userProfile['userId']
      Axios.post(getdata,{"id_user" : this.id_user })
      .then(res => {
        this.user = res.data
        console.log(this.user);
      })
      .catch(err => alert(err));
    })
    .catch((err) => {
      console.error('LIFF initialize error', err)
    })
  },
  methods:{
    updata(){
      Axios.post(updatedata,{"id_user" : this.id_user,"faculty" : this.user[0].faculty,"gender" : this.user[0].gender})
      .then(
        alert("บันทึกสำเร็จ")
      )
      .catch(err => alert(err));
    }
  }
}
</script>

<style scoped>
.table-modify{
    
    margin:  auto;
    height: 300px;
    width: 60%;
    min-width: 500px;
    border: 1px solid silver;
    overflow: hidden;
    margin-bottom: 5%;
}
</style>