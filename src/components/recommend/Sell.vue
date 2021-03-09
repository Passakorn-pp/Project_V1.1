<template>
  <div>
      <div class="container-sell">
          <div class="cotainer-sell-room-head">
              <h3>ลดราคา</h3>
          </div>
          <div v-for="(room,index) in this.listitems2" :key="index">
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
          <div style="width: 100%; margin-top:5%; display: flex; justify-content: center; ">
              <div @click="changePageSmooth()" style="width: max-content; ">
                    <b-pagination
                        v-model="currentPage"
                        :total-rows="rows"
                        :per-page="perPage"
                        aria-controls="my-table"
                        size="sm"
                    ></b-pagination>
              </div>
              
          </div>
        
      </div>
  </div>
</template>

<script>
import Axios from "axios";
let mongo_api = "http://127.0.0.1:8000/api/getDormitory/";
export default {
    data(){
        return{
            listitems : [],
            listitems2 : [],
            perPage: 6,
            currentPage: 1,
        }
    },
    async created(){
      await Axios.get(mongo_api)
        .then(res => {
          this.listitems = res.data.dormitory
          this.changePage()
        })
        .catch(err => alert(err));
    },
    computed:{
        rows() {
        return this.listitems.length
        }
    },
    methods:{
        changePage(){
            this.listitems2 = []
            this.start = (this.currentPage*6)-6
            this.end = (this.currentPage*6)
            if(this.end > this.listitems.length){
                this.end = this.listitems.length
            }
            if(this.listitems.length>0){
                for(var i = this.start; i<this.end; i++){
                    this.listitems2.push(this.listitems[i]);
                }
            }
            
        },
        changePageSmooth(){
            this.changePage()
            window.scrollTo({top:95, left:200, behavior: 'smooth'})
        }
    },
    
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
    height: max-content;
    width: 18%;
    background: #f8f6e7;
    z-index: 99;
    position: absolute;
    right: 2%;
    top: 25%;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
}
.cotainer-sell-room{
    height: 100px;
    width: 90%;
    overflow: hidden;
    background: white;
    margin: auto;
    margin-top: 2%;
    margin-bottom: 2%;
    
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