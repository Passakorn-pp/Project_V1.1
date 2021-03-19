<template>
  <div >
    <!-- <br>
    <select v-model="currentOrder" >
      <option value="name">name</option>
      <option value="value">value</option>
    </select>
    <br>
    <input type='checkbox' @click='checkAll()' v-model='isCheckAll'> Check All
    <ul>
      <li v-for="(lang,index) in langsdata" :key="index">
        <input type='checkbox' v-bind:value='lang' v-model='languages' @change='updateCheckall()'> {{ lang }}
      </li>
    </ul>
    {{languages}}
    <div v-for="(item,index) in orderedItems() " :key="index">
      <span>{{item}}</span>
      <br>
    </div>
    <img src="@/assets/13.jpg" class="test-img">   -->
    

     <form @submit.prevent="submitForm">
        <div class="form-group">
            <label for="title">Post Title</label>
            <input type="text" name="title" class="form-control" id="title" placeholder="Enter Post Title" v-model="formFields.title">
          </div>

          <div class="form-group">
            <label for="description">Post Description</label>
            <textarea name="description" class="form-control" v-model="formFields.description"></textarea>
          </div>

          <div class="form-group">
            <label for="description">Picture</label>
            <input type="file" name="picture" class="form-control-file" id="picture" @change="onFileChange">
          </div>

          <div class="form-group">
            <input type="submit" class="btn btn-success" />
          </div>
    </form>
    <img :src="formFields.picture" alt="" v-if="formFields.picture">
    {{formFields.picture}}
  </div>

  
</template>

<script>

export default {

 data(){
   return{
    formFields: {
                title: null,
                description: null,
                picture: null
              },
    imagePreview: null,
    showPreview: false,



    table : true,
    chair : true,
    bed : true,
    cabinet : true,
    isCheckAll : true,
    languages: ["table","chair","bed","cabinet"],
    langsdata: ["table","chair","bed","cabinet"],
    currentOrder: 'value',
    items: [
      {
        name: "Atask 1", 
        value: "30",
        filter: ["table","chair","bed","cabinet"]
      },
      {
        name: "Vtask 2", 
        value: "60",
        filter: ["table","chair","bed","cabinet"]
      },
      {
        name: "Btask 3", 
        value: "5",
        filter: ["table","chair","bed","cabinet"]
      },
      {
        name: "Ztask 4", 
        value: "10",
        filter: ["table","chair","bed"]
      }
    ],
   }
 },
 methods:{
  onFileChange(event){
    
    var selcetimg = event.target.files[0];
    this.createBase64Imange(selcetimg)
    console.log(this.formFields.picture);
  },
  createBase64Imange(img){
    const reader = new FileReader();

    reader.onload = (e) => {
      this.formFields.picture = e.target.result;
    }
    reader.readAsBinaryString(img)
  },
    orderedItems() {
      var useitem = [];
      console.log(this.items);
      var arr1 = ["b","a","c"];
      var arr2 = ["c","a","b"];
      
      var equal = arr1.every(i => arr2.includes(i));
      console.log(equal);
      
      arr1.indexOf

      for(var item in this.items){
        if(this.items[item].filter.some(i => this.languages.includes(i)) == true){
          useitem.push(this.items[item])
        }
      }

      if(this.currentOrder=="name"){
        return useitem.slice().sort((a, b) => (a.name > b.name) ? 1 : -1);

      }
      else{
        return useitem.slice().sort((a, b) => a.value - b.value);

      }
      
    },
    checkAll: function(){

      this.isCheckAll = !this.isCheckAll;
      this.languages = [];
      if(this.isCheckAll){ // Check all
        for (var key in this.langsdata) {
          this.languages.push(this.langsdata[key]);
        }
      }
    },
    updateCheckall: function(){
      if(this.languages.length == this.langsdata.length){
         this.isCheckAll = true;
      }else{
         this.isCheckAll = false;
      }
    },
    result(res) {
            console.log(res)
        }
 },
 computed:{
   
 },

}
</script>

<style>
@media only screen and (max-width:800px){
  .test-img{
  width: 1000px;
  height: 1000px;
  }
}
@media only screen and (min-width:1200px){
  .test-img{
  width: 200px;
  height: 200px;
  }
}

</style>