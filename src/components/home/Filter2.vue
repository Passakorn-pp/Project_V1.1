<template>
  <div class="container-filter2">
    <div class="container-filter-type" >
      <br>
      <img src="@/assets/user.png" class="container-filter-type-img" @click="link()">
      <p style="color:black">ใกล้มหาลัย</p>
    </div>
      
    <div class="container-filter-type" >
      <br>
      <img src="@/assets/user.png" class="container-filter-type-img">
      <p style="color:black">ราคายอดนิยม</p>
    </div>
    <div class="container-filter-type" >
      <br>
      <img src="@/assets/user.png" class="container-filter-type-img">
      <p style="color:black">เรทติ้ง</p>
    </div>
    <div class="container-filter-type" >
      <br>
      <img src="@/assets/user.png" class="container-filter-type-img">
      <p style="color:black">คณะ</p>
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
  height: 100px;
  width: 100%;
  margin: auto;
  margin-bottom: 5%;
  position: relative;
  
}
.container-filter-type:hover{
  cursor: pointer;
  box-shadow: 0 0 8px #f6c026;
}
.container-filter-type{
  background: white;
  height: 120px;
  width: 120px;
  margin: auto;
  float: left;
  position: relative;
  left: 32%;
  margin-right: 30px;
  border-radius:100px;

}
.container-filter-type-img{
  height: 50px;
  width: 50px;
  color:#f6c026;

}
</style>
