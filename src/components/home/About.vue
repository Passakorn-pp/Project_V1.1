<template>
  <div class="container-home-about" id="about">
    <div class="aboutus">
      <img src="@/assets/logo-1.1.png" style="height:100px; width:100px;">
    </div>
    <div class="aboutus">
      <h6>HaHorHai หาหอพักอย่างสบายและตรงตามความต้องการของคุณ</h6>
      <h6>Contact us</h6>
      <div style="display: inline-block; width:100%; ">
        <img src="@/assets/facebook.png" style="height:30px; width:30px; margin-right:2%; ">
        <img src="@/assets/gmail.png" style="height:30px; width:30px; margin-right:2%; ">
        <img src="@/assets/line.png" style="height:30px; width:30px; margin-right:2%; ">
        <img src="@/assets/twitter.png" style="height:30px; width:30px; margin-right:5%; ">
        <img src="@/assets/phone.png" style="height:30px; width:30px; margin-right:2%; display: inline-block;">
        <h6 style="display: inline-block;">081-234-5678</h6>
      </div>
      
      
        
      
    </div>

  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container-home-about {
  height: 150px;
  width: 100%;
  background: #e4c275;
  color: white;
  z-index: 9999;
  float: left;
}
.aboutus{
  padding: 1%;
  display: inline-block;
}
@media only screen and (max-width: 600px){
  .container-home-about{
    height: 250px;
  }
}
</style>
