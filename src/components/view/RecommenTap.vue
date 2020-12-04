<template>
  <div>
    <div class="container" v-for="i in 5" :key="i" >
      <div class="box-img">
        <img :src="img" class="img">
      </div>
      <div class="box-detail">
        
      </div>
    </div>
    
  </div>
</template>

<script>

export default {

  data() {
    return {
      img: this.$store.getters.getView_home.img
    }
  },
}
</script>

<style scoped>
.container{
  height: 150px;
  width: 100%;
  margin: 5% 0;

  position: relative;
  background: rgb(248, 243, 229);
}
.box-img{
  width: 35%;
  height: 100%;
  float: left;

}
.box-detail{
  width: 65%;
  float: left;
  height: 100%;

}
.img{
  height: 150px;
  width: 100%;
}
</style>