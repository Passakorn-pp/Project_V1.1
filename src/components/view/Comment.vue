<template>
  <div class="container-view-comment">
    <div class="container-view-comment-header">
      <span class="text-view-comment-header">ความคิดเห็น</span>
    </div>
    <div class="container-view-comment-body">
      <b-form-input
        v-model="text"
        ref="input-comment"
        required
        class="input-view-comment"
        placeholder="แสดงความคิดเห็น"
        v-if="$store.getters.getUserstate == 'User'"
      ></b-form-input>
      <b-form-input
        v-model="text"
        ref="input-comment"
        required
        class="input-view-comment"
        placeholder="แสดงความคิดเห็น"
        disabled
        v-else
      ></b-form-input> 
      <b-button
        v-if="text == ''"
        disabled
        class="button-view-comment"
        variant="primary"
        >Submit</b-button
      >
      <b-button
        v-else
        @click="addtext"
        class="button-view-comment"
        variant="primary"
        >Submit</b-button
      >

      <br />
      <br />

      <div v-for="(text,index) in listtext_old" :key="index">
        <b-avatar
          icon="people-fill"
          style="float: left; margin-top: 3%; margin-left:-5%;"
        ></b-avatar>
        <div class="container-view-comment-list">
          <span class="text-view-comment-list">{{ text.text }}</span>
        </div>
      </div>
      <div v-for="(text,index) in listtext" :key="index">
        <b-avatar
          icon="people-fill"
          style="float: right; margin-top: 3%; margin-right:-5%"
        ></b-avatar>
        <div class="container-view-comment-list2">
          <span class="text-view-comment-list">{{ text.text }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'room'
  ],
  data() {
    return {
      text: "",
      check: true,
      disabled: "disabled",
      listtext_old: [{ text: "ดีมาก" }],
      listtext: []
    };
  },

  methods: {
    addtext() {
      this.listtext.push({
        text: this.text
      });
      this.text = "";
      this.$refs["input-comment"].focus();
    },
    setcheck() {
      this.check = false;
    }
  }
};
</script>
<style scoped>
.container-view-comment {
  max-width: 70%;
  height: 100%;
  border-radius: 15px;
  border: 1.5px solid silver;
  margin: auto;
  margin-bottom: 5%;
  background: white;
}
.container-view-comment-header {
  height: 100px;
  width: 90%;
  position: relative;
  border-bottom: 1px solid silver;

  margin: auto;
}
.text-view-comment-header {
  font-size: 28px;
  font-weight: 500;
  text-align: center;
  float: left;
  padding: 30px 0;
}
.container-view-comment-body {
  height: 100%;
  width: 80%;
  position: relative;
  margin: auto;
  margin-top: 2%;

  padding: 15px;
}
.input-view-comment {
  float: left;
  border-radius: 15px;
  max-width: 80%;
  position: relative;
}
.button-view-comment {
  float: right;
  border-radius: 15px;
}
.container-view-comment-list {
  width: 80%;
  height: 120px;
  background: bisque;
  position: relative;
  margin: auto;
  margin-top: 2%;
  -moz-border-radius: 10px;
  -webkit-border-radius: 10px;
  border-radius: 10px;
}
.container-view-comment-list ::before {
  content: "";
  position: absolute;
  right: 100%;
  top: 26px;
  width: 0;
  height: 0;
  border-top: 13px solid transparent;
  border-right: 26px solid bisque;
  border-bottom: 13px solid transparent;
}
.container-view-comment-list2 {
  width: 80%;
  height: 120px;
  background: bisque;
  position: relative;
  margin: auto;
  margin-top: 2%;
  -moz-border-radius: 10px;
  -webkit-border-radius: 10px;
  border-radius: 10px;
}
.container-view-comment-list2 ::before {
  content: "";
  position: absolute;
  left: 100%;
  top: 26px;
  width: 0;
  height: 0;
  border-top: 13px solid transparent;
  border-left: 26px solid bisque;
  border-bottom: 13px solid transparent;
}
.text-view-comment-list {
  font-size: 24px;
  text-align: center;
  float: left;
  padding: 30px;
}
</style>
