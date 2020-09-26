<template>
  <div class="container-photo">
    
       <flickity ref="flickity" :options="flickityOptions">
            <div v-for="(s,i) in slides" :key="i">
                {{i}}
            </div>
        </flickity>
  </div>
  
</template>

<script>
import Flickity from 'vue-flickity';
export default {
  name: "photo",
  components: {
    Flickity
  },
  data: () => ({
    flickityOptions: {
        initialIndex: 3,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: true
        
        // any options from Flickity can be used
      },
    slides: [
      {
        title: "Slide #1",
        content: "Slide content.",
        image: require("@/assets/34.jpg")
      },
      {
        title: "Slide #2",
        content: "Slide content.",
        image: require("@/assets/35.jpg")
      },
      {
        title: "Slide #2",
        content: "Slide content.",
        image: require("@/assets/36.jpg")
      }
    ]
  })
};
</script>
<style scoped>
.container-photo {
  width: 100%;
  height: 300%;
  position: relative;
  
}
.vueperslides__bullet .default {
  background-color: rgba(0, 0, 0, 0.3);
  border: none;
  box-shadow: none;
  transition: 0.3s;
  width: 16px;
  height: 16px;
}

.vueperslides__bullet--active .default {
  background-color: #42b983;
}

.vueperslides__bullet span {
  display: block;
  color: #fff;
  font-size: 10px;
  opacity: 0.8;
}
</style>
