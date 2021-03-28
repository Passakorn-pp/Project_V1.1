<template>
  <div class="container-view-comment">
    <div class="container-view-comment-header">
      <span class="text-view-comment-header">ความคิดเห็น</span>
    </div>
    <div class="container-view-comment-body">
      <div id="question" style="position: relative; margin-bottom:10%; display:none " v-if="$store.getters.getUserstate == null">
         <b-form-rating v-model="rating" variant="warning" ></b-form-rating>
         <br>
         <b-form-input
          v-model="text"
          ref="input-comment"
          required
          class="input-view-comment"
          placeholder="แสดงความคิดเห็น"
        ></b-form-input>

        <b-button
          v-if="text == ''"
          disabled
          class="button-view-comment"
          variant="primary"
          >Submit</b-button
        >
        <b-button
          v-else
          @click="Question()"
          class="button-view-comment"
          variant="primary"
          >Submit</b-button
        >
      </div>
      <div id="question" style="position: relative; margin-bottom:10%;" v-else>
         <div v-if="$store.getters.getUserstate == 'User'">
            <h5>ให้คะแนนหอพัก</h5>
            <b-form-rating v-model="rating" variant="warning" @change="changeRating()"></b-form-rating>
         </div>
        
         <br>
         <b-form-input
          v-model="text"
          ref="input-comment"
          required
          class="input-view-comment"
          placeholder="แสดงความคิดเห็น"
        ></b-form-input>

        <b-button
          v-if="text == ''"
          disabled
          class="button-view-comment"
          variant="primary"
          >Submit</b-button
        >
        <b-button
          v-else
          @click="Question()"
          class="button-view-comment"
          variant="primary"
          >Submit</b-button
        >
      </div>
     

      <div v-for="(text,index) in listtext_old" :key="index" style="position: relative;">
        <b-avatar
          icon="people-fill"
          style="float: left; margin-top: 3%; margin-left:-5%;"
        ></b-avatar>
        <div class="container-view-comment-list">
          <div style="widht:100%; heigth:40px; border-bottom: 1px solid  silver;">
            <h6 style="text-align: left; padding:10px 10px">{{text.user.name_user}}</h6>
          </div>
          <span class="text-view-comment-list">{{ text.comment }}</span>
        </div >
        <div v-if="$store.getters.getUserstate == null" style="width:100%; margin-top:1%; margin-left:5%; display: flex; justify-content: left; display:none">
          <input placeholder="ตอบกลับ" type="text" style="  border-radius: 15px; border: 1px solid silver;" v-model="text2[index]"  >
          <button style="margin-left:2%;  border-radius: 15px; border: 1px solid silver;" @click="Answer(text,index)"  >ยืนยัน</button>
        </div>
        <div v-else style="width:100%; margin-top:1%; margin-left:5%; display: flex; justify-content: left;">
          <input placeholder="ตอบกลับ" type="text" style="  border-radius: 15px; border: 1px solid silver;" v-model="text2[index]"  >
          <button style="margin-left:2%;  border-radius: 15px; border: 1px solid silver;" @click="Answer(text,index)"  >ยืนยัน</button>
        </div>  
        
        <div style="margin-left:10%">
          <div v-for="(text2,index) in text.answer" :key="index">
          <b-avatar
            icon="people-fill"
            style="float: left; margin-top: 3%; margin-left:-5%;"
          ></b-avatar>
          <div class="container-view-comment-list">
            <div style="widht:100%; heigth:40px; border-bottom: 1px solid  silver;">
              <h6 style="text-align: left; padding:10px 10px">{{text2.user.name_user}}</h6>
            </div>
            <span class="text-view-comment-list">{{ text2.body }}</span>
          </div>
          </div>
        </div>
        
      </div>
      
    </div>
  </div>
</template>

<script>
import Axios from "axios";
let mongo_api = "/api/get_Question/";
let addanswer_api = "/api/addAnswer/"
let addquestion_api = "/api/addQuestion/"
let getRatingAll = "https://accommodation.pjjop.org/getrating/"
let setRating = "/api/SetRating/"
let getRating = "/api/GetRating/"
export default {
  props: [
    'room'
  ],
  data() {
    return {
      text2: [],
      text: "",
      check: true,
      disabled: "disabled",
      listtext_old: [],
      listtext: [],
      id_user : null,
      rating : 0,
      name_user : null
    };
  },

  methods: {
    changeRating(){
      Axios.post(getRatingAll ,{"Dorname" : this.$route.params.Name})
      .then(res => {
        var rating = res.data.results.Rating;
        var count = 0;
        for(var i=0; i<rating.length; i++){
          count += rating[i];
        }
        count += this.rating
        Axios.post(this.$store.getters.getApi+setRating,{"name" : this.$route.params.Name,"user" : this.id_user,"rating" : this.rating,"ratingAll" : count/(rating.length+1)})
        .then(res => {
          console.log(res);
        })
        .catch(err => alert(err));
      })
      .catch(err => alert(err));
    },
    getProfile(){
      const liff = this.$liff
      liff.getProfile()
      .then(profile => {
        this.userProfile = profile
        this.id_user = this.userProfile['userId']
        this.name_user =  this.userProfile['displayName']
        Axios.post(this.$store.getters.getApi+getRating,{"name" : this.$route.params.Name,"user" : this.id_user})
        .then(res => {
          this.rating = res.data
          console.log(this.rating+"rating");
        })
        .catch(err => alert(err));
      })
      .catch((err) => {
        console.error('LIFF initialize error', err)
      })
    },
    Answer(text,index){
      console.log(this.text2[index]+" :index");
      text.answer.push({body : this.text2[index],user : {name_user :  this.name_user}})
      
      Axios.post(this.$store.getters.getApi+addanswer_api,{"name": this.id_user,"id" : text.id,"body" : this.text2[index]})
      .then(res => {
        console.log(res);
      })
      .catch(err => alert(err));
      this.text2[index] = ""
    },
    Question() {
      Axios.post(this.$store.getters.getApi+addquestion_api,{"name": this.$route.params.Name,"user" : this.id_user,"comment" : this.text})
      .then(() =>{
        Axios.post(this.$store.getters.getApi+mongo_api,{"name" : this.$route.params.Name})
        .then(res => {
          
          this.listtext_old = res.data.Question
        })
        .catch(err => alert(err));
          
      })
      .catch(err => alert(err+" :Question"));
      this.text = "";
      
      
    
      // this.$refs["input-comment"].focus();
      

    },
    setcheck() {
      this.check = false;
    },
  },
  created(){
    if(this.$store.getters.getUserstate == 'User' || this.$store.getters.getUserstate == 'Dormitory'){
      this.getProfile()
    }
    

    Axios.post(this.$store.getters.getApi+mongo_api,{"name" : this.$route.params.Name})
        .then(res => {
          this.listtext_old = res.data.Question
          // console.log(this.listtext_old);
        })
        .catch(err => alert(err));
  },
};
</script>
<style scoped>
.container-view-comment {
  max-width: 70%;
  height: 100%;
  border-radius: 15px;
  border: 1.5px solid silver;
  margin: auto;
  margin-bottom: 5%;
  background: white;
}
.container-view-comment-header {
  height: 100px;
  width: 90%;
  position: relative;
  border-bottom: 1px solid silver;
  margin: auto;
}
.text-view-comment-header {
  font-size: 28px;
  font-weight: 500;
  text-align: center;
  float: left;
  padding: 30px 0;
}
.container-view-comment-body {
  height: 100%;
  width: 80%;
  position: relative;
  margin: auto;
  margin-top: 2%;

  padding: 15px;
}
.input-view-comment {
  float: left;
  border-radius: 15px;
  max-width: 80%;
  position: relative;
}
.button-view-comment {
  float: right;
  border-radius: 15px;
}
.container-view-comment-list {
  width: 90%;
  height: 120px;
  background: bisque;
  position: relative;
  margin: auto;
  margin-top: 2%;
  -moz-border-radius: 10px;
  -webkit-border-radius: 10px;
  border-radius: 10px;
  border: 1px solid silver;
}

.container-view-comment-list2 {
  width: 90%;
  height: 120px;
  background: bisque;
  position: relative;
  margin: auto;
  margin-top: 2%;
  -moz-border-radius: 10px;
  -webkit-border-radius: 10px;
  border-radius: 10px;
}
.container-view-comment-list2 ::before {
  content: "";
  position: absolute;
  left: 100%;
  top: 26px;
  width: 0;
  height: 0;
  border-top: 13px solid transparent;
  border-left: 26px solid bisque;
  border-bottom: 13px solid transparent;
}
.text-view-comment-list {
  font-size: 24px;
  text-align: center;
  float: left;
  padding: 8px 20px;
}
</style>
