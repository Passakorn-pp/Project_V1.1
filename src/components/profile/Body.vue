<template>
  <div class="container-profile-body">
    <b-tabs
      active-nav-item-class="font-weight-bold text-uppercase text-danger"
      active-tab-class="font-weight-bold text-success"
      align="center"
    >
      <div class="tab">
        <b-tab title="ข้อมูลส่วนตัว" active>
          <div class="avatar" @mousemove="set(0)" @mouseleave="set(0.5)">
            <b-avatar-group size="60px" :overlap="overlap">
              <b-avatar class="avatar-group-icon"></b-avatar>
              <b-avatar
                class="avatar-group-icon"
                text="BV"
                variant="primary"
              ></b-avatar>
              <b-avatar
                src="https://placekitten.com/300/300"
                variant="info"
                class="avatar-group-icon"
              ></b-avatar>
              <b-avatar
                class="avatar-group-icon"
                text="OK"
                variant="danger"
              ></b-avatar>
              <b-avatar class="avatar-group-icon" variant="warning"></b-avatar>
              <b-avatar
                src="https://placekitten.com/320/320"
                variant="dark"
                class="avatar-group-icon"
              ></b-avatar>
              <b-avatar
                class="avatar-group-icon"
                icon="music-note"
                variant="success"
              ></b-avatar>
            </b-avatar-group>
          </div>
        </b-tab>
        <b-tab title="ที่พัก"><p>I'm the second tab</p></b-tab>
        <b-tab title="ประกาศ"><p>I'm a disabled tab!</p></b-tab>
      </div>
    </b-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      overlap: 0.5
    };
  },
  methods: {
    set(index) {
      this.overlap = index;
    }
  }
};
</script>

<style>
.container-profile-body {
  width: 70%;
  height: 100%;
  position: absolute;
  top: 45%;
  left: 15%;
  z-index: 2;
}
.tab {
  border-left: 1px solid silver;
  border-right: 1px solid silver;
  border-bottom: 1px solid silver;
  height: 500px;
}
.avatar {
  margin-left: 100px;
  max-width: 30%;
  background: slateblue;
}

.avatar-group-icon {
  transition: all 0.5s ease-in;
}
</style>
