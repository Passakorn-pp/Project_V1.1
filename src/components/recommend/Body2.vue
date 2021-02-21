<template>
  <div>
    <div class="container-filter-body">
      <div class="container-filter-body-head">
        <h2 style="  line-height: 2;" >ค้นหาตามใจชอบ</h2>

      </div>
      <div class="container-filter-body-detail">
        <h4 style="text-align: left; margin: 2% 5%">ราคา</h4>
        <div style="width: 80%; margin: auto" >
            <b-form-input id="range-1" v-model="value" type="range" min="0" max="8000" step="100"></b-form-input>
            <div class="mt-2">ราคา: {{ value }}</div>
        </div>
        <h4 style="text-align: left; margin: 2% 5%">เครื่องใช้ภายในห้อง</h4>
        <div style="width: 80%; margin: auto; text-align: left;">
        <b-form-checkbox-group v-model="selected" :options="optionsroom" stacked switches
        ></b-form-checkbox-group>
        </div>
        <h4 style="text-align: left; margin: 2% 5%">สิ่งอำนวยความสะดวก</h4>
        <div style="width: 80%; margin: auto; text-align: left;">
        <b-form-checkbox-group v-model="selected" :options="options" stacked switches
        ></b-form-checkbox-group>
        </div>
        <h4 style="text-align: left; margin: 2% 5%">คณะ</h4>
        <div style="width: 80%; margin: auto; text-align: left;">
        <b-form-checkbox-group v-model="selected" :options="faculty" stacked switches
        ></b-form-checkbox-group>
        </div>
      </div>
      <br>

    </div>

    
    <div class="body-recommend-tab">
      <button v-on:click="activetab=1" v-bind:class="[ activetab === 1 ? 'active' : '' ]">ทั้งหมด</button>
      <button v-on:click="activetab=0" v-bind:class="[ activetab === 0 ? 'active' : '' ]">แนะนำ</button>
      <button v-on:click="activetab=2" v-bind:class="[ activetab === 2 ? 'active' : '' ]" style="width: 15%;">หอพักเงียบสงบ</button>
      <button v-on:click="activetab=3" v-bind:class="[ activetab === 3 ? 'active' : '' ]" style="width: 15%;">หอพักครื้นเครง</button>
      <button v-on:click="activetab=4" v-bind:class="[ activetab === 4 ? 'active' : '' ]" style="width: 20%;">หอพักย่านของกิน</button>
      <button v-on:click="activetab=5" v-bind:class="[ activetab === 5 ? 'active' : '' ]">ลดราคา</button>
    </div>

    <div class="content">
        <div v-if="activetab === 1" class="container-recommend-body2">
            <!-- <div class="container-select">
              <b-table
                style="background: #f8f6e7;"
                :fields="fields"
                sort-icon-right
                responsive="sm"
              ></b-table>
            </div> -->
            <!-- <div class="container-filter-sort">
              <div class="filter-sort">
                <h6>ราคา</h6>
                <div style="float: left; margin-left: 5%; margin-top: 3%">
                  <b-icon icon="caret-up" style="display: block;" variant="secondary"></b-icon>
                  <b-icon icon="caret-down" style="display: block;" variant="secondary"></b-icon>
                </div>
              </div>
              <div class="filter-sort">
                <h6>ระยะทาง</h6>
                <div style="float: left; margin-left: 5%; margin-top: 3%">
                  <b-icon icon="caret-up" style="display: block;" variant="secondary"></b-icon>
                  <b-icon icon="caret-down" style="display: block;" variant="secondary"></b-icon>
                </div>
                
              </div>
              <div class="filter-sort" >
                <h6>rating</h6>
                <div style="float: left; margin-left: 5%; margin-top: 3%">
                  <b-icon icon="caret-up" style="display: block;" variant="secondary"></b-icon>
                  <b-icon icon="caret-down" style="display: block;" variant="secondary"></b-icon>
                </div>
                
              </div> -->
            <!-- </div> -->
            <div v-for="(user,index) in listitem()" :key="index"  >
              <div class="container-ui-recommend2">
                <div >
                  <div class="container-in-ui-recommend2" @click="setview(user)">
                    <b-img class="img-recommend2" :src="user.img"/>
                    </div>
                </div>
                
                <div>
                  <div class="container-in-ui-recommend2" style="border-right: 1px solid silver; width: 42%; height: 213px;" >
                    <div class="name-home2">
                      {{ user.name }}
                    </div>
                    
                    <div class="name-home3" v-if="user.room[0].price!=user.room[1].price">
                      ราคา {{user.room[0].price+"-"+user.room[1].price+" บาท"}}
                    </div>
                    <div class="name-home3" v-else>
                      ราคา {{user.room[1].price+" บาท"}}
                    </div>
                    <div class="name-home3">
                      ระยะทางจากมหาลัย {{user.distance}} เมตร
                    </div>
                    <div class="rating-recomend2 ">
                      <b-form-rating v-model="user.star" readonly no-border variant="warning" style="background: none;"></b-form-rating>
                    </div>
                    
                    <div style="padding-left: 15px; margin-top:-2%; overflow: hidden;">  
                      <div v-if="user.wifi">
                        <img src="@/assets/wifi.png"  class="img-icon-view-head" style="float: left; margin-right:3px ">
                      </div>
                      <div v-if="user.air">
                        <img src="@/assets/air-conditioner (1).png" class="img-icon-view-head" style="float: left; margin-right:3px ">
                        
                      </div>
                      <div v-if="user.fan">
                        <img src="@/assets/fan (1).png" class="img-icon-view-head" style="float: left; margin-right:3px ">
                        
                      </div>
                      <div v-if="user.typeMen">
                        <img src="@/assets/man.png" class="img-icon-view-head" style="float: left; margin-right:3px ">
                        
                      </div>
                      
                      <div v-if="user.typeWomen">
                        <img src="@/assets/woman.png" class="img-icon-view-head" style="float: left; margin-right:3px ">
                        
                      </div>
                      
                    </div>

                    
                  </div>
                </div>
                
                <div>
                  <div class="container-in-ui-recommend2" @click="setview(user)" style="width: 25%; height: 213px;">
                    <div class="name-home2">
                      ขนาดห้อง
                    </div>
                    <div v-for="index in user.room.length" :key="index">
                      <div class="ss">

                        <button style="  float: left;  margin-left:2%;  border-radius:15px; background:#e4c785; ">{{user.room[index-1].nameroom}}</button> 
                        <h6 style="  float: right; margin-right:3%; ">ว่าง <h3 style="color:red; display: inline-block; ">{{user.room[index-1].free}}</h3> ห้อง</h6>
                      </div>

                    </div>
                  </div>
                </div>
                <div style="float: left; width: 67%;">
 
                  
                </div>
              
              </div>
            </div>
          </div>
        </div>
        <div v-if="activetab === 2" class="container-recommend-body2" id="tab_b">
            
        </div>
        <div v-if="activetab === 3" class="container-recommend-body2">
            
        </div>
        <div v-if="activetab === 4" class="container-recommend-body2">
            
        </div>
        <div v-if="activetab === 5" class="container-recommend-body2">
            
        </div>
        <div v-if="activetab === 0" class="container-recommend-body2">
            
        </div>

  
    
    
  </div>
</template>

<script>

export default {

  data() {
    return {
      f_pice: true,
      fields: [
          { key: 'ราคา', sortable: true },
          { key: 'ระยะทาง', sortable: true },
          { key: 'Rateing', sortable: true },

      ],
      def : {
            type : 'pie'
      },
      data : [
          { label: 'London', value:'330' },
          { label: 'Barcelona', value:'430' },
          { label: 'Paris', value:'150' },
          { label: 'Belgrade', value:'220' }
      ],
      active_pic:1,
      activetab: Number(localStorage.getItem('indexfilter')),
      value: 3000,
      selected: ["air","fan","tv","refrigerator","table","parking_lot","elevators","security camera","keycard","laundry"], // Must be an array reference!
      optionsroom: [
        { text: 'แอร์', value: 'air' },
        { text: 'พัดลม', value: 'fan' },
        { text: 'ทีวี', value: 'tv' },
        { text: 'ตู้เย็น', value: 'refrigerator' },
        { text: 'โต้ะ', value: 'table' },
      ],
      options: [
        { text: 'ลานจอดรถ', value: 'parking_lot' },
        { text: 'ลิฟท์', value: 'elevators' },
        { text: 'กล้องวงจร', value: 'security camera' },
        { text: 'ระบบคีย์การ์ด', value: 'keycard' },
        { text: 'ร้านซักรีด', value: 'laundry' },
      ],
      faculty: [
        { text: 'คณะมัณฑนศิลป์', value: 'Decorative_Arts' },
        { text: 'คณะอักษรศาสตร์', value: 'Arts' },
        { text: 'คณะศึกษาศาสตร์', value: 'Education' },
        { text: 'คณะวิทยาศาสตร์', value: 'Science' },
        { text: 'คณะเภสัชศาสตร์', value: 'Pharmacy' },
        { text: 'คณะวิศวกรรมศาสตร์และเทคโนโลยีอุตสาหกรรม', value: 'Engineering_and_Industrial_Technology' },
      ],
      perPage: 3,
      currentPage: 1,
      users: [
        {
          id: 1,
          name: "John Doe",
          price: [
            {
              big_room: "3000",
              small_room: "2000"
            }
          ]
        },
        {
          id: 2,
          name: "Jane Doe",
          price: [
            {
              big_room: "3500",
              small_room: "2900"
            }
          ]
        },
        {
          id: 3,
          name: "Chuck Norris",
          price: [
            {
              big_room: "3200",
              small_room: "2000"
            }
          ]
        },
        {
          id: 4,
          name: "Chuck Norris",
          price: [
            {
              big_room: "4000",
              small_room: "3000"
            }
          ]
        }
      ]
    }
  },
  // async created(){
  //   var response = await fetch('http://127.0.0.1:8000/api/horpaks/');
  //   this.users = await response.json();
    
  // },
  

  methods: {

    async fetchData() {
      this.displayuser = this.users.slice(0, 3);
    },
    setview(value){
      this.$store.dispatch("addView",value);
      this.$router.push('/view');

    },
    listitem(){
      console.log(localStorage.getItem('indexfilter')+" :index");
      var useitem = [];
      var home = this.$store.getters.gethome;
      var price = Number(this.value);
      
      for(var item in home){
        
        var a = Number(home[item].room[0].price);
        if(home[item].selected.every(i => this.selected.includes(i)) == true ){
          if(price >= a){
            console.log(price+": value");
            console.log( home[item].room[0].price+": home");
            useitem.push(home[item]);
          }
          
        }
      }
      return useitem;

      
    }
  }
};
</script>

<style>
.container-filter-sort{
  width: 100%;
  height: 50px;
  background: #f8f6e7;
  margin-bottom: 0.5%;
  overflow: hidden;
  border-bottom: 1px solid silver;
}
.filter-sort{
  width: 33.3%;
  text-align: left;
  float: left;
  overflow: hidden;
  
}
.filter-sort h6{
    margin: 5% 30%;
    float: left;
    font-weight: 700;
    color: black;
}
.progress-faculty{
  height: 5px;
  width: 100%;
}
.ss{
  
  width: 100%;
  margin-top: 2%;
  overflow: hidden;
  
}
.pic-chart-body{
  width: 70%;
  height: 100%;
  font-size: 8px;
  margin: auto;
  transform: translateY(-60px);


}
.container-pic-chart-body{
  width: 20%;
  height: 50px;
  position: relative;
  left: 1%;

  transform: translateY(20px);
}

.body-recommend-tab button{
  width: 10%;
  height: 70%;
  float: left;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background: #e4c785;
  color: white;
  border: 1px solid silver;
  margin-right: 0.5px;
  position: relative;
  top: 30%;
  transition: 0.3s ease-in;
}
.body-recommend-tab button.active{
  outline: none;
  background: tomato;
  border-bottom: none;
  height: 100%;
  top: 0;

}
.body-recommend-tab button:focus{
  outline: none;
}
.body-recommend-tab{
  width: 55%;
  float: left;
  height: 50px;
  position: relative;
  left: 4%;
}
.container-select{
  width: 100%;
  height: 70px;
  
  margin: auto;
}
.container-filter-body-detail{
  height: 100%;
  width: 100%;
  
}
.container-filter-body-head{
  font-weight: 500;
  height: 10%;
  width: 100%;
  background:#e4c785;
  color: white;
  
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
}
.container-filter-body {
  position: relative;
  top: 20%;
  left: 2%;
  width: 20%;
  height: max-content;
  float: left;
  border-radius: 30px;
  background:#f8f8f8;
  color: black;
}
.img-filter {
  position: absolute;
  width: 50px;
  height: 50px;
  left: 0;
}
.container-recommend-body2 {
  width: 55%;
  float: left;
  height: 100%;
  position: relative;
  left: 4%;
  border-top: 1px solid silver;
}
.container-ui-recommend2:hover {
  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.2);
}
.container-ui-recommend2 {
  max-width: 100%;
  height: 220px;
  
  border: 1px solid silver;

  transition: 0.2s ease-in-out;
  cursor: pointer;
  background: #f8f6e7;
  margin: auto;
  margin-top: 1%;
}
.container-in-ui-recommend2 {
  width: 33%;
  height: 218px;
  float: left;

  overflow: hidden;
}
.img-recommend2 {
  height: 100%;
  width: 100%;
}
.name-home2 {
  padding-left: 15px;
  font-size: 22px;
  font-weight: 700;
  text-align: left;
}
.name-home3{
  padding-left: 15px;
  font-size: 17px;
  text-align: left;
}
.rating-recomend2 {
  width: max-content;
  margin-bottom: 3%;
  position: relative;
  left: 0;
  top: -2%;
  overflow: hidden;
}
.ui-recommend-price2 {
  position: relative;

  top: 20%;
  text-align: left;
}

</style>
