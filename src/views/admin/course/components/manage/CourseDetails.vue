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
          <b-form-select
            id="input-3"
            v-model="form.food"
            :options="foods"
            required
          ></b-form-select>
        </b-form-group>

        <b-form-group id="input-group-4">
          <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
            <b-form-checkbox value="me">Check me out</b-form-checkbox>
            <b-form-checkbox value="that">Check that out</b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>

        <b-button type="submit" variant="primary" class="mr-2">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
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
      show: true,
    };
  },
};
</script>

<style scoped>

</style>