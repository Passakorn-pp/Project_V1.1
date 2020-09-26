<template>
  <div class="container-view-body">
    <div v-for="(room, index) in form" :key="index">
      <div class="container-view-body-room">
        <div
          class="container-view-body-room-box"
          style="border-right: 1px solid;"
        >
          <b-card
            img-src="https://placekitten.com/300/300"
            img-alt="Card image"
            class="container-view-body-room-image"
          ></b-card>
        </div>
        <div
          class="container-view-body-room-box"
          style="border-right: 1px solid;"
        >
          <h4>รายละเอียด</h4>
          <div>
            <h6>อยู่ได้ 1 คน/ห้อง</h6>
          </div>
        </div>
        <div class="container-view-body-room-box">
          <h4>ราคา</h4>
          <div>
            <h6>3000 บาท</h6>
          </div>
          <div style="bottom: 0; margin-top: 40%;">
            <b-button
              v-b-toggle.collapse-1
              variant="primary"
              @click="setcheck(index)"
              >จอง</b-button
            >
          </div>
        </div>
      </div>

      <transition name="animation">
        <div class="container-view-search" v-if="room.active">
          <b-form>
            <b-form-input
              id="input-1"
              v-model="room.name_place"
              type="text"
              class="container-view-search-input"
              required
              placeholder="อีเมล"
            ></b-form-input>

            <div class="container-view-search-radio-date">
              <b-form-radio-group
                v-model="room.radio"
                :options="options_radio"
                name="radio-validation"
              >
              </b-form-radio-group>
            </div>

            <b-form-datepicker
              id="example-datepicker"
              :date-format-options="{
                year: 'numeric',
                month: 'short',
                day: '2-digit',
                weekday: 'short'
              }"
              v-model="room.date"
              class="container-view-search-date"
            >
            </b-form-datepicker>

            <b-form-select
              v-model="room.selected"
              :options="options_select"
              value-field="item"
              text-field="name"
              disabled-field="notEnabled"
              class="container-view-search-select"
            ></b-form-select>

            <b-button
              type="submit"
              variant="primary"
              class="container-view-search-submit"
              >Submit</b-button
            >
          </b-form>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: [
        {
          name_place: "",
          date: "",
          radio: null,
          selected: "A",
          active: false
        },
        {
          name_place: "",
          date: "",
          radio: null,
          selected: "B",
          active: false
        }
      ],

      options_radio: [
        { text: "รายวัน", radio: "รายวัน" },
        { text: "รายปี", radio: "รายปี" }
      ],

      options_select: [
        { item: "A", name: "ห้องเล็ก" },
        { item: "B", name: "ห้องใหญ่" }
      ]
    };
  },
  methods: {
    setcheck(index) {
      this.form[index].active = !this.form[index].active;
      console.log(this.form[index].active);
    }
  }
};
</script>

<style>
.animation-enter-active {
  transition: all 0.1ms;
}
.animation-leave-active {
  transition: all 0.1ms;
}
.animation-enter-active,
.animation-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
.container-view-body {
  margin: auto;
  max-width: 80%;
  max-height: 120%;
  margin-bottom: 5%;
}
.container-view-body-room {
  max-width: 80%;
  height: 245px;
  margin: auto;
  margin-top: 5%;
  border-radius: 0.5%;
  border: 1px solid;
}
.img-view-room {
  float: left;
}
.container-view-body-room-box {
  min-width: 33%;
  height: 240px;

  float: left;
  display: block;
  list-style-type: none;
}
.container-view-body-room-image {
  width: 75%;
  height: 240px;
}
.container-sumit {
  max-width: 80%;
  height: 100%;
  margin: auto;
  background: silver;
  border: 1px solid;
  margin-top: 1%;

  transition: height 0.5s ease-out 1s;
}
.container-view-search :hover {
  color: aquamarine;
}
.container-view-search {
  margin: auto;
  max-width: 50%;
  height: 300px;
  border: 1px solid silver;
  box-shadow: 0 8px 12px 0 rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 9998;
  background: snow;
  border-radius: 15px;
  transition: all 0.3s ease-in-out;
}

.container-view-search-input {
  max-width: 80%;
  height: 60px;
  margin: auto;
  margin-top: 3%;
  border-radius: 30px;
  padding: 30px;
  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.2);
}
.container-view-search-radio-date {
  margin-top: 3%;
}
.container-view-search-date {
  max-width: 50%;
  height: 40px;
  margin: auto;
  margin-top: 3%;
  border-radius: 30px;
  padding: 10px;
  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.2);
}
.container-view-search-select {
  max-width: 50%;
  height: 40px;
  margin: auto;
  margin-top: 3%;
  margin-left: 15%;
  border-radius: 30px;
  float: left;
  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.2);
}
.container-view-search-submit {
  float: left;
  border-radius: 15px;
  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.2);
  margin-top: 3%;
  margin-left: 5%;
}
</style>
