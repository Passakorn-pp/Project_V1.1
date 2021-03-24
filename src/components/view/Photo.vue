<template>
  <div>
    <div style="margin: auto; width:70%">
      <flickity ref="flickity" :options="flickityOptions" >
        <div class="carousel-cell" v-for="(r,index) in rooms" :key="index">
          <img :src="r.img" style="width: 100%; height: 100%;">
            
        </div>
      </flickity>
    </div>
    <div style="margin: 1% auto; width:70%">
      <flickity ref="flickity2" :options="flickityOptions" >
        <div class="carousel-cell-small" v-for="(r,index) in rooms" :key="index" @click="setphoto(index)">
          <img :src="r.img" style="width: 100%; height: 100%;">
              
        </div>
      </flickity>
    </div>
    
  </div>
</template>

<script>
let mongo_api = "/api/DormitoryClick/";
import Flickity from 'vue-flickity';
import Axios from "axios";
export default {
  components: {
    Flickity
  },
  data() {
    return {
      flickityOptions: {
        pageDots: false,
        wrapAround: false,
        draggable: false,
        prevNextButtons: true,
        // any options from Flickity can be used
      },
      rooms:[
        {
          room:"https://sv1.picz.in.th/images/2020/12/10/j5fADI.jpg",
        },
        {
          room:"https://sv1.picz.in.th/images/2020/12/10/j5fj60.jpg",
        }
        ,
        {
          room:"https://sv1.picz.in.th/images/2020/12/10/j5fOY8.jpg",
        }
        ,
        {
          
          room:"https://sv1.picz.in.th/images/2020/12/10/j5fbRR.jpg",
        }
        ,
        {
          room:"https://sv1.picz.in.th/images/2020/12/10/j5flMu.jpg",
        }
        ,
        {
          room:"https://sv1.picz.in.th/images/2020/12/10/j5fD1Z.jpg",
        }
        ,
        {
          room:"https://sv1.picz.in.th/images/2020/12/10/j5flMu.jpg",
        }
        ,
        {
          room:"https://sv1.picz.in.th/images/2020/12/10/j5fD1Z.jpg",
        }
        ,
        {
          room:"https://sv1.picz.in.th/images/2020/12/10/j5fbRR.jpg",
        }
        ,
        {
          room:"https://sv1.picz.in.th/images/2020/12/10/j5fADI.jpg",
        }
      ]
    }
  },
  methods: {
    setphoto(index) {
      this.$refs.flickity.select(index);
      this.$refs.flickity2.select(index);
    },
  },
  created(){
    Axios.post(this.$store.getters.getApi+mongo_api,{"name" : this.$route.params.Name})
        .then(res => {
          this.rooms = res.data.imgall

        })
        .catch(err => alert(err));
  },

  
  
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
  background: white;
}
.carousel-cell {

  width:100%; /* full width */
  height: 400px;
  background: white;
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
