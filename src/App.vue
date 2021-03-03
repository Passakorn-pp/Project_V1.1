<template>
  <div id="app">

      <router-view />

  </div>
</template>
<script>

export default {
  methods:{
    async fetchFood() {
      await this.$store.dispatch("fetchFood");

    },
  },
  created(){
    // const liff = this.$liff // เรียก property ของ LIFF

    this.fetchFood();

    // liff.init({
    //   liffId: '1655683528-q1XK2z5a'
    // }).then(() => {
    //   console.log('LIFF initialize finished')
    //   // get user profile

    //   if (liff.isLoggedIn()) {
    //     liff.getProfile()      
    //     .then(profile => {
    //       console.log(JSON.stringify(profile) +" :profile")
    //       this.userProfile = profile
    //       console.log(this.userProfile['userId'] +": userid");
    //       const token = liff.getAccessToken()
    //       console.log(token +" :token");
    //       localStorage.setItem('user',this.userProfile['displayName'])
    //       localStorage.setItem('img_user',this.userProfile['pictureUrl'])
    //     })
    //     .catch((err) => {
    //       console.error(err)
    //     })

        
        
    //   }
    // }).catch((err) => {
    //   console.error('LIFF initialize error', err)
    // })
  }
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