<template>
  <div>
    <div class="header"></div>
    <div class="main-container">
      <h1>Courses</h1>
      <div class="my-5">
        <b-alert show dismissible>
          <b>&rArr;</b>
          Due to increased volume of new courses being submitted for review, the Quality Review Process may take up to 6 days. In order to avoid any additional delays, be sure that your course is in compliance with Udemy’s Course Materials Guidelines.
        </b-alert>
      </div>
      <div class="d-flex justify-content-between">
        <div class="d-flex">
          <b-input-group size="lg" class="search-bar">
            <b-form-input></b-form-input>
            <b-input-group-append>
              <b-button squared variant="info">
                <i class="fas fa-search"></i>
              </b-button>
            </b-input-group-append>
          </b-input-group>
          <div>
            <b-dropdown text="Filter" size="lg" variant="outline-danger" class="mx-4">
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
          <b-button squared size="lg" variant="danger">New Course</b-button>
        </div>
      </div>
      <center class="m-5">
        <h3>Based on your experience, we think these resources will be helpful.</h3>
      </center>
      <b-card no-body class="p-2 my-3">
        <div class="row align-items-center">
          <div class="col-md-4 d-flex justify-content-center">
            <b-img
              alt="Bootstrap Image Preview"
              src="https://www.udemy.com/staticx/udemy/images/instructor-dashboard/dash_course_illustration.png"
            />
          </div>
          <div class="col-md-8 pr-4">
            <h3>Create an Engaging Course</h3>
            <p>Whether you've been teaching for years or are teaching for the first time, you can make an engaging course. We've compiled resources and best practices to help you get to the next level, no matter where you're starting.</p>
            <button type="button" class="btn btn-success">Button</button>
          </div>
        </div>
      </b-card>
      <div class="row m-0 align-items-center">
        <b-card no-body class="col-md-6 p-2">
          <div class="row align-items-center">
            <div class="col-md-4">
              <b-img
                width="240"
                center
                alt="Bootstrap Image Preview"
                src="https://www.udemy.com/staticx/udemy/images/instructor-dashboard/dash_video_illustration.png"
              />
            </div>
            <div class="col-md-8">
              <h3>Get Started with Video</h3>
              <p>Quality video lectures can set your course apart. Use our resources to learn the basics.</p>
              <p>
                <a class="btn" href="#">Get Started</a>
              </p>
            </div>
          </div>
        </b-card>
        <b-card no-body class="col-md-6 p-2">
          <div class="row align-items-center">
            <div class="col-md-4">
              <b-img
                width="240"
                center
                alt="Bootstrap Image Preview"
                src="https://www.udemy.com/staticx/udemy/images/instructor-dashboard/dash_publish_illustration.png"
              />
            </div>
            <div class="col-md-8">
              <h3>Build Your Audience</h3>
              <p>Set your course up for success by building your audience.</p>
              <p>
                <a class="btn" href="#">Get Started</a>
              </p>
            </div>
          </div>
        </b-card>
      </div>
      <b-card no-body class="p-2 my-3">
        <div class="row align-items-center">
          <div class="col-md-4 d-flex justify-content-center">
            <b-img
              alt="Bootstrap Image Preview"
              src="https://www.udemy.com/staticx/udemy/images/instructor-dashboard/dash_course_illustration.png"
            />
          </div>
          <div class="col-md-8 pr-4">
            <h4>Create an Engaging Course</h4>
            <p>Whether you've been teaching for years or are teaching for the first time, you can make an engaging course. We've compiled resources and best practices to help you get to the next level, no matter where you're starting.</p>
            <button type="button" class="btn btn-success">Button</button>
          </div>
        </div>
      </b-card>
    </div>
  </div>
</template>
<script>
export default {
  data() {
      return {
        mainProps: {
          center: true,
          fluidGrow: true,
          blank: true,
          width: 245,
          height: 245,
        }
      }
    },
}
</script>

<style>
.header {
  height: 65px;
  width: 100%;
}
.search-bar {
  max-width: 240px;
}
</style>