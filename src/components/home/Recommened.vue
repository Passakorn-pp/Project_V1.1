<template>
  <div>
    <div class="container-Recommened-header" id="container-detail-header" v-if="this.$store.getters.getView_use"> 
      <h3 class="header-text" style="font-size: 50px;"><h1 style="display: inline-block; font-size: 100px;">คุณ</h1>อาจจะชอบ</h3>
    </div>
    <div class="container-Recommened-header" id="container-detail-header" v-else> 
      <h3 class="header-text" style="font-size: 50px;"><h1 style="display: inline-block; font-size: 100px;">ระยะทาง</h1>ใกล้มหาลัย</h3>
    </div>
    
    <div class="container-Recommened" id="axz">

         
          
          <flickity ref="flickity" :options="flickityOptions" >
            <br>
              <div v-for="(s,i) in recommend" :key="i" class="container-Recommened-card" @click="setview(s)">
                <img :src="s.img" class="container-Recommened-card-img" >
                <div class="container-Recommened-card-text">
                  <h6 style="float: left;">{{s.name}} </h6>
                  <div style="display: inline-block;">
                    <b-form-rating  v-model="s.star" readonly no-border variant="warning" style="background: none; float: left; margin-top:-7%" class="rating-recommend"></b-form-rating>      
                  </div>
                  
                  <h6 style="line-height: 0.5 ;">ราคา {{ s.room && s.room.length > 0 ? s.room[0].price : '' }}-{{s.room['1'].price}} บาท</h6>
                  <h6 style="line-height: 0.5 ;"> ระยะทางจากมหาลัย{{s.distance}} เมตร</h6>
                </div> 
              </div>
              
          </flickity>
          
        
    </div>  
  </div>
</template>

<script>
import Axios from "axios";
let mongo_api = "http://127.0.0.1:8000/api/getuser";
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
        prevNextButtons: true,
        pageDots: false,
        wrapAround: true,
        draggable: false
        
        // any options from Flickity can be used
      },
      recommend:[
        {}
      ],
      
      slides: [
        {
          name: "หอพักอนงค์",
          water_bill : "150 บาท/เดือน",
          elect_bill : "7 บาท/หน่วย",
          img : "https://sv1.picz.in.th/images/2020/11/24/jdwk2R.jpg",
          room:
          [
            {
              nameroom : "ห้องเล็ก",
              price : "2800",
              free : 4,
              img : "",
            },
            {
              nameroom : "ห้องใหญ่",
              price : "3500",
              free : 10,
              img : "",
            }
          ],
          face:"หอพักอนงค์",
          line:"หอพักอนงค์",
          call:"012-345-6789",
          address:"",
          star: 4,
          distance: 2000,

          comment: "",
          selected: ["woman","man","wifi","air","fan","tv","refrigerator","table","parking_lot","elevators","security camera","keycard","laundry"],
        },
        {
          name: "หอพักสนามจันทร์",
          water_bill : "150 บาท/เดือน",
          elect_bill : "7 บาท/หน่วย",
          img : "https://sv1.picz.in.th/images/2020/11/24/jdc9Rt.jpg",
          room:
          [
            {
              nameroom : "ห้องเล็ก",
              price : "3000",
              free : 5,
            },
            {
              nameroom : "ห้องใหญ่",
              price : "3500",
              free : 5,
            }
          ],
          face:"หอพักสนามจันทร์",
          line:"หอพักสนามจันทร์",
          call:"012-345-6789",
          address:"",
          star: 5,
          distance: 3000,
          selected: ["woman","man","wifi","air","fan","tv","refrigerator","table","parking_lot","elevators","security camera","keycard","laundry"],
        },
        {
          name: "หอพักวีเจ",
          water_bill : "150 บาท/เดือน",
          elect_bill : "7 บาท/หน่วย",
          img : "https://sv1.picz.in.th/images/2020/11/24/jdcTue.jpg",
          room:
          [
            {
              nameroom : "ห้องเล็ก",
              price : "2700",
              free : 6,
            },
            {
              nameroom : "ห้องใหญ่",
              price : "3500",
              free : 1,
            }
          ],
          face:"หอพักวีเจ",
          line:"หอพักวีเจ",
          call:"012-345-6789",
          address:"",
          star: 5,
          distance: 1000,
          selected: ["woman","man","wifi","air","fan","tv","refrigerator","table","parking_lot","elevators","security camera","keycard","laundry"],
        },
        {
          name: "หอพักน้ำไทย",
          water_bill : "150 บาท/เดือน",
          elect_bill : "7 บาท/หน่วย",
          img : "https://sv1.picz.in.th/images/2020/11/24/jdctMl.jpg",
          room:
          [
            {
              nameroom : "ห้องเล็ก",
              price : "3500",
              free : 10,
            },
            {
              nameroom : "ห้องใหญ่",
              price : "3500",
              free : 2,
            }
          ],
          face:"หอพักน้ำไทย",
          line:"หอพักน้ำไทย",
          call:"012-345-6789",
          address:"",
          star: 4,
          distance: 500,
          selected: ["woman","man","wifi","fan","tv","refrigerator","table","parking_lot","elevators","security camera","keycard","laundry"],
        },     
      ]
    };
  },
  // async created(){
  //   var response = await fetch('http://127.0.0.1:8000/api/horpaks/');
  //   this.slides = await response.json();
    
  // },
  async created(){
    await Axios.get(mongo_api)
      .then(res => {
        this.recommend = res.data
      })
      .catch(err => alert(err));
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
  text-align: left;
  padding: 2%;
  background: #f8f6e7;
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

  
}

.container-Recommened-header {
  height: 120px;
  width: 80%;
  background-image: url("15.jpg");
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  /* background: #f2f2f7; */
  left: 10%;
  margin-top: 2%;
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
@media only screen and (max-width: 800px) {
   .container-Recommened-card{
     height: 250px;
     width: 250px;
   }
   .container-Recommened-card-img{
     height: 50%;
   }
   .container-Recommened-card-text{
     height: 50%;

   }
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
