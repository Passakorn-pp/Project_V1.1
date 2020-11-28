<template>
  <div>
    <h2>เข้าสู่ระบบ</h2>
    <br>
    <br>
    <div style="width:50%; margin:auto">
      <b-form-input v-model="usename" placeholder="Enter your ueser" ></b-form-input>
      <br>
    </div>
    <div style="width:50%; margin:auto">
      <b-form-input v-model="password" type="password" placeholder="Enter your password"></b-form-input>
      <br>
    </div>
    
    <div style="width:50%; margin:auto">
      <b-button type="submit" variant="primary" @click="login()">Submit</b-button>
      <br>
    </div>
    <div style="width:50%; margin:auto">
      <b-button type="submit" variant="primary" @click="logout()">ออกจากระบบ</b-button>
      <br>
    </div>
    <div>
      {{this.$store.getters.getView_use}}
    </div>

    
   
    <div class="container-register-login-line" @click="show_registesr">
      <img
        src="@/assets/LINE_SOCIAL_Basic.png"
        class="img-login-line"
        id="img-login-line"
      />
      <span class="text-login-line">ลงชื่อเข้าใช้ด้วยไลน์</span>
    </div>

    <div
      class="container-register-login-form"
      id="container-register-login-form"
    >
      <b-icon
        icon="x"
        @click="back_to2"
        class="arrow-left-register-login-form"
      ></b-icon>
      <h2 class="text-head-register">สมัครสมาชิก</h2>
      <label class="text-register">ชื่อผู้ใช้</label>
      <br />
      <b-icon icon="person-fill" class="register-login-form-icon"></b-icon>
      <input
        type="text"
        placeholder="ชื่อ-นามสกุล"
        class="register-login-form"
      />

      <label class="text-register"> เพศ</label>
      <br />
      <input type="radio" id="ชาย" name="drone" />
      <label for="ชาย" class="register-login-checkbox">ชาย</label>
      <input type="radio" id="หญิง" name="drone" />
      <label for="หญิง" class="register-login-checkbox">หญิง</label>
      <br />

      <label class="text-register">มหาวิทยาลัย</label>
      <br />
      <b-icon icon="" class="register-login-form-icon"></b-icon>
      <input
        type="text"
        placeholder="มหาวิทยาลัย"
        class="register-login-form"
      />

      <label class="text-register"> คณะ</label>
      <br />
      <b-icon icon="book-half" class="register-login-form-icon"></b-icon>
      <input type="text" placeholder="คณะ" class="register-login-form" />

      <label class="text-register"> เบอร์โทรศัพท์</label>
      <br />

      <b-icon icon="camera" class="register-login-form-icon"></b-icon>
      <input
        type="text"
        placeholder="เบอร์โทรศัพท์"
        class="register-login-form"
      />
      <br />
      <button class="register-login-form-button">ยืนยัน</button>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usename:null,
      password:null
    }
  },
  methods: {
    show_registesr() {
      document.getElementById("container-register-login-form").style =
        "left: 50%; ";
    },
    back_to2() {
      document.getElementById("container-register-login-form").style =
        "left: 150%; ";
      
    },
    login(){
      this.$store.dispatch("retrieveToken",{
        usename : this.usename,
        password : this.password 
      });
      if(this.$store.getters.getState==true)
      {
        this.$router.push('/');
      }
      
    },
    logout(){
      this.$store.dispatch("logout");
    }
  },

};
</script>

<style scoped>
input[type="text"]:focus {
  background-color: white;
  outline: none;
}
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
.container-register-login-form {
  width: 60%;
  height: 80%;
  border-radius: 10px;

  border: 1px solid #3e8e41;
  background: #f4efaf;
  padding: 5%;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 150%;
  transform: translate(-50%, -50%);
  transition: all 0.3s ease-in;
  overflow: auto;
}
.register-login-form-icon {
  margin-left: 15%;
  float: left;
  position: relative;
  padding: 3%;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  height: 50px;
  width: 10%;
  border: 2px solid silver;
  border-right: none;
  background: white;
}
.register-login-form {
  position: relative;
  padding: 1%;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  float: left;
  height: 50px;
  width: 60%;
  border: 2px solid silver;
  display: block;
  margin: auto;
  border-left: none;
}
.register-login-form-button:hover {
  background: violet;
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.2);
}
.register-login-form-button:focus {
  outline: none;
}
.register-login-form-button:active {
  background-color: #3e8e41;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}
.register-login-form-button {
  position: relative;
  margin-top: 5%;
  border-radius: 50px;
  height: 50px;
  width: 70%;
  border: 1px solid silver;
  text-decoration: none;
  background-size: cover;
  background-image: url("14.jpg");

  color: black;
}
.arrow-left-register-login-form {
  height: 40px;
  width: 40px;
  float: right;
  cursor: pointer;
  color: #b30000;
}
.text-register {
  position: relative;
  text-align: left;
  width: 73%;
  margin-top: 5%;
}
.register-login-checkbox {
  margin-left: 2%;
  margin-right: 5%;
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
  margin-top: 10%;
  border-radius: 15px;
  border: 1px solid #3e8e41;
  transition: all 0.3s ease-in;
  background: white;
  cursor: pointer;
}
.container-register-login-line:hover {
  background: #bedff7;
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
  margin-left: -10%;
  font-size: 24px;
  font-weight: 500;
}
.text-head-register {
  width: 80%;
  padding: 1%;
  float: left;
  background-size: cover;
  background-image: url("14.jpg");
  color: black;

  margin-left: -10.5%;

  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
}
</style>
