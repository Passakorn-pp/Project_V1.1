<template>
  <div style="margin-bottom:3%">
    <div class="contianer-room-head">
      <h4>ขนาดห้องพัก</h4>
    </div>
    <div style="border: 1px solid silver; max-width: 90%; margin:auto; background: #f8f6e7;">
      <div v-for="(rooms,index) in this.$store.getters.getView_home.room.length" :key="index">
        <div class="contianer-room">
          <div class="left" v-if="index==1">
            <img src="https://sv1.picz.in.th/images/2020/11/24/jdcTue.jpg" class="img-room" />
            
          </div>
          <div class="left" v-else>
            <img src="https://sv1.picz.in.th/images/2020/12/10/j5fj60.jpg" class="img-room" />
            
          </div>
          <div class="center">
            <div class="view-center-text" >{{nameroom[index].nameroom}}</div>
            <div class="text-detil-room">ราคา {{nameroom[index].price}}</div>
            <div style="widht:100%; margin-left:5%; margin-top:1%">
              <div v-if="home.wifi" >
                <img src="@/assets/wifi.png"  class="img-icon-view-head" style="float: left; margin-right:15px">
                
              </div >
              <div v-if="home.air">
                <img src="@/assets/air-conditioner (1).png" class="img-icon-view-head" style="float: left; margin-right:15px">
                
              </div>
              <div v-if="home.fan">
                <img src="@/assets/fan (1).png" class="img-icon-view-head" style="float: left; margin-right:15px">
                
              </div>
              <div v-if="home.typeMen">
                <img src="@/assets/man.png" class="img-icon-view-head" style="float: left; margin-right:15px">
                
              </div>
              
              <div v-if="home.typeWomen">
                <img src="@/assets/woman.png" class="img-icon-view-head" style="float: left; margin-right:15px">
                
              </div>
            </div>
          </div>

          <div class="right">
            
            <img src="@/assets/QRCode.png" class="contianer-Qrcode" />
            
          </div>
          <!-- <img src="@/assets/33.jpg" class="img-room" />
          <div class="container-detil-room"  >
            <h3>{{nameroom[index].nameroom}}</h3>
            <p class="text-detil-room" style=" float: left; margin-left:5%">ราคา {{nameroom[index].price}}</p>
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

          <img src="@/assets/46.png" class="contianer-Qrcode" /> -->
          
        </div>
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
.contianer-room-head{
  width: 90%;
  max-height: 100%;
  text-align: left;
  background: #ECD59F;
  margin: auto;
  margin-top:5%;
  padding: 0.5%;
  border: 1px solid silver;
}
.contianer-room{
  width: 80%;
  height: 250px;
  border: 1px solid silver;
  border-radius: 15px;
  margin:auto;
  margin-top: 2%;
  margin-bottom: 2%;
  overflow: hidden;
  background: white;
}

.contianer-room .left{
  width: 33.3%;
  height: 100%;

  float: left;
}
.contianer-room .center{
  width: 33.3%;
  height: 100%;

  float: left;
}
.view-center-text{
  color: black;
  font-size: 22px;
  text-align: left;
  padding: 5%;
}
.contianer-room .right{
  width: 33.3%;
  height: 100%;

  float: left;
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
  font-size: 20px;
  text-align: left;
  margin: 0 5%;
  margin-bottom: 2%;
  margin-top: -4%;
}

</style>
