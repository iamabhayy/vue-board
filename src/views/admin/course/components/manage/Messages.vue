<template>
  <div>
    <div class="sub-header">
      <div class="sub-header--main-content">
        <h4 class="m-0">Course Messages</h4>
      </div>
    </div>
    <div class="p-5">
      <p>
        Write messages to your students (optional) that will be sent
        automatically when they join or complete your course to encourage
        students to engage with course content. If you do not wish to send a
        welcome or congratulations message, leave the text box blank.
      </p>
      <b-form-group label="Welcome Message" label-for="title">
        <div class="form-control-counter-container">
          <b-form-textarea
            placeholder="Enter something..."
            rows="4"
            max-rows="6"
            class="form-control"
          ></b-form-textarea>
        </div>
      </b-form-group>
      <b-form-group label="Congratulations Message" label-for="title">
        <div class="form-control-counter-container">
          <b-form-textarea
            placeholder="Enter something..."
            rows="4"
            max-rows="6"
            class="form-control"
          ></b-form-textarea>
        </div>
      </b-form-group>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style>
</style>