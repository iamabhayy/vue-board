<template>
  <b-form-group :label="label">
    <div class="form-control-counter-container">
      <b-form-input
        :placeholder="placeholder"
        :maxlength="maxLength"
        :value="value"
        class="form-control"
        @input="onChange($event)"
      />
      <div class="form-control-counter" v-if="showCount">{{ counter }}</div>
    </div>
  </b-form-group>
</template>

<script>
export default {
  props: {
    name: String,
    placeholder: String,
    label: {type: String, default: ''},
    value: String,
    maxLength: { type: Number, default: 60 },
    showCount: { type: Boolean, default: true },
  },
  methods: {
    onChange(event) {
      this.$emit("input", event);
    },
  },
  computed: {
    counter() {
      return this.maxLength - this.value.length;
    },
  },
};
</script>