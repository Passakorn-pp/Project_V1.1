<template>
  <div>
    <div class="container-Recommened-header" id="container-detail-header"> 
      <h3 class="header-text" style="font-size: 50px;"><h1 style="display: inline-block; font-size: 100px;">คุณ</h1>อาจจะชอบ</h3>
    </div>
    
    <div class="container-Recommened" >
        <div class="container-Recommened-slide-overflow">
      
          <flickity ref="flickity" :options="flickityOptions">
            <br>
              <div v-for="(s,i) in slides" :key="i" class="container-Recommened-card" @click="setview(s)">
                <img src="@/assets/34.jpg" class="container-Recommened-card-img" >
                <div class="container-Recommened-card-text">
                  <br>
                  <br>
                  <p>{{s.name}}</p>
                </div> 
              </div>
              
          </flickity>
          
        </div>
    </div>  
  </div>
</template>

<script>

// import { slider, slideritem } from 'vue-concise-slider';
import Flickity from 'vue-flickity';
export default {
  name: "head-detail",
  components: {
        Flickity
    },
  data() {
    return {
      
      slideIndex: 1,
      silder: 0,
      flickityOptions: {
        initialIndex: 3,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: true
        
        // any options from Flickity can be used
      },
      students:[],
      
      slides: [
        {
          name: "หอพักบ้านแก้ว",
          water_bill : "150 บาท/เดือน",
          elect_bill : "7 บาท/หน่วย",
          room:
          [
            {
              nameroom : "ห้องเล็ก",
              price : "3000",
            },
            {
              nameroom : "ห้องใหญ่",
              price : "3500",
            }
          ],
          wifi: true,
          air: true,
          fan: true,
          typeMen: true,
          typeWomen: true
        },
        {
          name: "หอพักเจเต",
          water_bill : "150 บาท/เดือน",
          elect_bill : "7 บาท/หน่วย",
          room:
          [
            {
              nameroom : "ห้องเล็ก",
              price : "3000",
            },
            {
              nameroom : "ห้องใหญ่",
              price : "3500",
            }
          ],
          wifi: true,
          air: true,
          fan: true,
          typeMen: true,
          typeWomen: true
        },
        {
          name: "หอพักกินนอน",
          water_bill : "150 บาท/เดือน",
          elect_bill : "7 บาท/หน่วย",
          room:
          [
            {
              nameroom : "ห้องเล็ก",
              price : "3000",
            },
            {
              nameroom : "ห้องใหญ่",
              price : "3500",
            }
          ],
          wifi: true,
          air: true,
          fan: true,
          typeMen: true,
          typeWomen: true
        },
        {
          name: "หอพัก",
          water_bill : "150 บาท/เดือน",
          elect_bill : "7 บาท/หน่วย",
          room:
          [
            {
              nameroom : "ห้องเล็ก",
              price : "3500",
            },
            {
              nameroom : "ห้องใหญ่",
              price : "3500",
            }
          ],
          
          wifi: true,
          air: true,
          fan: true,
          typeMen: true,
          typeWomen: true
        },     
      ]
    };
  },
  async created(){
    var response = await fetch('http://127.0.0.1:8000/api/horpaks/');
    this.slides = await response.json();
    
  },
  methods: {
    next() {
      this.$refs.flickity.next();
    },
    
    previous() {
      this.$refs.flickity.previous();
    },
    setview(value){
      this.$store.dispatch("addView",value);
      this.$router.push('/view');
      
    },
    check(index) {
      console.log(index);
    },
    slide_lift(){
      document.getElementById("detail_slide").style = "left : -20px "
    },
    slide_right(){
      document.getElementById("detail_slide").style = "left : 20px"
    },
    plusSlides(n) {
      this.showSlides((this.slideIndex += n));
    },
    currentSlide(n) {
      this.showSlides((this.slideIndex = n));
    },
    
  },
  beforeDestroy(){
    
    this.$store.dispatch("addhome",this.slides);
  }
};
</script>

<style>

.container-Recommened-slide-overflow{

  width: 100%;
  height: 100%;
  overflow: hidden;
  margin: auto;
}

.container-Recommened-card-img{
  width: 100%;
  height: 65%;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
}
.container-Recommened-card-text{
  width: 100%;
  height: 35%;

}
.container-Recommened-card:hover{
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}
.container-Recommened-card.is-selected{
 
  
}
.container-Recommened-card{
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 300px;
  height: 300px;
  color: black;
  position: relative;
  margin-right: 15px;
  border-radius: 30px;
  background: white;
  float: left;
  
}
.row:after {
  content: "";
  display: table;
  clear: both;
}
.column {
  float: left;
  margin-left: 42px;
}
.img-Recommened-slide {
  width: 400px;
  height: 400px;
  float: left;
  position: relative;
  left: 10%;
  margin-top:2%;
  background: aqua; 
}

/* Caption text */
.text {
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
}



.container-Recommened {
  height: 350px;
  width:70%;
  /* background:  linear-gradient(to bottom right, #ffffff, #F9EEB6  ); */
  background: white;
  border-radius: 30px;
  color: white;
  margin: auto;
  margin-top: 10%;
  
  
}

.container-Recommened-header {
  height: 120px;
  width: 80%;
  background-image: url("15.jpg");
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  /* background: #f2f2f7; */
  left: 10%;
  margin-top: -8%;
  border-radius: 2px;
  
}
.header-text {
  
  height: 120px;
  text-align: center;
  color: black;
  background: white;
  position: relative;
  font-weight: bold;
  mix-blend-mode: screen;
  margin: auto;

}
.container-card {
  margin: auto;
  height: 300px;
  width: 100%;
}
.card-Recommened {
  height: 220px;
  width: 220px;
  cursor: pointer;

  box-shadow: 0 8px 12px 0 rgba(0, 0, 0, 0.2);
}
.ul-Recommened {
  width: 100%;
  margin: 0;
  position: relative;
  top: 90%;
  left: 48.5%;
  transform: translate(-50%, -50%);
}
.li-Recommened {
  display: inline-block;
  margin: auto;
  margin-left: 2%;
  margin-right: 2%;
}
</style>
<!-- <div class="container-card">
    <ul class="ul-detail">
      <li class="li-detail">
        <a href="/recommend"><b-card
        title="ใกล้กับคุณ"
        img-src="https://picsum.photos/600/300/?image=25"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;  "
        class="card-detail"

        ></b-card></a>
      </li>
      <li class ="li-detail">
        <a href="/recommend"><b-card
        title="ราคาถูก"
        img-src="https://picsum.photos/600/300/?image=25"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem; "
        class="card-detail"

        ></b-card></a>
      </li>
      <li class ="li-detail">
        <a href="/recommend"><b-card
        title="ใกล้ของกิน"
        img-src="https://picsum.photos/600/300/?image=25"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="card-detail"

      ></b-card></a>
      </li>
    </ul>
    
  </div> -->
