<template id="body_re">
  <div class="container-recommend-body">
    <ul class="container-ui-recommend">
      <li v-for="user in displayuser" :key="user.id">
        <a href="/view">
          <div class="container-li-recommend">
            <b-card
              img-src="https://placekitten.com/300/300"
              img-alt="Card image"
              class="card-recommend"
            ></b-card>
            <div class="container-recommend-card">
              <div class="name-home">
                {{ user.name }}
                <div class="rating-recomend ">
                  <b-form-rating
                    v-model="value"
                    readonly
                    no-border
                    variant="warning"
                  ></b-form-rating>
                </div>
              </div>
            </div>
            <div class="container-recommend-card-price">
              <div class="name-home">
                ราคา
              </div>
              <br />
              <ul
                v-for="price in user.price"
                :key="price"
                class="ui-recommend-price"
              >
                <li class="li-recommend-price">
                  <span>ห้องใหญ่:</span>
                  <span>{{ price.big_room }}</span>
                </li>

                <li class="li-recommend-price">
                  <span>ห้องเล็ก:</span>
                  <span>{{ price.small_room }}</span>
                </li>
              </ul>
            </div>

            <div clas="recomment-line"></div>
          </div>
        </a>
      </li>
    </ul>
    <div>
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="my-table"
        pills
        class="container-recommend-page"
        style=""
        @input="paginate(currentPage)"
      ></b-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "body_re",
  data() {
    return {
      value: 5,
      perPage: 3,
      currentPage: 1,
      users: [
        {
          id: 1,
          name: "John Doe",
          price: [
            {
              big_room: "3000",
              small_room: "2000"
            }
          ]
        },
        {
          id: 2,
          name: "Jane Doe",
          price: [
            {
              big_room: "3500",
              small_room: "2900"
            }
          ]
        },
        {
          id: 3,
          name: "Chuck Norris",
          price: [
            {
              big_room: "3200",
              small_room: "2000"
            }
          ]
        },
        {
          id: 4,
          name: "Chuck Norris",
          price: [
            {
              big_room: "4000",
              small_room: "3000"
            }
          ]
        }
      ]
    };
  },
  beforeMount() {
    this.fetchData();
  },
  computed: {
    rows() {
      return this.users.length;
    }
  },
  methods: {
    async fetchData() {
      this.displayuser = this.users.slice(0, 3);
    },
    paginate(currentPage) {
      const start = (currentPage - 1) * this.perPage;
      this.displayuser = this.users.slice(start, start + 3);
    }
  }
};
</script>

<style>
.container-recommend-body {
  margin: auto;
  max-width: 90%;
  height: 100%;
}
.container-ui-recommend {
  margin-top: 3%;

  list-style-type: none;
  width: 100%;
}
.container-li-recommend {
  margin-top: 5%;

  width: 100%;
  height: 200px;
  border: 0.5px solid;
  border-radius: 15px;
}
.card-recommend {
  float: left;
  height: 190px;
  width: 190px;
  margin-top: 0.3%;
  margin-left: 0.5%;
}
.name-home {
  margin-top: 3%;
  margin-left: 3%;
  float: left;
  font-size: 36;
  font-weight: 800;
}
.recomment-line {
  float: right;
  height: 200px;
  width: 200px;
  border-right: 1px solid;
  margin: auto;
  background: saddlebrown;
  z-index: 9999;
  display: initial;
}
.container-recommend-card {
  float: left;
  height: 200px;
  width: 550px;
  overflow: auto;

  border-right: 1px solid silver;
}
.container-recommend-card-price {
  float: left;
  height: 200px;
  width: 400px;
}
.li-recommend-price {
  display: block;
  width: 200px;
  margin-right: 80%;

  text-align: left;
}
.ui-recommend-price {
  margin-top: 3%;

  width: 100%;
}
.container-recommend-page {
  margin-top: 5%;
  margin-bottom: 5%;
  position: absolute;
  left: 50%;

  transform: translate(-50%, -50%);
}
</style>
