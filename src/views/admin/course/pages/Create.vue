<template>
  <div>
    <div>
      <div class="d-flex align-content-center">
        <div class="border-right px-3" style="margin: auto">
          <object
            style="height: 28px"
            data="https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg"
            type="image/svg+xml"
          ></object>
        </div>
        <p class="flex-grow-1 m-3">Step {{ $route.params.step }} OF 4</p>
        <b-button sm class="m-2 mr-4" variant="light" @click="goToCourse">Exit</b-button>
      </div>
      <b-progress
        height="6px"
        :precision="0"
        :value="progress"
        :max="100"
        variant="secondary"
      ></b-progress>
    </div>
    <div class="container">
      <h3 class="text-center m-5">
        First, let's find out what type of course you're making.
      </h3>
      <div class="row mt-5 justify-content-center">
        <b-card no-body class="col-md-3 m-2 p-3">
          <b-img
            center
            height="38px"
            class="m-5"
            alt="Bootstrap Image Preview"
            src="https://www.pinclipart.com/picdir/middle/345-3450894_course-icon-free-download-onlinewebfonts-com-file-online.png"
          />
          <h5 class="text-center">Course</h5>
          <p class="text-center">
            Create rich learning experiences with the help of video lectures,
            quizzes, coding exercises, etc.
          </p>
        </b-card>
        <b-card no-body class="col-md-3 m-2 p-3">
          <b-img
            center
            height="38px"
            class="m-5"
            alt="Bootstrap Image Preview"
            src="https://www.pinclipart.com/picdir/middle/345-3450894_course-icon-free-download-onlinewebfonts-com-file-online.png"
          />
          <h5 class="text-center">Practice Test</h5>
          <p class="text-center">
            Help students prepare for certification exams by providing practice
            questions.
          </p>
        </b-card>
      </div>
    </div>
    <div class="footer border-top p-4">
      <div class="container d-flex">
          <b-button variant="outline-info" @click="previous">Previous</b-button>
          <b-button variant="outline-danger" class="ml-auto" @click="next">Continue</b-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      progress: 25,
    };
  },
  methods: {
    goToCourse(){
      this.$router.push({ name: 'Course' })
    },
    next(){
      if(this.progress<100){
        this.progress = this.progress+25;
      }
    },
    previous(){
      if(this.progress>25){
        this.progress = this.progress-25;
      }
    }
  }
};
</script>
<style>
.footer{
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background: white;
}
</style>