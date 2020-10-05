<template>
  <div class="container">
      <h3 class="text-center mt-5">
        What category best fits the knowledge you'll share?
      </h3>
      <p class="text-center m-4">If you're not sure about the right category, you can change it later.</p>
      <div class="row mt-5 justify-content-center">
       <b-col md="7">
        <b-form-select v-model="selected" :options="options" size="lg" class="mt-3"></b-form-select>
      </b-col>
      </div>
    </div>
</template>

<script>
export default {
    data(){
      return{
        selected: null,
        options: [
          { value: null, text: 'Please select an category' },
          { value: 'programming', text: 'Programming' },
          { value: 'designing', text: 'Graphics Designing' },
          { value: 'writing', text: 'Content Writing' },
        ]
      }
    }
}
</script>

<style>

</style>