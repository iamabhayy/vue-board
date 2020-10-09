<template>
  <div>
    <div class="sub-header">
      <div class="sub-header--main-content">
        <h4 class="m-0">Course Details</h4>
      </div>
    </div>
    <div class="p-5">
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group label="Course title" label-for="title">
          <div class="form-control-counter-container">
            <b-form-input
              placeholder="Insert your course title."
              maxlength="60"
              class="form-control"
            />
            <div class="form-control-counter">60</div>
          </div>
        </b-form-group>

        <b-form-group label="Course subtitle" label-for="title">
          <div class="form-control-counter-container">
            <b-form-input
              placeholder="Insert your course subtitle."
              maxlength="120"
              class="form-control"
            />
            <div class="form-control-counter">120</div>
          </div>
        </b-form-group>

        <b-form-group label="Course description" label-for="description">
          <b-form-input
            id="description"
            v-model="form.name"
            required
            placeholder="Enter your description"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-3" label="Basic info" label-for="input-3">
          <div class="row">
            <div class="col-xl-4">
              <multiselect
                v-model="value"
                :options="options"
                :searchable="false"
                placeholder="Pick course language"
              ></multiselect>
            </div>
            <div class="col-xl-4">
              <multiselect
                v-model="value"
                :options="options"
                :searchable="false"
                placeholder="Pick course category"
              ></multiselect>
            </div>
            <div class="col-xl-4">
              <multiselect
                v-model="value"
                :options="options"
                :searchable="false"
                placeholder="Pick course sub category"
              ></multiselect>
            </div>
          </div>
        </b-form-group>

        <b-form-group id="input-group-3" label="Course Tags" label-for="input-3">
          <multiselect
                v-model="value"
                :options="options"
                :multiple="true"
                :searchable="false"
                placeholder="Pick tags for course"
              ></multiselect>
        </b-form-group>

        <b-form-group id="input-group-3" label="Course Image" label-for="input-3" class="mt-5">
          <div class="row">
            <div class="col-xl-6">
              <b-img src="https://www.udemy.com/staticx/udemy/images/course/750x422/placeholder.png" fluid-grow alt="Fluid-grow image"></b-img>
            </div>
            <div class="col-xl-6">
              <p>Upload your course image here. It must meet our course image quality standards to be accepted. Important guidelines: 750x422 pixels; .jpg, .jpeg,. gif, or .png. no text on the image.</p>
              <b-form-file
                class="file-control"
                v-model="file1"
                :state="Boolean(file1)"
                browse-text="Upload File"
                placeholder="Choose a file or drop it here..."
                drop-placeholder="Drop file here..."
              ></b-form-file>
            </div>
          </div>
        </b-form-group>

        <b-form-group id="input-group-3" label="Promotional video" label-for="input-3">
          <div class="row">
            <div class="col-xl-6">
              <b-img src="https://www.udemy.com/staticx/udemy/images/course/750x422/placeholder.png" fluid-grow alt="Fluid-grow image"></b-img>
            </div>
            <div class="col-xl-6">
              <p>Students who watch a well-made promo video are 5X more likely to enroll in your course. We've seen that statistic go up to 10X for exceptionally awesome videos. Learn how to make yours awesome!</p>
              <b-form-file
                class="file-control"
                v-model="file1"
                :state="Boolean(file1)"
                browse-text="Upload File"
                placeholder="Choose a file or drop it here..."
                drop-placeholder="Drop file here..."
              ></b-form-file>
            </div>
          </div>
        </b-form-group>

        <b-form-group id="input-group-3" label="Course Instructor" label-for="input-3">
          <multiselect
                v-model="value"
                :options="options"
                :multiple="true"
                :searchable="false"
                placeholder="Select course instructure"
              ></multiselect>
        </b-form-group>

      </b-form>
    </div>
  </div>
</template>

<script>
import Multiselect from "vue-multiselect";

export default {
  data() {
    return {
      form: {
        email: "",
        name: "",
        food: null,
        checked: [],
      },
      foods: [
        { text: "Select One", value: null },
        "Carrots",
        "Beans",
        "Tomatoes",
        "Corn",
      ],
      value: "",
      options: ["English", "Hindi", "Hindi + English"],
      show: true,
    };
  },
  components: {
    Multiselect,
  },
  methods: {
    onSubmit() {},
    onReset() {},
  },
};
</script>

<style>
</style>