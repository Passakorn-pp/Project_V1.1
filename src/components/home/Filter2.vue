<template>
<div>
  <div style="margin: 3% auto">
    <H3>ช่วยเลือกหอพัก</H3>
  </div>
  <div class="container-filter2">
    <div class="container-filter-type" >

      <img src="@/assets/user.png" class="container-filter-type-img" @click="link()">
      <p style="color:black">หอพักทั้งหมด</p>
    </div>
      
    <div class="container-filter-type" >

      <img src="@/assets/user.png" class="container-filter-type-img">
      <p style="color:black">หอพักเงียบสงบ</p>
    </div>
    <div class="container-filter-type" >

      <img src="@/assets/user.png" class="container-filter-type-img">
      <p style="color:black">หอพักครื้นเครง</p>
    </div>
    <div class="container-filter-type" >

      <img src="@/assets/user.png" class="container-filter-type-img">
      <p style="color:black">หอพักย่านของกิน</p>
    </div>
  </div>
</div>  
</template>

<script>
export default {
  methods:{
    link(){
      this.$router.push('/recommend');
    }
  }
};
</script>

<style>
.container-filter2{
  height: 100%;
  width: 100%;
  margin: 5% auto;
  margin-bottom: 5%;
  position: relative;

}
.container-filter-type:hover{
  cursor: pointer;
  box-shadow: 0 0 8px #f6c026;
}
.container-filter-type{

  height: 200px;
  width: 200px;
  margin: auto 0.5%;
  display: inline-block;

}
.container-filter-type-img{
  height: 120px;
  width: 120px;
  margin: 5% auto;
  color:#f6c026;

}
</style>
