<template>
<div>
  <div style="margin: auto; margin-top:5%;">
    <h3>ประเภทหอพัก</h3>
  </div>
  <div class="container-filter2">
    <div class="container-filter-type" @click="filter('ทั้งหมด')" >

      <img src="@/assets/all.png" class="container-filter-type-img">
      <p style="color:black">หอพักทั้งหมด</p>
    </div>
      
    <div class="container-filter-type"  @click="filter('หอพักเงียบสงบ')">

      <img src="https://sv1.picz.in.th/images/2020/11/24/jdcTue.jpg" class="container-filter-type-img" >
      <p style="color:black">หอพักเงียบสงบ</p>
    </div>
    <div class="container-filter-type" @click="filter('หอพักครื้นเครง')">

      <img src="https://sv1.picz.in.th/images/2020/11/24/jdctMl.jpg" class="container-filter-type-img" >
      <p style="color:black">หอพักครื้นเครง</p>
    </div>
    <div class="container-filter-type" @click="filter('หอพักย่านของกิน')">

      <img src="https://sv1.picz.in.th/images/2020/11/24/jdwk2R.jpg" class="container-filter-type-img" >
      <p style="color:black">หอพักย่านของกิน</p>
    </div>
  </div>
</div>  
</template>

<script>
export default {
  methods:{
    filter(index){
      console.log(index + " :click");
      localStorage.setItem('indexfilter',index);
      this.$router.push('/recommend');

    }
  }
};
</script>

<style>
.container-filter2{
  height: 100%;
  width: 100%;
  margin: 2% auto;
  margin-bottom: 5%;
  position: relative;

}
.container-filter-type:hover{
  cursor: pointer;
  box-shadow: 0 0 8px #f6c026;
}
.container-filter-type{

  height: 250px;
  width: 250px;
  margin: auto 0.5%;
  display: inline-block;

}
.container-filter-type-img{
  height: 210px;
  width: 250px;
  margin: auto;
  margin-bottom:5% ;
  color:#f6c026

}
</style>
