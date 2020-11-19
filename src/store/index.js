import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: localStorage.getItem('user') || null,
    homeclick: localStorage.getItem('homeclick') || null,
    homeall:localStorage.getItem('homeall') || null
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
    getView_home(state){
      
      return state.homeclick
    },
    
    gethome(state){
      console.log("aaaa")
      return state.homeall
    },
    
  },
  mutations: {
    SetView(state,value){
      state.homeclick = value,
      localStorage.setItem('homeclick',state.homeclick)
      
    },
    SetUser(state,value){
      state.user = value,
      state.state = true
      localStorage.setItem('user',state.user)
      localStorage.setItem('state',state.state)
    },
    Error(state){
      state.error = true
    },
    Sethome(state,value){
      state.homeall = value,
      localStorage.setItem('homeall',state.home)
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
