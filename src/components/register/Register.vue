<template>
  <div>
    <div>
      <h2>กรอกข้อมูลส่วนตัว</h2>
      <div style="width: 80%; height:20px; border-bottom:0.5px solid silver; margin:auto"></div>
      <br>
      <br>
      <label for="inputname" style="margin-right:3%;">คณะ</label>
      <select v-model="faculty">
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

      <label for="inputname" style="margin-right:3%;">เพศ</label>
      <input type="radio" id="one" value="One" v-model="gender" style="margin-right:1%;">
      <label for="one" style="margin-right:3%;">ชาย</label>
      <input type="radio" id="two" value="Two" v-model="gender" style="margin-right:1%;">
      <label for="two">หญิง</label>

      <br>
      <br>

      <button>ยืนยัน</button>
    </div>

    
    
  </div>
</template>

<script>
export default {
  data(){
    return{
      faculty : null,
      gender : null,
    }
  }
};
</script>

<style>

</style>
