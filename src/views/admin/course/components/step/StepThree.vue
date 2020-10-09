<template>
  <div class="container">
      <h3 class="text-center mt-5">
        What category best fits the knowledge you'll share?
      </h3>
      <p class="text-center m-4">If you're not sure about the right category, you can change it later.</p>
      <div class="row mt-5 justify-content-center">
       <b-col md="7">
          <multiselect v-model="value" :options="options" :searchable="false" placeholder="Select category for your course"></multiselect>
      </b-col>
      </div>
    </div>
</template>

<script>
import Multiselect from 'vue-multiselect';
export default {
    data(){
      return{
        selected: null,
        value: '',
        options: ['Designing', 'Programming', 'Editing'],
      }
    },
  components: {
    Multiselect
  },
}
</script>

<style>

</style>