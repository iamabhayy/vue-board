<template>
  <div>
    <div class="header"></div>
    <div class="responsive_container">
      <div>
        <h2>Profile & Settings</h2>
        <p class="subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          eius.
        </p>
      </div>
      <b-tabs content-class="mt-3" lazy>
        <b-tab title="Profile Details">
          <b-row>
            <div class="col-md-4">
              <TextInputField
                label="First Name"
                placeholder="Enter your first name"
                :maxLength="20"
                :showCount="false"
                v-model="value"
              />

              <TextInputField
                label="Last Name"
                placeholder="Enter your last name"
                :maxLength="20"
                :showCount="false"
                v-model="value"
              />

              <TextInputField
                label="Headline"
                placeholder="Engineer at Udemy' or 'Architect"
                :maxLength="60"
                v-model="value"
              />

              <b-form-group label="Biography" label-for="title">
                <div class="form-control-counter-container">
                  <b-form-textarea
                    placeholder="Enter something..."
                    rows="4"
                    max-rows="6"
                    class="form-control"
                  ></b-form-textarea>
                </div>
              </b-form-group>

              <b-form-group
                id="input-group-3"
                label="Basic info"
                label-for="input-3"
              >
                <multiselect
                  v-model="value"
                  :options="options"
                  :searchable="false"
                  placeholder="Pick course language"
                ></multiselect>
              </b-form-group>
            </div>
            <div class="col-md-4">
              <TextInputField
                label="Website"
                placeholder="Url"
                :maxLength="20"
                :showCount="false"
                v-model="value"
              />

              <TextInputField
                label="Twitter"
                placeholder="Username"
                :maxLength="20"
                :showCount="false"
                v-model="value"
              />

              <TextInputField
                label="Facebook"
                placeholder="Username"
                :maxLength="60"
                :showCount="false"
                v-model="value"
              />
              <TextInputField
                label="LinkedIn"
                placeholder="Resourse ID"
                :maxLength="20"
                :showCount="false"
                v-model="value"
              />

              <TextInputField
                label="Youtube"
                placeholder="Username"
                :maxLength="20"
                :showCount="false"
                v-model="value"
              />
            </div>
          </b-row>
        </b-tab>
        <b-tab title="Profile Picture">
          <b-form-group label="Image preview" label-for="input-3" class="mt-5">
            <small class="mb-4"
              >Minimum 200x200 pixels, Maximum 6000x6000 pixels</small
            >
            <div class="row">
              <div class="col-md-4">
                <b-img
                  src="https://www.udemy.com/staticx/udemy/images/course/750x422/placeholder.png"
                  fluid-grow
                  alt="Fluid-grow image"
                ></b-img>
                <b-form-file
                  class="file-control my-4"
                  v-model="file1"
                  :state="Boolean(file1)"
                  browse-text="Upload File"
                  placeholder="Choose a file or drop it here..."
                  drop-placeholder="Drop file here..."
                ></b-form-file>
              </div>
            </div>
          </b-form-group>
        </b-tab>
      </b-tabs>
    </div>
  </div>
</template>

<script>
import Multiselect from "vue-multiselect";
import TextInputField from "../../../components/form/TextInputField";
export default {
  data() {
    return {
      value: "",
      options: ["English", "Hindi", "Hindi + English"],
    };
  },
  components: {
    Multiselect,
    TextInputField,
  },
};
</script>

<style>
</style>