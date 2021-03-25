<template>
  <div>
    <div>
      <h2>กรอกข้อมูลส่วนตัว</h2>
      <div style="width: 80%; height:20px; border-bottom:0.5px solid silver; margin:auto;"></div>
      <br>
      <br>
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
      <label for="year" style="margin-right:3%;">ชั้นปี</label>
      <br>
      <input type="radio" id="year" value="1"  style="margin-right:1%;" name="year" v-model="years" required>
      <label style="margin-right:3%;">1</label>
      <input type="radio" id="year" value="2"  style="margin-right:1%;" name="year" v-model="years" required>
      <label style="margin-right:3%;">2</label>
      <input type="radio" id="year" value="3"  style="margin-right:1%;" name="year" v-model="years" required>
      <label style="margin-right:3%;">3</label>
      <input type="radio" id="year" value="4"  style="margin-right:1%;" name="year" v-model="years" required>
      <label style="margin-right:3%;">4</label>
      <input type="radio" id="year" value="มากกว่า 4"  style="margin-right:1%;" name="year" v-model="years" required>
      <label style="margin-right:3%;">มากกว่า 4</label>
      <input type="radio" id="year" value="จบแล้ว"  style="margin-right:1%;" name="year" v-model="years" required>
      <label style="margin-right:3%;">จบแล้ว</label>
      <br>
      <br>
      <label style="margin-right:3%;">นิสัย</label>
      <br>
      <input type="checkbox" style="margin-right:1%;"   v-model="behavior.game" >
      <label style="margin-right:3%;" >เล่นเกม</label>
      <input type="checkbox" style="margin-right:1%;"   v-model="behavior.book">
      <label style="margin-right:3%;">อ่านหนังสือ</label>
      <input type="checkbox" style="margin-right:1%;"   v-model="behavior.song">
      <label style="margin-right:3%;">เล่นดนตรี</label>
      <input type="checkbox" style="margin-right:1%;"   v-model="behavior.pat">
      <label style="margin-right:3%;">เลี้ยงสัตว์</label>
      <input type="checkbox" style="margin-right:1%;"   v-model="behavior.Pray">
      <label style="margin-right:3%;">สวดมนต์ นั่งสมาธิ</label>
      <br>
      <input type="checkbox" style="margin-right:1%;"   v-model="behavior.exercise">
      <label style="margin-right:3%;">ออกกำลังกาย</label>
      <input type="checkbox" style="margin-right:1%;"   v-model="behavior.cocial">
      <label style="margin-right:3%;">เล่นโซเชียล</label>
      <input type="checkbox" style="margin-right:1%;"   v-model="behavior.art">
      <label style="margin-right:3%;">สร้างงานศิลปะ</label>
      <input type="checkbox" style="margin-right:1%;"   v-model="behavior.food">
      <label style="margin-right:3%;">ทำอาหาร</label>
      <input type="checkbox" style="margin-right:1%;"   v-model="behavior.clean">
      <label style="margin-right:3%;">ทำความสะอาดห้อง</label>
      <br>
      <input type="checkbox" style="margin-right:1%;"   v-model="behavior.movie">
      <label style="margin-right:3%;">ดูหนัง</label>
      <input type="checkbox" style="margin-right:1%;"   v-model="behavior.homework">
      <label style="margin-right:3%;">ทำการบ้าน</label>
      <input type="checkbox" style="margin-right:1%;"   v-model="behavior.lie_about">
      <label style="margin-right:3%;">นอนเล่น</label>
      <br>
      <br>
      <button type="submit" @click="PostData()" style="border-radius: 15px; border: none; background: #e4c275; width: 80px; color: white; height: 40px;">ยืนยัน</button>
    </div>

    
    
  </div>
</template>

<script>
import Axios from "axios";
let mongo_api = "/api/addDataUser/";
export default {
  data(){
    return{
      text : "",
      faculty : null,
      gender : null,
      id_user : null,
      name_user : null,
      type_user : null,
      years : null,
      behavior : {
        game : false,
        book : false,
        song : false,
        pat : false,
        Pray : false,
        exercise : false,
        cocial : false,
        art : false,
        food : false,
        clean : false,
        movie : false,
        homework : false,
        lie_about : false
      },
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
      this.gettext()
      Axios.post(this.$store.getters.getApi+mongo_api,{"id_user": this.id_user,"name_user" : this.name_user,"type_user" : this.type_user,"faculty" : this.faculty,"gender" : this.gender,"year": this.years,"behavior" : this.text})
      .then(res => {
        if(res.data=="success"){
          this.$router.push({ path: '/' })
        }
      })
      .catch(err => alert(err));
    },
    gettext(){
      this.text=""
      var check = ""
      for(var i in this.behavior){
        if(this.behavior[i]==true){
          check = i
        }
      }
      for(var j in this.behavior){
        if(check == j){
          if(j == "game"){
            this.text = "เล่นเกม"
          }
          if(j == "book"){
            this.text += "อ่านหนังสือ"
          }
          if(j == "song"){
            this.text += "เล่นดนตรี"
          }
          if(j == "pat"){
            this.text += "เลี้ยงสัตว์"
          }
          if(j == "Pray"){
            this.text += "สวดมนต์นั่งสมาธิ"
          }
          if(j == "exercise"){
            this.text += "ออกกำลังกาย"
          }
          if(j == "cocial"){
            this.text += "เล่นโซเชียล"
          }
          if(j == "art"){
            this.text += "สร้างงานศิลปะ"
          }
          if(j == "food"){
            this.text += "ทำอาหาร"
          }
          if(j == "clean"){
            this.text += "ทำความสะอาดห้อง"
          }
          if(j == "movie"){
            this.text += "ดูหนัง"
          }
          if(j == "homework"){
            this.text += "ทำการบ้าน"
          }
          if(j == "lie_about"){
            this.text += "นอนเล่น"
          }
        }
        else if(this.behavior[j]==true){
          if(j == "game"){
            this.text += "เล่นเกม,"
          }
          if(j == "book"){
            this.text += "อ่านหนังสือ,"
          }
          if(j == "song"){
            this.text += "เล่นดนตรี,"
          }
          if(j == "pat"){
            this.text += "เลี้ยงสัตว์,"
          }
          if(j == "Pray"){
            this.text += "สวดมนต์นั่งสมาธิ,"
          }
          if(j == "exercise"){
            this.text += "ออกกำลังกาย,"
          }
          if(j == "cocial"){
            this.text += "เล่นโซเชียล,"
          }
          if(j == "art"){
            this.text += "สร้างงานศิลปะ,"
          }
          if(j == "food"){
            this.text += "ทำอาหาร,"
          }
          if(j == "clean"){
            this.text += "ทำความสะอาดห้อง,"
          }
          if(j == "movie"){
            this.text += "ดูหนัง,"
          }
          if(j == "homework"){
            this.text += "ทำการบ้าน,"
          }
          if(j == "lie_about"){
            this.text += "นอนเล่น,"
          }
        }
      }
    }
  },
  created(){
      this.getProfile()
  },
  
};
</script>

<style>

</style>
