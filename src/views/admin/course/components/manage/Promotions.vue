<template>
  <div>
    <div class="sub-header">
      <div class="sub-header--main-content">
        <h4 class="m-0">Promotions</h4>
      </div>
    </div>
    <div class="p-5">
      <div class="alert alert-primary" role="alert">
        <button type="button" class="close" data-dismiss="alert">×</button>
        <h5 class="alert-heading text-dark mt-3"><b>Refer students</b></h5>
        <p class="mb-0 text-dark">
          Any time a student uses this link, we will credit you with the sale.
          Learn more
        </p>
        <form
          class="form-inline d-flex flex-row justify-content-between"
          style=""
        >
          <input
            type="email"
            class="form-control flex-grow-1 my-3 mr-3 rounded-0 shadow-none"
            id="inputmailinline"
            placeholder="https://www.udemy.com/course/draft/3534502/?referralCode=6201524C4A001082AD85"
          />
          <button
            type="submit"
            class="btn btn-primary rounded-0 rounded-left rounded-right rounded-top rounded-bottom shadow-none"
            contenteditable="true"
          >
            COPY
          </button>
        </form>
      </div>
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