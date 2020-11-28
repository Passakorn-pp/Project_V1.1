<template>
  <div>
    <div style="margin: auto; width:70%">
      <flickity ref="flickity" :options="flickityOptions" >
        <div class="carousel-cell" v-for="index in 10" :key="index">
          <h2 class="img-view" >{{index}} </h2>
            
        </div>
      </flickity>
    </div>
    <div style="margin: 1% auto; width:70%">
      <flickity ref="flickity2" :options="flickityOptions" >
        <div class="carousel-cell-small" v-for="index in 10" :key="index" @click="setphoto(index)">
          <h2 class="img-view" >{{index}} </h2>
              
        </div>
      </flickity>
    </div>
    
  </div>
</template>

<script>

import Flickity from 'vue-flickity';
export default {
  components: {
    Flickity
  },
  data() {
    return {
      flickityOptions: {
        pageDots: false,
        wrapAround: true,
        draggable: false,
        prevNextButtons: true,
        // any options from Flickity can be used
      },
        
       }
  },
   methods: {
    setphoto(index) {
      this.$refs.flickity.select(index-1);
      this.$refs.flickity2.select(index-1);
    },
  }
};
</script>

<style>
.carousel-cell-small{
  width: 125px;
  height: 125px;
  color: black;
  position: relative;
  float: left;
  margin-right: 15px;
  background: aquamarine;
}
.carousel-cell {
  width:100%; /* full width */
  height: 400px;
  background: #222;
  /* center images in cells with flexbox */
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  overflow: hidden;
}

.carousel.is-fullscreen .carousel-cell {
  height: 100%;
}

.carousel-cell img {
  display: block;
  max-height: 100%;
}
.img-view{
  height: 400px;
  width: 100%;
}
</style>
