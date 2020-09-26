<template>
  <div class="container-view-table">

    <div>
      <b-table
        striped
        hover
        :items="items"
        :fields="fields"
        outlined
        class="container-view-demo-table"
      ></b-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
      fields: [
        {
          key: "first_name",
          label: "ค่าใช้จ่าย"
        },
        {
          key: "last_name",
          label: "ราคา/เดือน"
        }
      ],
      items: [
        { first_name: "ค่าน้ำ", last_name: this.$store.getters.getView_water_bill+" บาท" },
        { first_name: "ค่าไฟ", last_name: this.$store.getters.getView_fire_bill+" บาท/หน่วย" },
        
        { first_name: "Wifi", last_name: "ฟรี 1 id/ห้อง" },
        {
          first_name: "ที่อยู่หอพัก",
          last_name: "เขต - แขวง - จังหวัด - รหัสไปรษณี -"
        }
      ]
    };
  },
  
};
</script>

<style>
.container-view-table {
  max-width: 50%;
  max-height: 100%;
  border: 5px solid;
  margin: auto;
  margin-top: 8%;
}
.container-view-demo-table {
  height: 80%;
  max-width: 80%;
  margin: 5% auto;
}
</style>
