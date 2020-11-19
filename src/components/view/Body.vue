<template>
  <div >
    <div v-for="(rooms,index) in this.$store.getters.getView_home.room.length" :key="index">
        <div class="contianer-room">
          <img src="@/assets/33.jpg" class="img-room" />
          <div class="container-detil-room"  >
            <h3>{{nameroom[index].nameroom}}</h3>
            <text-detil-room style=" float: left; margin-left:5%">ราคา {{nameroom[index].price}}</text-detil-room>
            <br>
            <br>
            <div style="margin-left:-3%">
              <div v-if="home.wifi" >
                <img src="@/assets/wifi.png"  class="img-icon-view-head" style="float: left; margin-left:15px">
                
              </div >
              <div v-if="home.air">
                <img src="@/assets/air-conditioner (1).png" class="img-icon-view-head" style="float: left; margin-left:15px">
                
              </div>
              <div v-if="home.fan">
                <img src="@/assets/fan (1).png" class="img-icon-view-head" style="float: left; margin-left:15px">
                
              </div>
              <div v-if="home.typeMen">
                <img src="@/assets/man.png" class="img-icon-view-head" style="float: left; margin-left:15px">
                
              </div>
              
              <div v-if="home.typeWomen">
                <img src="@/assets/woman.png" class="img-icon-view-head" style="float: left;">
                
              </div>
            </div>
          </div>

          <img src="@/assets/46.png" class="contianer-Qrcode" />
          
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nameroom : this.$store.getters.getView_home.room, 
      price : null,
      home :  this.$store.getters.getView_home
    }
  },
  
}
  
</script>

<style>
.contianer-room{
  width: 80%;
  height: 250px;
  border: 1px solid black;
  border-radius: 15px;
  margin: 5% auto;
  overflow: hidden;
}
.img-room{
  width: 250px;
  height: 250px;
  float: left;
}
.container-detil-room{
  float: left;
  padding: 2%;
  text-align: left;
  width: 30%;
}
.contianer-Qrcode{
  width: 250px;
  height: 250px;
  float: right;
}
.text-detil-room{
  font-size: 28px;
}
</style>
