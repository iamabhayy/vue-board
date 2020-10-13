<template>
  <div class="d-flex justify-content-between">
    <div class="d-flex">
      <b-input-group class="search-bar">
        <b-form-input placeholder="Search your courses"></b-form-input>
        <b-input-group-append>
          <b-button squared variant="info">
            <i class="fas fa-search"></i>
          </b-button>
        </b-input-group-append>
      </b-input-group>
      <div>
        <b-dropdown text="Filter" variant="outline" class="mx-4 filter-btn">
          <b-dropdown-item href="#">Newest</b-dropdown-item>
          <b-dropdown-item href="#">Oldest</b-dropdown-item>
          <b-dropdown-item href="#">A-Z</b-dropdown-item>
          <b-dropdown-item href="#">Z-A</b-dropdown-item>
          <b-dropdown-item href="#">Published first</b-dropdown-item>
          <b-dropdown-item href="#">Unpublished first</b-dropdown-item>
        </b-dropdown>
      </div>
    </div>
    <div>
      <b-button variant="danger" @click="createCourse">New Course</b-button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>