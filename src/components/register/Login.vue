<template>
  <div>
    <div v-if="typeUser == null || typeUser == 1">
      <h2>เข้าสู่ระบบด้วย LINE</h2>
      <div style="width: 80%; height:20px; border-bottom:0.5px solid silver; margin:auto"></div>
      <br>
      <br>
      <div class="container-register-login-line" @click="show_registesr">
        <img
          src="@/assets/LINE_SOCIAL_Basic.png"
          class="img-login-line"
          id="img-login-line"
        />
        <span class="text-login-line">Login with LINE</span>
      </div>
      <div style=" width:80%; hight: 100px;  margin: auto; margin-top:5%">
        <h4 style="display: inline-block;">ลงทะเบียนเป็นเจ้าของหอพัก</h4>
        <a href="/Login" @click="type_register()"><h4 style="display: inline-block; margin-left:2%;  color: #e4c275;">ลงทะเบียนที่นี้</h4></a>
      </div>
    </div>

    <div v-else>
      <h2>ลงทะเบียนเป็นเจ้าของหอพักด้วย LINE</h2>
      <div style="width: 80%; height:20px; border-bottom:0.5px solid silver; margin:auto"></div>
      <br>
      <br>
      <div class="container-register-login-line" @click="show_registesr">
        <img
          src="@/assets/LINE_SOCIAL_Basic.png"
          class="img-login-line"
          id="img-login-line"
        />
        <span class="text-login-line">Login with LINE</span>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      typeUser: localStorage.getItem('typeUser')||null
    }
  },
  methods: {
    async type_register(){
      await localStorage.setItem('typeUser',2)
    },
    show_registesr() {
      const liff = this.$liff // เรียก property ของ LIFF
      liff.init({
        liffId: '1655683528-q1XK2z5a'
      }).then(() => {
        console.log('LIFF initialize finished')
        // get user profile

        if (liff.isLoggedIn()) {
          liff.getProfile()
          .then(profile => {
            localStorage.setItem('state',1)
            console.log(JSON.stringify(profile))
            this.userProfile = profile
           
          })
          .catch((err) => {
            console.error(err)
          })
        } else {
          console.log('LIFF is not logged in')
          liff.login() // login
          
        }
      }).catch((err) => {
        console.error('LIFF initialize error', err)
      })
      // document.getElementById("container-register-login-form").style =
      //   "left: 50%; ";
    },
  },
  beforeDestroy(){
    localStorage.setItem('typeUser',1)
  }
};
</script>

<style scoped>


::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  background: white;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: khaki;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #b30000;
}
.container-register-login {
  width: 80%;
  height: 100%;
  margin: auto;
}
.container-register-login-line {
  width: 70%;
  height: 100px;
  margin: auto;
  border-radius: 15px;
  border: 1px solid #3e8e41;
  transition: all 0.3s ease-in;
  background: white;
  cursor: pointer;
}
.container-register-login-line:hover {
  background:#3e8e41;
  color: white;
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.2);
}
.img-login-line {
  height: 50px;
  width: 50px;
  margin-top: 5%;
  left: 10%;
  float: left;
  position: relative;

  transition: all 0.3s ease-in;
}
.text-login-line {
  position: relative;
  line-height: 4;
  margin: auto;
  font-size: 24px;
  font-weight: 500;
}
.text-head-register {
  width: 80%;
  padding: 1%;
  float: left;
  background: #e4be65;
  color: black;

  margin-left: -10.5%;

  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
}
</style>
