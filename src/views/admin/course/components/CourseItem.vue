<template>
  <b-row class="m-0 mb-3 border">
    <b-img
      height="120"
      src="https://www.udemy.com/staticx/udemy/images/course/750x422/placeholder.png"
    />
    <div class="mx-3 mt-3">
      <h5>{{ data.title }}</h5>
      <p class="p-2"></p>
      <p><b>STATUS</b> : {{ data.status }}</p>
    </div>
  </b-row>
</template>

<script>
export default {
  props: {
    data: Object,
  },
};
</script>

<style>
</style>