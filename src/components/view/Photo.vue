<template>
  <div>
    <div style="margin: auto; width:50%">
      <flickity ref="flickity" :options="flickityOptions" >
        <div class="carousel-cell" v-for="index in 5" :key="index">
          <img src="@/assets/34.jpg" class="img-view">
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
        initialIndex: 3,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: true
        
        // any options from Flickity can be used
      },
        
       }
  },
};
</script>

<style>
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
