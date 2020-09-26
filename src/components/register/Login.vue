<template>
  <div class="container-register-login">
    <h2>ลงชื่อเข้าใช้</h2>

    <div @click="setsize" class="container-register-login-line" id="login-line">
      <img
        src="@/assets/LINE_SOCIAL_Basic.png"
        class="img-login-line"
        id="img-login-line"
      />
      <span class="text-login-line" v-show="check">ลงชื่อเข้าใช้ด้วยไลน์</span>

      <div
        class="container-from-login-line"
        v-show="check == false"
        id="form-login-line"
      >
        <input
          type="email"
          v-model="form.email"
          placeholder="อีเมลของคุณ"
          class="container-login-line-email"
        />
        <input
          type="password"
          v-model="form.password"
          placeholder="รหัสผ่านของคุณ"
          class="container-login-line-password"
        />
        <br />
        <button class="container-login-line-submit">ยืนยัน</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      check: true,
      form: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    setsize() {
      this.check = false;

      document.getElementById("login-line").style = "height: 400px; ";
      document.getElementById("img-login-line").style = " left: 45%; ";
      document.getElementById("form-login-line").style = "  ";
    },
    back_to2() {
      this.check = true;
      document.getElementById("login-line").style = "height: 100px; ";
      document.getElementById("img-login-line").style = " left: 5%; ";
    }
  }
};
</script>

<style>
.container-register-login {
  width: 80%;
  height: 100%;
  margin: auto;
}
.container-register-login-line {
  width: 80%;
  height: 100px;
  margin: auto;
  margin-top: 10%;
  border-radius: 15px;
  border: 1px solid silver;
  transition: all 0.3s ease-in;
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
.container-from-login-line {
  max-width: 80%;

  position: relative;
  margin: auto;
  margin-top: 20%;
  height: 100px;

  transition: all 0.3s ease-in;
}
.container-login-line-email {
  position: relative;
  margin-top: 3%;
  border-radius: 15px;
  height: 50px;
  width: 70%;
  border: 1px solid silver;
}
.container-login-line-password {
  position: relative;
  margin-top: 4%;
  border-radius: 15px;
  height: 50px;
  width: 70%;
  border: 1px solid silver;
}
.container-login-line-submit {
  position: relative;
  margin-top: 4%;
  border-radius: 15px;
  height: 50px;
  width: 20%;
  border: 1px solid silver;
  text-decoration: none;
}
.container-login-line-submit:focus {
  outline: none;
}
.container-login-line-submit:active {
  background-color: #3e8e41;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}
.arrow-left-register-login-line {
  height: 40px;
  width: 40px;
  float: left;
  cursor: pointer;
  color: yellowgreen;
}
</style>
