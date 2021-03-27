import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";
Vue.use(Vuex);

let mongo_api = "http://127.0.0.1:8000/api/getuser";
export default new Vuex.Store({
  state: {
    foods: localStorage.getItem('datatest')||[],
    userstate : localStorage.getItem('user')||null,
    api : "http://127.0.0.1:8000"
    // user: localStorage.getItem('user') || 0,
    // homeclick: localStorage.getItem('homeclick') || null,
    // homeall: localStorage.getItem('homeall') || null,
    // state: localStorage.getItem('state')||false
  },
  getters:{
    foods: state => state.foods,
    getUserstate(state){
      return state.userstate
    },
    getApi(state){
      return state.api
    }
    
    // getState(state){
      
    //   return state.state
    // },
    // getError(state){
    //   return state.error
    // },
    // getView_use(state){
      
    //   return state.user
    // },
    // getView_home(state){
      
    //   return state.homeclick
    // },
    
    // gethome(state){
    //   console.log("aaaa")
    //   return state.homeall
    // },
    
  },
  mutations: {
    fetchFood(state, { res }) {
      state.foods = res.data;
      localStorage.setItem('datatest',state.foods)
      console.log(state.foods);
    },
    setUserState(state,value){
      state.userstate = value;
      localStorage.setItem('user',state.userstate);
      state.userstate = value;
    }
    // SetView(state,value){
    //   state.homeclick = value,
    //   localStorage.setItem('homeclick',state.homeclick)
      
    // },
    // SetUser(state,value){
    //   state.user = value,
    //   state.state = 1,
    //   localStorage.setItem('user',state.user)
    //   localStorage.setItem('state',state.state)
    // },
    // SetUserhor(state,value){
    //   state.user = value,
    //   state.state = 2,
    //   localStorage.setItem('user',state.user)
    //   localStorage.setItem('state',state.state)
    // },
    // Error(state){
    //   state.error = true
    // },
    // logout(state){
    //   state.user = null,
    //   state.state = false,
      
    //   localStorage.setItem('user',state.user)
    //   localStorage.setItem('state',state.state)
    // },
    // Sethome(state,value){
    //   state.homeall = value,
    //   localStorage.setItem('homeall',state.homeall)
    // },

  },
  actions: {
    async fetchFood({ commit }) {
      await Axios.get(mongo_api)
        .then(res => commit("fetchFood", { res }))
        .catch(err => alert(err));
    },
    setUserState(context,value){
      context.commit("setUserState",value);
    }
    // addView(context,value){
    //   context.commit('SetView',value)   
    // },
    // retrieveToken(context,credentials){
      
    //   if(credentials.usename == "asd" && credentials.password == "asd"){
    //     context.commit('SetUser',credentials.usename)
    //   }
    //   else if(credentials.usename == "aa" && credentials.password == "aa"){
    //     context.commit('SetUserhor',credentials.usename)
    //   }else{
    //     context.commit('Error')
    //   }
    //   console.log("aaa");
    // },
    // logout(context){
    //   context.commit('logout')
    // },
    // addhome(context,value){
    //   context.commit('Sethome',value)   
    // }
  },
  modules: {}
});
