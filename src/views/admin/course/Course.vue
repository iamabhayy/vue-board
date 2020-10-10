<template>
  <div>
    <div class="header"></div>
    <div class="responsive_container">
      <div>
        <h2>Courses</h2>
        <p class="subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          eius.
        </p>
      </div>
      <div class="my-5">
        <b-alert show dismissible>
          <i class="fas fa-info-circle"></i>
          Due to increased volume of new courses being submitted for review, the
          Quality Review Process may take up to 6 days. In order to avoid any
          additional delays, be sure that your course is in compliance with
          Udemy’s <a class="text-decoration-none" href="">Course Materials Guidelines</a>.
        </b-alert>
      </div>
      <div class="d-flex justify-content-between">
        <div class="d-flex">
          <b-input-group class="search-bar">
            <b-form-input placeholder="Search your courses"></b-form-input>
            <b-input-group-append>
              <b-button squared variant="info">
                <i class="fas fa-search"></i>
              </b-button>
            </b-input-group-append>
          </b-input-group>
          <div>
            <b-dropdown text="Filter" variant="outline" class="mx-4 filter-btn">
              <b-dropdown-item href="#">Newest</b-dropdown-item>
              <b-dropdown-item href="#">Oldest</b-dropdown-item>
              <b-dropdown-item href="#">A-Z</b-dropdown-item>
              <b-dropdown-item href="#">Z-A</b-dropdown-item>
              <b-dropdown-item href="#">Published first</b-dropdown-item>
              <b-dropdown-item href="#">Unpublished first</b-dropdown-item>
            </b-dropdown>
          </div>
        </div>
        <div>
          <b-button variant="danger" @click="createCourse">New Course</b-button>
        </div>
      </div>
        <center class="center-block m-5" v-if="$apollo.queries.courses.loading">
          <b-spinner type="grow" label="Loading..."></b-spinner>
        </center>
        <div v-if="error">{{ error }}</div>

        <div class="my-5">
          <div v-for="(course, idx) in courses" :key="idx">
            <CourseItem :data="course"/>
          </div>
        </div>

      <center class="m-5">
        <h3>
          Based on your experience, we think these resources will be helpful.
        </h3>
      </center>
      <b-card no-body class="p-5 my-3">
        <b-row class="align-items-center">
          <div class="col-md-4 d-flex justify-content-center">
            <b-img
              center
              width="220"
              class="p-3 img-fluid"
              alt="Bootstrap Image Preview"
              src="https://www.udemy.com/staticx/udemy/images/instructor-dashboard/dash_course_illustration.png"
            />
          </div>
          <div class="col-md-8 pr-4">
            <h4>Create an Engaging Course</h4>
            <p>
              Whether you've been teaching for years or are teaching for the
              first time, you can make an engaging course. We've compiled
              resources and best practices to help you get to the next level, no
              matter where you're starting.
            </p>
            <a class="text-decoration-none" href="#">Get Started</a>
          </div>
        </b-row>
      </b-card>
      <b-row class="align-items-center m-0">
        <b-card no-body class="col-md-6 p-4">
          <b-row class="align-items-center">
            <div class="col-md-4">
              <b-img
                center
                width="220"
                class="p-3 img-fluid"
                alt="Bootstrap Image Preview"
                src="https://www.udemy.com/staticx/udemy/images/instructor-dashboard/dash_video_illustration.png"
              />
            </div>
            <div class="col-md-8">
              <h5>Get Started with Video</h5>
              <p>
                Quality video lectures can set your course apart. Use our
                resources to learn the basics.
              </p>
              <a class="text-decoration-none" href="#">Get Started</a>
            </div>
          </b-row>
        </b-card>
        <b-card no-body class="col-md-6 p-4">
          <b-row class="align-items-center">
            <div class="col-md-4">
              <b-img
                center
                width="220"
                class="p-3 img-fluid"
                alt="Bootstrap Image Preview"
                src="https://www.udemy.com/staticx/udemy/images/instructor-dashboard/dash_publish_illustration.png"
              />
            </div>
            <div class="col-md-8">
              <h5>Build Your Audience</h5>
              <p>Set your course up for success by building your audience.</p>
              <a class="text-decoration-none" href="#">Get Started</a>
            </div>
          </b-row>
        </b-card>
      </b-row>
      <b-card no-body class="my-3 p-4">
        <b-row class="align-items-center">
          <div class="col-md-4">
            <b-img
              center
              width="220"
              class="p-3 img-fluid"
              alt="Bootstrap Image Preview"
              src="https://www.udemy.com/staticx/udemy/images/instructor-dashboard/dash_challenge_illustration.png"
            />
          </div>
          <div class="col-md-8 pr-4">
            <h5>Join the Newcomer Challenge!</h5>
            <p>
              Get exclusive tips and resources designed to help you launch your
              first course faster! Eligible instructors who publish their first
              course on time will receive a special bonus to celebrate. Start
              today!
            </p>
            <a class="text-decoration-none" href="#">Get Started</a>
          </div>
        </b-row>
      </b-card>
    </div>
  </div>
</template>
<script>
import CourseItem from "./components/CourseItem";
import { GET_ALL_COURSES } from '../../../plugins/query';

export default {
  data() {
    return {
      error: null
    };
  },
  apollo: {
    courses: {
      query: GET_ALL_COURSES,
      error(error) {
        this.error = JSON.stringify(error.message);
      }
    }
  },
  components: {
    CourseItem,
  },
  methods: {
    createCourse(){
      this.$router.push({ name: 'course-create', params: { step: 1 } })
    }
  },
  created() {
    this.$apollo.queries.courses.refetch()
  }
};
</script>

<style lang="scss">
.header {
  height: 65px;
  width: 100%;
}

.btn {
  height: 44px;
}
</style>