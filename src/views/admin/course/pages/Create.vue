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
        <p class="flex-grow-1 m-3">Step {{ step }} OF 4</p>
        <b-button sm class="m-2 mr-4" variant="light" @click="goToCourse">Exit</b-button>
      </div>
      <b-progress
        height="6px"
        :precision="0"
        :value="step*25"
        :max="100"
        variant="secondary"
      ></b-progress>
    </div>
    <!-- Step Page Code Goese Here -->
    <component v-bind:is="(step===1)? 'StepOne': (step===2)? 'StepTwo': (step===3)? 'StepThree': 'StepFour'" />
    
    <div class="footer border-top p-4">
      <div class="container d-flex">
          <b-button variant="outline-info" @click="previous">Previous</b-button>
          <div class="ml-auto">
            <b-button variant="outline-danger" @click="next" v-if="step!=4">Continue</b-button>
            <b-button variant="outline-danger" @click="createCourse" v-if="step==4">Create</b-button>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
import StepOne from '../components/step/StepOne';
import StepTwo from '../components/step/StepTwo';
import StepThree from '../components/step/StepThree';
import StepFour from '../components/step/StepFour';

export default {
  data() {
    return {
      progress: 25,

    };
  },
  components:{
    StepOne,
    StepTwo,
    StepThree,
    StepFour
  },
  methods: {
    goToCourse(){
      this.$router.push({ name: 'Course' })
    },
    createCourse(){
      // Create New Course With Course Name & Category also with type.
      // Get created course id and navigate to manage page.
      this.$router.push({ name: 'course-manage', params: { id: '001' } })
    },
    next(){
      if(this.step<4){
        this.$router.push({ name: 'course-create', params: { step: this.step+1 } })
      }
    },
    previous(){
      if(this.step>1){
        this.$router.push({ name: 'course-create', params: { step: this.step-1 } })
      }
    },
  },
  computed: {
    step(){
      return parseInt(this.$route.params.step, 10);
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