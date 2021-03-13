<template>
  <div>
    <!-- <div v-if="typeUser == null || typeUser == 1">
      <h2>เข้าสู่ระบบด้วย LINE</h2>
      <div style="width: 80%; height:20px; border-bottom:0.5px solid silver; margin:auto"></div>
      <br>
      <br>
      <div class="container-register-login-line" @click="show_registesr('User')" >
        <img
          src="@/assets/LINE_SOCIAL_Basic.png"
          class="img-login-line"
          id="img-login-line"
        />
        <span class="text-login-line">Login with LINE</span>
      </div>
      <div>
        <a href="/"> <button @click="Logout()">logout</button></a>
      </div>
      <div style=" width:80%; hight: 100px;  margin: auto; margin-top:5%">
        <h4 style="display: inline-block;">ลงทะเบียนเป็นเจ้าของหอพัก</h4>
        <h4 style="display: inline-block; margin-left:2%;  color: #e4c275;" @click="type_register2()">ลงทะเบียนที่นี่</h4>
      </div>
    </div>

    <div v-else>
      <h2>ลงทะเบียนเป็นเจ้าของหอพักด้วย LINE</h2>
      <div style="width: 80%; height:20px; border-bottom:0.5px solid silver; margin:auto"></div>
      <br>
      <br>
      <div class="container-register-login-line" @click="show_registesr('Dormitory')">
        <img
          src="@/assets/LINE_SOCIAL_Basic.png"
          class="img-login-line"
          id="img-login-line"
        />
        <span class="text-login-line">Login with LINE</span>
        
      </div>
      <div style=" width:80%; hight: 100px;  margin: auto; margin-top:5%">
        <h4 style="display: inline-block;">ลงทะเบียนเป็นสมาชิกทั่วไป</h4>
        <h4 style="display: inline-block; margin-left:2%;  color: #e4c275;" @click="type_register()">ลงทะเบียนที่นี่</h4>
      </div>
    </div> -->
    <div class="body-login-tab" id="alltab">
      <button v-on:click="typeUser=1" v-bind:class="[ typeUser === 1 ? 'active' : '' ]">สมาชิก</button>
      <button v-on:click="typeUser=2" v-bind:class="[ typeUser === 2 ? 'active' : '' ]">เจ้าของหอพัก</button>
      
    </div>
    <div v-if="typeUser === 1" class="container-login-body2">
      <h2 style="margin-top: 5%">เข้าสู่ระบบด้วย LINE</h2>
      <div style="width: 80%; height:20px; border-bottom:0.5px solid silver; margin:auto"></div>
      <br>
      <br>
      <div class="container-register-login-line" @click="show_registesr('User')" >
        <img
          src="@/assets/LINE_SOCIAL_Basic.png"
          class="img-login-line"
          id="img-login-line"
        />
        <span class="text-login-line">Login with LINE</span>
      </div>
      <!-- <div>
        <a href="/"> <button @click="Logout()">logout</button></a>
      </div> -->
    </div>
    <div v-if="typeUser === 2" class="container-login-body2">
      <h2 style="margin-top: 5%">เข้าสู่ระบบเจ้าของหอพักด้วย LINE</h2>
      <div style="width: 80%; height:20px; border-bottom:0.5px solid silver; margin:auto"></div>
      <br>
      <br>
      <div class="container-register-login-line" @click="show_registesr('Dormitory')">
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
      typeUser: 1
    }
  },
  methods: {
    async type_register(){
      this.typeUser = 1
    },
    async type_register2(){
      this.typeUser = 2
    },
    async show_registesr(type) {
      const liff = this.$liff // เรียก property ของ LIFF
      await localStorage.setItem('typeUser',type)
      liff.init({
        liffId: '1655683528-q1XK2z5a'
      }).then(() => {
        console.log('LIFF initialize finished')
        // get user profile

        if (liff.isLoggedIn()) {
          liff.getProfile()
          .then(profile => {
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
    Logout(){
    const liff = this.$liff
    liff.logout()
    }
  },
};
</script>

<style scoped>


.body-login-tab button{
  width: 50%;
  height: 100%;
  float: left;
  background: #e4c785;
  color: white;
  border: none;
  position: relative;
  transition: 0.3s ease-in;
  font-size: 25px;

}
.body-login-tab button.active{
  outline: none;
  background: tomato;
  border-bottom: none;

}
.body-login-tab button:focus{
  outline: none;
}

.body-login-tab{
  width: 100%;
  float: left;
  height: 50px;
  position: relative;

}
.container-login-body2 {
  width: 100%;
  float: left;
  height: 100%;
  position: relative;
  border-top: 1px solid silver;
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
  margin-top: 4%;
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
