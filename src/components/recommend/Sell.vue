<template>
  <div>
      <div class="container-sell">
          <div class="cotainer-sell-room-head">
              <h3>ลดราคา</h3>
          </div>
          <div v-for="(room,index) in this.$store.getters.gethome" :key="index">
              <div class="cotainer-sell-room">
                  <div class="cotainer-sell-room-left">
                      <img class="img-sell-room" :src="room.img"/>
                  </div>
                  <div class="cotainer-sell-room-right">
                      <h6>{{room.name}}</h6>
                      <h6>ราคา <s>{{room.room[0].price}} </s> </h6>
                      <h4 style="color:red;"><img src="@/assets/right-arrow.png" style="margin-top:-2%; width:20px; height:20px;"> 2800</h4>
                  </div>
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
.cotainer-sell-room-head{
    width: 100%;
    height: 50px;
    padding: 5%;
    text-align: left;
    background:#e4c785;
    color: white;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
}
.img-sell-room{
    width: 100px;
    height: 100px;
}
.container-sell{
    height: 100%;
    width: 18%;
    background: #f8f6e7;
    z-index: 99;
    position: absolute;
    right: 2%;
    top: 25%;
    overflow: auto;

    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
}
.cotainer-sell-room{
    height: 100%;
    width: 90%;
    overflow: hidden;
    background: white;
    margin: auto;
    margin-top: 2%;
    
}
.cotainer-sell-room-left{
    float: left;
    width: 40%;
    height: 100%;

}
.cotainer-sell-room-right{
    text-align: left;
    padding: 5%;
    float: left;
    width: 60%;
    height: 100%;
}
@media only screen and (max-width: 1400px){
    .container-sell{
        display: none;
    }
}
</style>