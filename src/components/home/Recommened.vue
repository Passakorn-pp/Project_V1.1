<template>
  <div>
    <div class="container-Recommened-header" id="container-detail-header" v-if="this.$store.getters.getUserstate=='User'"> 
      <h3 class="header-text" style="font-size: 50px;"><h1 style="display: inline-block; font-size: 100px;">คุณ</h1>อาจจะชอบ</h3>
    </div>
    <div class="container-Recommened-header" id="container-detail-header" v-else> 
      <h3 class="header-text" style="font-size: 50px;"><h1 style="display: inline-block; font-size: 100px;">ระยะทาง</h1>ใกล้มหาลัย</h3>
    </div>
    
    <div class="container-Recommened" id="axz" v-if="this.$store.getters.getUserstate=='User'">
      <flickity ref="flickity" :options="flickityOptions" >
      
        <div v-for="(s,i) in room" :key="i" class="container-Recommened-card" @click="setview2(s)" >
          <img :src="s[0].img" class="container-Recommened-card-img" >
          <div class="container-Recommened-card-text">
            <h6 style="float: left;">{{s[0].name}} </h6>
            <div style="display: inline-block;">
              <b-form-rating  v-model="s[0].star" readonly no-border variant="warning" style="background: none; float: left; margin-top:-7%" class="rating-recommend"></b-form-rating>      
            </div>
            <br>
            <h6 style="line-height: 0.5; margin-right:5px;   float: left;">ราคา</h6>
              <div v-if="s[0].room.length>1">
                <h6 style="line-height: 0.5; margin-right:5px;   float: left;">{{s[0].room[0].price}}</h6>
                <h6 style="line-height: 0.5; margin-right:5px;   float: left;">- {{s[0].room[s[0].room.length-1].price}}</h6>
              </div>
              <div v-else>
                <h6 style="line-height: 0.5; margin-right:5px;   float: left;">{{s[0].room[0].price}}</h6>
              </div>
          
            <h6 style="line-height: 0.5;   float: left;">บาท </h6>
            <br>
            <h6 style="line-height: 0.5 ;" v-if="s[0].distance==0"> ระยะทางจากมหาลัย {{s[0].distance}} กิโลเมตร</h6>
            <h6 style="line-height: 0.5 ;" v-else> ระยะทางจากมหาลัย {{s[0].distance}} กิโลเมตร</h6>
          </div> 

        </div>
      </flickity>
    </div>

    <div class="container-Recommened" v-else>
      <flickity ref="flickity" :options="flickityOptions" >
      
        <div v-for="(s,i) in room" :key="i" class="container-Recommened-card" @click="setview(s)" >
          
          <img :src="s.img" class="container-Recommened-card-img" >
          <div class="container-Recommened-card-text">
            <h6 style="float: left;">{{s.name}} </h6>
            <div style="display: inline-block;">
              <b-form-rating  v-model="s.star" readonly no-border variant="warning" style="background: none; float: left; margin-top:-7%" class="rating-recommend"></b-form-rating>      
            </div>
            <br>
            <h6 style="line-height: 0.5; margin-right:5px;   float: left;">ราคา</h6>
              <div v-if="s.room.length>1">
                <h6 style="line-height: 0.5; margin-right:5px;   float: left;">{{s.room[0].price}}</h6>
                <h6 style="line-height: 0.5; margin-right:5px;   float: left;">- {{s.room[s.room.length-1].price}}</h6>
              </div>
              <div v-else>
                <h6 style="line-height: 0.5; margin-right:5px;   float: left;">{{s.room[0].price}}</h6>
              </div>
          
            <h6 style="line-height: 0.5;   float: left;">บาท </h6>
            <br>
            <h6 style="line-height: 0.5 ;" v-if="s.distance==0"> ระยะทางจากมหาลัย {{s.distance}} กิโลเมตร</h6>
            <h6 style="line-height: 0.5 ;" v-else> ระยะทางจากมหาลัย {{s.distance}} กิโลเมตร</h6>
          </div> 

        </div>
      
        
    
        
        
      </flickity>
          
          
        
    </div>
      
  </div>
</template>

<script>
import Axios from "axios";
let mongo_api = "/api/getDormitory/";
let recommdent = "https://accommodation.pjjop.org/getauto/"
let recommdent_api = "https://accommodation.pjjop.org/getapri/";
let history_api = "/api/history/";
let d_recomment = "/api/GetReccomend/"
let data_user = "/api/GetData/"

// import { slider, slideritem } from 'vue-concise-slider';
import Flickity from 'vue-flickity';
export default {
  name: "head-detail",
  components: {
        Flickity
    },
  data() {
    return {
      id_user : "",
      slideIndex: 1,
      silder: 0,
      flickityOptions: {
        prevNextButtons: true,
        pageDots: false,
        wrapAround: true,
        draggable: false,
        // any options from Flickity can be used
      },
      room : [{},{},{},{},{},{},{},{},{},{}],
      
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
  created(){
    // this.getProfile()
    if(this.$store.getters.getUserstate == "null"){
      Axios.get(this.$store.getters.getApi+mongo_api)
      .then(res => {
        this.room = res.data.dormitory
        for(var i = 0; i<this.room.length; i++){
          if(this.room[i].distance > 0.8 || this.room[i].distance == 0){
            this.room.splice(i, 1)
            i=0;
          }
        }
    
      })
      .catch(err => alert(err));
    }
    else{
      const liff = this.$liff
      liff.getProfile()
      .then(profile => {
        this.userProfile = profile
        this.id_user = this.userProfile['userId']


        Axios.post(this.$store.getters.getApi+data_user,{"id_user" : this.id_user})
        .then(res => {
          
          const behavior = res.data[0].behavior
          const id = res.data[0].id
          // console.log(behavior);
          Axios.post(recommdent,{"UserID": id})
          .then(res => {
            if(res.data.results.dormitory != null){
              console.log("auto");
              Axios.post(this.$store.getters.getApi+d_recomment,{"dormitory" : res.data.results.dormitory})
              .then(res => {
                this.room = res.data.dormitory  
              })
              .catch(err => alert(err));
            }
            else{
              console.log("api");
              Axios.post(recommdent_api,{"Act" : behavior})
              .then(res => {
                // console.log(res.data.results.dormitory);
                if(res.data.results.dormitory != null){
                  Axios.post(this.$store.getters.getApi+d_recomment,{"dormitory" : res.data.results.dormitory})
                  .then(res => {
                    this.room = res.data.dormitory  
                  })
                  .catch(err => alert(err));
                }
                else{
                  console.log("ระยะทาง");
                  Axios.get(this.$store.getters.getApi+mongo_api)
                  .then(res => {
                    var r = res.data.dormitory
                    var r2 = []
                    for(var i in r){
                      // console.log(r[i]);
                      if(r[i].distance < 0.8){
                        r2.push([r[i]])
                      }
                    }
                    
                    this.room = r2;
                    // console.log(this.room);
                  })
                  .catch(err => alert(err));
                }
                
              })
              .catch(err => {
                console.log(err);
                
              });
            }
          })
          .catch(err => alert(err));
        })
        .catch(err => alert(err));


      })
      .catch((err) => {
        console.error('LIFF initialize error', err)
      })
      
    }
    
  },
  methods: {
    getProfile(){
      const liff = this.$liff
      liff.getProfile()
      .then(profile => {
        this.userProfile = profile
        this.id_user = this.userProfile['userId']
      })
      .catch((err) => {
        console.error('LIFF initialize error', err)
      })
    },
    next() {
      this.$refs.flickity.next();
    },
    
    previous() {
      this.$refs.flickity.previous();
    },
    setview2(value){
      // this.$store.dispatch("addView",value);
      Axios.post(this.$store.getters.getApi+history_api,{"name": value[0].name,"user_id":this.id_user})
      .then(() => {
        this.$router.push({name:'view',params:{Name:value[0].name}});
      })
      .catch(err => alert(err));
      
      
    },
    setview(value){
      // this.$store.dispatch("addView",value);
      Axios.post(this.$store.getters.getApi+history_api,{"name": value.name,"user_id":this.id_user})
      .then(() => {
        this.$router.push({name:'view',params:{Name:value.name}});
      })
      .catch(err => alert(err));
      
      
    },
    check(index) {
      console.log(index);
    },


    
  },
  beforeDestroy(){
    
    // this.$store.dispatch("addhome",this.slides);
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
  margin-top:50px;

  
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
