<template>
  <div>
    <h4 style="padding:2%; background: #e4c785; width: 60%; margin:auto; margin-top:3%; border-top-left-radius: 15px; border-top-right-radius: 15px;">ข้อมูลหอพัก</h4>
    <div class="tablemodify">
      <div style="padding:4%; width:50%; float: left;">
        <div style="width:100%; overflow: hidden;">
          <label style="float: left;">คณะวิทยาศาสตร์ : </label>
          <label style="float: right; margin-left:2%; "> คน </label>
          <input style="margin-right:2%; width:50px; hight:80px; float: right;   border: 1px solid silver;">
         
        </div>
        
        <div style="width:100%; overflow: hidden;">
          <label style="float: left;">คณะจิตรกรรม : </label>
          <label style="float: right; margin-left:2%; "> คน </label>
          <input style="margin-right:2%; width:50px; hight:80px; float: right;   border: 1px solid silver;">
          
        </div>
        
        <div style="width:100%; overflow: hidden;">
          <label style="float: left;">คณะมัณฑนศิลป์ : </label>
          <label style="float: right; margin-left:2%; "> คน </label>
          <input style="margin-right:2%; width:50px; hight:80px; float: right;   border: 1px solid silver;">
          
        </div>

        <div style="width:100%; overflow: hidden;">
          <label style="float: left;">คณะศึกษาศาสตร์ : </label>
          <label style="float: right; margin-left:2%; "> คน </label>
          <input style="margin-right:2%; width:50px; hight:80px; float: right;   border: 1px solid silver;">
          
        </div>

        <div style="width:100%; overflow: hidden;">
          <label style="float: left;">คณะอักษรศาสตร์ : </label>
          <label style="float: right; margin-left:2%; "> คน </label>
          <input style="margin-right:2%; width:50px; hight:80px; float: right;   border: 1px solid silver;">
          
        </div>

        <div style="width:100%; overflow: hidden;">
          <label style="float: left;">คณะเภสัชศาสตร์ : </label>
          <label style="float: right; margin-left:2%; "> คน </label>
          <input style="margin-right:2%; width:50px; hight:80px; float: right;   border: 1px solid silver;">
          
        </div>

        <div style="width:100%; overflow: hidden;">
          <label style="float: left;">คณะวิศวกรรมศาสตร์ : </label>
          <label style="float: right; margin-left:2%; "> คน </label>
          <input style="margin-right:2%; width:50px; hight:80px; float: right;   border: 1px solid silver;">
          
        </div>
        
      </div>
      
      
      <div style="padding:4%; width:50%; float: left;">
        <div style="width:100%; overflow: hidden;">
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
          <input style="margin-right:2%; width:100px; hight:80px; float: right;   border: 1px solid silver;">
          
        </div>
        <div style="width:100%; overflow: hidden;">
          <label style="float: left;">เบอร์โทร : </label>
          <input style="margin-right:14%; width:100px; hight:80px; float: right;   border: 1px solid silver;">
          
        </div>
        <div style="width:100%; overflow: hidden;">
          <label style="float: left;">facebook : </label>
          <input style="margin-right:14%; width:100px; hight:80px; float: right;   border: 1px solid silver;">
          
        </div>
        <div style="width:100%; overflow: hidden;">
          <label style="float: left;">LINE : </label>
          <input style="margin-right:14%; width:100px; hight:80px; float: right;   border: 1px solid silver;">
          
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.tablemodify{
    margin:  auto;
    height: 300px;
    width: 60%;
    border: 1px solid silver;
    overflow: hidden;
    margin-bottom: 5%;
}
</style>