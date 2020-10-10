<template>
  <div>
    <div class="top-nav">
      <div class="d-flex align-content-center">
        <div class="border-right" style="margin: auto">
          <a href="" class="text-decoration-none text-light p-3">
            <i class="fas fa-chevron-left fa-lg mr-2"></i>
            Back to courses
          </a>
        </div>
        <h5 class="text-light text-truncate m-3">Physics XII</h5>
        <p class="text-light my-3">DRAFT</p>
        <h5 class="flex-grow-1 text-light m-3">
          6min of video content uploaded
        </h5>
        <div>
          <b-button sm class="m-2" variant="light" disabled @click="goToCourse"
            >Save</b-button
          >
          <b-button variant="link" class="text-light mr-2"
            ><i class="fas fa-cog fa-lg"></i
          ></b-button>
        </div>
      </div>
    </div>
    <div class="responsive_container mt-5">
      <div class="d-flex">
        <div class="side-step mt-5 pr-4">
          <b-list-group>
            <b-list-group-item href="./introduction">Introduction</b-list-group-item>
            <b-list-group-item href="./course-details">Course Details</b-list-group-item>
            <b-list-group-item href="./curriculums">Curriculums</b-list-group-item>
            <b-list-group-item href="./pricing">Pricing</b-list-group-item>
            <b-list-group-item href="./promotions">Promotions</b-list-group-item>
            <b-list-group-item href="./messages">Course messages</b-list-group-item>
          </b-list-group>
          
        </div>
        <div class="app-content">
          <transition name="fade" mode="out-in">
            <router-view></router-view>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      
    }
  },
  components: {

  },
  methods: {
    goToCourse() {},
  }
};
</script>

<style lang="scss">
.top-nav {
  background: #52143e;
}
.app-content {
  width: 100%;
  background: #fff;
  box-shadow: 0 2px 8px 2px rgba(20, 23, 28, 0.15);
}
.sub-header {
  display: flex;
  position: relative;
  padding: 30px 45px;
  border-bottom: 1px solid #dedfe0;
}
.sub-header--main-content {
  flex: 1;
  min-width: 1px;
  display: flex;
}
.side-step{
  min-width: 280px;
}
</style>