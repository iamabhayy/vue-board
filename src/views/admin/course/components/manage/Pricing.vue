<template>
  <div>
    <div class="sub-header">
      <div class="sub-header--main-content">
        <h4 class="m-0">Pricing</h4>
      </div>
    </div>
    <div class="p-5">
      <b-alert show>
          <i class="fas fa-info-circle"></i>
          Due to increased volume of new courses being submitted for review, the
          Quality Review Process may take up to 6 days. In order to avoid any
          additional delays, be sure that your course is in compliance with
          Udemy’s <a class="text-decoration-none" href="">Course Materials Guidelines</a>.
      </b-alert>
      <p>Course Price Tier</p>
      <p>
        Please select the price tier for your course below and click 'Save'. The
        list price that students will see in other currencies is calculated
        using the price tier matrix, based on the tier that it corresponds to.
      </p>
      <p>
        If you're intending to offer your course for free, the total length of
        video content must be less than 2 hours.Practice test only courses can
        not be free.
      </p>
      <div class="d-flex flex-wrap">
        <b-form-group label="Currency" label-for="title" class="flex-grow-1">
          <div class="form-control-counter-container">
            <multiselect
            style="min-width: 220px"
              v-model="value"
              :options="options"
              :searchable="false"
              placeholder="Pick your currency"
          ></multiselect>
          </div>
        </b-form-group>
          <b-form-group label="Course MRP" label-for="title" class="mx-4">
          <div class="form-control-counter-container">
            <b-form-input
              placeholder="MRP"
              maxlength="5"
              class="form-control"
            />
          </div>
        </b-form-group>
        <b-form-group label="Course Price" label-for="title">
          <div class="form-control-counter-container">
            <b-form-input
              placeholder="PRICE"
              maxlength="5"
              class="form-control"
            />
          </div>
        </b-form-group>
         <b-button squared variant="outline-secondary" disabled style="margin-top: 31px; margin-left: 20px">Save</b-button>
      </div>
    </div>
  </div>
</template>

<script>
import Multiselect from "vue-multiselect";
export default {
  data() {
    return {
      value: "",
      options: ["INR", "USD", "EURO"],
    };
  },
  components: {
    Multiselect,
  },
};
</script>

<style>
</style>