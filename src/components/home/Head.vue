<template>
  <div class="container" id="Head">
    <div class="container-logo">
      <a href="/" class="logo-head" >
        <img src="@/assets/logo-1.1.png" alt="world" id="Head-logo" class="img-logo-head" />
      </a>
    </div>
    <!-- <div class="container-login"  id="Head-login" v-if="!this.$store.getters.getView_use" style="margin-top: 2%;">
      <router-link to="/register"
        ><b-avatar icon="people-fill" style="cursor: pointer;"></b-avatar
      ></router-link>
    </div> -->
    
    <!-- <b-dropdown size="lg"  variant="link" toggle-class="text-decoration-none" no-caret class="container-login" v-else>
      <template #button-content>
        <img src="@/assets/man.png"  class="img">
      </template>
      <b-dropdown-item @click="myhor()">หอพักของฉัน</b-dropdown-item>
      <b-dropdown-item @click="logout()">logout</b-dropdown-item>

    </b-dropdown> -->
    
    <!-- <div class="container-search-head">
      <img
        src="@/assets/search.png"
        alt="search"
        class="search-head-img"
        id="search-head-img"
      /> -->
    <!-- </div> -->
    
    <div class="container-above" id="Head-above">

      <li class="li-head" id="manu-mini">
        <b-dropdown right  variant="light">
          <template #button-content>
            <b-icon icon="list" scale="2"> </b-icon> <span style="margin-left:10px;">Menu</span>
          </template>
          <!-- <b-dropdown-item-button><router-link to="/test">เทส</router-link ></b-dropdown-item-button> -->
          <b-dropdown-item-button><router-link to="#about">เกี่ยวกับ</router-link ></b-dropdown-item-button>
          <b-dropdown-item-button><router-link to="/profile" v-if="$store.getters.getUserstate == 'User'">ข้อมูลส่วนตัว</router-link ></b-dropdown-item-button>
          <b-dropdown-item-button><router-link to="/profile/like" v-if="$store.getters.getUserstate == 'User'">รายการที่คุณสนใจ</router-link ></b-dropdown-item-button>
        </b-dropdown>
      </li>
      <li class="li-head" >
          <div v-if="this.check" >
            <b-dropdown right  variant="light">
              <template #button-content>
                <div style="widht:100px; display: inline-block;">
                  <img :src="img_user"  class="container-login-img">
                  <span style="margin-right:10px; line-height: 1.6em;">{{user}}</span>
                </div>
                  
              </template>
              <b-dropdown-item-button @click="Logout()">Logout</b-dropdown-item-button>
            </b-dropdown>
          </div>
          <div v-else>
            <router-link to="/login">
              <div style="widht:100px; display: inline-block; background: white; padding: 6px 7px; border-radius: 5px;">
                  <img src="@/assets/user.png"  class="container-login-img">
                  <span style="margin-right:10px; line-height: 1.6em;">เข้าสู่ระบบ</span>
                </div>
            </router-link >
          </div>
      </li>
      <div id="manu">
        
        <li class="li-head" id="Head-list" >
          <!-- <router-link to="/test" class="text-above">เทส</router-link > -->
        </li>
        <li class="li-head" id="Head-list">
          <router-link to="#about" class="text-above">เกี่ยวกับ</router-link >
        </li>
        <li class="li-head" id="Head-list" >
          <router-link to="/profile" class="text-above" v-if="$store.getters.getUserstate == 'User'">ข้อมูลส่วนตัว</router-link >
        </li>
        <li class="li-head" id="Head-list" >
          <router-link to="/profile/like" class="text-above" v-if="$store.getters.getUserstate == 'User'">รายการที่คุณสนใจ</router-link >
        </li>
      </div>
      
      
    </div>
  </div>
</template>

<script>
export default {
  props: ["hint"],
  data() {
    return {
      check: false,
      container: true,
      img_user : null,
      user : null,
      id_user : null
    };
  },
  methods: {

    scrollTo(selector) {
      document.querySelector(selector).scrollIntoView({ behavior: "smooth" });
    },
    Logout(){
      const liff = this.$liff
      this.check = false
      liff.logout();
      location.reload()
    }

  },
  async created(){
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
          console.log(JSON.stringify(profile) +" :profile")
          this.userProfile = profile
          console.log(this.userProfile['userId'] +": userid");
          this.id_user = this.userProfile['userId']
          const token = liff.getAccessToken()
          console.log(token +" :token");
          this.check = true;
          this.user =  this.userProfile['displayName']
          this.img_user = this.userProfile['pictureUrl']
        })
        .catch((err) => {
          console.error(err)
        })

        
        
      }
    }).catch((err) => {
      console.error('LIFF initialize error', err)
    })

    
  }

};
</script>

<style>
#manu-mini{
  display: none;
}
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
.li-head a:hover {

  border-bottom: 1px solid red;
  color: tomato;
  text-decoration: none;
}
.container {
  max-width: 100%;
  height: 80px;
  top: 0;
  z-index: 9999;
  position: fixed;
  background: #ECD59F;
  /* background: rgb(226, 226, 226); */
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
  width: 50%;
  float: right;
  margin-right: 2.5%;
  transition: all 0.3s ease-in;
  text-align: center;
  padding: 20px 16px;
}

.text-above {
  font-size: 24px;
  cursor: pointer;
  position: relative;
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
.container-login-img {
  height: 30px;
  width: 30px;
  cursor: pointer;
  float: right;
  border-radius: 15px;
  margin-right: 5px;
}
@media only screen and (max-width: 1150px){
  #manu-mini{
    display: block;
  }
  #manu{
    display: none;
  }  
}
</style>
