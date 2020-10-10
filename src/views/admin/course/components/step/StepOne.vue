<template>
  <div class="container">
      <h3 class="text-center m-5">
        First, let's find out what type of course you're making.
      </h3>
      <div class="row mt-5 justify-content-center">
        <b-card no-body v-bind:class="'col-md-3 m-2 p-3 '+ (choice==1? 'selected': '')" @click="changeSelection(1)">
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
         <b-card no-body v-bind:class="'col-md-3 m-2 p-3 '+ (choice==2? 'selected': '')" @click="changeSelection(2)">
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
</template>

<script>
export default {
    data(){
      return{
        choice: 1,
      }
    },
    methods: {
        changeSelection(index){
          this.choice = index;
        }
    }
}
</script>

<style scoped>
.selected{
  border: 5px solid #17a2b8;
}
</style>