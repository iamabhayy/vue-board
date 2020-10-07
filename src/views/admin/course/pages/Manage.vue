<template>
  <div>
      <div class="top-nav">
      <div class="d-flex align-content-center">
        <div class="border-right" style="margin: auto">
          <a href="" class="text-decoration-none text-light p-3">
            <i class="fas fa-chevron-left fa-lg mr-2"></i>
              Back to courses
            </a>
        </div>
        <h5 class="text-light text-truncate m-3">Physics XII</h5>
        <p class="text-light my-3">DRAFT</p>
        <h5 class="flex-grow-1 text-light m-3">6min of video content uploaded</h5>
        <div>
          <b-button sm class="m-2" variant="light" disabled @click="goToCourse">Save</b-button>
          <b-button variant="link" class="text-light mr-2"><i class="fas fa-cog fa-lg"></i></b-button>
        </div>
      </div>
      <b-progress
        height="6px"
        :precision="0"
        :value="step*25"
        :max="100"
        variant="secondary"
      ></b-progress>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.top-nav {
  background: #52143e;
}
</style>