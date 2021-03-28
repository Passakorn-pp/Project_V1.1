<template>
  <div id="Search" class="container-home-search-main2">
    
    <div class="container-home-search-main">
      
      <div class="container-home-search"  style="display:block;">
        <b-form>
          <b-form-input
            list="my-list-id"
            class="container-home-search-input"
            placeholder="สถานที่"
            v-model="selec_place"
          ></b-form-input>
          <datalist id="my-list-id">
            <option v-for="(size, index) in place" :key="index">{{
              size.name
            }}</option>
          </datalist>
        
          <b-button
            variant="warning"
            class="container-home-search-submit"
            @click="submit()"
            >ไปยังหอพัก</b-button
          >
        </b-form>
      </div>
    </div>
    <!-- <Filter2 ></Filter2> -->
  </div>
</template>

<script>
import Axios from "axios";
let mongo_api = "/api/getDormitory/";
let history_api = "/api/history/";
export default {
  data() {
    return {
      place: null,
      selec_place : null,
      id_user : "",
    };
  },
  async created(){
    this.getProfile()
    await Axios.get(this.$store.getters.getApi+mongo_api)
      .then(res => {
        this.place = res.data.dormitory
      })
      .catch(err => alert(err));
  },
  methods:{
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
    submit(){
      var check = false;
      for(var i in this.place){
        if(this.selec_place == this.place[i].name){
          check = true;
          Axios.post(this.$store.getters.getApi+history_api,{"name": this.selec_place,"user_id":this.id_user})
          .then(() => {
            this.$router.push({name:'view',params:{Name:this.selec_place}});
          })
          .catch(err => alert(err));
          
        }
      }
      if(check == false){
        alert("ไม่มีข้อมูลหอพักในระบบ")
      }
      
    }
  }
  
};
</script>
<style>
.container-home-search-main2 {
  background-image: url("33.jpg");
  background-attachment: fixed;
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 400px;

}
.container-home-search-main {
  height: 350px;
  width: 50%;
  margin: auto;
  position: relative;
  top: 20%;
}
.test1 {
  position: relative;

  width: 100%;
  height: 100%;
  background: gray;
  opacity: 0.1;
  border-radius: 30px;
}
.container-home-search-tab button.active {
  background-color: rgb(241, 128, 128);
}
.tablinks:hover {
  background-color: rgb(240, 208, 208);
  width: 120px;
}
.tablinks {
  height: 60px;
  width: 60px;
  overflow: hidden;
}
.img-serch-tab {
  height: 40px;
}
.container-home-search-tab button {
  background-color: inherit;
  float: right;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 5px 5px;
  transition: 0.3s;
  font-size: 17px;
  border-radius: 30px;
  border: 5px solid #f6c026;
  background: white;
  margin-top: 11%;
}
.container-home-search-tab {
  position: absolute;
  width: max-content;
  height: 100px;
  z-index: 9888;
  top: 77%;
  left: 29%;
}
.show {
  display: block;
}
.container-home-search {
  height: 300px;
  width: 70%;
  top: 20%;
  left: 15%;
  position: absolute;
  z-index: 9998;
}

.container-home-search-input {
  max-width: 80%;
  height: 60px;
  margin: auto;
  margin-top: 3%;
  border-radius: 30px;
  padding: 30px;
  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.2);
  position: relative;
}
.container-home-search-radio-date {
  margin-top: 3%;
  position: relative;
}
.container-home-search-date {
  max-width: 50%;
  height: 40px;
  margin: auto;
  margin-top: 3%;
  border-radius: 30px;
  padding: 10px;
  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.2);
  position: relative;
}
.container-home-search-select {
  max-width: 50%;
  height: 40px;
  margin: auto;
  margin-top: 3%;
  margin-left: 15%;
  border-radius: 30px;
  position: relative;
  float: left;
  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.2);
}
.container-home-search-submit {
  border-radius: 15px;
  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.2);
  margin: auto;
  margin-top: 10%;
  color: white;
  position: relative;
}
.container-home-search-content {
  width: 80%;
  max-height: 500%;
  background: white;
  border: 1px solid;
  z-index: 9997;
  position: absolute;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  left: 50%;
  transform: translate(-50%, 0);
  overflow: auto;
}
.home-search-content {
  display: block;
  border-bottom: 1px solid rgb(241, 180, 180);
  background: skyblue;
  text-align: left;
  padding: 0 5%;
  text-decoration: none;
}
</style>
