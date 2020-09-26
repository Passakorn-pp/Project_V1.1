<template>
  <div>
    <div class="container-filter-body">
      <div class="container-filter-body-head">
        <h2 style="  line-height: 2;">ค้นหาตามใจชอบ</h2>

      </div>
      <div class="container-filter-body-detail">
        <h4 style="text-align: left; margin: 2% 5%">ราคา</h4>
        <div style="width: 80%; margin: auto" >
            <b-form-input id="range-1" v-model="value" type="range" min="0" max="8000" step="100"></b-form-input>
            <div class="mt-2">Value: {{ value }}</div>
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
    <div class="container-recommend-body2">
      
      <div v-for="(user,index) in this.$store.getters.gethome" :key="index" @click="setview(user)">
        <div class="container-ui-recommend2">
          <div @click="setview(user)">
            <div class="container-in-ui-recommend2">
              <b-img class="img-recommend2" src="https://placekitten.com/300/300"/>
              </div>
          </div>
          
          <div>
            <div class="container-in-ui-recommend2" style="border-right: 1px solid silver;" @click="setview(user)">
              <span class="name-home2">
                {{ user.name }}
              </span>
              <div class="rating-recomend2 ">
                <b-form-rating v-model="value" readonly variant="warning"></b-form-rating>
              </div>
            </div>
          </div>
            
          <div>
            <div class="container-in-ui-recommend2" @click="setview(user)">
              <div class="name-home2">
                ราคา
              </div>
              <h4 style="margin-top:5%">{{user.price+" บาท"}}</h4>
            </div>
          </div>
          
        
        </div>
      </div>
      
      <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    </div>
    

  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 3000,
      selected: [], // Must be an array reference!
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
  async created(){
    var response = await fetch('http://127.0.0.1:8000/api/horpaks/');
    this.users = await response.json();
    
  },
  beforeMount() {
    this.fetchData();
  },
  computed: {
    rows() {
      return this.users.length;
    }
  },
  methods: {
    async fetchData() {
      this.displayuser = this.users.slice(0, 3);
    },
    setview(value){
      this.$store.dispatch("addView",value);
      this.$router.push('/view');
      
    },
    paginate(currentPage) {
      const start = (currentPage - 1) * this.perPage;
      
      this.displayuser = this.$store.getters.gethome.slice(start, start + 3);
    }
  }
};
</script>

<style>
.container-filter-body-detail{
  height: 100%;
  width: 100%;
}
.container-filter-body-head{
  font-weight: 500;
  height: 10%;
  width: 100%;
  background:#f6c026;
  color: white;
  
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
}
.container-filter-body {
  position: sticky;
  top: 20%;
  left: 5%;
  width: 20%;
  height: max-content;
  float: left;
  border-radius: 30px;
  background:#f6e78b;
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
  left: 10%;

}
.container-ui-recommend2:hover {
  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.2);
}
.container-ui-recommend2 {
  max-width: 100%;
  height: 220px;
  margin-left: 3%;
  margin-bottom: 5%;
  border: 1px solid silver;
  overflow: auto;
  border-radius: 15px;
  cursor: pointer;
  background: #f8f6e7
}
.container-in-ui-recommend2 {
  width: 33%;
  height: 218px;
  float: left;

  overflow: auto;
}
.img-recommend2 {
  height: 100%;
  width: 100%;
}
.name-home2 {
  padding: 15px;
  font: 28px;
  font-weight: 700;
  float: left;
}
.rating-recomend2 {
  width: max-content;
  height: 100px;
  position: relative;
  top: -3%;
  left: 5%;

}
.ui-recommend-price2 {
  position: relative;

  top: 20%;
  text-align: left;
}
.container-recommend-page2 {
  margin-top: 5%;
  margin-bottom: 5%;
  position: absolute;
  left: 50%;

  transform: translate(-50%, -50%);
}
</style>
