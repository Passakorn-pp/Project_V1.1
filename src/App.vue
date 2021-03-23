<template>
  <div id="app">

      <router-view />

  </div>
</template>
<script>
import Axios from "axios";
let mongo_api = "http://127.0.0.1:8000/api/sentuserline/";
export default {
  data(){
    return{
      id_user : null,
      name_user : null,
      type_user : null,

      user : null,
      state : null
    }
  },
  methods:{
    async fetchFood() {
      await this.$store.dispatch("fetchFood");

    },
    line(){
      const liff = this.$liff // เรียก property ของ LIFF
      this.check = false
      liff.init({
        liffId: '1655683528-q1XK2z5a'
      }).then(() => {
        console.log('LIFF initialize finished')
        // get user profile

        if (liff.isLoggedIn()) {
          liff.getProfile()      
          .then(profile => {
            console.log("App");
            this.userProfile = profile
            console.log(this.userProfile);
            this.id_user = this.userProfile['userId']
            console.log(this.id_user +" :id_user");
            this.name_user =  this.userProfile['displayName']
            console.log(this.name_user +" :id_user");
            this.type_user = localStorage.getItem('typeUser')
            console.log(this.type_user  +" :id_user");
            Axios.post(mongo_api,{"id_user"  : this.id_user ,"name_user" : this.name_user , "type_user" : this.type_user})
            .then(res => {
              console.log(res);
              this.user = res.data["user"]
              this.state = res.data["state"]
              if(this.user=="User"){
                this.$store.dispatch("setUserState",this.user);
                if(this.state == "no"){
                  this.$router.push({name:'register',params:{id:this.id_user}})
                }
                else{
                  this.$router.push('/')
                }
                
              }
              else if(this.user=="Dormitory"){
                this.$store.dispatch("setUserState",this.user);
                console.log(res+" :res");
                if(this.state=="yes"){
                  this.$router.push({name:'myhor',params:{Name:res.data["name"]}})
                }
                else{
                  this.$router.push({name:'registerDormitory',params:{id:this.id_user}})
                }
              }
            })
            .catch(err => alert(err+" aaaaaa"));
          })
          .catch((err) => {
            console.error(err)
          })  
        }
        else{
          console.log("asdadasdsada");
          this.$store.dispatch("setUserState",null);
        }
      }).catch((err) => {
        console.error('LIFF initialize error', err)
      })
    },
  },
  created(){
    // this.fetchFood()
    this.line();
    },
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Mitr&display=swap');
#app {
  font-family: 'Mitr', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  outline: none;
  scroll-behavior: smooth;
  
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
/* width */
::-webkit-scrollbar {
  width: 10px;
  
}
/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey; 
  background: white;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background:#ECD59F; 
}
/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #b30000; 
}
</style>