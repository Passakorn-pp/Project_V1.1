<template>
  <div class="container" id="Head">
    <div class="container-logo">
      <router-link to="/" class="logo-head" >
        <img src="@/assets/logo-1.1.png" alt="world" id="Head-logo" class="img-logo-head" />
      </router-link>
    </div>
    <div class="container-login"  id="Head-login" v-if="!this.$store.getters.getView_use" style="margin-top: 2%;">
      <router-link to="/register"
        ><b-avatar icon="people-fill" style="cursor: pointer;"></b-avatar
      ></router-link>
    </div>
    
    <b-dropdown size="lg"  variant="link" toggle-class="text-decoration-none" no-caret class="container-login" v-else>
      <template #button-content>
        <img src="@/assets/man.png"  class="img">
      </template>
      <b-dropdown-item @click="myhor()">หอพักของฉัน</b-dropdown-item>
      <b-dropdown-item @click="logout()">logout</b-dropdown-item>

    </b-dropdown>
    <!-- <div class="container-search-head">
      <img
        src="@/assets/search.png"
        alt="search"
        class="search-head-img"
        id="search-head-img"
      /> -->
    <!-- </div> -->
    
    <div class="container-above" id="Head-above">
      <li class="li-head" id="Head-list">
        <a href="#" class="text-above">เกี่ยวกับ</a>
      </li>
      <li class="li-head" id="Head-list" v-if="this.$store.getters.getState==1">
        <a href="/profile" class="text-above" v-show="check">ข้อมูลส่วนตัว</a>
      </li>
      <li class="li-head" id="Head-list" v-if="this.$store.getters.getState==1">
        <a href="/profile" class="text-above" v-show="check">ถูกใจ</a>
      </li>
      
    </div>
  </div>
</template>

<script>
export default {
  props: ["hint"],
  data() {
    return {
      check: true,
      container: true
    };
  },
  methods: {

    scrollTo(selector) {
      document.querySelector(selector).scrollIntoView({ behavior: "smooth" });
    },
    logout(){
      this.$store.dispatch("logout");
    },
    myhor(){
      this.$router.push('/myhor');
    }
  },
  mounted() {}
};
</script>

<style>
.img-logo-head {
  
  height: 100px;
  width: 100px;
}
.search-head-img {
  height: 50px;
  width: 50px;
  float: left;
  padding: 7px 7px;
  margin-left: 1%;
  transition: all 0.2s ease-in;
}
.container-search-head {

  width: 40%;
  height: 50%;
  background: white;
  position: relative;
  top: 25%;
  left: 10%;
  float: left;
  border-radius: 30px;
  border: 2px solid #f6c026;
}
a:any-link {
  color: black;
}
a:hover {
  color:white;
  text-decoration: none;
}
.container {
  max-width: 100%;
  height: 100px;
  top: 0;
  z-index: 9999;
  position: fixed;
  background: #ECD59F;
  transition: all 0.3s ease-in;
}
.li-head {
  float: right;
  margin-left: 3%;
  list-style-type: none;
}
.container-logo {
  margin-top: 1%;
  height: 100%;
  width: 10%;
  float: left;
}
.container-above {
  height: 100%;
  width: 30%;
  float: right;
  margin-right: 2.5%;
  transition: all 0.3s ease-in;
}
.text-above {
  font-size: 24px;
  cursor: pointer;
  position: relative;
  line-height: 4;
  font-weight: 200;
  transition: all 0.5s ease-in;
}
.logo-head {

  cursor: pointer;
  position: absolute;
  text-align: center;
  transition: all 0.3s ease-in;
}
.container-login {
  float: right;
  margin: 5px 0px;
  margin-right: 20px;
  height: 40px;
  width: 40px;

  transition: all 0.3s ease-in;
  position: relative;
}
.container-login img {
  height: 50px;
  width: 50px;
  cursor: pointer;
  right: 15%;
  position: relative;
}
</style>
