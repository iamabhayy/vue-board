<template>
  <div>
    <div class="sub-header">
      <div class="sub-header--main-content">
        <h4 class="m-0">Course Details</h4>
      </div>
    </div>
    <div class="p-5">
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <TextInputField
          label="Course Title"
          placeholder="Insert your course title."
          :maxLength="60"
          v-model="form.title"
        />

        <TextInputField
          label="Course subtitle"
          placeholder="Insert your course subtitle."
          :maxLength="120"
          v-model="form.subtitle"
        />

        <TextInputField
          label="Course description"
          placeholder="Enter your course description"
          :maxLength="600"
          v-model="form.description"
        />

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
import TextInputField from "../../../../../components/form/TextInputField";
export default {
  data() {
    return {
      form: {
        title: "",
        subtitle: "",
        description: '',
        checked: [],
      },
      value: "",
      options: ["English", "Hindi", "Hindi + English"],
      show: true,
    };
  },
  components: {
    Multiselect,
    TextInputField,
  },
  methods: {
    onSubmit() {},
    onReset() {},
  },
};
</script>

<style>
</style>