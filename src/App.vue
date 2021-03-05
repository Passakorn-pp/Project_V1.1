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
    

    this.fetchFood();

    
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