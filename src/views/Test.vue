<template>
  <div >
    <br>
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
      
  </div>
</template>

<script>
export default {
 data(){
   return{
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
    orderedItems() {
      var useitem = [];
      console.log(this.items);
      var arr1 = ["b","a","c"];
      var arr2 = ["c","a","b"];
      
      var equal = arr1.every(i => arr2.includes(i));
      console.log(equal);
      
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
    }
 },
 computed:{
   
 }
}
</script>

<style>

</style>