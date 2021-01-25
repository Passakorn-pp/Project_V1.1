<template>
  <div>
    <h4 style="padding:2%; background: #e4c785; width: 60%; margin:auto; margin-top:3%; border-top-left-radius: 15px; border-top-right-radius: 15px;">ข้อมูลส่วนตัว</h4>
    <div class="table-modify">
      <div style="padding:4%; ">
        <label>คณะ : </label>
        <select  v-model="selection" style="margin-left:2%; width:150px; hight:80px;   border: 1px solid silver; " >
            <option value="วิทยาศาสตร์" >วิทยาศาสตร์</option>
            <option value="ศึกษาศาสตร์">ศึกษาศาสตร์</option>
        </select>
      </div>
      <div>
        <label>เพศ : </label>
        <input type="radio" id="ชาย" name="drone" style="margin-left:2%;" />
        <label for="ชาย" style="margin-left:1%;" >ชาย</label>
        <input type="radio" id="หญิง" name="drone" style="margin-left:2%;"/>
        <label for="หญิง" style="margin-left:1%;">หญิง</label>
      </div>
      
      <button style="background: #e4c785; padding:1%; margin-top:3%; border-radius: 15px;">ยืนยัน</button>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selection:"วิทยาศาสตร์",
    }
  },
}
</script>

<style scoped>
.table-modify{
    
    margin:  auto;
    height: 300px;
    width: 60%;
    border: 1px solid silver;
    overflow: hidden;
    margin-bottom: 5%;
}
</style>