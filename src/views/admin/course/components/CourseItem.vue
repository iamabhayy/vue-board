<template>
  <b-row class="m-0 mb-3 border">
    <div class="col-xl-2 p-0">
      <b-img
        class="img-fluid"
        src="https://www.udemy.com/staticx/udemy/images/course/750x422/placeholder.png"
      />
    </div>
    <div class="col-xl-10 p-0">
      <div class="m-3">
        <h5>
          {{ data.title }} <b-badge>{{ data.status }}</b-badge>
        </h5>
        <div>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star-half-alt"></i>
          <small class="mx-2">(242 review)</small>
        </div>
      </div>
      <div class="d-flex flex-wrap align-content-center border-top">
        <!-- <b-badge variant="secondary" class="p-3 my-2">{{data.status}}</b-badge> -->
        <div class="mx-3 my-2 flex-grow-1">
          <b-avatar-group size="28px">
            <b-avatar></b-avatar>
            <b-avatar text="BV" variant="primary"></b-avatar>
            <b-avatar
              src="https://placekitten.com/300/300"
              variant="info"
            ></b-avatar>
            <span class="ml-3">Abhay Yadav and 2 more</span>
          </b-avatar-group>
        </div>
      </div>
    </div>
  </b-row>
</template>

<script>
export default {
  props: {
    data: Object,
  },
};
</script>

<style>
</style>