<template>
  <div class="container" id="Head">
    <div class="container-logo">
      <a href="/" class="logo-head" >
        <img src="@/assets/logo-1.1.png" alt="world" id="Head-logo" class="img-logo-head" />
      </a>
    </div>
    <div class="container-login" @click="setcheck" id="Head-login">
      <a href="/register"
        ><b-avatar icon="people-fill" style="cursor: pointer;"></b-avatar
      ></a>
    </div>
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
        <a href="/profile" class="text-above" v-show="check">ข้อมูลส่วนตัว</a>
      </li>
      <li class="li-head" id="Head-list">
        <a href="#" class="text-above" v-show="check">ลงชื่อเข้าใช้</a>
      </li>
      <li class="li-head" id="Head-list">
        <a href="#" class="text-above">เกี่ยวกับ</a>
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
    setcheck() {
      this.check = !this.check;
      console.log(this.check);
    },
    scrollTo(selector) {
      document.querySelector(selector).scrollIntoView({ behavior: "smooth" });
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
  margin-top: 2%;
  height: 40px;
  width: 40px;
  transition: all 0.3s ease-in;
}
</style>
