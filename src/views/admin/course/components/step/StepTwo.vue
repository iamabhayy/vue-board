<template>
  <div class="container">
    <h3 class="text-center mt-5">How about a working title?</h3>
    <p class="text-center m-4" @click="console.log(name)">
      It's ok if you can't think of a good title now. You can change it later.
    </p>
    <div class="row mt-5 justify-content-center">
      <b-col md="7">
        <TextInputField
          label="Course Title"
          placeholder="e.g. Learn Photoshop CS6 from Scratch"
          :maxLength="60"
          v-model="name"
        />
      </b-col>
    </div>
  </div>
</template>

<script>
import TextInputField from "../../../../../components/form/TextInputField";
export default {
  data() {
    return {
      name: '',
    };
  },
  components: {
    TextInputField,
  },
};
</script>

<style>
</style>