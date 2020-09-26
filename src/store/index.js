import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: localStorage.getItem('user') || null,
    name: localStorage.getItem('name') || null,
    water_bill : localStorage.getItem('wbil') || null,
    fire_bill : localStorage.getItem('fbill') || null,
    price: localStorage.getItem('price') || null,
    wifi: localStorage.getItem('wifi')||false,
    air: localStorage.getItem('air')||false,
    fan: localStorage.getItem('fan')||false,
    typeMen: localStorage.getItem('typeMen')||false,
    typeWoman: localStorage.getItem('typeWoman')||false,
    error: localStorage.getItem('price')||false,
    state: localStorage.getItem('price')||false,
    home: localStorage.getItem('home')||null,
  },
  getters:{
    getState(state){
      return state.state
    },
    getError(state){
      return state.error
    },
    getView_use(state){
      
      return state.user
    },
    getView_name(state){
      
      return state.name
    },
    
    getView_water_bill(state){
      
      return state.water_bill
    },
    getView_fire_bill(state){
      
      return state.fire_bill
    },
    getView_price(state){
      
      return state.price
    },
    getView_wifi(state){
      
      return state.wifi
    },
    getView_air(state){
      
      return state.air
    },
    getView_fan(state){
   
      return state.fan
    },
    getView_typeMen(state){

      return state.typeMen
    },
    getView_typeWomen(state){

      return state.typeWomen
    },
    gethome(state){
      console.log("aaaa")
      return state.home
    },
    
  },
  mutations: {
    SetView(state,value){
      
      state.name = value.name,
      
      state.water_bill = value.water_bill,
      state.fire_bill = value.fire_bill,
      state.price =  value.price,
      state.wifi = value.wifi,
      state.air = value.air,
      state.fan = value.fan,
      state.typeMen = value.typeMen,
      state.typeWomen = value.typeWomen,

      localStorage.setItem('name',state.name)
      
      localStorage.setItem('wbil',state.water_bill)
      localStorage.setItem('ebil',state.fire_bill)
      localStorage.setItem('price',state.price)
      localStorage.setItem('wifi',state.wifi)
      localStorage.setItem('air',state.air)
      localStorage.setItem('fan',state.fan)
      localStorage.setItem('typeMen',state.typeMen)
      localStorage.setItem('typeWoman',state.typeWomen)
    },
    SetUser(state,value){
      state.user = value,
      state.state = true
      localStorage.setItem('user',value)
      localStorage.setItem('state',true)
    },
    Error(state){
      state.error = true
    },
    Sethome(state,value){
      state.home = value,
      localStorage.setItem('home',state.home)
    },

  },
  actions: {
    addView(context,value){
      context.commit('SetView',value)   
    },
    retrieveToken(context,credentials){
      
      if(credentials.usename == "passakorn" && credentials.password == "0876993889"){
        context.commit('SetUser',credentials.usename)
      }else{
        context.commit('Error')
      }
    },
    addhome(context,value){
      context.commit('Sethome',value)   
    }
  },
  modules: {}
});
