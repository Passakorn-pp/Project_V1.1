<template>
  <div class="container-home-promotion" id="New">
    <div class="container-home-promotion-header">
      <span class="text-promotion-headder">โปรโมชั่นสุดคุ้ม</span>
      <a href="#" class="textlink-promotion-headder">ทั้งหมด</a>
    </div>
    <div class="text-promotion-body">
      <a href="/recommend" class="a-card-promotion"
        ><b-img
          class="card-promotion"
          src="https://picsum.photos/300/150/?image=41"
        >
        </b-img
      ></a>
      <a href="/recommend" class="a-card-promotion"
        ><b-img
          class="card-promotion"
          src="https://picsum.photos/300/150/?image=41"
        >
        </b-img
      ></a>
      <a href="/recommend" class="a-card-promotion"
        ><b-img
          class="card-promotion"
          src="https://picsum.photos/300/150/?image=41"
        >
        </b-img
      ></a>
      <a href="/recommend" class="a-card-promotion"
        ><b-img
          class="card-promotion"
          src="https://picsum.photos/300/150/?image=41"
        >
        </b-img
      ></a>
      <a href="/recommend" class="a-card-promotion"
        ><b-img
          class="card-promotion"
          src="https://picsum.photos/300/150/?image=41"
        >
        </b-img
      ></a>
      <a href="/recommend" class="a-card-promotion"
        ><b-img
          class="card-promotion"
          src="https://picsum.photos/300/150/?image=41"
        >
        </b-img
      ></a>
      <a href="/recommend" class="a-card-promotion"
        ><b-img
          class="card-promotion"
          src="https://picsum.photos/300/150/?image=41"
        >
        </b-img
      ></a>
      <a href="/recommend" class="a-card-promotion"
        ><b-img
          class="card-promotion"
          src="https://picsum.photos/300/150/?image=41"
        >
        </b-img
      ></a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.container-home-promotion {
  max-width: 80%;
  height: 100%;
  margin: auto;
  position: relative;
  border-radius: 30px;
  border: 2px solid #f6c026;
  background: white;
}
.container-home-promotion-header {
  width: 90%;
  height: 100px;
  margin: auto;
  border-bottom: 1px solid #f6c026;
}
.text-promotion-headder {
  font-weight: 500;
  float: left;
  font-size: 30px;
  padding: 30px;
}
.textlink-promotion-headder {
  padding: 30px;
  font-size: 24px;
  float: right;
  margin-top: 0.5%;
}

.a-card-promotion :hover {
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.2);
}
.a-card-promotion {
  width: 300px;
  height: 200px;
  display: inline-block;
  overflow: auto;
  padding: 15px;
}
.card-promotion {
  width: 100%;
  height: 100%;
  border-radius: 15px;
}
.text-promotion-body {
  width: 100%;
  height: 100%;

  overflow: auto;
  margin: auto;
}
</style>
