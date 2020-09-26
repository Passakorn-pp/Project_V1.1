<template>
  <div class="container-profile-head">
    <div class="cotainer-profile-head-img"></div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.container-profile-head {
  width: 100%;
  height: 200px;

  position: relative;
  z-index: 9997;

  transform: translateY(50%);
}
.cotainer-profile-head-img {
  width: 140px;
  height: 140px;
  border-radius: 70px;
  background: yellow;
  position: absolute;
  left: 20%;
  top: 40%;
  border: 5px solid silver;
}
</style>
