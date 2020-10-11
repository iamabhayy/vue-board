<template>
  <b-form-group label="Course Image" label-for="input-3" class="mt-5">
    <div class="row">
      <div class="col-xl-6">
        <b-img
          src="https://www.udemy.com/staticx/udemy/images/course/750x422/placeholder.png"
          fluid-grow
          alt="Fluid-grow image"
        ></b-img>
      </div>
      <div class="col-xl-6">
        <p>
          Upload your course image here. It must meet our course image quality
          standards to be accepted. Important guidelines: 750x422 pixels; .jpg,
          .jpeg,. gif, or .png. no text on the image.
        </p>
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
</template>

<script>
export default {
  props: {
    name: String,
    placeholder: String,
    label: { type: String, default: "" },
    value: String,
    maxLength: { type: Number, default: 60 },
    showCount: { type: Boolean, default: true },
  },
};
</script>

<style>
</style>